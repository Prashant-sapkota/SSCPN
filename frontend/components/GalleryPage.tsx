import React, { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiCloseLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiZoomInLine,
  RiImageLine,
  RiLoader4Line,
  RiArrowLeftLine,
  RiGalleryLine,
} from "@remixicon/react";

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

const DEMO_ALBUMS = [
  {
    id: "demo-1",
    title: "वार्षिक कार्यक्रम २०८०",
    description: "पार्टीको वार्षिक कार्यक्रममा सहभागीहरूको जीवन्त दृश्यहरू।",
    coverImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070",
    date: "2023-12-05",
    images: [
      { id: 1, src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070", alt: "कार्यक्रम", caption: "उद्घाटन समारोह", date: "2023-12-05" },
      { id: 2, src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070", alt: "सहभागिता", caption: "साँस्कृतिक कार्यक्रम", date: "2023-12-05" },
      { id: 3, src: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070", alt: "पुरस्कार", caption: "पुरस्कार वितरण", date: "2023-12-05" },
    ],
  },
  {
    id: "demo-2",
    title: "जनसभा तथा आन्दोलन",
    description: "जनताको अधिकारका लागि भएका आन्दोलन र जनसभाका तस्बिरहरू।",
    coverImage: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086",
    date: "2023-11-28",
    images: [
      { id: 4, src: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086", alt: "जनसभा", caption: "जनसभा", date: "2023-11-28" },
      { id: 5, src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070", alt: "आन्दोलन", caption: "सडक आन्दोलन", date: "2023-11-28" },
    ],
  },
];

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
  date: string;
}

interface Album {
  id: string | number;
  title: string;
  description: string;
  coverImage: string;
  date: string;
  images: GalleryImage[];
}

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 400 : -400, opacity: 0, scale: 0.96 }),
  center: { zIndex: 1, x: 0, opacity: 1, scale: 1 },
  exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 400 : -400, opacity: 0, scale: 0.96 }),
};

const getImageUrl = (imgObj: any): string => {
  if (!imgObj) return "";
  // Strapi v5: url is relative like /uploads/file.jpg
  // Strapi v4: url may be in imgObj.attributes.url
  const url = imgObj.url || imgObj.attributes?.url || "";
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
};

