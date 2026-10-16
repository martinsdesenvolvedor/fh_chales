# FH Chalés — refinamento editorial e responsivo

## Diagnóstico e direção

O projeto existente já dispunha de React, TypeScript, Vite, Motion, componentes compartilhados e roteamento pela History API. Não foi necessário reconstruir a aplicação ou adicionar dependências. Fontes Geist e Plus Jakarta Sans, fotografias, contatos e integrações foram mantidos.

A Home repetia o carrossel dos oito projetos, os cinco serviços, seis perguntas frequentes e o formulário completo de Contato. Cada detalhe de projeto repetia o carrossel inteiro; cada detalhe de serviço repetia processo, FAQ e serviços completos. Os títulos internos chegavam a 64–75 px, imagens do portfólio tinham altura fixa de até 650 px e o menu mobile usava links de até 36 px.

A [referência Modu](https://modu-template.framer.website/) organiza apresentação, seleção de projetos, serviços e chamadas comerciais com caminhos para aprofundamento. Essa organização orientou o refinamento, sem copiar seus dados ou modificar a identidade existente. O acesso ao site publicado pelo leitor web retornou erro; a implementação e a validação visual foram feitas no projeto local, no build de produção servido em http://127.0.0.1:4183/.

## Organização final

**Home:** Hero original → apresentação breve com link Sobre → quatro registros reais em destaque → respiro fotográfico/parallax existente → três serviços resumidos → experiência fotográfica com abas → introdução ao processo com link para suas etapas → CTA com fotografias convergentes → rodapé original com formulário compacto.

O carrossel mantém as animações e passa a percorrer os quatro registros reais centralizados. Links permanentes dão acesso aos quatro detalhes, inclusive aos dois recentes, sem depender da troca de slide. A Home deixa de reproduzir FAQ e formulário completo. Foram mantidos os espaços necessários aos efeitos de scroll e as seções fotográficas importantes.

**Sobre:** narrativa institucional, filosofia, imagens, bastidores, diferenciais e equipe existentes. Nenhuma data de fundação, credencial, quantidade de obras ou promessa comercial foi criada. Os perfis demonstrativos anteriores continuam identificados como demonstrativos.

**Projetos:** os oito cadastros permanecem na listagem completa. Detalhes mantêm abertura, galeria, fotos, descrição, características cadastradas, fonte e contato. A repetição da descrição no corpo foi removida. Cada detalhe agora apresenta três relacionados da mesma natureza — registro da empresa ou estudo — e exclui o projeto atual.

**Serviços:** a página reúne as cinco soluções, com os textos completos já cadastrados. A Home usa somente os resumos das três primeiras. Detalhes mantêm introdução, benefícios, fotografia editorial e contato; no lugar de repetir três seções inteiras, oferecem próximos passos e links para Processo, FAQ e todos os serviços.

**Como funciona:** preserva as quatro etapas e seu conteúdo, sem acrescentar prazos ou garantias. A lista ganhou marcação semântica válida, mantendo as mesmas revelações. Processo e Serviços apresentam três perguntas introdutórias e link para o FAQ completo, que preserva suas seis perguntas inicialmente fechadas.

**Contato e Planejador:** formulários, cálculo, catálogo conceitual, modal e preparação de mensagens para o WhatsApp foram preservados. O formulário compacto do rodapé permanece disponível.

## Tipografia, menu e proporções

- Estilos novos ficam sob `.fh-refined`, com exclusões explícitas para as Heroes e aberturas de projetos/perfis. Não foram alterados estilos globais de títulos ou containers compartilhados com as Heroes.
- Títulos internos: limite de 56 px em desktop grande, 50 px em notebook, 42 px em tablet e 28–36 px em celular. Entrelinhas e espaçamento entre letras foram equilibrados. Subtítulos e textos de leitura receberam ajustes seletivos.
- Header celular: 64 px, logo proporcional e botão acessível. Header desktop permanece com 88 px; tablet mantém 80 px.
- Menu: links de 19 px no celular e 20 px no tablet, itens de 50 px, rolagem interna e safe area. Animações de abertura/fechamento, indicadores ativos e comportamento de teclado foram preservados.
- Conteúdo: padding vertical progressivo de 96/80/72/56 px; imagens de serviço e etapas mais proporcionais; cards do portfólio usam proporção em vez de altura fixa exagerada. Aberturas e áreas necessárias às animações foram preservadas.

## Rotas e metadados

O roteador existente foi mantido: links internos, navegação direta, recarga, voltar/avançar, foco no conteúdo e scroll para o topo. A configuração existente `vercel.json` mantém o fallback para `index.html`. Não houve publicação, portanto o funcionamento na nova versão remota não foi validado.

As 25 rotas de conteúdo continuam disponíveis: Home, Sobre, Processo, Projetos, Serviços, Contato, FAQ, Planejador, Equipe, oito detalhes de projetos, cinco detalhes de serviços e três perfis. A rota inexistente apresenta a página de erro existente, sem quebrar a aplicação. O fallback de SPA responde com HTTP 200; não foi criado status HTTP 404 no servidor.

O novo hook `usePageMetadata` atualiza título, descrição, Open Graph e URL conforme a rota, reutilizando os dados do cadastro. São metadados atualizados no cliente; não foi adicionada renderização no servidor.

## Projetos preservados

| Cadastro | Título | Natureza |
|---|---|---|
| `/projetos/chale-em-madeira` | Madeira, luz e acolhimento. | Registro FH Chalés; destaque na Home |
| `/projetos/interiores-em-madeira` | O aconchego está nos detalhes. | Registro FH Chalés; destaque na Home |
| `/projetos/chale-madeira-40m2` | Chalé de madeira de 40 m². | Registro recente; destaque na Home |
| `/projetos/chale-entregue` | Um refúgio em madeira. | Registro recente; destaque na Home |
| `/projetos/refugio-araucaria` | Refúgio Araucária. | Estudo existente |
| `/projetos/cabana-horizonte` | Cabana Horizonte. | Estudo existente |
| `/projetos/casa-do-bosque` | Casa do Bosque. | Estudo existente |
| `/projetos/mirante-da-serra` | Mirante da Serra. | Estudo existente |

Os dois recentes preservam imagens, descrições, fontes do Instagram, associações e dados cadastrados. Não foram introduzidas metragens, localizações ou características novas. A seleção da Home deriva de `WORKS` por referência; não duplica manualmente objetos.

## Preservação das Heroes e animações

`Hero.tsx` e `MotionElements.tsx` permanecem sem alterações, confirmados por SHA-256 antes/depois. A função `PageHero` e seus estilos específicos permanecem intactos. Nenhuma fotografia foi substituída e nenhum novo efeito foi introduzido.

A comparação automatizada reuniu **100 pares**: Home e nove tipos de Hero interna, nas dez resoluções. Medidas da seção, título e imagem, fonte, entrelinha, espaçamento, padding, posicionamento, enquadramento e caminho da fotografia coincidiram: **zero diferenças** (`hero-differences.json`). O header mobile foi comparado separadamente, pois sua redução era solicitada.

Testes adicionais verificam pinning na rolagem, crossfade da Hero, máscara da fotografia, revelação de palavras, abas fotográficas por mouse/teclado, carrossel, convergência das três imagens do CTA e conteúdo visível após scroll. Timings e cálculos dos efeitos existentes foram preservados, inclusive o tratamento de `prefers-reduced-motion`.

## Validação

- `npm run lint`: aprovado. Neste projeto o comando executa **TypeScript (`tsc --noEmit`)**, não ESLint. ESLint não está instalado/configurado; não foi acrescentada dependência apenas para mudar essa situação.
- `npm run build`: aprovado. Permanece apenas o aviso preexistente do Vite sobre `__dirname` no futuro carregador nativo.
- Matriz inicial: **260 verificações** — 25 rotas existentes + uma rota inválida, nas dez resoluções. Sem erros JavaScript, imagens ausentes, requisições locais com falha ou overflow horizontal.
- Verificação complementar após os últimos ajustes: **50 verificações** de páginas alteradas nas dez resoluções, auditoria axe de três páginas (zero violações), seis capturas finais de página completa e **20 verificações de pinning** das Heroes (aprovadas). Resultados em `docs/visual/premium/final-checks.json`.
- Acessibilidade: axe com regras WCAG 2 A/AA e 2.1 AA. A auditoria inicial cobriu seis páginas e a complementar cobre Serviços, Processo e FAQ. A estrutura inválida das listas de Processo foi corrigida após a detecção. A auditoria automatizada não substitui avaliação humana completa.
- Fluxos existentes: navegação mobile, histórico, seleção de modelo/área, estimativa, modal, abas, Escape, galeria, formulário principal e formulário do rodapé. A abertura do WhatsApp foi simulada: nenhuma mensagem foi enviada.
- Estados ativos e espaçamento: 15 cenários em 1920/1366/390 px; convergência real das três imagens do CTA; presença dos oito cadastros e dos dois recentes.
- Um teste legado de revelação lia o valor antes de o navegador atualizar o frame de scroll. A sincronização e o posicionamento do teste foram corrigidos; não foi alterada a animação para satisfazer o teste.

Resoluções efetivamente verificadas:

| Desktop | Tablet | Mobile |
|---|---|---|
| 2560 × 1440 | 1024 × 768 | 430 × 932 |
| 1920 × 1080 | 768 × 1024 | 390 × 844 |
| 1440 × 900 | | 375 × 812 |
| 1366 × 768 | | 360 × 740 |

## Arquivos alterados

Implementação: `src/App.tsx`, `src/usePageMetadata.ts` (novo), `src/data/siteData.ts`, `src/pages/ContentPage.tsx`, `src/components/ProjectShowcase.tsx`, `src/components/ServicesSection.tsx`, `src/components/Methodology.tsx`, `src/components/FAQ.tsx`, `src/components/EditorialSections.tsx`, `src/refinement.css`.

Validação/documentação: este relatório, `docs/qa/premium-baseline.cjs`, `docs/qa/premium.cjs`, `docs/qa/premium-final.cjs`, sincronização do teste de scroll em `docs/qa/validate.cjs`, relatórios e capturas em `docs/visual/premium/`.

## Capturas e evidências

- [Home desktop final](visual/premium/final-home-1366.png)
- [Home mobile final](visual/premium/final-home-390.png)
- [Menu mobile](visual/premium/final-menu-390.png)
- [Serviços desktop](visual/premium/final-servicos-1366.png)
- [Processo mobile](visual/premium/final-como-funciona-390.png)
- [Hero Home antes](visual/premium/before-home-1366.png) / [depois](visual/premium/after-home-1366.png)
- [Hero Sobre antes](visual/premium/before-sobre-390.png) / [depois](visual/premium/after-sobre-390.png)
- [Matriz de validação](visual/premium/validation.json)
- [Comparação das Heroes](visual/premium/hero-differences.json)

As capturas `final-*` de página completa foram feitas com movimento reduzido ativo desde o carregamento para apresentar todo o conteúdo. As capturas `before/after` das aberturas foram feitas com animações normais. Os testes de animação utilizam movimento normal e scroll real. Capturas preliminares `before/after-home-full-*` não devem ser usadas para avaliar o conteúdo: a troca de preferência após o carregamento deixou revelações fora do viewport ainda pendentes.

Não foram modificados backend, banco, regras comerciais ou bibliotecas. Alterações locais; publicação não executada.
