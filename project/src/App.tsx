import { Music, Phone, Calendar, Users, Disc3, Heart, Star, CheckCircle, Facebook, Instagram, Mail, Camera, Music2 } from 'lucide-react';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import VideoSection from './components/VideoSection';
import WhatsAppChat from './components/WhatsAppChat';
import MediaGallery from './components/MediaGallery';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-black">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <nav className="relative container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Disc3 className="w-10 h-10 text-cyan-400 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-2xl font-bold text-white">Zone Party</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-3">
                <a
                  href="https://www.tiktok.com/@zonepartydiscomovil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  aria-label="TikTok"
                >
                  <Music2 className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61571542602851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/zonepartyluna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <a
                href="tel:35872957"
                className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30"
              >
                <Phone className="w-5 h-5" />
                <span>3587-2957</span>
              </a>
            </div>
          </div>
        </nav>

        <div className="relative container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Disco Móvil<br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Zone Party</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            La mejor música para tus eventos en Guatemala
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:35872957"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl shadow-cyan-500/30"
            >
              <Phone className="w-6 h-6" />
              <span>Llamar Ahora</span>
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm border border-cyan-500/30"
            >
              <Calendar className="w-6 h-6" />
              <span>Ver Servicios</span>
            </a>
          </div>
        </div>
      </header>

      {/* Video Section */}
      <VideoSection />

      {/* Media Gallery Section */}
      <MediaGallery />

      {/* Features Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6">
                <Music className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Música Variada</h3>
              <p className="text-gray-400 leading-relaxed">
                Amplio repertorio musical para todos los gustos: reggaetón, salsa, electrónica, bachata y más
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                <Disc3 className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Equipo Profesional</h3>
              <p className="text-gray-400 leading-relaxed">
                Sistema de sonido LS Systems de alta calidad, luces LED y efectos especiales para tu evento
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20">
              <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">DJ Experimentado</h3>
              <p className="text-gray-400 leading-relaxed">
                Personal capacitado que garantiza la mejor experiencia en tu celebración
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-400">Eventos de todo tipo en Guatemala</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Bodas', desc: 'Música romántica y festiva para tu día especial', color: 'pink' },
              { icon: Calendar, title: 'Cumpleaños', desc: 'Diversión garantizada para todas las edades', color: 'cyan' },
              { icon: Users, title: 'Fiestas Privadas', desc: 'Ambiente perfecto para tus reuniones', color: 'purple' },
              { icon: Star, title: 'Graduaciones', desc: 'Celebra tu logro con la mejor música', color: 'cyan' },
              { icon: Music, title: 'Eventos Corporativos', desc: 'Profesionalismo para tu empresa', color: 'pink' },
              { icon: CheckCircle, title: 'Quinceañeros', desc: 'Una noche inolvidable y especial', color: 'purple' },
            ].map((service, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-${service.color}-500 transition-all duration-300 hover:shadow-2xl hover:shadow-${service.color}-500/20`}
              >
                <service.icon className={`w-12 h-12 text-${service.color}-400 mb-4`} />
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">¿Por Qué Elegirnos?</h2>
            <div className="space-y-6">
              {[
                'Puntualidad y compromiso en cada evento',
                'Precios competitivos y paquetes personalizables',
                'Atención al cliente antes, durante y después del evento',
                'Amplia experiencia en eventos en toda Guatemala',
                'Equipos modernos LS Systems en óptimas condiciones',
                'Flexibilidad en horarios y duración del servicio'
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para tu Fiesta?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contáctanos ahora y reserva la fecha de tu evento. ¡Hagamos de tu celebración un momento inolvidable!
            </p>
            <a
              href="tel:35872957"
              className="inline-flex items-center justify-center space-x-3 bg-white text-purple-600 px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl"
            >
              <Phone className="w-7 h-7" />
              <span>3587-2957</span>
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Chat Widget */}
      <WhatsAppChat />

      {/* Footer */}
      <footer className="bg-slate-900 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-2">
              <Disc3 className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">Zone Party</span>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-4">
                <a
                  href="https://www.tiktok.com/@zonepartydiscomovil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-gray-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 hover:text-white transition-all duration-300"
                  aria-label="TikTok"
                >
                  <Music2 className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61571542602851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-gray-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 hover:text-white transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/zonepartyluna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-gray-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 hover:text-white transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="mailto:zonepartygt@gmail.com"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-gray-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 hover:text-white transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">Disco Móvil - Guatemala</p>
              <a href="tel:35872957" className="text-cyan-400 hover:text-purple-400 font-semibold text-lg transition-colors">
                Tel: 3587-2957
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-gray-500">
            <p>&copy; 2025 Zone Party. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;