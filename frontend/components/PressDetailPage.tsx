
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import { motion } from 'motion/react';

/* ─── Strapi v5 block types ─────────────────────────────────────────── */
interface TextNode {
  type: 'text';
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
}

interface LinkNode {
  type: 'link';
  url: string;
  children: TextNode[];
}

type InlineNode = TextNode | LinkNode;

interface ParagraphBlock { type: 'paragraph'; children: InlineNode[]; }
interface HeadingBlock  { type: 'heading';   level: 1|2|3|4|5|6; children: InlineNode[]; }
interface ListBlock     { type: 'list'; format: 'ordered'|'unordered'; children: ListItemBlock[]; }
interface ListItemBlock { type: 'list-item'; children: InlineNode[]; }
interface QuoteBlock    { type: 'quote'; children: InlineNode[]; }
interface CodeBlock     { type: 'code'; code?: string; children?: InlineNode[]; }
interface ImageBlock    { type: 'image'; image: { url: string; alternativeText?: string; width?: number; height?: number }; children: TextNode[]; }

type ContentBlock = ParagraphBlock | HeadingBlock | ListBlock | ListItemBlock | QuoteBlock | CodeBlock | ImageBlock;

/* ─── Domain types ───────────────────────────────────────────────────── */
interface PressRelease {
  id: number;
  documentId: string;
  title: string;
  category: string;
  date: string;
  image: Array<{ url: string }>;
  summary: string;
  body?: string | ContentBlock[] | null;
  Description?: string | null;
}

/* ─── Constants ──────────────────────────────────────────────────────── */
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

const DEVANAGARI: Record<string, string> = {
  '0':'०','1':'१','2':'२','3':'३','4':'४','5':'५','6':'६','7':'७','8':'८','9':'९',
};
const toDevanagari = (v: string | number) =>
  String(v).replace(/[0-9]/g, d => DEVANAGARI[d] ?? d);

const NEPALI_MONTHS: Record<number, string> = {
  1:'जनवरी',2:'फेब्रुअरी',3:'मार्च',4:'अप्रिल',
  5:'मे',6:'जुन',7:'जुलाई',8:'अगस्ट',
  9:'सेप्टेम्बर',10:'अक्टोबर',11:'नोभेम्बर',12:'डिसेम्बर',
};

const formatDate = (s: string) => {
  if (!s) return '';
  const d = new Date(s);
  return `${toDevanagari(String(d.getDate()).padStart(2,'0'))} ${NEPALI_MONTHS[d.getMonth()+1] ?? ''}, ${toDevanagari(d.getFullYear())}`;
};

const getImageUrl = (images: Array<{ url: string }> | null) => {
  if (!images?.length) return null;
  const u = images[0].url;
  return u.startsWith('http') ? u : `${STRAPI_URL}${u}`;
};

/* ─── Strapi block renderer ──────────────────────────────────────────── */
const renderInline = (node: InlineNode, i: number): React.ReactNode => {
  if (node.type === 'link') {
    return (
      <a key={i} href={node.url} target="_blank" rel="noopener noreferrer"
        className="text-red-800 underline hover:text-red-600">
        {node.children.map((c, j) => renderInline(c, j))}
      </a>
    );
  }
  let el: React.ReactNode = node.text;
  if (node.bold)          el = <strong key={i}>{el}</strong>;
  if (node.italic)        el = <em key={i}>{el}</em>;
  if (node.underline)     el = <u key={i}>{el}</u>;
  if (node.strikethrough) el = <s key={i}>{el}</s>;
  if (node.code)          el = <code key={i} className="bg-gray-100 px-1 rounded text-sm font-mono">{el}</code>;
  return <React.Fragment key={i}>{el}</React.Fragment>;
};

const renderBlock = (block: ContentBlock, i: number): React.ReactNode => {
  switch (block.type) {
    case 'paragraph':
      return (
        <p key={i} className="mb-5 leading-relaxed text-gray-700">
          {block.children.map(renderInline)}
        </p>
      );
    case 'heading': {
      const sizes: Record<number,string> = {1:'text-3xl',2:'text-2xl',3:'text-xl',4:'text-lg',5:'text-base',6:'text-sm'};
      const cls = `${sizes[block.level] ?? 'text-lg'} font-bold text-gray-950 mt-8 mb-3`;
      const children = block.children.map(renderInline);
      if (block.level === 1) return <h1 key={i} className={cls}>{children}</h1>;
      if (block.level === 2) return <h2 key={i} className={cls}>{children}</h2>;
      if (block.level === 3) return <h3 key={i} className={cls}>{children}</h3>;
      if (block.level === 4) return <h4 key={i} className={cls}>{children}</h4>;
      if (block.level === 5) return <h5 key={i} className={cls}>{children}</h5>;
      return <h6 key={i} className={cls}>{children}</h6>;
    }
    case 'list':
      return block.format === 'ordered' ? (
        <ol key={i} className="list-decimal pl-6 mb-5 space-y-1 text-gray-700">
          {block.children.map((li, j) => (
            <li key={j}>{li.children.map(renderInline)}</li>
          ))}
        </ol>
      ) : (
        <ul key={i} className="list-disc pl-6 mb-5 space-y-1 text-gray-700">
          {block.children.map((li, j) => (
            <li key={j}>{li.children.map(renderInline)}</li>
          ))}
        </ul>
      );
    case 'quote':
      return (
        <blockquote key={i} className="border-l-4 border-red-800 pl-6 my-6 italic text-gray-600">
          {block.children.map(renderInline)}
        </blockquote>
      );
    case 'code':
      return (
        <pre key={i} className="bg-gray-950 text-green-400 rounded p-4 overflow-x-auto mb-5 text-sm font-mono">
          {block.code ?? block.children?.map(c => ('text' in c ? c.text : '')).join('')}
        </pre>
      );
    case 'image':
      return (
        <figure key={i} className="my-8">
          <img
            src={block.image.url.startsWith('http') ? block.image.url : `${STRAPI_URL}${block.image.url}`}
            alt={block.image.alternativeText ?? ''}
            className="w-full rounded object-cover"
          />
        </figure>
      );
    default:
      return null;
  }
};

