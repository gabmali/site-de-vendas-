// Produtos identificados nas publicações públicas recentes de @clarysse.makes.
// Atualize stock e o nome do produto quando a loja confirmar os dados.
const products = [
  { name: "Esfoliante facial Vitamina C", detail: "Derma Chem · 100 g", image: "0271d032cd8c1436.jpg", stock: "check" },
  { name: "Loção perfumada Victoria’s Secret", detail: "Fragrâncias variadas · 236 ml", image: "1d684769e2c3708d.jpg", stock: "check" },
  { name: "Mousse facial Manga & Água de Coco", detail: "Pudim Super Poderes · 150 ml", image: "22aa44565b6ac927.jpg", stock: "check" },
  { name: "Bronzer compacto Choco Fun", detail: "Fenzza · acabamento bronze", image: "25288545ae87c896.jpg", stock: "check" },
  { name: "Presilhas de cabelo flor", detail: "Acessório de beleza · cores variadas", image: "4324abe2eb9ba18f.jpg", stock: "check" },
  { name: "Pó Banana", detail: "Fenzza Make Up", image: "452e129b1e32e16a.jpg", stock: "check" },
  { name: "Esfoliante facial Ácido Salicílico", detail: "Derma Chem · pele oleosa e acneica", image: "5ce38450d3b52779.jpg", stock: "check" },
  { name: "Gloss labial Teddy", detail: "Melu · 3 ml", image: "85d38dfc82278184.jpg", stock: "check" },
  { name: "Água micelar Max Love", detail: "Rosa Mosqueta, Antioxidante ou Carvão", image: "c03005882eb6e830.jpg", stock: "check" },
  { name: "Gloss labial SOS Beijo", detail: "Viva! · volume labial", image: "dccf3be0886ebff0.jpg", stock: "check" },
  { name: "Sérum facial Vitamina C", detail: "Max Love Studio · 30 ml", image: "eb59afe2e0fcc6d9.jpg", stock: "check" },
  { name: "Esfoliante labial We Candy", detail: "Lip scrub · aromas variados", image: "f9afb6f455f979c0.jpg", stock: "check" },
];

const grid = document.querySelector("#product-grid");
const search = document.querySelector("#product-search");
const emptyState = document.querySelector("#empty-state");
const count = document.querySelector("#product-count");
const cartToggle = document.querySelector("#cart-toggle");
const cartBackdrop = document.querySelector("#cart-backdrop");
const cartItems = document.querySelector("#cart-items");
const cartCount = document.querySelector("#cart-count");
const cartItemCount = document.querySelector("#cart-item-count");
const cartEmpty = document.querySelector("#cart-empty");
const cartCheckout = document.querySelector("#cart-checkout");
const phone = "5511952733132";
const cart = new Map();

function productCard(product) {
  const productId = products.indexOf(product);
  const message = `Olá! Tenho interesse no produto ${product.name}. Gostaria de mais informações.`;
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  const badge = product.stock === "available"
    ? '<span class="stock-badge available"><i></i> Disponível</span>'
    : product.stock === "unavailable"
      ? '<span class="stock-badge unavailable"><i></i> Indisponível</span>'
      : '<span class="stock-badge check-stock"><i></i> Consulte disponibilidade</span>';

  return `<article class="product-card">
    <div class="product-image-wrap">
      <img src="assets/instagram/${product.image}" alt="${product.name}" loading="lazy" />
      <span class="photo-heart" aria-hidden="true">♡</span>
    </div>
    <div class="product-info">
      <div class="product-status">${badge}</div>
      <h3>${product.name}</h3>
      <p class="product-detail">${product.detail}</p>
      <div class="product-purchase">
        <button class="add-to-cart" type="button" data-add-to-cart="${productId}" ${product.stock === "unavailable" ? "disabled" : ""}>Adicionar ao carrinho <span aria-hidden="true">＋</span></button>
        <a class="product-cta" href="${href}" target="_blank" rel="noreferrer">Quero esse produto <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </article>`;
}

function normalizeText(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR");
}

function renderProducts(query = "") {
  const normalized = normalizeText(query.trim());
  const visible = products.filter((product) => normalizeText(`${product.name} ${product.detail}`).includes(normalized));
  grid.innerHTML = visible.map(productCard).join("");
  count.textContent = visible.length;
  emptyState.hidden = visible.length !== 0;
}

