import { useState, useEffect } from 'react';
import { Camera, Video, Play, X } from 'lucide-react';
import { supabase, MediaItem } from '../lib/supabase';

export default function MediaGallery() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [filter, setFilter] = useState<'all' | 'photo' | 'video'>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMedia();
  }, []);

  const loadMedia = async () => {
    try {
      const { data, error } = await supabase
        .from('media_items')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setMediaItems(data || []);
    } catch (error) {
      console.error('Error loading media:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredMedia = mediaItems.filter(item =>
    filter === 'all' ? true : item.media_type === filter
  );

  const featuredMedia = mediaItems.filter(item => item.is_featured).slice(0, 6);

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center space-x-2 mb-4">
              <Camera className="w-8 h-8 text-cyan-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Galería de Eventos
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Capturando los mejores momentos de tus celebraciones
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === 'all'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setFilter('photo')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  filter === 'photo'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
                }`}
              >
                <Camera className="w-4 h-4" />
                Fotos
              </button>
              <button
                onClick={() => setFilter('video')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  filter === 'video'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
                }`}
              >
                <Video className="w-4 h-4" />
                Videos
              </button>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-cyan-500"></div>
            </div>
          ) : (
            <>
              {/* Featured Media */}
              {filter === 'all' && featuredMedia.length > 0 && (
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-white mb-8 text-center">
                    Destacados
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredMedia.map((item) => (
                      <MediaCard
                        key={item.id}
                        item={item}
                        onClick={() => setSelectedMedia(item)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* All Media */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredMedia.map((item) => (
                  <MediaCard
                    key={item.id}
                    item={item}
                    onClick={() => setSelectedMedia(item)}
                  />
                ))}
              </div>

              {filteredMedia.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-gray-400 text-lg">
                    No hay contenido disponible en esta categoría
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Media Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.media_type === 'photo' ? (
              <img
                src={selectedMedia.media_url}
                alt={selectedMedia.title}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            ) : (
              <video
                src={selectedMedia.media_url}
                controls
                autoPlay
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            )}
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedMedia.title}
              </h3>
              {selectedMedia.event_type && (
                <p className="text-cyan-400">{selectedMedia.event_type}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function MediaCard({ item, onClick }: { item: MediaItem; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer bg-slate-800 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
    >
      <img
        src={item.media_url}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="absolute inset-0 flex items-center justify-center">
          {item.media_type === 'video' ? (
            <div className="w-16 h-16 bg-cyan-500/80 rounded-full flex items-center justify-center">
              <Play className="w-8 h-8 text-white fill-white" />
            </div>
          ) : (
            <div className="w-16 h-16 bg-cyan-500/80 rounded-full flex items-center justify-center">
              <Camera className="w-8 h-8 text-white" />
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-semibold text-lg mb-1">
            {item.title}
          </h3>
          {item.event_type && (
            <p className="text-cyan-400 text-sm">{item.event_type}</p>
          )}
        </div>
      </div>

      {item.media_type === 'video' && (
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
          <div className="flex items-center gap-1">
            <Video className="w-4 h-4 text-white" />
            <span className="text-white text-xs font-semibold">Video</span>
          </div>
        </div>
      )}

      {item.is_featured && (
        <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-purple-600 px-3 py-1 rounded-full">
          <span className="text-white text-xs font-semibold">Destacado</span>
        </div>
      )}
    </div>
  );
}
