// Catálogo Clarysse Makes. Imagens existentes e seus vínculos estão registrados em IMAGE_INVENTORY.md.
// Valores armazenados em centavos para evitar erros de arredondamento.
const products = [
  { id: "lip-gloss", name: "Lip Gloss", detail: "Viva! · SOS Beijo · volume labial", category: "makeup", priceCents: 1200, image: "dccf3be0886ebff0.jpg", stock: "check" },
  { id: "lip-gloss-teddy", name: "Lip Gloss Teddy", detail: "Melu · 3 ml", category: "makeup", priceCents: 1200, image: "85d38dfc82278184.jpg", stock: "check" },
  { id: "esfoliante-vitamina-c", name: "Esfoliante Vitamina C", detail: "Derma Chem · 100 g", category: "skincare", priceCents: 1000, image: "0271d032cd8c1436.jpg", stock: "check" },
  { id: "perfume-capilar", name: "Perfume Capilar", detail: "Shine's Transcendent Pink e Bellinés Ray Flower · 30 ml cada", category: "fragrance", priceCents: 1000, image: "perfume-capilar-pink.jpg", gallery: ["perfume-capilar-pink.jpg", "perfume-capilar-ray.jpg"], stock: "check" },
  { id: "serum-abacate-pitaya", name: "Sérum Abacate e Pitaya", detail: "Mia Make · Skin Fruit · 30 ml", category: "skincare", priceCents: 1000, image: "serum-abacate-pitaya.jpg", imageFit: "contain", stock: "check" },
  { id: "serum-rosa-mosqueta-max-love", name: "Sérum Rosa Mosqueta – Max Love", detail: "Max Love Studio · 30 ml", category: "skincare", priceCents: 1000, image: "serum-rosa-mosqueta-max-love.jpg", imageFit: "contain", stock: "check" },
  { id: "serum-vitamina-c-max-love", name: "Sérum Vitamina C – Max Love", detail: "Max Love Studio · 30 ml", category: "skincare", priceCents: 1000, image: "eb59afe2e0fcc6d9.jpg", stock: "check" },
  { id: "presilhas-flor", name: "Presilhas Flor", detail: "Acessório de beleza · cores variadas", category: "accessories", priceCents: 700, image: "4324abe2eb9ba18f.jpg", stock: "check" },
  { id: "po-banana-fenzza", name: "Pó de Banana – Fenzza", detail: "Fenzza Make Up", category: "makeup", priceCents: 1000, image: "452e129b1e32e16a.jpg", stock: "check" },
  { id: "gloss-lip-oil", name: "Gloss Lip Oil", detail: "", category: "makeup", priceCents: 1000, image: null, stock: "check" },
  { id: "hidratante-vaquinha", name: "Hidratante Vaquinha", detail: "Bell Corpus · 250 ml", category: "skincare", priceCents: 1000, image: "hidratante-vaquinha.jpg", imageFit: "contain", stock: "check" },
  { id: "esfoliante-corporal", name: "Esfoliante Corporal", detail: "S.Hine's · Sunset Coral · 220 g", category: "skincare", priceCents: 1000, image: "esfoliante-corporal-sunset-coral.jpg", imageFit: "contain", stock: "check" },
  { id: "body-splash-vaquinha", name: "Body Splash Vaquinha", detail: "Bell Corpus · 200 ml", category: "fragrance", priceCents: 1000, image: "body-splash-vaquinha.jpg", imageFit: "contain", stock: "check" },
  { id: "mousse-facial-manga-rosa", name: "Mousse Facial Manga Rosa", detail: "Pudim Super Poderes · extrato de manga rosa e água de coco · 150 ml", category: "skincare", priceCents: 1400, image: "22aa44565b6ac927.jpg", stock: "check" },
  { id: "lamina", name: "Lâmina", detail: "Aparelho para sobrancelhas · kit com 3", category: "accessories", priceCents: 1000, image: "lamina-sobrancelha.jpg", stock: "check" },
  { id: "bronzer-choco-fun", name: "Bronzer Choco Fun", detail: "Fenzza · acabamento bronze", category: "makeup", priceCents: 1000, image: "25288545ae87c896.jpg", stock: "check" },
  { id: "esfoliante-labial", name: "Esfoliante Labial", detail: "We Candy · lip scrub", category: "skincare", priceCents: 700, image: "f9afb6f455f979c0.jpg", stock: "check" },
  { id: "bruma-fixadora", name: "Bruma Fixadora", detail: "Lady Beauty · Skin Pro Matte · 130 ml", category: "makeup", priceCents: 1000, image: "bruma-fixadora.jpg", stock: "check" },
  { id: "esfoliante-acido-salicilico", name: "Esfoliante Ácido Salicílico", detail: "Derma Chem · pele oleosa e acneica", category: "skincare", priceCents: 1000, image: "5ce38450d3b52779.jpg", stock: "check" },
  { id: "esfoliante-body-juice-cereja", name: "Esfoliante Body Juice – Cereja", detail: "Derma Chem · 100 g", category: "skincare", priceCents: 1500, image: "esfoliante-body-juice-cereja.jpg", imageFit: "contain", stock: "check" },
  { id: "pure-seduction", name: "Inspiração Victoria's Secret – Pure Seduction", detail: "Loção perfumada · Pure Seduction · 236 ml", category: "fragrance", priceCents: 3000, image: "vs-pure-seduction.jpg", imageFit: "contain", stock: "check" },
  { id: "amber-romance", name: "Inspiração Victoria's Secret – Amber Romance", detail: "Loção perfumada · Amber Romance · 236 ml", category: "fragrance", priceCents: 3000, image: "vs-amber-romance.jpg", imageFit: "contain", stock: "check" },
  { id: "bare-vanilla", name: "Inspiração Victoria's Secret – Bare Vanilla", detail: "Loção perfumada · Bare Vanilla · 236 ml", category: "fragrance", priceCents: 3000, image: "vs-bare-vanilla.jpg", imageFit: "contain", stock: "check" },
  { id: "love-spell", name: "Inspiração Victoria's Secret – Love Spell", detail: "Loção perfumada · Love Spell · 236 ml", category: "fragrance", priceCents: 3000, image: "vs-love-spell.jpg", imageFit: "contain", stock: "check" },
  { id: "strawberry-champagne", name: "Inspiração Victoria's Secret – Strawberry e Champagne", detail: "Strawberries & Champagne · loção perfumada · 236 ml", category: "fragrance", priceCents: 3000, image: "vs-strawberries-champagne.jpg", imageFit: "contain", stock: "check" },
  { id: "kit-doce-de-leite-vaquinha", name: "Kit Doce de Leite – Vaquinha", detail: "Sabonete, esfoliante e hidratante corporal", category: "kits", priceCents: 3600, image: "kit-doce-de-leite.jpg", imageFit: "contain", stock: "check" },

  // Item da versão anterior mantido como produto adicional, com valor confirmado.
  { id: "agua-micelar-max-love", name: "Água Micelar – Max Love", detail: "Rosa Mosqueta, Antioxidante ou Carvão", category: "skincare", priceCents: 1000, image: "c03005882eb6e830.jpg", stock: "check" },
];