function renderCart() {
  const entries = [...cart.entries()];
  const totalUnits = entries.reduce((total, [, quantity]) => total + quantity, 0);
  const distinctProducts = entries.length;

  cartCount.textContent = totalUnits;
  cartToggle.setAttribute("aria-label", `Abrir carrinho com ${totalUnits} ${totalUnits === 1 ? "item" : "itens"}`);
  cartItemCount.textContent = totalUnits
    ? `${totalUnits} ${totalUnits === 1 ? "item" : "itens"} · ${distinctProducts} ${distinctProducts === 1 ? "produto" : "produtos"}`
    : "Seu carrinho está vazio";
  cartItems.hidden = distinctProducts === 0;
  cartEmpty.hidden = distinctProducts > 0;
  cartCheckout.hidden = distinctProducts === 0;

  cartItems.innerHTML = entries.map(([id, quantity]) => {
    const product = products[Number(id)];
    return `<article class="cart-item">
      <img src="assets/instagram/${product.image}" alt="" />
      <div class="cart-item-info">
        <h3>${product.name}</h3>
        <p>${product.detail}</p>
        <div class="quantity-control" aria-label="Quantidade de ${product.name}">
          <button type="button" data-cart-action="decrease" data-product-id="${id}" aria-label="Diminuir ${product.name}">−</button>
          <span>${quantity}</span>
          <button type="button" data-cart-action="increase" data-product-id="${id}" aria-label="Aumentar ${product.name}">+</button>
        </div>
      </div>
      <button class="remove-cart-item" type="button" data-cart-action="remove" data-product-id="${id}" aria-label="Remover ${product.name} do carrinho">×</button>
    </article>`;
  }).join("");

  if (distinctProducts) {
    const orderLines = entries.map(([id, quantity]) => `• ${quantity}x ${products[Number(id)].name}`).join("\n");
    const message = `Olá! Gostaria de fazer este pedido:\n\n${orderLines}\n\nPode confirmar os valores e a disponibilidade, por favor?`;
    cartCheckout.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  } else {
    cartCheckout.href = `https://wa.me/${phone}`;
  }
}

function openCart() {
  cartBackdrop.hidden = false;
  document.body.classList.add("cart-open");
  cartToggle.setAttribute("aria-expanded", "true");
  document.querySelector("#cart-close").focus();
}

function closeCart() {
  cartBackdrop.hidden = true;
  document.body.classList.remove("cart-open");
  cartToggle.setAttribute("aria-expanded", "false");
  cartToggle.focus();
}

search.addEventListener("input", (event) => renderProducts(event.target.value));
grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add-to-cart]");
  if (!button || button.disabled) return;
  const id = button.dataset.addToCart;
  cart.set(id, (cart.get(id) || 0) + 1);
  renderCart();
  button.innerHTML = 'Adicionado <span aria-hidden="true">✓</span>';
  button.classList.add("is-added");
  window.setTimeout(() => {
    if (!button.isConnected) return;
    button.innerHTML = 'Adicionar ao carrinho <span aria-hidden="true">＋</span>';
    button.classList.remove("is-added");
  }, 1100);
});

cartToggle.addEventListener("click", openCart);
document.querySelector("#cart-close").addEventListener("click", closeCart);
document.querySelector("#cart-continue").addEventListener("click", closeCart);
cartBackdrop.addEventListener("click", (event) => {
  if (event.target === cartBackdrop) closeCart();
});
cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-cart-action]");
  if (!button) return;
  const { cartAction, productId } = button.dataset;
  const quantity = cart.get(productId) || 0;

  if (cartAction === "remove" || (cartAction === "decrease" && quantity <= 1)) cart.delete(productId);
  else if (cartAction === "decrease") cart.set(productId, quantity - 1);
  else if (cartAction === "increase") cart.set(productId, quantity + 1);
  renderCart();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !cartBackdrop.hidden) {
    closeCart();
    return;
  }
  if (event.key === "Tab" && !cartBackdrop.hidden) {
    const focusable = [...cartBackdrop.querySelectorAll('button:not(:disabled), a[href]:not([hidden])')]
      .filter((element) => element.getClientRects().length > 0);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!first) {
      event.preventDefault();
      cartBackdrop.querySelector("#cart-drawer").focus();
    } else if (event.shiftKey && (document.activeElement === first || !cartBackdrop.contains(document.activeElement))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (document.activeElement === last || !cartBackdrop.contains(document.activeElement))) {
      event.preventDefault();
      first.focus();
    }
    return;
  }
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    search.focus();
  }
});
document.querySelector("#year").textContent = new Date().getFullYear();
renderProducts();
renderCart();
