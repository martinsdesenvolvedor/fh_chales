# FH Chalés — refinamento e navegação

> Revisão mais recente: [auditoria complementar, conteúdo e comportamento de rolagem](AUDITORIA-MODU.md). O documento abaixo registra a etapa inicial.

Revisão em 16/10/2026. Projeto existente: `fh_chales`. Preview local: http://127.0.0.1:4183/ . Alterações não publicadas.

## Direção e origem do conteúdo

Referência observada no navegador: [Modu](https://modu-template.framer.website/). Foram examinados a abertura com imagens e indicadores, tipografia Geist, apresentação editorial, abas de ambientes, portfólio com imagens sobrepostas, transições de serviços e blocos fotográficos durante a rolagem. A implementação adapta essas famílias de movimentos à FH Chalés; não é uma garantia de equivalência de cada estado interno do template Framer.

A composição combina fotografia ampla, títulos em caixa alta, áreas claras, seções fotográficas e fechamento escuro. React, Vite, Tailwind e Motion foram preservados, sem dependências adicionais. Logo, dados, formulário, planejador e catálogo existentes foram aproveitados; as seções foram reformuladas no mesmo projeto.

Fonte institucional: [Instagram público da FH Chalés](https://www.instagram.com/fhchales/). Confirmados: construção de cabanas, chalés e casas de alto padrão e WhatsApp **(47) 99663-4941**. Endereço, horário fixo, garantias, abrangência nacional e depoimentos de clientes não foram apresentados como fatos sem confirmação. O bloco de depoimentos anterior foi substituído por uma declaração da própria empresa, com link à publicação.

Fotos locais da empresa:

- [Chalé em madeira, publicação de 27/03/2026](https://www.instagram.com/fhchales/p/DWZEtAYkgms/): `public/images/fh-publicacao-1.jpg`.
- [Interior em madeira, publicação de 12/05/2026](https://www.instagram.com/fhchales/p/DYPU48_SUMh/): `public/images/fh-publicacao-2.jpg`.

As imagens arquitetônicas anteriores foram preservadas como inspiração; os modelos conceituais do catálogo estão identificados no planejador. Seus valores e especificações existentes não foram promovidos a catálogo confirmado da empresa. Imagens e marcas do Modu não foram copiadas.

## Rotas

| Página | Caminho |
| --- | --- |
| Início | `/` |
| Sobre nós | `/sobre` |
| Como funciona | `/como-funciona` |
| Projetos | `/projetos` |
| Detalhes do chalé | `/projetos/chale-em-madeira` |
| Detalhes do interior | `/projetos/interiores-em-madeira` |
| Serviços | `/servicos` |
| Chalés | `/servicos/chales` |
| Cabanas | `/servicos/cabanas` |
| Casas | `/servicos/casas` |
| Contato | `/contato` |
| Perguntas frequentes | `/faq` |
| Planejador | `/planejador` |

Navegação via History API, voltar/avançar, acesso direto e fallback para endereços desconhecidos. `vercel.json` prepara o fallback SPA para atualização direta das rotas. Sem alterações de backend, banco ou autenticação.

## Movimentos implementados

| Efeito | Implementação |
| --- | --- |
| Abertura | Três imagens, crossfade de 1,3 s, troca automática a cada 6,5 s, seleção manual e pausa |
| Texto da Hero | Máscara e deslocamento vertical de 0,95 s; entrada coordenada do texto e CTA |
| Parallax | Deslocamento suave vinculado à rolagem nativa; Hero até 18% e escala até 1,08; blocos fotográficos de −8% a +8% |
| Títulos editoriais | Opacidade por palavra de 0,22 a 1 conforme a rolagem |
| Entradas de conteúdo | Movimento vertical de 30 px em 0,75 s e escalonamento nas listas |
| Fotos | Máscara de revelação de 1,05 s, observada na entrada do viewport |
| Ambientes | Crossfade de 0,8 s, indicador animado e navegação por setas do teclado |
| Projetos | Transição de fotos sobrepostas, movimentos opostos e controles anterior/próximo |
| Serviços | Fotografia muda ao passar o mouse ou focar cada serviço; transição de 0,65 s |
| Processo e FAQ | Expansão de altura com opacidade em 0,4 s e 0,35 s |
| Navegação mobile | Abertura por máscara e entradas escalonadas; Escape, foco e bloqueio de rolagem do fundo |
| Interação | Estados de foco, setas, linhas e botões com transições |

Preferência de movimento reduzido respeitada. Sem captura ou substituição da rolagem nativa. Foi corrigido o disparo das máscaras pelo IntersectionObserver: a área inicial da máscara mantém uma fração mínima de interseção, com opacidade zero, para que as fotografias não permaneçam ocultas.

## Conteúdo financeiro removido

Removida a seção dedicada a rentabilidade, sua navegação, projeções de diárias, renda mensal, ocupação, faturamento, payback e referências a investidores. Removidas também as projeções dos detalhes dos modelos e do simulador. O planejador mantém apenas a estimativa de construção já existente, com informação de que não representa proposta final.

## Logo transparente

A versão desenhada anteriormente foi substituída pela referência do perfil oficial. A pedido do usuário, o fundo retangular foi removido em modo de edição da ferramenta integrada `image_gen`, mantendo uma versão PNG com alpha em [public/images/fh-logo-transparente.png](../public/images/fh-logo-transparente.png). O original público foi preservado em `public/images/fh-logo-instagram.jpg`. Cabeçalho, rodapé e favicon usam a versão transparente. O arquivo foi inspecionado visualmente e a transparência foi verificada no canal alpha. A referência disponível do perfil tinha apenas 150×150 px; a edição não substitui o arquivo vetorial original da marca.

Prompt de remoção:

> Use case: background-extraction. Edit target: the supplied FH Chalés logo image from its official Instagram profile. Remove ONLY the dark olive rectangular background, including dark background inside openings of the mark and lettering, making those areas truly transparent. Preserve exactly the original gold evergreen tree, olive/gold tall triangular chalet outline and little window, white bold FH lettering at the lower left, gold CHALÉS serif lettering, and the tiny original slogan 'ONDE A NATUREZA ENCONTRA A SOFISTICAÇÃO'. Keep all original shapes, relative positions, spelling, accents, proportions and original colors; do not redesign, add or invent elements or re-typeset. Tight framing around the existing artwork with a small clear transparent margin. Output a clean PNG with actual alpha transparency, no background, no shadow, no border, no checkerboard baked into image.

Prompt de limpeza:

> Use case: background-extraction cleanup. Edit target: supplied transparent FH CHALÉS logo. Make ONE precise cleanup only: remove all red/orange fringe pixels, speckled edge halos and little stray dots around the gold tree, triangular chalet, FH and CHALÉS lettering and slogan. Clean antialiased alpha edges, smoothly and faithfully. Do not change the artwork geometry, any lettering, positions, words, colors inside the artwork, triangle, tree, window or slogan. Preserve exact text 'FH CHALÉS' and 'ONDE A NATUREZA ENCONTRA A SOFISTICAÇÃO'. No dark background and no rectangle. Keep actual transparency throughout empty areas. No new textures, no new glow, no new shadow or embossing. Retain small clear margin and the same composition.

## Verificações

- `npm run lint` (TypeScript sem emissão) e `npm run build` aprovados. O projeto não possui ESLint configurado.
- 13 rotas em 1920×1080, 1366×768, 768×1024 e 390×844: títulos, carregamento direto, ausência de transbordamento horizontal e ausência de conteúdo financeiro.
- Menu mobile, histórico, abas de ambientes por mouse/teclado, carrossel de projetos, planejador, detalhes dos modelos, Escape e formulário de contato.
- Formulário validado com abertura do WhatsApp simulada: nenhuma mensagem foi enviada. A interface informa que o usuário precisa confirmar o envio no WhatsApp.
- Verificação efetiva de crossfade, transformação do parallax, opacidade por palavra e conclusão da máscara. Rolagem completa desktop/mobile sem conteúdo permanentemente invisível.
- Imagens locais carregadas; nenhuma falha de JavaScript ou de recurso local nos cenários registrados.
- Auditoria automatizada axe nas páginas Início, Contato, FAQ e Planejador, sem violações nos cenários amostrados. Isso não substitui auditoria manual completa de acessibilidade.
- Logo transparente e botão de pausa conferidos em desktop/mobile. O botão flutuante do WhatsApp aparece após o início da rolagem na Home mobile para não cobrir os controles.

[Resultados do navegador](visual/validation.json) · [Script de verificação](qa/validate.cjs).

[Home desktop](visual/home-1366.png) · [Home mobile](visual/home-390.png) · [Projetos mobile](visual/projetos-390.png) · [Serviços desktop](visual/servicos-1366.png) · [Contato mobile](visual/contato-390.png).

