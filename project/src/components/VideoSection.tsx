import { Play, Video } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <Video className="w-8 h-8 text-cyan-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nuestros Eventos en Acción</h2>
          <p className="text-xl text-gray-400">Mira algunos momentos especiales que hemos creado</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <a
            href="https://www.tiktok.com/@zonepartydiscomovil"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border-2 border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
          >
            <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/50 transition-all duration-300 group-hover:scale-110">
                  <Play className="w-10 h-10 text-cyan-400 fill-cyan-400" />
                </div>
                <p className="text-white text-xl font-semibold mb-2">Videos de TikTok</p>
                <p className="text-gray-400">@zonepartydiscomovil</p>
              </div>
            </div>
            <div className="p-6 border-t border-slate-700">
              <h3 className="text-white font-semibold text-lg mb-2">Eventos Completos</h3>
              <p className="text-gray-400">
                Mira nuestros mejores momentos, setups de equipos y clientes disfrutando
              </p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/zonepartyluna"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border-2 border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
          >
            <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-600/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/50 transition-all duration-300 group-hover:scale-110">
                  <Play className="w-10 h-10 text-purple-400 fill-purple-400" />
                </div>
                <p className="text-white text-xl font-semibold mb-2">Reels de Instagram</p>
                <p className="text-gray-400">@zonepartyluna</p>
              </div>
            </div>
            <div className="p-6 border-t border-slate-700">
              <h3 className="text-white font-semibold text-lg mb-2">Galería Visual</h3>
              <p className="text-gray-400">
                Fotos y videos cortos de nuestros eventos más recientes
              </p>
            </div>
          </a>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg mb-6">
            Síguenos en redes sociales para ver más contenido de nuestros eventos
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.tiktok.com/@zonepartydiscomovil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30"
            >
              <Video className="w-5 h-5" />
              <span>Ver TikTok</span>
            </a>
            <a
              href="https://www.instagram.com/zonepartyluna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30"
            >
              <Video className="w-5 h-5" />
              <span>Ver Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
