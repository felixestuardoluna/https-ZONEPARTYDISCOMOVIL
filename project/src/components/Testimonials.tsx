import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    event: 'Boda',
    rating: 5,
    text: 'Zone Party hizo de nuestra boda un evento inolvidable. El DJ supo leer perfectamente el ambiente y todos nuestros invitados bailaron toda la noche. ¡Súper recomendado!',
    date: 'Agosto 2024'
  },
  {
    name: 'Carlos Méndez',
    event: 'Cumpleaños 30',
    rating: 5,
    text: 'Excelente servicio. El equipo de sonido y las luces fueron espectaculares. Llegaron puntuales y el DJ tocó exactamente lo que pedimos. ¡Volveremos a contratarlos!',
    date: 'Julio 2024'
  },
  {
    name: 'Ana Rodríguez',
    event: 'Quinceañero',
    rating: 5,
    text: 'Mi hija quedó encantada con su fiesta. Zone Party creó un ambiente mágico con las luces LED y la música fue perfecta para todas las edades. Muy profesionales.',
    date: 'Septiembre 2024'
  },
  {
    name: 'Roberto Pérez',
    event: 'Evento Corporativo',
    rating: 5,
    text: 'Contratamos Zone Party para nuestro evento de fin de año y superaron nuestras expectativas. Profesionalismo y calidad de principio a fin.',
    date: 'Diciembre 2024'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-black/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Testimonios</h2>
          <p className="text-xl text-gray-400">Lo que dicen nuestros clientes satisfechos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-cyan-400/30" />
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                "{testimonial.text}"
              </p>

              <div className="border-t border-slate-700 pt-4">
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-cyan-400 text-sm">{testimonial.event}</p>
                <p className="text-gray-500 text-xs mt-1">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
