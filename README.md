# Clarysse Makes

Loja virtual estática em HTML, CSS e JavaScript, publicada pelo Cloudflare Pages com integração ao GitHub. Cada atualização enviada à branch `main` dispara uma nova publicação. A URL pública é `https://clarysse-makes-loja.pages.dev/`.

## Catálogo e imagens

- Os dados dos produtos ficam no array `products` de `app.js`.
- `id` é o identificador estável usado pelo carrinho; não o altere em produtos já publicados.
- `name`, `detail`, `category` e `stock` definem o texto, a categoria e a disponibilidade.
- `priceCents` armazena o valor em centavos (ex.: R$ 12,00 = `1200`). Use `null` somente enquanto o valor estiver pendente.
- `image` é o nome de um arquivo dentro de `assets/instagram/`; use `null` até haver uma foto confirmada.
- As categorias aceitas são `makeup`, `skincare`, `fragrance`, `accessories` e `kits`.
- Confira `IMAGE_INVENTORY.md` antes de associar ou adicionar uma foto. Não apague, substitua ou renomeie fotos antigas sem confirmar.

O catálogo contém os 26 produtos e preços informados, além da Água Micelar – Max Love por R$ 10,00. O Lip Gloss SOS Beijo e o Mousse Facial Manga Rosa (extrato de manga rosa e água de coco) foram vinculados aos produtos correspondentes. A foto original com quatro loções foi mantida intacta; quatro recortes derivados dela ilustram Strawberries & Champagne, Love Spell, Amber Romance e Bare Vanilla. Pure Seduction não aparece na foto recebida e continua com espaço reservado. As demais fotos ausentes também usam espaços reservados.

## Carrinho e pedidos

- O carrinho salva produtos e quantidades no `localStorage` do navegador.
- Preços e subtotais são calculados em centavos e exibidos em formato brasileiro.
- A finalização monta uma mensagem com itens, quantidades, subtotais, total e recebimento, e abre o WhatsApp `+55 11 95273-3132`.
- Para entrega por motoboy, a cliente informa o endereço; frete e disponibilidade são confirmados pelo WhatsApp.
- Retirada em estação ocorre aos sábados e precisa ser combinada. Retirada no local também tem endereço e horário combinados pelo WhatsApp.
- Não há pagamento automático, cadastro de clientes ou backend.

## Desenvolvimento local

Abra `index.html` em um navegador ou use qualquer servidor estático. Não há etapa de build nem dependências de pacote. O projeto mantém o `index.html` na raiz.

## Histórico e proteção

A versão anterior à ampliação está protegida pela branch local `backup/pre-evolucao-2026-11-24`. As fotografias-base e seus hashes estão documentados em `IMAGE_INVENTORY.md`.
