# CTA unificado entre Home e páginas internas

A composição aprovada da Home foi aplicada a todos os CTAs finais existentes nas páginas internas. `ClosingCTA` agora reutiliza diretamente `HomeCollageCTA`: mesmas fotografias, tamanhos, posição, movimento coordenado pela rolagem, adaptação mobile e estado estático para movimento reduzido.

Páginas de Sobre, Processo, Projetos, Serviços, FAQ, Equipe, oito detalhes de projetos, cinco detalhes de serviços e três perfis reutilizam o componente. Com a Home, são 23 páginas com a composição. Contato e Planejador não receberam seções novas, pois não possuíam esse CTA.

Alterações de implementação: `src/pages/ContentPage.tsx` (importação e reutilização) e comentário descritivo em `src/components/HomeCollageCTA.tsx`. Não houve alteração nas Heroes, fotografias, conteúdo, dados ou rotas. Hashes confirmam `Hero.tsx` e `MotionElements.tsx` intactos.

Validação: `npm run lint` (TypeScript) e `npm run build` aprovados. ESLint não está configurado. O navegador comparou posição relativa e dimensões das três fotos, texto e seção em todas as 23 páginas, nos viewports 1366 × 768 e 390 × 844: composição idêntica à Home, sem overflow e com CTA apontando para `/contato`.

A animação de convergência foi testada em 2560 × 1440, 1920 × 1080, 1440 × 900, 1366 × 768, 1024 × 768, 768 × 1024, 430 × 932, 390 × 844, 375 × 812 e 360 × 740. As fotos se aproximam do centro sem sair do viewport; zero erros JavaScript.

Evidências: `docs/visual/shared-cta/validation.json`, capturas de Sobre, Cabanas e Chalé 40 m² em desktop e mobile. Script: `docs/qa/shared-cta.cjs`.

Alterações locais; publicação não executada.