const phone = "5511952733132";
const storageKey = "clarysse-makes-cart-v2";
const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const categoryNames = {
  makeup: "Maquiagem",
  skincare: "Skincare e cuidados com a pele",
  fragrance: "Perfumes e fragrâncias",
  accessories: "Acessórios",
  kits: "Kits",
};

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
const cartSummary = document.querySelector("#cart-summary");
const checkoutOptions = document.querySelector("#checkout-options");
const cartCheckout = document.querySelector("#cart-checkout");
const fulfillment = document.querySelector("#fulfillment");
const fulfillmentHint = document.querySelector("#fulfillment-hint");
const addressWrap = document.querySelector("#address-wrap");
const deliveryAddress = document.querySelector("#delivery-address");
const stationWrap = document.querySelector("#station-wrap");
const stationDetails = document.querySelector("#station-details");
const checkoutValidation = document.querySelector("#checkout-validation");
const toast = document.querySelector("#cart-toast");
const cart = loadCart();
let activeCategory = "all";
let toastTimer;

function formatPrice(priceCents) {
  return Number.isInteger(priceCents) ? currency.format(priceCents / 100) : "Preço a confirmar";
}

function imageMarkup(product, className = "") {
  if (product.image) {
    const imageFit = product.imageFit === "contain" ? " product-image-contain" : "";
    return `<img class="${className}${imageFit}" src="assets/instagram/${product.image}" alt="${product.name}" loading="lazy" />`;
  }
  return `<div class="product-image-placeholder ${className}" role="img" aria-label="Foto de ${product.name} em breve"><span aria-hidden="true">♡</span><small>Foto em breve</small></div>`;
}

