import React, { useEffect, useState } from 'react';
import { COMPANY_CONTACT } from '../data/projectsData';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloating: React.FC = () => {
  const show = () => innerWidth >= 768 || location.pathname !== '/' || scrollY > 160;
  const [visible, setVisible] = useState(show);
  useEffect(() => {
    const update = () => setVisible(show());
    addEventListener('scroll', update, {passive:true});
    addEventListener('resize', update); addEventListener('popstate', update);
    return () => { removeEventListener('scroll', update); removeEventListener('resize', update); removeEventListener('popstate', update); };
  }, []);
  if (!visible) return null;
  return (
    <aside
      aria-label="Atendimento rápido WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center group"
    >
      <a
        href={COMPANY_CONTACT.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp oficial da FH Chalés"
        className="flex items-center gap-3 p-3.5 sm:px-4 sm:py-3.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="hidden sm:inline-block text-xs uppercase tracking-wider font-bold">
          Falar no WhatsApp
        </span>
      </a>
    </aside>
  );
};
