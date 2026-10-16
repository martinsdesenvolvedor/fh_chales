# FH Chalés — margens, navegação ativa, colagem e novos registros

Revisão de 16/10/2026. Alterações locais, sem publicação.

## Ajustes visuais e navegação

As seções com `fh-section fh-shell` diretamente no conteúdo principal tinham a própria área branca limitada pelo container. A abertura presa ficava visível dos lados e o conteúdo começava junto à borda branca. Agora essas seções têm fundo opaco de largura total e espaçamento interno responsivo: 120 px no desktop de 1920 px, 60 px em 1366 px, 35 px nos breakpoints intermediários e 20 px no celular.

O menu indica a página atual em dourado, com sublinhado nos links principais. As páginas de detalhe mantêm a seção correspondente marcada: `/servicos/cabanas` marca Serviços; `/projetos/chale-madeira-40m2` marca Projetos. O grupo Mais páginas e seus itens também recebem indicação. `aria-current=page` identifica a página exata e `aria-current=location` a seção principal dos detalhes. Menu mobile incluído.

Na colagem final, as duas imagens superiores avançam das laterais para uma composição próxima ao centro, em trajetórias opostas. A imagem inferior se aproxima do eixo central numa etapa posterior da rolagem. As faixas de movimento foram separadas para que o deslocamento aconteça enquanto cada foto está visível. O texto e o CTA permanecem livres. Com movimento reduzido, as fotos já aparecem na composição final.

## Novas publicações no portfólio

Foram examinadas quatro publicações adicionais. A mensagem de Dia do Trabalhador e o vídeo de bastidores da sede não foram tratados como novos projetos. Dois registros de chalés foram selecionados:

- [Chalé de madeira de 40 m²](https://www.instagram.com/fhchales/reel/DToG8dPie69/): a legenda da própria empresa informa 40 m², banheiro em alvenaria, dois quartos superiores, sacada e escada modelo Santos Dumont. Página: `/projetos/chale-madeira-40m2`. Galeria com fachada, piso superior e banheiro. Quadros extraídos da publicação em resolução disponível de 720×1280, sem reconstrução de detalhes.
- [Chalé entregue a cliente](https://www.instagram.com/fhchales/reel/DXXELL8yS61/): selecionado um quadro do ambiente interno e a capa da publicação. Página: `/projetos/chale-entregue`. O vídeo público disponibilizou esse quadro em 360×640; não foi apresentado como fotografia de maior resolução. Não foram acrescentadas projeções de investimento ou locação.

Os arquivos finais estão em `public/images/fh-chale-40m2-fachada.webp`, `fh-chale-40m2-superior.webp`, `fh-chale-40m2-banheiro.webp`, `fh-chale-entregue-interior.webp` e `fh-instagram-DXXELL8yS61.jpg`. Os quadros de pesquisa foram arquivados fora do build em `docs/visual/instagram-source`.

O portfólio passou a ter oito entradas: quatro registros publicados pela empresa e quatro estudos demonstrativos. Isso não representa uma afirmação de oito obras distintas verificadas. As duas rotas novas ampliam o conjunto para 25 rotas. Os nomes anteriores e demais funcionalidades foram preservados.

## Verificação

- Tipos (`npm run lint`) e build aprovados.
- Menu ativo, margens e aproximação das três fotos verificados em 1920×1080, 1366×768 e 390×844.
- Teste de aproximação mediu redução da distância horizontal de cada imagem ao centro, em diferentes posições de rolagem.
- As duas páginas novas carregam imagens e links de origem; as oito entradas estão presentes no portfólio.
- Menu mobile, histórico, planejador, detalhes dos modelos, formulário principal e movimentos da Home aprovados nos testes de regressão. Abertura do WhatsApp foi simulada, sem enviar mensagens.
- Axe em Serviços/Cabanas, nas duas páginas novas e no FAQ: sem violações nos cenários testados.
- Sem erro de JavaScript ou transbordamento horizontal nos cenários verificados.

[Resultados](visual/navigation-spacing/validation.json) · [Acessibilidade](visual/navigation-spacing/accessibility.json) · [Serviços desktop](visual/navigation-spacing/service-spacing-1920.png) · [Colagem desktop](visual/navigation-spacing/collage-1920.png) · [Colagem mobile](visual/navigation-spacing/collage-390.png) · [Novo chalé mobile](visual/navigation-spacing/chale-madeira-40m2-390.png).

Preview: http://127.0.0.1:4183/ .