function productCard(product) {
  const message = `Olá! Tenho interesse no produto ${product.name}. Gostaria de mais informações.`;
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  const badge = product.stock === "available"
    ? '<span class="stock-badge available"><i></i> Disponível</span>'
    : product.stock === "unavailable"
      ? '<span class="stock-badge unavailable"><i></i> Indisponível</span>'
      : '<span class="stock-badge check-stock"><i></i> Consulte disponibilidade</span>';

  return `<article class="product-card" id="product-${product.id}" data-product-id="${product.id}">
    <div class="product-image-wrap">
      ${imageMarkup(product)}
      <span class="photo-heart" aria-hidden="true">♡</span>
    </div>
    <div class="product-info">
      <div class="product-status">${badge}<span class="category-tag">${categoryNames[product.category]}</span></div>
      <h3>${product.name}</h3>
      <p class="product-price">${formatPrice(product.priceCents)}</p>
      ${product.detail ? `<p class="product-detail">${product.detail}</p>` : '<p class="product-detail product-detail-empty" aria-hidden="true"></p>'}
      <div class="product-purchase">
        <button class="add-to-cart" type="button" data-add-to-cart="${product.id}" ${product.stock === "unavailable" ? "disabled" : ""}>Adicionar ao carrinho <span aria-hidden="true">＋</span></button>
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
  const visible = products.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = normalizeText(`${product.name} ${product.detail}`).includes(normalized);
    return matchesCategory && matchesSearch;
  });
  grid.innerHTML = visible.map(productCard).join("");
  count.textContent = visible.length;
  emptyState.hidden = visible.length !== 0;
}

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    const savedItems = saved.items && typeof saved.items === "object" ? saved.items : {};
    const knownIds = new Set(products.map((product) => product.id));
    return new Map(Object.entries(savedItems)
      .filter(([id, quantity]) => knownIds.has(id) && Number.isInteger(quantity) && quantity > 0)
      .map(([id, quantity]) => [id, Math.min(quantity, 99)]));
  } catch {
    return new Map();
  }
}

function saveCart() {
  try {
    localStorage.setItem(storageKey, JSON.stringify({ items: Object.fromEntries(cart) }));
  } catch {
    // O carrinho segue funcional nesta sessão caso o navegador bloqueie o armazenamento local.
  }
}

function deliveryMessage() {
  if (fulfillment.value === "motoboy") {
    return `Forma de recebimento: Entrega por motoboy.\nEndereço: ${deliveryAddress.value.trim()}\nRegião atendida: Barueri, Carapicuíba, Osasco ou Jandira (a confirmar).\nFrete: valor e disponibilidade a combinar pelo WhatsApp.`;
  }
  if (fulfillment.value === "station") {
    const location = stationDetails.value.trim() || "Estação ou ponto a combinar";
    return `Forma de recebimento: Retirada em estação aos sábados.\nEstação/ponto: ${location}.\nHorário e disponibilidade a confirmar pelo WhatsApp.`;
  }
  if (fulfillment.value === "local") {
    return "Forma de recebimento: Retirada no local.\nEndereço e horário a combinar pelo WhatsApp.";
  }
  return "Forma de recebimento: A combinar pelo WhatsApp.";
}

function orderMessage() {
  const entries = [...cart.entries()];
  const lines = entries.map(([id, quantity]) => {
    const product = products.find((item) => item.id === id);
    const unit = formatPrice(product.priceCents);
    const subtotal = Number.isInteger(product.priceCents) ? currency.format((product.priceCents * quantity) / 100) : "a confirmar";
    return `• ${product.name}\n  Quantidade: ${quantity}\n  Preço unitário: ${unit}\n  Subtotal: ${subtotal}`;
  });
  const knownTotal = entries.reduce((total, [id, quantity]) => {
    const price = products.find((item) => item.id === id).priceCents;
    return total + (Number.isInteger(price) ? price * quantity : 0);
  }, 0);
  const hasUnknownPrice = entries.some(([id]) => !Number.isInteger(products.find((item) => item.id === id).priceCents));
  const totalLine = hasUnknownPrice
    ? `Subtotal dos itens com preço informado: ${currency.format(knownTotal / 100)}. Há produto(s) com preço a confirmar.`
    : `Total dos produtos: ${currency.format(knownTotal / 100)}.`;
  return `Olá! Gostaria de fazer um pedido na Clarysse Makes.\n\n${lines.join("\n\n")}\n\n${totalLine}\n\n${deliveryMessage()}\n\nPor favor, confirme a disponibilidade. Não realizei pagamento pelo site.`;
}

function updateFulfillment() {
  const hasItems = cart.size > 0;
  checkoutOptions.hidden = !hasItems;
  addressWrap.hidden = fulfillment.value !== "motoboy" || !hasItems;
  stationWrap.hidden = fulfillment.value !== "station" || !hasItems;
  deliveryAddress.required = fulfillment.value === "motoboy" && hasItems;
  fulfillmentHint.textContent = {
    "": "Selecione uma forma de recebimento para continuar.",
    motoboy: "Informe o endereço. O valor e a disponibilidade do motoboy serão confirmados pelo WhatsApp.",
    station: "Retiradas em estações são aos sábados e dependem de combinação prévia pelo WhatsApp.",
    local: "Endereço e horário serão combinados pelo WhatsApp.",
  }[fulfillment.value];
  checkoutValidation.textContent = "";
  updateCheckoutLink();
}

function updateCheckoutLink() {
  cartCheckout.href = `https://wa.me/${phone}?text=${encodeURIComponent(orderMessage())}`;
}

