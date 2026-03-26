
import React, { useState, useEffect, useCallback } from 'react';
import { Image, X, ChevronLeft, ChevronRight, MapPin, Calendar, Camera } from 'lucide-react';

// --- Types ---
interface Photo {
  id: number;
  url: string;
}

interface Album {
  id: number;
  title: string;
  date: string;
  location: string;
  coverImage: string;
  photos: Photo[];
}

interface GalleryApiItem {
  id?: number;
  Name?: string;
  Description?: string;
  Date?: string;
  date?: string;
  Location?: string;
  location?: string;
  Photos?: Array<number | string | { id?: number | string; url?: string; image?: string; directus_files_id?: number | string | { id?: number | string } }>;
  photos?: Array<number | string | { id?: number | string; url?: string; image?: string; directus_files_id?: number | string | { id?: number | string } }>;
}

const API_BASE_URL = (import.meta as any).env?.API_BASE_URL || 'http://localhost:8055';
const API_TOKEN = (import.meta as any).env?.VITE_DIRECTUS_TOKEN;

const withToken = (url: string): string => {
  if (!API_TOKEN) return url;

  const hasQuery = url.includes('?');
  return `${url}${hasQuery ? '&' : '?'}access_token=${encodeURIComponent(API_TOKEN)}`;
};

const buildAssetUrl = (id: number | string): string => withToken(`${API_BASE_URL}/assets/${id}`);

const toPhoto = (
  value: number | string | { id?: number | string; url?: string; image?: string; directus_files_id?: number | string | { id?: number | string } },
  fallbackId: number,
): Photo | null => {
  if (typeof value === 'number') {
    return { id: value, url: buildAssetUrl(value) };
  }

  if (typeof value === 'string') {
    if (/^https?:\/\//.test(value)) {
      return { id: fallbackId, url: value };
    }

    if (/^\d+$/.test(value)) {
      return { id: Number(value), url: buildAssetUrl(value) };
    }

    return { id: fallbackId, url: value };
  }

  const nestedFileId =
    typeof value.directus_files_id === 'number'
      ? value.directus_files_id
      : typeof value.directus_files_id === 'string'
        ? value.directus_files_id
        : typeof value.directus_files_id === 'object' && value.directus_files_id && (typeof value.directus_files_id.id === 'number' || typeof value.directus_files_id.id === 'string')
          ? value.directus_files_id.id
          : null;

  if (nestedFileId !== null && nestedFileId !== '') {
    return { id: fallbackId, url: buildAssetUrl(nestedFileId) };
  }

  const url = value.url || value.image;
  if (!url) return null;

  return {
    id: typeof value.id === 'number' ? value.id : fallbackId,
    url,
  };
};

const toAlbum = (item: GalleryApiItem, index: number): Album => {
  const rawPhotos = item.Photos || item.photos || [];
  const photos = rawPhotos
    .map((photo, photoIndex) => toPhoto(photo, (item.id ?? index + 1) * 1000 + photoIndex))
    .filter((photo): photo is Photo => photo !== null);

  const coverImage = photos[0]?.url || 'https://picsum.photos/seed/gallery_fallback/800/600';

  return {
    id: item.id ?? index + 1,
    title: item.Name || 'शीर्षक उपलब्ध छैन',
    date: item.Date || item.date || 'मिति उपलब्ध छैन',
    location: item.Location || item.location || item.Description || 'स्थान उपलब्ध छैन',
    coverImage,
    photos,
  };
};

