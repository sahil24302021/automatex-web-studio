import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-secondary text-white px-5 py-3 rounded-full shadow-lg hover:bg-emerald-600 transition-all transform hover:scale-105 animate-bounce-slight"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-semibold text-sm md:text-base">Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;