function renderCart() {
  const entries = [...cart.entries()];
  const totalUnits = entries.reduce((total, [, quantity]) => total + quantity, 0);
  const distinctProducts = entries.length;
  const knownTotal = entries.reduce((total, [id, quantity]) => {
    const product = products.find((item) => item.id === id);
    return total + (Number.isInteger(product.priceCents) ? product.priceCents * quantity : 0);
  }, 0);
  const hasUnknownPrice = entries.some(([id]) => !Number.isInteger(products.find((item) => item.id === id).priceCents));

  cartCount.textContent = totalUnits;
  cartToggle.setAttribute("aria-label", `Abrir carrinho com ${totalUnits} ${totalUnits === 1 ? "item" : "itens"}`);
  cartItemCount.textContent = totalUnits
    ? `${totalUnits} ${totalUnits === 1 ? "item" : "itens"} · ${distinctProducts} ${distinctProducts === 1 ? "produto" : "produtos"}`
    : "Seu carrinho está vazio";
  cartItems.hidden = distinctProducts === 0;
  cartEmpty.hidden = distinctProducts > 0;
  cartSummary.hidden = distinctProducts === 0;
  cartCheckout.hidden = distinctProducts === 0;
  checkoutOptions.hidden = distinctProducts === 0;

  cartItems.innerHTML = entries.map(([id, quantity]) => {
    const product = products.find((item) => item.id === id);
    const subtotal = Number.isInteger(product.priceCents) ? currency.format(product.priceCents * quantity / 100) : "A confirmar";
    return `<article class="cart-item">
      ${product.image ? `<img src="assets/instagram/${product.image}" alt="" />` : '<div class="cart-item-placeholder" aria-hidden="true">♡</div>'}
      <div class="cart-item-info">
        <h3>${product.name}</h3>
        <p>${formatPrice(product.priceCents)} cada</p>
        <p class="cart-item-subtotal">Subtotal: ${subtotal}</p>
        <div class="quantity-control" aria-label="Quantidade de ${product.name}">
          <button type="button" data-cart-action="decrease" data-product-id="${id}" aria-label="Diminuir ${product.name}">−</button>
          <span>${quantity}</span>
          <button type="button" data-cart-action="increase" data-product-id="${id}" aria-label="Aumentar ${product.name}" ${quantity >= 99 ? "disabled" : ""}>+</button>
        </div>
      </div>
      <button class="remove-cart-item" type="button" data-cart-action="remove" data-product-id="${id}" aria-label="Remover ${product.name} do carrinho">Remover</button>
    </article>`;
  }).join("");

  if (hasUnknownPrice) {
    cartSummary.innerHTML = `<div class="cart-total-line"><span>Subtotal dos itens com preço informado</span><strong>${currency.format(knownTotal / 100)}</strong></div><p>Há item(ns) com preço a confirmar; o total final será confirmado pelo WhatsApp.</p>`;
  } else {
    cartSummary.innerHTML = `<div class="cart-total-line"><span>Total dos produtos</span><strong>${currency.format(knownTotal / 100)}</strong></div><p>Frete, se necessário, é combinado à parte.</p>`;
  }
  saveCart();
  updateFulfillment();
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

function showToast() {
  toast.hidden = false;
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => { toast.hidden = true; }, 4200);
}