const GalleryPage: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [assetAccessError, setAssetAccessError] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (!assetAccessError) {
      setAssetAccessError(true);
    }
    e.currentTarget.src = 'https://picsum.photos/seed/gallery_fallback/800/600';
  };

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(withToken(`${API_BASE_URL}/items/Gallery?fields=*,Photos.directus_files_id.*`), {
          headers: API_TOKEN ? { Authorization: `Bearer ${API_TOKEN}` } : undefined,
        });
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const payload = await response.json();
        console.log('Fetched gallery payload:', payload);
        const items = Array.isArray(payload)
          ? payload
          : Array.isArray(payload?.data)
            ? payload.data
            : payload?.data
              ? [payload.data]
              : [];
        const mapped = items.map((item: GalleryApiItem, index: number) => toAlbum(item, index));
        setAlbums(mapped);
      } catch (fetchError) {
        console.error('Failed to fetch gallery items:', fetchError);
        setError('ग्यालरी लोड गर्न सकेनौं।');
        setAlbums([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGallery();
  }, []);

  // Keyboard Navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!selectedAlbum) return;

    if (e.key === 'Escape') {
      setSelectedAlbum(null);
    } else if (e.key === 'ArrowRight') {
      nextPhoto();
    } else if (e.key === 'ArrowLeft') {
      prevPhoto();
    }
  }, [selectedAlbum, currentPhotoIndex]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const openAlbum = (album: Album) => {
    if (album.photos.length === 0) return;
    setSelectedAlbum(album);
    setCurrentPhotoIndex(0);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  };

  const closeAlbum = () => {
    setSelectedAlbum(null);
    document.body.style.overflow = 'unset';
  };

  const nextPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedAlbum) {
      setCurrentPhotoIndex((prev) => (prev === selectedAlbum.photos.length - 1 ? 0 : prev + 1));
    }
  };

  const prevPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedAlbum) {
      setCurrentPhotoIndex((prev) => (prev === 0 ? selectedAlbum.photos.length - 1 : prev - 1));
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans pb-16">
      
      {/* 1. MASTHEAD */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 py-16">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
             <div className="flex items-center text-red-700 font-bold uppercase tracking-widest text-sm mb-4">
                <Camera size={18} className="mr-2" />
                <span>दृश्य अभिलेख</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 font-serif leading-tight mb-6">
               फोटो ग्यालरी
             </h1>
             <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
               पार्टीका आन्दोलन, संगठन विस्तार र ऐतिहासिक क्षणहरूका जीवन्त दृश्यहरू।
             </p>
          </div>
        </div>
      </div>

      {/* 2. ALBUM GRID */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 py-12">
        {assetAccessError && (
          <div className="mb-6 rounded-lg border border-amber-300 bg-amber-50 p-4 text-amber-900">
            फोटो फाइल लोड हुन सकेन। Directus को assets endpoint मा read access दिनुहोस् वा .env.local मा VITE_DIRECTUS_TOKEN राखेर dev server restart गर्नुहोस्।
          </div>
        )}

        {isLoading && (
          <div className="text-center text-gray-600 py-16">ग्यालरी लोड हुँदैछ...</div>
        )}

        {error && (
          <div className="text-center text-red-700 py-16">{error}</div>
        )}

        {!isLoading && !error && albums.length === 0 && (
          <div className="text-center text-gray-600 py-16">हाल ग्यालरीमा सामग्री भेटिएन।</div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <div 
              key={album.id} 
              onClick={() => openAlbum(album)}
              className="group cursor-pointer bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Cover Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={album.coverImage} 
                  alt={album.title} 
                  onError={handleImageError}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                
                {/* Photo Count Badge */}
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded flex items-center backdrop-blur-sm">
                   <Image size={14} className="mr-1" /> {album.photos.length}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3 text-xs text-gray-500 font-medium uppercase tracking-wide">
                   <span className="flex items-center"><Calendar size={14} className="mr-1 text-red-700"/> {album.date}</span>
                   <span className="flex items-center"><MapPin size={14} className="mr-1 text-red-700"/> {album.location}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-serif group-hover:text-red-800 transition-colors leading-tight">
                  {album.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. LIGHTBOX MODAL / CAROUSEL */}
      {selectedAlbum && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center">
          
          {/* Close Button */}
          <button 
            onClick={closeAlbum}
            className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 z-50 transition-colors"
          >
            <X size={32} />
          </button>

          {/* Main Content Area */}
          <div className="relative w-full h-full flex flex-col">
             
             {/* Header Info */}
             <div className="absolute top-0 left-0 right-0 p-4 z-40 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
                <div className="max-w-screen-xl mx-auto text-white text-center">
                   <h3 className="font-bold text-lg">{selectedAlbum.title}</h3>
                   <p className="text-sm text-gray-300">{currentPhotoIndex + 1} / {selectedAlbum.photos.length}</p>
                </div>
             </div>

             {/* Carousel */}
             <div className="flex-1 flex items-center justify-center relative px-4 md:px-20">
                
                {/* Prev Button */}
                <button 
                  onClick={prevPhoto}
                  className="absolute left-2 md:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
                >
                  <ChevronLeft size={32} />
                </button>

                {/* Main Image */}
                <div className="relative max-h-[80vh] max-w-full">
                   <img 
                     src={selectedAlbum.photos[currentPhotoIndex].url}
                     alt={`Photo ${currentPhotoIndex + 1}`}
                     onError={handleImageError}
                     className="max-h-[75vh] md:max-h-[80vh] max-w-full object-contain shadow-2xl border-4 border-white/10 rounded-sm"
                   />
                </div>

                {/* Next Button */}
                <button 
                  onClick={nextPhoto}
                  className="absolute right-2 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
                >
                  <ChevronRight size={32} />
                </button>
             </div>

             {/* Footer Space (Minimal) */}
             <div className="h-12"></div>

          </div>
        </div>
      )}

    </div>
  );
};

export default GalleryPage;