const GalleryPage: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [selectedAlbumId, setSelectedAlbumId] = useState<string | number | null>(null);
  const [loading, setLoading] = useState(true);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const selectedAlbum = albums.find((a) => String(a.id) === String(selectedAlbumId));
  const activeImages = selectedAlbum?.images || [];

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        console.log("[Gallery] Fetching from:", `${STRAPI_URL}/api/galleries?populate=*`);
        const res = await axios.get(`${STRAPI_URL}/api/galleries?populate=*`);

        console.log("[Gallery] Raw Strapi response:", res.data);

        const data = res.data?.data;

        if (!data || !Array.isArray(data) || data.length === 0) {
          throw new Error("No galleries found");
        }

        const formattedAlbums: Album[] = data.map((item: any) => {
          const attrs = item.attributes || item;

          console.log("[Gallery] Item fields:", Object.keys(attrs));

          const rawImages: any[] = attrs.Pictures?.data || attrs.Pictures || attrs.Images?.data || attrs.Images || attrs.images?.data || attrs.images || [];
          const imagesList = Array.isArray(rawImages) ? rawImages : [];

          console.log("[Gallery] Images found for album:", item.id, "→", imagesList.length, "images");
          if (imagesList[0]) console.log("[Gallery] First image object:", imagesList[0]);

          const images: GalleryImage[] = imagesList.map((img: any, idx: number) => {
            const imgAttrs = img.attributes || img;
            const src = getImageUrl(imgAttrs);
            console.log("[Gallery] Image src:", src);
            return {
              id: img.id ?? idx,
              src,
              alt: imgAttrs.alternativeText || "ग्यालरी तस्बिर",
              caption: imgAttrs.caption || "",
              date: imgAttrs.createdAt || "",
            };
          });

          const coverImage = images[0]?.src || "";

          console.log("[Gallery] Cover image URL:", coverImage);

          return {
            id: item.id,
            title: attrs.Category || attrs.Title || attrs.title || "शीर्षक उपलब्ध छैन",
            description: attrs.Description || attrs.description || "",
            coverImage,
            date: attrs.publishedAt || attrs.createdAt || "",
            images,
          };
        });

        console.log("[Gallery] Final albums:", formattedAlbums);
        setAlbums(formattedAlbums);
      } catch (error: any) {
        console.error("[Gallery] API error:", error.response?.status, error.response?.data || error.message);
        console.warn("[Gallery] Falling back to demo data");
        setAlbums(DEMO_ALBUMS);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  const paginate = useCallback(
    (newDirection: number) => {
      if (activeImages.length === 0) return;
      setDirection(newDirection);
      setPopupIndex((prev) =>
        prev === null ? 0 : (prev + newDirection + activeImages.length) % activeImages.length
      );
    },
    [activeImages.length]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (popupIndex === null) return;
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "Escape") setPopupIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [popupIndex, paginate]);

  useEffect(() => {
    if (popupIndex === null || !thumbsRef.current) return;
    const el = thumbsRef.current.querySelector(`[data-thumb="${popupIndex}"]`) as HTMLElement;
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [popupIndex]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-slate-500">
        <RiLoader4Line className="w-12 h-12 animate-spin text-red-700 mb-4" />
        <p className="font-medium animate-pulse text-lg">ग्यालरी लोड हुँदैछ...</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20 pt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <AnimatePresence mode="wait">
            {!selectedAlbumId ? (
              <motion.div
                key="header-albums"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center max-w-2xl mx-auto"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border bg-white text-red-700 text-xs font-bold uppercase tracking-wider shadow-sm mb-4">
                  <RiGalleryLine size={16} />
                  दृश्य अभिलेख
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  फोटो <span className="text-red-700">ग्यालरी</span>
                </h1>
                <p className="text-slate-600 text-lg">
                  पार्टीका आन्दोलन, संगठन विस्तार र ऐतिहासिक क्षणहरूका जीवन्त दृश्यहरू।
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="header-content"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex flex-col md:flex-row md:items-end justify-between gap-4"
              >
                <div className="space-y-4">
                  <button
                    onClick={() => setSelectedAlbumId(null)}
                    className="flex items-center gap-2 text-red-700 font-semibold hover:text-red-800 transition-colors group"
                  >
                    <RiArrowLeftLine size={20} className="group-hover:-translate-x-1 transition-transform" />
                    एल्बममा फर्कनुस्
                  </button>
                  <div className="space-y-1">
                    <h2 className="text-3xl font-bold text-slate-900">{selectedAlbum?.title}</h2>
                    <p className="text-slate-500 max-w-xl">{selectedAlbum?.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm font-medium text-slate-400 bg-white px-4 py-2 rounded-xl shadow-sm border">
                  <div className="flex items-center gap-1.5">
                    <RiImageLine size={18} className="text-red-700" />
                    <span className="text-slate-700">{selectedAlbum?.images.length}</span>
                    <span>फोटोहरू</span>
                  </div>
                  <div className="w-px h-4 bg-slate-200" />
                  <span>
                    {selectedAlbum?.date
                      ? new Date(selectedAlbum.date).toLocaleDateString()
                      : ""}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Album Grid / Image Grid */}
        <AnimatePresence mode="wait">
          {!selectedAlbumId ? (
            <motion.div
              key="grid-albums"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {albums.map((album, idx) => (
                <motion.div
                  key={album.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setSelectedAlbumId(album.id)}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-100 flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={album.coverImage || album.images[0]?.src}
                      alt={album.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=800";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-red-700 uppercase tracking-widest shadow-lg">
                      {album.images.length} फोटोहरू
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-700 transition-colors">
                      {album.title}
                    </h3>
                    {album.description && (
                      <p className="text-slate-500 text-sm line-clamp-2 mb-4 leading-relaxed">
                        {album.description}
                      </p>
                    )}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                      <span className="text-xs font-medium text-slate-400">
                        {album.date ? new Date(album.date).toLocaleDateString() : ""}
                      </span>
                      <span className="text-red-700 text-sm font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        हेर्नुस् <RiArrowRightSLine size={16} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="grid-images"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {activeImages.map((img, idx) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setPopupIndex(idx)}
                  className="group relative aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=800";
                    }}
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/95 rounded-full flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-xl">
                      <RiZoomInLine className="text-red-700" size={24} />
                    </div>
                  </div>
                  {img.caption && (
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-900/90 to-transparent translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-white font-semibold text-sm truncate">{img.caption}</p>
                      {img.date && (
                        <p className="text-white/60 text-[10px] mt-0.5">
                          {new Date(img.date).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox Carousel */}
      <AnimatePresence>
        {popupIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed top-12 md:top-14 left-0 right-0 bottom-0 z-[49] bg-black/97 backdrop-blur-2xl flex flex-col"
          >
            {/* ── Top Bar ── */}
            <div className="flex items-center justify-between px-4 md:px-8 py-3 flex-shrink-0 border-b border-white/[0.07]">
              {/* Back button */}
              <button
                onClick={() => setPopupIndex(null)}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
              >
                <RiArrowLeftSLine size={22} className="group-hover:-translate-x-0.5 transition-transform" />
                <span className="text-sm font-semibold hidden sm:inline">फर्कनुस्</span>
              </button>

              {/* Album title */}
              <div className="flex items-center gap-2 min-w-0 px-4">
                <div className="w-[3px] h-5 bg-red-600 rounded-full flex-shrink-0" />
                <span className="text-white font-bold text-sm md:text-base tracking-tight truncate">
                  {selectedAlbum?.title}
                </span>
              </div>

              {/* Counter + close */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="text-slate-400 text-sm font-medium">
                  <span className="text-white font-bold">{popupIndex + 1}</span>
                  <span className="mx-1 text-slate-600">/</span>
                  {activeImages.length}
                </span>
                <button
                  onClick={() => setPopupIndex(null)}
                  className="p-2 bg-white/10 hover:bg-white/20 active:bg-white/30 text-white rounded-full transition-all border border-white/10"
                >
                  <RiCloseLine size={20} />
                </button>
              </div>
            </div>

            {/* ── Main Image ── */}
            <div className="flex-1 flex items-center justify-center relative min-h-0 select-none">
              {/* Prev */}
              <button
                className="absolute left-3 md:left-6 z-10 p-3 md:p-4 bg-white/[0.07] hover:bg-white/20 active:bg-white/30 text-white rounded-full transition-all border border-white/10 shadow-2xl"
                onClick={() => paginate(-1)}
              >
                <RiArrowLeftSLine size={30} />
              </button>

              <div className="relative w-full h-full flex items-center justify-center px-16 md:px-24 overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={popupIndex}
                    src={activeImages[popupIndex]?.src}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 320, damping: 32 },
                      opacity: { duration: 0.15 },
                      scale: { duration: 0.3 },
                    }}
                    className="absolute max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=800";
                    }}
                  />
                </AnimatePresence>
              </div>

              {/* Next */}
              <button
                className="absolute right-3 md:right-6 z-10 p-3 md:p-4 bg-white/[0.07] hover:bg-white/20 active:bg-white/30 text-white rounded-full transition-all border border-white/10 shadow-2xl"
                onClick={() => paginate(1)}
              >
                <RiArrowRightSLine size={30} />
              </button>
            </div>

            {/* ── Caption ── */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`cap-${popupIndex}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-center px-6 py-2 flex-shrink-0 min-h-[2rem]"
              >
                {activeImages[popupIndex]?.caption && (
                  <p className="text-white/60 text-sm font-medium">
                    {activeImages[popupIndex].caption}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>

            {/* ── Thumbnail Strip ── */}
            <div
              ref={thumbsRef}
              className="flex items-center gap-2 px-6 pb-6 pt-2 overflow-x-auto flex-shrink-0 border-t border-white/[0.06]"
              style={{ scrollbarWidth: "none" }}
            >
              <div className="flex items-center gap-2 mx-auto">
                {activeImages.map((img, idx) => (
                  <button
                    key={img.id}
                    data-thumb={idx}
                    onClick={() => {
                      setDirection(idx > popupIndex ? 1 : -1);
                      setPopupIndex(idx);
                    }}
                    className={`flex-shrink-0 rounded-lg overflow-hidden transition-all duration-200 focus:outline-none ${
                      idx === popupIndex
                        ? "ring-2 ring-red-500 ring-offset-2 ring-offset-black scale-110 opacity-100"
                        : "opacity-40 hover:opacity-70 scale-100"
                    }`}
                    style={{ width: 68, height: 52 }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=800";
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
