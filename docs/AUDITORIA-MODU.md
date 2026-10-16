# FH Chalés — auditoria complementar do Modu

Revisão de 16/10/2026, após a comparação da Home e das páginas internas.

## Diferença encontrada no parallax

A abertura do Modu não é apenas uma imagem sendo ampliada. A inspeção dos ancestrais no navegador mostrou `position: sticky; top: 0` no banner de Sobre e no contêiner da Hero principal. Na rolagem, a abertura permanece presa e o conteúdo opaco seguinte passa por cima. A versão anterior da FH apenas deslocava e ampliava a imagem.

A FH agora usa esse comportamento de abertura presa, com composição de camadas e seções opacas. Os testes mediram o topo da Hero em 0 px antes e depois de rolar 260 px, na Home e em Sobre, Como funciona, Serviços e FAQ, tanto em 1366×768 quanto em 390×844. A sobreposição do conteúdo foi conferida nas capturas. Os blocos fotográficos restantes têm deslocamento de +40 a −40 px com 80 px de área extra de imagem, evitando frestas. Esse movimento e a colagem final foram verificados por mudança real de transformações durante a rolagem.

Referência: [Modu](https://modu-template.framer.website/), [Sobre](https://modu-template.framer.website/about-us), [Processo](https://modu-template.framer.website/how-it-works), [Projetos](https://modu-template.framer.website/projects), [Serviços](https://modu-template.framer.website/services), [FAQ](https://modu-template.framer.website/faq). [Inventário das oito páginas examinadas](visual/model-audit.json).

## Conteúdo completado

- Sobre: história, imagem em resolução original, números de apresentação animados, bastidores, três integrantes e valores.
- Equipe: listagem em `/equipe` e três perfis individuais em `/equipe/felipe-ramos`, `/equipe/helena-martins` e `/equipe/lucas-andrade`.
- Como funciona: quatro etapas editoriais, com fotos alternadas e informações de cada fase.
- Projetos: seis entradas, sendo dois registros publicados pela empresa e quatro estudos demonstrativos. Detalhes reorganizados com apresentação lateral fixa, ficha, galeria selecionável, abordagem de projeto e projetos relacionados.
- Serviços: cinco entradas e suas páginas detalhadas; introdução, benefícios, bastidores, processo, FAQ e serviços relacionados.
- Fechamento: colagem de três imagens em movimento de rolagem, substituindo a repetição do banner fotográfico em todas as páginas.
- FAQ: todas as perguntas fechadas na primeira renderização, preservando expansão, recolhimento e estados acessíveis.
- Rodapé: título reduzido para até 48 px em desktop e 35 px no celular; navegação e contatos com textos de 15–16 px, colunas mais próximas e formulário que prepara uma mensagem no WhatsApp correto.

Total de **23 rotas de conteúdo**. Foram preservados o planejador, seus cálculos de construção, as rotas anteriores, o formulário principal e o contato pelo WhatsApp. Conteúdos de rentabilidade continuam removidos. Não houve alteração de banco, backend ou autenticação.

A pedido do usuário, os quatro estudos e os perfis de equipe incluem conteúdo fictício de apresentação. Eles são identificados como estudos/perfis demonstrativos. Contatos reais, imagem da marca e publicações da empresa permanecem separados desses dados; não foram inventadas garantias, credenciais ou depoimentos atribuídos a clientes reais.

## Fotografias

A imagem de interior da [publicação da FH Chalés](https://www.instagram.com/fhchales/p/DYPU48_SUMh/) foi recuperada no tamanho original de **1440×1440**, substituindo o thumbnail de 640×640. Caminho: [public/images/fh-interior-original.webp](../public/images/fh-interior-original.webp). O registro de fachada já possuía 1440×1440. As camadas escuras sobre as fotos foram reduzidas para recuperar a visibilidade sem inventar detalhes da construção. Originais preservados.

A imagem ilustrativa da equipe está em [public/images/fh-equipe-apresentacao.webp](../public/images/fh-equipe-apresentacao.webp), produzida com a ferramenta integrada `image_gen`, sem modo CLI. Os recortes CSS preservam as proporções dos retratos. Não são fotos de funcionários reais da FH Chalés.

Prompt utilizado:

> Create one photographic triptych asset for a fictional presentation team on a Brazilian premium wooden chalet construction company website. Three distinct equal-width portrait panels side by side, edge to edge. Left: Brazilian man about 42, short dark hair and neat beard, olive overshirt over cream shirt. Middle: Brazilian woman about 36, shoulder-length dark hair, cream blouse and warm tan jacket. Right: Brazilian man about 33 with curly short hair, slate work shirt. Friendly professional expressions, chest-up portraits, natural proportions and realistic skin, looking at camera. Same consistent natural daylight, warm timber architecture studio background softly defocused in every panel. Premium understated editorial photography, no hard hats, no uniforms, no credentials, no text, no logos, no watermark, no borders. Subjects fully separate and centered within their own third of the canvas; no limbs crossing panel boundaries. Landscape canvas aspect 3:2, arranged as three tall portrait crops. These are fictional people, not actual named persons.

## Verificações

- `npm run lint` (TypeScript) e `npm run build` aprovados.
- 46 casos de página: 23 rotas em desktop e celular; nenhum transbordamento horizontal, título ausente ou regressão de conteúdo financeiro.
- Aberturas presas verificadas em dez cenários; movimento dos blocos fotográficos e da colagem confirmado em desktop e celular.
- FAQ fechado no início; abertura e fechamento testados.
- Galeria de projeto, navegação de equipe, menu mobile, abas, carrossel, detalhes dos modelos e planejador testados.
- Formulários principal e rodapé validados com abertura do WhatsApp simulada. Nenhuma mensagem enviada.
- Auditoria axe nas páginas Sobre, FAQ, detalhes de projeto e serviço, Equipe e Contato: sem violações nos cenários amostrados.
- Rolagem completa da Home em desktop e celular: sem conteúdo permanentemente oculto ou transbordamento.
- Sem erros de JavaScript nos cenários registrados.

[Resultados da auditoria](visual/audit-refinement/validation.json) · [Regressões e movimentos](visual/validation.json).

[Sobre com abertura presa](visual/audit-refinement/about-pinned-1366.png) · [Equipe desktop](visual/audit-refinement/team-final-1366.png) · [Equipe mobile](visual/audit-refinement/team-final-390.png) · [Rodapé desktop](visual/audit-refinement/footer-1366.png) · [Detalhes de projeto](visual/audit-refinement/project-final-1366.png) · [FAQ mobile](visual/audit-refinement/faq-final-390.png).

Preview local: http://127.0.0.1:4183/ . Esta revisão não foi publicada na Vercel.

