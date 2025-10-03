import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: '¿Qué tipo de eventos cubren?',
    answer: 'Cubrimos todo tipo de eventos: bodas, cumpleaños, quinceañeros, graduaciones, fiestas privadas, eventos corporativos y más. Nos adaptamos a tus necesidades específicas.'
  },
  {
    question: '¿Qué incluye el servicio?',
    answer: 'Nuestro servicio incluye sistema de sonido LS Systems profesional, luces LED espectaculares, DJ experimentado, amplio repertorio musical y montaje/desmontaje del equipo.'
  },
  {
    question: '¿Con cuánta anticipación debo reservar?',
    answer: 'Recomendamos reservar con al menos 2-3 semanas de anticipación, especialmente para fines de semana y fechas populares. Sin embargo, también manejamos eventos de último momento según disponibilidad.'
  },
  {
    question: '¿Cubren eventos fuera de la ciudad?',
    answer: 'Sí, cubrimos eventos en toda Guatemala. Para eventos fuera del área metropolitana, puede aplicar un cargo adicional de traslado dependiendo de la distancia.'
  },
  {
    question: '¿Puedo solicitar canciones específicas?',
    answer: '¡Por supuesto! Puedes proporcionarnos una lista de canciones que te gustaría escuchar. Nuestro DJ también leerá el ambiente y tocará música acorde a los gustos de tus invitados.'
  },
  {
    question: '¿Qué géneros musicales manejan?',
    answer: 'Manejamos todos los géneros: reggaetón, salsa, electrónica, bachata, merengue, rock, pop, música de los 80s-90s, música romántica y más. Nos adaptamos a tu evento.'
  },
  {
    question: '¿Cómo son los precios?',
    answer: 'Nuestros precios son competitivos y varían según el tipo de evento, duración y ubicación. Contáctanos al 3587-2957 para recibir una cotización personalizada sin compromiso.'
  },
  {
    question: '¿Qué pasa si hay problemas técnicos?',
    answer: 'Contamos con equipo de respaldo y personal capacitado para resolver cualquier inconveniente técnico de manera rápida. Garantizamos un servicio ininterrumpido.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <MessageCircle className="w-8 h-8 text-cyan-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Preguntas Frecuentes</h2>
          <p className="text-xl text-gray-400">Encuentra respuestas a tus dudas</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/30 transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-cyan-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6 text-lg">
            ¿Tienes más preguntas? ¡Contáctanos directamente!
          </p>
          <a
            href="tel:35872957"
            className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl shadow-cyan-500/30"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Chatear por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
