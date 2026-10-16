import React, { useState } from 'react';
import { ProjectModel, COMPANY_CONTACT } from '../data/projectsData';
import { X, Check, ArrowRight, BedDouble, Bath, Maximize2, Calendar, Phone, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectModel | null;
  onClose: () => void;
  onSelectForSimulator: (projectId: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectForSimulator,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'blueprint' | 'specs'>('overview');
  const [selectedImage, setSelectedImage] = useState<string>('');

  if (!project) return null;

  const currentImage = selectedImage || project.image;

  const generateWhatsAppMessage = () => {
    const text = `Olá equipe FH Chalés! Tenho muito interesse no modelo *${project.name}* (${project.area}m²). Gostaria de agendar uma reunião para entender valores, prazos e viabilidade no meu terreno.`;
    return `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Detalhes da referência arquitetônica"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
    >
      <div
        className="relative bg-[#111710] border border-[#2a3824] rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl my-6 text-[#EDEAE3]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#232f1f] bg-[#141b13]">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A869] font-medium">
              Linha {project.category}
            </span>
            <span className="text-[#8c9385] text-xs" aria-hidden="true">·</span>
            <span className="text-xs text-[#8c9385]">{project.area} m² de área construída</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#8c9385] hover:text-white hover:bg-[#1f2a1b] transition-colors"
            aria-label="Fechar detalhes do projeto"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="max-h-[80vh] overflow-y-auto p-6 space-y-6">
          {/* Main Visual & Gallery */}
          <div className="space-y-3">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-lg overflow-hidden border border-[#253320]">
              <img
                src={currentImage}
                alt={project.name}
                className="w-full h-full object-cover transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e140d]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white">{project.name}</h3>
                  <p className="text-xs sm:text-sm text-[#C5A869]">{project.tagline}</p>
                </div>
                <div className="text-right bg-[#0d120c]/80 backdrop-blur-md px-3 py-1.5 rounded border border-[#2a3824]">
                  <span className="text-[10px] uppercase tracking-wider text-[#8c9385] block">Referência de custo</span>
                  <span className="text-sm sm:text-base font-serif font-bold text-[#E5C984]">{project.estimatedPrice}</span>
                </div>
              </div>
            </div>

            {/* Thumbnail switcher */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setSelectedImage(project.image)}
                className={`w-20 h-14 rounded overflow-hidden border transition-all ${
                  currentImage === project.image ? 'border-[#C5A869] ring-2 ring-[#C5A869]/30' : 'border-[#253320] opacity-60 hover:opacity-100'
                }`}
              >
                <img src={project.image} alt="Fachada principal" className="w-full h-full object-cover" />
              </button>
              <button
                type="button"
                onClick={() => setSelectedImage(project.secondaryImage)}
                className={`w-20 h-14 rounded overflow-hidden border transition-all ${
                  currentImage === project.secondaryImage ? 'border-[#C5A869] ring-2 ring-[#C5A869]/30' : 'border-[#253320] opacity-60 hover:opacity-100'
                }`}
              >
                <img src={project.secondaryImage} alt="Vista adicional" className="w-full h-full object-cover" />
              </button>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-lg bg-[#141b12] border border-[#232f1f] text-xs">
            <div className="flex items-center gap-2.5">
              <Maximize2 className="w-4 h-4 text-[#C5A869]" />
              <div>
                <span className="text-[#8c9385] block text-[10px] uppercase">Área Total</span>
                <span className="font-semibold text-white">{project.area} m²</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <BedDouble className="w-4 h-4 text-[#C5A869]" />
              <div>
                <span className="text-[#8c9385] block text-[10px] uppercase">Dormitórios</span>
                <span className="font-semibold text-white">{project.bedrooms} {project.bedrooms > 1 ? 'Suítes' : 'Suíte'}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Bath className="w-4 h-4 text-[#C5A869]" />
              <div>
                <span className="text-[#8c9385] block text-[10px] uppercase">Banheiros</span>
                <span className="font-semibold text-white">{project.bathrooms} Banheiros</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-[#C5A869]" />
              <div>
                <span className="text-[#8c9385] block text-[10px] uppercase">Montagem</span>
                <span className="font-semibold text-white">{project.constructionDays} Dias</span>
              </div>
            </div>
          </div>

          {/* Interactive Tabs */}
          <div className="flex border-b border-[#232f1f] gap-6 text-xs uppercase tracking-wider font-medium">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-2 transition-colors relative ${
                activeTab === 'overview' ? 'text-[#C5A869] font-bold' : 'text-[#8c9385] hover:text-white'
              }`}
            >
              Visão Arquitetônica
              {activeTab === 'overview' && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A869]" />}
            </button>
            <button
              onClick={() => setActiveTab('blueprint')}
              className={`pb-2 transition-colors relative ${
                activeTab === 'blueprint' ? 'text-[#C5A869] font-bold' : 'text-[#8c9385] hover:text-white'
              }`}
            >
              Conceito de Planta
              {activeTab === 'blueprint' && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A869]" />}
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-2 transition-colors relative ${
                activeTab === 'specs' ? 'text-[#C5A869] font-bold' : 'text-[#8c9385] hover:text-white'
              }`}
            >
              Ficha Construtiva
              {activeTab === 'specs' && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A869]" />}
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-4 text-sm text-[#C8CCC2]">
              <p className="leading-relaxed">{project.description}</p>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#C5A869] font-semibold mb-3">
                  Diferenciais Exclusivos Inclusos:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-[#141b12] p-2.5 rounded border border-[#232f1f]/80">
                      <Check className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>


            </div>
          )}

          {activeTab === 'blueprint' && (
            <div className="space-y-4">
              <div className="p-6 rounded-lg bg-[#0e140d] border border-[#232f1f] text-center">
                {/* Vector architectural layout blueprint illustration */}
                <svg viewBox="0 0 600 340" className="w-full max-h-64 mx-auto stroke-[#C5A869]" fill="none">
                  <rect x="20" y="20" width="560" height="300" strokeWidth="2" strokeDasharray="6 4" opacity="0.3" />
                  {/* Outer chalet boundary */}
                  <rect x="60" y="40" width="480" height="260" strokeWidth="2" />
                  {/* Deck zone */}
                  <rect x="60" y="220" width="480" height="80" strokeWidth="1.5" stroke="#8c9385" fill="#151b13" />
                  <text x="300" y="265" fill="#8c9385" fontSize="12" textAnchor="middle" letterSpacing="2">DECK PANORÂMICO EM CUMARU</text>
                  
                  {/* Living Room */}
                  <rect x="60" y="90" width="280" height="130" strokeWidth="1.5" />
                  <text x="200" y="155" fill="#C5A869" fontSize="13" textAnchor="middle" letterSpacing="1">LIVING COM PÉ DIREITO DUPLO</text>
                  
                  {/* Fireplace circle */}
                  <circle cx="120" cy="155" r="14" strokeWidth="1.5" />
                  <text x="120" y="158" fill="#EDEAE3" fontSize="8" textAnchor="middle">LAREIRA</text>

                  {/* Kitchen / Gourmet */}
                  <rect x="60" y="40" width="280" height="50" strokeWidth="1.5" />
                  <text x="200" y="68" fill="#8c9385" fontSize="11" textAnchor="middle">COZINHA INTEGRADA</text>

                  {/* Master Suite / Bathroom */}
                  <rect x="340" y="40" width="200" height="100" strokeWidth="1.5" />
                  <text x="440" y="95" fill="#C5A869" fontSize="12" textAnchor="middle">SUÍTE PRINCIPAL</text>
                  
                  {/* Banheiro SPA */}
                  <rect x="340" y="140" width="200" height="80" strokeWidth="1.5" />
                  <text x="440" y="185" fill="#8c9385" fontSize="11" textAnchor="middle">SALA DE BANHO & SPA</text>
                  <circle cx="500" cy="180" r="16" strokeWidth="1" stroke="#C5A869" />
                  <text x="500" y="183" fill="#C5A869" fontSize="7" textAnchor="middle">OFURÔ</text>
                </svg>
                <span className="text-[11px] text-[#8c9385] block mt-3">
                  *Planta esquemática ilustrativa. O layout interno e aberturas podem ser 100% personalizados pelos nossos arquitetos para a topografia e insolação do seu terreno.
                </span>
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-[#141b12] p-3.5 rounded border border-[#232f1f]">
                <span className="text-[#C5A869] font-semibold uppercase block mb-1">Pé Direito:</span>
                <p className="text-[#C8CCC2]">{project.specs.peDireito}</p>
              </div>
              <div className="bg-[#141b12] p-3.5 rounded border border-[#232f1f]">
                <span className="text-[#C5A869] font-semibold uppercase block mb-1">Estrutura Principal:</span>
                <p className="text-[#C8CCC2]">{project.specs.estrutura}</p>
              </div>
              <div className="bg-[#141b12] p-3.5 rounded border border-[#232f1f]">
                <span className="text-[#C5A869] font-semibold uppercase block mb-1">Vidros e Esquadrias:</span>
                <p className="text-[#C8CCC2]">{project.specs.vidros}</p>
              </div>
              <div className="bg-[#141b12] p-3.5 rounded border border-[#232f1f]">
                <span className="text-[#C5A869] font-semibold uppercase block mb-1">Isolamento Térmico:</span>
                <p className="text-[#C8CCC2]">{project.specs.isolamento}</p>
              </div>
              <div className="bg-[#141b12] p-3.5 rounded border border-[#232f1f]">
                <span className="text-[#C5A869] font-semibold uppercase block mb-1">Deck Panorâmico:</span>
                <p className="text-[#C8CCC2]">{project.specs.deck}</p>
              </div>
              <div className="bg-[#141b12] p-3.5 rounded border border-[#232f1f]">
                <span className="text-[#C5A869] font-semibold uppercase block mb-1">Cobertura Shingle:</span>
                <p className="text-[#C8CCC2]">{project.specs.cobertura}</p>
              </div>
            </div>
          )}
        </div>

        {/* Action Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-6 border-t border-[#232f1f] bg-[#141b13]">
          <button
            onClick={() => {
              onSelectForSimulator(project.id);
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs uppercase tracking-wider font-semibold text-[#EDEAE3] bg-[#1a2417] hover:bg-[#253321] border border-[#2e3e29] rounded-md transition-colors"
          >
            <Sparkles className="w-4 h-4 text-[#C5A869]" />
            <span>Configurar no Simulador</span>
          </button>

          <a
            href={generateWhatsAppMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-bold text-[#0d120c] bg-gradient-to-r from-[#DFBF77] to-[#C5A869] hover:brightness-110 rounded-md transition-all shadow-lg shadow-[#C5A869]/20"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Solicitar Orçamento deste Modelo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
