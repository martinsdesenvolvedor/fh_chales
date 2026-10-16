import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS_DATA, COMPANY_CONTACT } from '../data/projectsData';
import { Calculator, Check, ArrowRight, Sparkles, ShieldAlert, Phone, HelpCircle } from 'lucide-react';

interface ProjectSimulatorProps {
  initialProjectId?: string;
}

export const ProjectSimulator: React.FC<ProjectSimulatorProps> = ({ initialProjectId = 'aframe-imperial' }) => {
  const [selectedModelId, setSelectedModelId] = useState<string>(initialProjectId);
  const [areaSize, setAreaSize] = useState<number>(85);
  const [terrainType, setTerrainType] = useState<'plano' | 'declive' | 'aclive_montanha'>('declive');
  
  // Upgrades
  const [hasHotTub, setHasHotTub] = useState<boolean>(true);
  const [hasSuspendedFireplace, setHasSuspendedFireplace] = useState<boolean>(true);
  const [hasDoubleGlass, setHasDoubleGlass] = useState<boolean>(true);
  const [hasSolarPower, setHasSolarPower] = useState<boolean>(false);
  const [hasSmartHome, setHasSmartHome] = useState<boolean>(true);

  // Selected Model Data
  const currentModel = PROJECTS_DATA.find((p) => p.id === selectedModelId) || PROJECTS_DATA[0];

  // Price Calculation Logic
  // Base cost per m2 based on model type
  const baseCostPerM2Map: Record<string, number> = {
    'aframe-imperial': 2400,
    'nordic-sanctuary': 2350,
    'suico-alpino': 2550,
    'vila-alpine-master': 2700,
  };

  const baseCostPerM2 = baseCostPerM2Map[selectedModelId] || 2400;
  const baseConstructionCost = areaSize * baseCostPerM2;

  // Terrain adjustment
  const terrainMultiplier = terrainType === 'plano' ? 1.0 : terrainType === 'declive' ? 1.08 : 1.15;
  const terrainCost = baseConstructionCost * (terrainMultiplier - 1);

  // Upgrades costs
  const hotTubCost = hasHotTub ? 28000 : 0;
  const fireplaceCost = hasSuspendedFireplace ? 14500 : 0;
  const glassCost = hasDoubleGlass ? 18000 : 0;
  const solarCost = hasSolarPower ? 26000 : 0;
  const smartHomeCost = hasSmartHome ? 9800 : 0;

  const totalConstructionCost = baseConstructionCost + terrainCost + hotTubCost + fireplaceCost + glassCost + solarCost + smartHomeCost;

  // Estimated construction days
  const baseDays = currentModel.constructionDays;
  const calculatedDays = Math.round(baseDays * (areaSize / currentModel.area) * (terrainType === 'plano' ? 0.95 : 1.05));

  const formatCurrency = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  };

  const handleGenerateWhatsAppLink = () => {
    const terrainLabel =
      terrainType === 'plano'
        ? 'Plano / Aclive Leve'
        : terrainType === 'declive'
        ? 'Declive com Deck Suspenso'
        : 'Encosta Acentuada / Cume';

    const upgradesList = [
      hasHotTub ? 'Deck com Ofurô / Hidromassagem Aquecida' : null,
      hasSuspendedFireplace ? 'Lareira Suspensa de Design' : null,
      hasDoubleGlass ? 'Vidros Duplos Térmicos' : null,
      hasSolarPower ? 'Energia Solar Fotovoltaica' : null,
      hasSmartHome ? 'Automação Smart Home' : null,
    ].filter(Boolean).join(', ');

    const message = `Olá equipe FH Chalés! Acabei de configurar uma simulação no site:
• Modelo Escolhido: ${currentModel.name}
• Metragem Desejada: ${areaSize} m²
• Topografia do Terreno: ${terrainLabel}
• Opcionais Selecionados: ${upgradesList || 'Nenhum'}
• Custo de construção estimado: ${formatCurrency(totalConstructionCost)}
• Prazo Médio Estimado: ${calculatedDays} dias

Gostaria de agendar uma reunião com o arquiteto para validar o projeto no meu terreno!`;

    return `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="simulador" className="py-24 sm:py-32 bg-[#0a0f0a] relative border-t border-[#1d2719]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#C5A869] font-medium mb-3">
            <span>Planejador do seu projeto</span>
            <span aria-hidden="true">·</span>
            <span>FH Chalés</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
            Configure os detalhes do seu refúgio
          </h2>
          <p className="text-sm sm:text-base text-[#8c9385] mt-4 font-light leading-relaxed">
            Escolha um estilo, a metragem e os detalhes que fazem sentido para você. A estimativa inicial ajuda a organizar a conversa com a equipe; não substitui uma proposta para o seu terreno.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (Left) */}
          <div className="lg:col-span-7 space-y-8 bg-[#121911] border border-[#232f1f] rounded-xl p-6 sm:p-8 shadow-xl">
            {/* Step 1: Model Selection */}
            <div>
              <label className="text-xs uppercase tracking-widest text-[#C5A869] font-semibold block mb-3">
                1. Escolha o Modelo Arquitetônico:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {PROJECTS_DATA.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => {
                      setSelectedModelId(p.id);
                      setAreaSize(p.area);
                    }}
                    className={`p-3 rounded-lg text-left transition-all border ${
                      selectedModelId === p.id
                        ? 'bg-[#1b2718] border-[#C5A869] ring-1 ring-[#C5A869]'
                        : 'bg-[#151c13] border-[#222e1f] text-[#8c9385] hover:text-white hover:border-[#2f402b]'
                    }`}
                  >
                    <span className="text-[10px] text-[#C5A869] uppercase font-mono block">Linha {p.category}</span>
                    <span className="text-xs font-semibold text-white block mt-0.5">{p.name}</span>
                    <span className="text-[11px] text-[#8c9385] block mt-1">{p.area} m² base</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Area Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs uppercase tracking-widest text-[#C5A869] font-semibold">
                  2. Metragem Quadrada Construída (Área Total):
                </label>
                <span className="text-base font-serif font-bold text-white tabular-nums bg-[#182315] px-3 py-0.5 rounded border border-[#273822]">
                  {areaSize} m²
                </span>
              </div>
              <input
                type="range"
                aria-label="Área construída em metros quadrados"
                min="45"
                max="200"
                step="5"
                value={areaSize}
                onChange={(e) => setAreaSize(Number(e.target.value))}
                className="w-full accent-[#C5A869] bg-[#1a2517] h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#8c9385] mt-1 font-mono">
                <span>45 m² (Loft Compacto)</span>
                <span>120 m² (Familiar)</span>
                <span>200 m² (Villa Master)</span>
              </div>
            </div>

            {/* Step 3: Terrain Type */}
            <div>
              <label className="text-xs uppercase tracking-widest text-[#C5A869] font-semibold block mb-3">
                3. Topografia do Terreno:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setTerrainType('plano')}
                  className={`p-3 rounded-lg text-left transition-all border ${
                    terrainType === 'plano'
                      ? 'bg-[#1b2718] border-[#C5A869] ring-1 ring-[#C5A869]'
                      : 'bg-[#151c13] border-[#222e1f] text-[#8c9385] hover:text-white'
                  }`}
                >
                  <span className="text-xs font-semibold text-white block">Plano / Aclive Suave</span>
                  <span className="text-[11px] text-[#8c9385] block mt-1">Fundação padrão em sapatas</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTerrainType('declive')}
                  className={`p-3 rounded-lg text-left transition-all border ${
                    terrainType === 'declive'
                      ? 'bg-[#1b2718] border-[#C5A869] ring-1 ring-[#C5A869]'
                      : 'bg-[#151c13] border-[#222e1f] text-[#8c9385] hover:text-white'
                  }`}
                >
                  <span className="text-xs font-semibold text-white block">Declive com Deck em Balanço</span>
                  <span className="text-[11px] text-[#8c9385] block mt-1">Pilares e ancoragem suspensa</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTerrainType('aclive_montanha')}
                  className={`p-3 rounded-lg text-left transition-all border ${
                    terrainType === 'aclive_montanha'
                      ? 'bg-[#1b2718] border-[#C5A869] ring-1 ring-[#C5A869]'
                      : 'bg-[#151c13] border-[#222e1f] text-[#8c9385] hover:text-white'
                  }`}
                >
                  <span className="text-xs font-semibold text-white block">Cume / Encosta Acentuada</span>
                  <span className="text-[11px] text-[#8c9385] block mt-1">Engenharia pesada e vista 360°</span>
                </button>
              </div>
            </div>

            {/* Step 4: Luxury Upgrades */}
            <div>
              <label className="text-xs uppercase tracking-widest text-[#C5A869] font-semibold block mb-3">
                4. Opcionais de Luxo & Conforto:
              </label>
              <div className="space-y-2.5">
                <label className="flex items-center justify-between p-3 rounded-lg bg-[#151c13] border border-[#222e1f] hover:border-[#2f402b] cursor-pointer text-xs">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={hasHotTub}
                      onChange={(e) => setHasHotTub(e.target.checked)}
                      className="w-4 h-4 rounded accent-[#C5A869]"
                    />
                    <div>
                      <span className="font-semibold text-white block">Deck Nobre com Ofurô / Hidromassagem Aquecida</span>
                      <span className="text-[#8c9385] text-[11px]">Um espaço para relaxar e aproveitar o seu tempo</span>
                    </div>
                  </div>
                  <span className="font-mono text-[#C5A869] text-xs font-medium">+ R$ 28.000</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-lg bg-[#151c13] border border-[#222e1f] hover:border-[#2f402b] cursor-pointer text-xs">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={hasSuspendedFireplace}
                      onChange={(e) => setHasSuspendedFireplace(e.target.checked)}
                      className="w-4 h-4 rounded accent-[#C5A869]"
                    />
                    <div>
                      <span className="font-semibold text-white block">Lareira Suspensa de Design Central</span>
                      <span className="text-[#8c9385] text-[11px]">Aquecimento eficiente a lenha com duto cerâmico estético</span>
                    </div>
                  </div>
                  <span className="font-mono text-[#C5A869] text-xs font-medium">+ R$ 14.500</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-lg bg-[#151c13] border border-[#222e1f] hover:border-[#2f402b] cursor-pointer text-xs">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={hasDoubleGlass}
                      onChange={(e) => setHasDoubleGlass(e.target.checked)}
                      className="w-4 h-4 rounded accent-[#C5A869]"
                    />
                    <div>
                      <span className="font-semibold text-white block">Vidros Duplos Térmicos com Filtro Solar</span>
                      <span className="text-[#8c9385] text-[11px]">Conforto acústico e térmico superior para climas de serra frios</span>
                    </div>
                  </div>
                  <span className="font-mono text-[#C5A869] text-xs font-medium">+ R$ 18.000</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-lg bg-[#151c13] border border-[#222e1f] hover:border-[#2f402b] cursor-pointer text-xs">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={hasSolarPower}
                      onChange={(e) => setHasSolarPower(e.target.checked)}
                      className="w-4 h-4 rounded accent-[#C5A869]"
                    />
                    <div>
                      <span className="font-semibold text-white block">Sistema de Energia Solar Fotovoltaica</span>
                      <span className="text-[#8c9385] text-[11px]">Autossuficiência energética para chalés em locais remotos</span>
                    </div>
                  </div>
                  <span className="font-mono text-[#C5A869] text-xs font-medium">+ R$ 26.000</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-lg bg-[#151c13] border border-[#222e1f] hover:border-[#2f402b] cursor-pointer text-xs">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={hasSmartHome}
                      onChange={(e) => setHasSmartHome(e.target.checked)}
                      className="w-4 h-4 rounded accent-[#C5A869]"
                    />
                    <div>
                      <span className="font-semibold text-white block">Automação Residencial Smart Home & Fechadura Digital</span>
                      <span className="text-[#8c9385] text-[11px]">Acesso sem chave e controle de iluminação por smartphone</span>
                    </div>
                  </div>
                  <span className="font-mono text-[#C5A869] text-xs font-medium">+ R$ 9.800</span>
                </label>
              </div>
            </div>
          </div>

          {/* Real-time Summary Card (Right) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="bg-[#121911] border border-[#2e3e27] rounded-xl p-6 sm:p-7 shadow-2xl space-y-6">
              <div className="border-b border-[#222f1f] pb-4">
                <span className="text-[11px] uppercase tracking-widest text-[#C5A869] font-medium block">
                  Resumo da Configuração
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-white mt-1">
                  {currentModel.name} · {areaSize}m²
                </h3>
              </div>

              {/* Total Price Display */}
              <div className="p-4 rounded-lg bg-[#162114] border border-[#2c3d25]">
                <span className="text-xs uppercase tracking-wider text-[#8c9385] block mb-1">
                  Custo de construção estimado Chave na Mão:
                </span>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-[#E5C984] tabular-nums">
                  {formatCurrency(totalConstructionCost)}
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#8c9385] mt-2 pt-2 border-t border-[#23311f]">
                  <span>Prazo estimado de entrega:</span>
                  <strong className="text-white font-mono">{calculatedDays} dias</strong>
                </div>
              </div>

              {/* Direct WhatsApp Call to Action */}
              <div className="pt-2">
                <a
                  href={handleGenerateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-xs uppercase tracking-widest font-bold text-[#0d120c] bg-gradient-to-r from-[#DFBF77] via-[#C5A869] to-[#AA852F] hover:brightness-110 active:scale-[0.98] transition-all rounded-md shadow-xl shadow-[#C5A869]/20"
                >
                  <Phone className="w-4 h-4" />
                  <span>Enviar Projeto para o WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <p className="text-[11px] text-center text-[#8c9385] mt-3">
                  Sem compromisso. A equipe ajudará você para analisar a viabilidade no seu terreno.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
