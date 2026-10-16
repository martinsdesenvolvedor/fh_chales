import React, { useState } from 'react';
import { COMPANY_CONTACT } from '../data/projectsData';
import { Phone, Instagram, Mail, MapPin, Send, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [cityState, setCityState] = useState('');
  const [modelInterest, setModelInterest] = useState('A-Frame Imperial');
  const [hasLand, setHasLand] = useState('Sim, terreno já adquirido');
  const [message, setMessage] = useState('');
  
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Por favor, informe seu nome completo.');
      return;
    }
    if (!whatsapp.trim() || whatsapp.length < 9) {
      setErrorMsg('Por favor, informe um número de WhatsApp válido com DDD.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);

    // Format WhatsApp redirect message
    const formattedMsg = `Olá equipe FH Chalés!
Me chamo *${name}* (${cityState || 'Brasil'}).
• Interesse no modelo: ${modelInterest}
• Situação do terreno: ${hasLand}
• Mensagem adicional: ${message || 'Gostaria de agendar uma conversa com a equipe.'}

Aguardo o contato para conversarmos sobre meu projeto!`;

    const targetUrl = `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(formattedMsg)}`;
    // Optional delay to show confirmed state before opening WhatsApp
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 sm:py-32 bg-[#0a0f0a] relative border-t border-[#1d2719]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#C5A869] font-medium mb-3">
                <span>Conte sua ideia</span>
                <span aria-hidden="true">·</span>
                <span>FH Chalés</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
                Vamos transformar seu sonho de refúgio em realidade
              </h2>
              <p className="text-sm sm:text-base text-[#8c9385] mt-4 font-light leading-relaxed">
                Compartilhe a localização do seu terreno e o que você deseja construir. A equipe da FH Chalés vai orientar os próximos passos para conversar sobre seu projeto.
              </p>
            </div>

            <div className="space-y-4 pt-2 text-xs sm:text-sm">
              <a
                href={COMPANY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-xl bg-[#121911] border border-[#232f1f] hover:border-[#C5A869]/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#182315] border border-[#2c3d25] flex items-center justify-center text-[#C5A869] group-hover:bg-[#C5A869] group-hover:text-[#0d120c] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8c9385] block">WhatsApp Comercial Oficial</span>
                  <span className="font-semibold text-white">{COMPANY_CONTACT.phoneFormatted}</span>
                </div>
              </a>

              <a
                href={COMPANY_CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-xl bg-[#121911] border border-[#232f1f] hover:border-[#C5A869]/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#182315] border border-[#2c3d25] flex items-center justify-center text-[#C5A869] group-hover:bg-[#C5A869] group-hover:text-[#0d120c] transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8c9385] block">Instagram Oficial da Construtora</span>
                  <span className="font-semibold text-white">{COMPANY_CONTACT.instagramHandle}</span>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#121911] border border-[#232f1f]">
                <div className="w-10 h-10 rounded-lg bg-[#182315] border border-[#2c3d25] flex items-center justify-center text-[#C5A869]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8c9385] block">Horário de Atendimento</span>
                  <span className="font-semibold text-white">{COMPANY_CONTACT.hours}</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#121911] border border-[#232f1f]">
                <div className="w-10 h-10 rounded-lg bg-[#182315] border border-[#2c3d25] flex items-center justify-center text-[#C5A869]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8c9385] block">Área de Atuação</span>
                  <span className="font-semibold text-white">{COMPANY_CONTACT.regionsServed}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-[#121911] border border-[#232f1f] rounded-xl p-7 sm:p-9 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#182315] border border-[#C5A869] flex items-center justify-center text-[#C5A869] mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-white">Sua mensagem está pronta!</h3>
                <p className="text-sm text-[#8c9385] max-w-md mx-auto leading-relaxed">
                  O WhatsApp da FH Chalés foi aberto com os detalhes do seu projeto. Confirme o envio da mensagem por lá para iniciar a conversa.
                </p>
                <div className="pt-4">
                  <a
                    href={COMPANY_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-bold text-[#0d120c] bg-[#C5A869] rounded-md hover:bg-[#d6bc81]"
                  >
                    <span>Abrir Conversa Agora</span>
                    <Send className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-[#202c1c] pb-3 mb-2">
                  <h3 className="text-xl sm:text-2xl font-serif text-white">
                    Solicitar Consultoria de Projeto
                  </h3>
                  <p className="text-xs text-[#8c9385] mt-1">
                    Preencha os dados abaixo para receber uma estimativa personalizada sem compromisso.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-lg bg-red-950/60 border border-red-800/80 text-red-200 text-xs">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="text-xs uppercase tracking-wider text-[#C5A869] font-medium block mb-1.5">
                      Nome Completo *
                    </label>
                    <input id="contact-name"
                      type="text"
                      required
                      placeholder="Ex: Carlos Eduardo Silveira"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#151c13] border border-[#283823] text-white text-xs placeholder-[#5a6353] focus:outline-none focus:border-[#C5A869] focus:ring-1 focus:ring-[#C5A869]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="text-xs uppercase tracking-wider text-[#C5A869] font-medium block mb-1.5">
                      WhatsApp com DDD *
                    </label>
                    <input id="contact-phone"
                      type="tel"
                      required
                      placeholder="Ex: (47) 99999-9999"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#151c13] border border-[#283823] text-white text-xs placeholder-[#5a6353] focus:outline-none focus:border-[#C5A869] focus:ring-1 focus:ring-[#C5A869]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-city" className="text-xs uppercase tracking-wider text-[#C5A869] font-medium block mb-1.5">
                      Cidade e Estado da Construção
                    </label>
                    <input id="contact-city"
                      type="text"
                      placeholder="Ex: Sua cidade / UF"
                      value={cityState}
                      onChange={(e) => setCityState(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#151c13] border border-[#283823] text-white text-xs placeholder-[#5a6353] focus:outline-none focus:border-[#C5A869] focus:ring-1 focus:ring-[#C5A869]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-model" className="text-xs uppercase tracking-wider text-[#C5A869] font-medium block mb-1.5">
                      Modelo de Maior Interesse
                    </label>
                    <select id="contact-model"
                      value={modelInterest}
                      onChange={(e) => setModelInterest(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#151c13] border border-[#283823] text-white text-xs focus:outline-none focus:border-[#C5A869] focus:ring-1 focus:ring-[#C5A869]"
                    >
                      <option value="A-Frame Imperial">A-Frame Imperial (Pele de Vidro)</option>
                      <option value="Cabana Nórdica Loft">Cabana Nórdica Loft (Madeira & SPA)</option>
                      <option value="Chalé Suíço Moderno">Chalé Suíço Moderno (Familiar)</option>
                      <option value="Vila Mantiqueira Master">Vila Mantiqueira Master (Com Piscina Suspensa)</option>
                      <option value="Projeto 100% Personalizado">Projeto 100% Personalizado do Zero</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-land" className="text-xs uppercase tracking-wider text-[#C5A869] font-medium block mb-1.5">
                    Situação do Terreno
                  </label>
                  <select id="contact-land"
                    value={hasLand}
                    onChange={(e) => setHasLand(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#151c13] border border-[#283823] text-white text-xs focus:outline-none focus:border-[#C5A869] focus:ring-1 focus:ring-[#C5A869]"
                  >
                    <option value="Sim, já possuo terreno">Sim, terreno já adquirido e pronto para construir</option>
                    <option value="Em fase de compra de terreno">Estou negociando / procurando o terreno</option>
                    <option value="Múltiplas unidades">Quero conversar sobre mais de uma unidade</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="text-xs uppercase tracking-wider text-[#C5A869] font-medium block mb-1.5">
                    Conte um pouco sobre sua ideia ou dúvidas
                  </label>
                  <textarea id="contact-message"
                    rows={3}
                    placeholder="Descreva detalhes como metragem desejada, prazo pretendido ou particularidades do relevo do terreno..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#151c13] border border-[#283823] text-white text-xs placeholder-[#5a6353] focus:outline-none focus:border-[#C5A869] focus:ring-1 focus:ring-[#C5A869]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-xs uppercase tracking-widest font-bold text-[#0d120c] bg-gradient-to-r from-[#DFBF77] via-[#C5A869] to-[#AA852F] hover:brightness-110 active:scale-[0.99] transition-all rounded-md shadow-lg shadow-[#C5A869]/20 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Enviar Solicitação de Projeto</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
