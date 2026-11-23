# Clarysse Makes

Catálogo digital estático feito em HTML, CSS e JavaScript, sem dependências de build. Abra `index.html` no navegador ou sirva a pasta por qualquer servidor estático. Cada produto pode ser pedido individualmente ou adicionado ao carrinho; o carrinho envia todos os itens e quantidades numa única mensagem de WhatsApp.

## Atualizar o catálogo

Os itens estão no array `products` de `app.js`. Para cadastrar um produto, adicione uma entrada com:

- `name`: nome exibido no catálogo e enviado na mensagem do WhatsApp;
- `detail`: marca, tamanho ou variação;
- `image`: arquivo dentro de `assets/instagram/`;
- `stock`: `available`, `unavailable` ou `check`.

As imagens locais foram coletadas de publicações públicas recentes do Instagram oficial. O perfil só exibe uma grade limitada sem login; os 12 produtos iniciais são os que foi possível identificar nas publicações públicas acessíveis. O catálogo não mostra preços, e a disponibilidade deve ser confirmada pelo WhatsApp.
