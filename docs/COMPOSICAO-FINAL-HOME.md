# FH Chalés — correções finais da composição da Home

## Diagnóstico

O resumo de Sobre estava distribuído em duas grades: a primeira tinha título largo e imagem pequena (`1.7fr .7fr`); a segunda deixava uma coluna institucional quase vazia antes dos parágrafos. A margem de 70 px entre as grades ampliava a separação. O espaço não era causado pela Hero ou seu parallax.

O CTA anterior combinava três imagens posicionadas absolutamente com altura mínima de 850 px no desktop/780 px no celular. As imagens superiores tinham até 300 × 175 px e percorriam cerca de 23 vw; a terceira percorria 33 vw. Em monitores largos, deslocamento e dispersão eram grandes em relação às fotografias.

## Ajustes executados

### Sobre da Home

Título, os dois parágrafos, fotografia e link `/sobre` foram preservados. O pequeno rótulo institucional passou para cima do título. Todo o conteúdo escrito agora integra a coluna esquerda; a fotografia ocupa uma coluna direita maior, em composição assimétrica. A imagem chega a 680 × 544 px, mantendo proporção 1,25 no desktop. Parágrafos, título e CTA ficam próximos, com largura de leitura controlada.

Em tablet e celular a seção segue fluxo vertical: conteúdo institucional e link, depois fotografia. Não foi criado `min-height`, preenchimento artificial ou novo texto. As animações existentes de máscara, revelação e leitura por palavras foram reutilizadas sem alterar seus tempos.

### CTA final, somente na Home

A nova composição usa a mesma biblioteca Motion e as mesmas três fotografias. Uma grade reserva espaço próprio para cada imagem e para o texto, impedindo sobreposição sobre a headline ou botão. No desktop as duas fotos superiores ficam ao lado do conteúdo; a terceira fecha a composição logo abaixo. A maior foto inferior chega a 520 px de largura.

O movimento acompanha diretamente o progresso do scroll. As fotos superiores percorrem 10% da própria largura e a inferior, 12%, chegando às posições reservadas pela grade. Os pequenos deslocamentos verticais são 16/24 px. Não há pinning, spacer, nova biblioteca, atraso artificial ou altura mínima fixa.

O celular tem composição própria: duas fotos maiores no topo, conteúdo ao centro e terceira foto abaixo. O deslocamento horizontal superior cai para 4%; a imagem inferior se desloca apenas verticalmente, em 12 px. Com `prefers-reduced-motion`, as imagens permanecem estáticas no estado final.

A headline, o texto de apoio existente e o botão “Comece seu projeto” com destino `/contato` foram preservados. O componente original `CollageCTA` das páginas internas permanece sem alterações.

### Navegação

“Início” é o primeiro item de `NAV`, com destino `/`. Aparece no desktop e menu hambúrguer, inclusive no rodapé que reutiliza a mesma estrutura. Mantém os indicadores ativos existentes: somente a Home marca Início como página atual. O logotipo continua apontando para `/`.

As alturas existentes do header foram preservadas. Entre 1024 e 1200 px, foram ajustados somente os intervalos horizontais da navegação para acomodar o novo item. Abertura, fechamento, foco, Escape e dimensões compactas do menu mobile permanecem.

## Espaçamento medido

| Seção | Viewport | Antes | Depois |
|---|---|---:|---:|
| Sobre | 1920 × 1080 | 764 px | 720 px |
| Sobre | 1366 × 768 | 654 px | 581 px |
| Sobre | 390 × 844 | 847 px | 865 px |
| CTA | 1920 × 1080 | 850 px | 685 px |
| CTA | 1366 × 768 | 850 px | 640 px |
| CTA | 390 × 844 | 780 px | 694 px |

No celular, Sobre acomoda uma fotografia proporcionalmente maior e o conteúdo em fluxo contínuo. Sua pequena diferença de altura resulta do conteúdo, sem espaços verticais artificiais. Os ajustes são restritos às seções afetadas. As seções intermediárias e suas animações permanecem intactas.

## Preservações

Hashes SHA-256 confirmam que estes arquivos não foram alterados neste trabalho:

- `src/components/Hero.tsx`
- `src/components/MotionElements.tsx`
- `src/pages/ContentPage.tsx`
- `src/components/EditorialSections.tsx`

As fotografias, estilos e lógica das Heroes permanecem intactos. A Hero da Home foi comparada com as medidas anteriores nas dez resoluções, incluindo altura, tipografia, fotografia, enquadramento e pinning. As páginas internas mantêm o mesmo componente e a mesma composição de CTA. Não houve alteração nos cadastros `WORKS`, galerias, dois projetos recentes, contatos, formulários, regras de negócio ou roteador. No arquivo de dados a única mudança foi acrescentar o link Início em `NAV`.

## Validação

- `npm run lint`: aprovado; o script existente executa `tsc --noEmit`. Não há ESLint configurado.
- `npm run build`: aprovado. Apenas o aviso preexistente do Vite sobre `__dirname` no carregador nativo futuro.
- Navegador Chromium no build de produção, em http://127.0.0.1:4183/.
- Verificação nas dez resoluções: **2560 × 1440, 1920 × 1080, 1440 × 900, 1366 × 768, 1024 × 768, 768 × 1024, 430 × 932, 390 × 844, 375 × 812 e 360 × 740**.
- Amostragem de quatro estados da animação por viewport: progresso 15%, 45%, 70% e 85%. As imagens ficam dentro do viewport e não se sobrepõem ao bloco de texto/CTA. Distância das fotos superiores ao centro diminui durante o scroll.
- Ausência de overflow horizontal, imagens visíveis, comportamento estático com movimento reduzido, link Início e indicador ativo na Home, retorno de Sobre à Home, histórico voltar/avançar e scroll ao topo.
- Auditoria axe WCAG 2 A/AA e 2.1 AA da Home mobile; resultados completos em `visual/home-composition/validation.json`.
- Capturas anteriores e posteriores das duas seções em 1920, 1366 e 390 px. Nas capturas de seção, movimento reduzido está ativo desde o carregamento e o header é ocultado apenas pela ferramenta de captura para não encobrir o conteúdo; a aplicação não é alterada por esse recurso.

## Arquivos modificados

Implementação: `src/components/AboutSection.tsx`, `src/components/HomeCollageCTA.tsx` (novo), `src/App.tsx`, `src/data/siteData.ts` (somente NAV), `src/refinement.css`.

Validação/documentação: `docs/qa/home-composition-capture.cjs`, `docs/qa/home-composition.cjs`, este relatório e evidências em `docs/visual/home-composition/`.

## Capturas antes/depois

| Seção | Antes | Depois |
|---|---|---|
| Sobre desktop | [Antes](visual/home-composition/before-about-1920.png) | [Depois](visual/home-composition/after-about-1920.png) |
| Sobre mobile | [Antes](visual/home-composition/before-about-390.png) | [Depois](visual/home-composition/after-about-390.png) |
| CTA desktop | [Antes](visual/home-composition/before-cta-1920.png) | [Depois](visual/home-composition/after-cta-1920.png) |
| CTA mobile | [Antes](visual/home-composition/before-cta-390.png) | [Depois](visual/home-composition/after-cta-390.png) |

Alterações locais; publicação não executada.