function renderShowcase() {
  const featured = products.filter((product) => product.image && product.stock !== "unavailable");
  const track = document.querySelector("#showcase-track");
  const viewport = document.querySelector("#showcase-viewport");
  const status = document.querySelector("#showcase-status");
  track.innerHTML = featured.map((product) => `<a class="showcase-card" href="#product-${product.id}" aria-label="Ver ${product.name} no catálogo">
    <div class="showcase-photo">${imageMarkup(product)}</div>
    <span class="showcase-card-name">${product.name}</span>
    <strong>${formatPrice(product.priceCents)}</strong>
  </a>`).join("");

  const updateStatus = () => {
    const firstCard = track.querySelector(".showcase-card");
    if (!firstCard) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = firstCard.getBoundingClientRect().width + gap;
    const first = Math.min(featured.length, Math.floor(viewport.scrollLeft / step) + 1);
    const visible = Math.max(1, Math.floor(viewport.clientWidth / step));
    const last = Math.min(featured.length, first + visible - 1);
    status.textContent = `Destaques ${first}–${last} de ${featured.length} · deslize para ver mais`;
  };
  document.querySelector("#showcase-prev").addEventListener("click", () => {
    const firstCard = track.querySelector(".showcase-card");
    if (firstCard) viewport.scrollBy({ left: -(firstCard.getBoundingClientRect().width + 14), behavior: "smooth" });
  });
  document.querySelector("#showcase-next").addEventListener("click", () => {
    const firstCard = track.querySelector(".showcase-card");
    if (firstCard) viewport.scrollBy({ left: firstCard.getBoundingClientRect().width + 14, behavior: "smooth" });
  });
  viewport.addEventListener("scroll", updateStatus, { passive: true });
  window.addEventListener("resize", updateStatus);
  updateStatus();
}

search.addEventListener("input", (event) => renderProducts(event.target.value));
document.querySelector("#category-filters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  document.querySelectorAll("#category-filters [data-category]").forEach((item) => {
    item.setAttribute("aria-pressed", String(item === button));
  });
  renderProducts(search.value);
});

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add-to-cart]");
  if (!button || button.disabled) return;
  const id = button.dataset.addToCart;
  cart.set(id, Math.min(99, (cart.get(id) || 0) + 1));
  renderCart();
  button.innerHTML = 'Adicionado <span aria-hidden="true">✓</span>';
  button.classList.add("is-added");
  showToast();
  window.setTimeout(() => {
    if (!button.isConnected) return;
    button.innerHTML = 'Adicionar ao carrinho <span aria-hidden="true">＋</span>';
    button.classList.remove("is-added");
  }, 1100);
});

cartToggle.addEventListener("click", openCart);
document.querySelector("#toast-open-cart").addEventListener("click", openCart);
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
  else if (cartAction === "increase" && quantity < 99) cart.set(productId, quantity + 1);
  renderCart();
});

fulfillment.addEventListener("change", updateFulfillment);
deliveryAddress.addEventListener("input", updateCheckoutLink);
stationDetails.addEventListener("input", updateCheckoutLink);
cartCheckout.addEventListener("click", (event) => {
  if (cart.size === 0) {
    event.preventDefault();
    return;
  }
  if (!fulfillment.value) {
    event.preventDefault();
    checkoutValidation.textContent = "Escolha uma forma de recebimento para continuar.";
    fulfillment.focus();
    return;
  }
  if (fulfillment.value === "motoboy" && !deliveryAddress.value.trim()) {
    event.preventDefault();
    checkoutValidation.textContent = "Informe o endereço para pedir entrega por motoboy.";
    deliveryAddress.focus();
    return;
  }
  checkoutValidation.textContent = "";
  updateCheckoutLink();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !cartBackdrop.hidden) {
    closeCart();
    return;
  }
  if (event.key === "Tab" && !cartBackdrop.hidden) {
    const focusable = [...cartBackdrop.querySelectorAll('button:not(:disabled), a[href]:not([hidden]), select:not(:disabled), input:not(:disabled), textarea:not(:disabled)')]
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
renderShowcase();
renderCart();