/* Handles HTML string, Strapi blocks array, or plain text */
const BodyContent: React.FC<{ body: string | ContentBlock[] | null | undefined }> = ({ body }) => {
  if (!body) return <p className="text-gray-400 italic">पूर्ण विवरण उपलब्ध छैन।</p>;

  if (typeof body === 'string') {
    return (
      <div
        className="prose prose-lg max-w-none text-gray-700 leading-relaxed
          prose-headings:font-bold prose-headings:text-gray-950
          prose-p:mb-5 prose-strong:text-gray-900
          prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-5
          prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-5
          prose-blockquote:border-l-4 prose-blockquote:border-red-800 prose-blockquote:pl-6"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    );
  }

  if (Array.isArray(body)) {
    return <div>{body.map((b, i) => renderBlock(b as ContentBlock, i))}</div>;
  }

  return null;
};

/* ─── Main component ─────────────────────────────────────────────────── */
const PressDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [item, setItem] = useState<PressRelease | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setItem(null);
    fetch(`${STRAPI_URL}/api/press-releases/${id}?populate=*`)
      .then(r => r.json())
      .then(d => { setItem(d.data ?? null); setLoading(false); })
      .catch(() => { setItem(null); setLoading(false); });
  }, [id]);

  /* Loading */
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-red-800 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  /* Not found */
  if (!item) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-6">
        <p className="text-gray-500 text-lg">सामग्री फेला परेन।</p>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-red-800 font-black text-sm uppercase tracking-widest hover:underline"
        >
          <ArrowLeft size={16} className="mr-2" /> फिर्ता जानुहोस्
        </button>
      </div>
    );
  }

  const coverImage = getImageUrl(item.image);
  const body = item.body ?? item.Description ?? null;

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero banner ── */}
      {/* <div className="relative w-full h-[50vh] md:h-[62vh] overflow-hidden bg-gray-950">
        {coverImage ? (
          <img
            src={coverImage}
            alt={item.title}
            className="w-full h-full object-cover opacity-40"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-red-950 to-gray-950" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 pb-10 sm:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {item.category && (
                <span className="bg-white text-red-900 text-[10px] font-black px-3 py-1 uppercase tracking-widest">
                  {item.category}
                </span>
              )}
              <span className="flex items-center text-gray-400 text-[11px] font-bold uppercase">
                <Clock size={11} className="mr-1.5 text-red-400" />
                {formatDate(item.date)}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight max-w-4xl">
              {item.title}
            </h1>
          </motion.div>
        </div>
      </div> */}

      {/* ── Meta bar ── */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex flex-wrap items-center gap-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-red-800 font-black text-[11px] uppercase tracking-widest hover:underline mr-auto"
          >
            <ArrowLeft size={40} className="mr-2" /> फिर्ता जानुहोस्
          </button>
          {item.category && (
            <div className="flex items-center gap-2">
              <Tag size={30} className="text-red-800" />
              <span className="text-[11px] font-black uppercase tracking-widest text-gray-700">{item.category}</span>
            </div>
          )}
          {item.date && (
            <div className="flex items-center gap-2">
              <Clock size={30} className="text-red-800" />
              <span className="text-[11px] font-black uppercase tracking-widest text-gray-700">{formatDate(item.date)}</span>
            </div>
          )}
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16">

        {/* Cover image */}
        {coverImage && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 overflow-hidden rounded w-full"
          >
            <img
              src={coverImage}
              alt={item.title}
              className="w-full object-cover max-h-[500px]"
            />
          </motion.div>
        )}

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="w-full"
        >
          {/* Summary lead */}
          {item.summary && (
            <p className="text-lg sm:text-3xl text-gray-600 leading-relaxed border-l-4 border-red-800 pl-5 mb-10 font-medium">
              {item.summary}
            </p>
          )}

          {/* Full description / body */}
          <BodyContent body={body} />
        </motion.article>

      </div>
    </div>
  );
};

export default PressDetailPage;
