import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const quickMessages = [
    '¿Cuánto cuesta el servicio?',
    'Quiero reservar una fecha',
    '¿Qué incluye el paquete?',
    'Necesito más información'
  ];

  const sendWhatsAppMessage = (msg: string) => {
    const phoneNumber = '50335872957';
    const encodedMessage = encodeURIComponent(msg);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Chat de WhatsApp"
      >
        {isOpen ? (
          <X className="w-8 h-8" />
        ) : (
          <MessageCircle className="w-8 h-8 animate-pulse" />
        )}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-slate-900 rounded-2xl shadow-2xl border-2 border-green-500 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Zone Party</h3>
                <p className="text-green-100 text-sm">En línea • Responde rápido</p>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-3 max-h-96 overflow-y-auto bg-slate-800/50">
            <div className="bg-slate-700 rounded-2xl rounded-tl-none p-4 max-w-[85%]">
              <p className="text-white text-sm leading-relaxed">
                ¡Hola! 👋 Bienvenido a Zone Party. ¿En qué podemos ayudarte hoy?
              </p>
              <p className="text-gray-400 text-xs mt-2">Ahora</p>
            </div>

            <div className="space-y-2">
              <p className="text-gray-400 text-xs text-center mb-2">Mensajes rápidos:</p>
              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => sendWhatsAppMessage(msg)}
                  className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-green-500 hover:to-green-600 text-white p-3 rounded-lg text-sm text-left transition-all duration-300 hover:scale-105 border border-slate-600 hover:border-green-500"
                >
                  {msg}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 bg-slate-800 border-t border-slate-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && message.trim()) {
                    sendWhatsAppMessage(message);
                    setMessage('');
                  }
                }}
                placeholder="Escribe tu mensaje..."
                className="flex-1 bg-slate-700 text-white px-4 py-3 rounded-full border border-slate-600 focus:outline-none focus:border-green-500 transition-all duration-300"
              />
              <button
                onClick={() => {
                  if (message.trim()) {
                    sendWhatsAppMessage(message);
                    setMessage('');
                  }
                }}
                className="bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!message.trim()}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-500 text-xs text-center mt-2">
              Te responderemos por WhatsApp
            </p>
          </div>
        </div>
      )}
    </>
  );
}
