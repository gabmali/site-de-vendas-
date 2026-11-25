// Catálogo Clarysse Makes. Imagens existentes e seus vínculos estão registrados em IMAGE_INVENTORY.md.
// Valores armazenados em centavos para evitar erros de arredondamento.
const products = [
  { id: "lip-gloss", name: "Lip Gloss", detail: "Viva! · SOS Beijo · volume labial", category: "makeup", priceCents: 1200, image: "dccf3be0886ebff0.jpg", stock: "check" },
  { id: "lip-gloss-teddy", name: "Lip Gloss Teddy", detail: "Melu · 3 ml", category: "makeup", priceCents: 1200, image: "85d38dfc82278184.jpg", stock: "check" },
  { id: "esfoliante-vitamina-c", name: "Esfoliante Vitamina C", detail: "Derma Chem · 100 g", category: "skincare", priceCents: 1000, image: "0271d032cd8c1436.jpg", stock: "check" },
  { id: "perfume-capilar", name: "Perfume Capilar", detail: "Transcendent Pink e Ray Flower · 30 ml cada", category: "fragrance", priceCents: 1000, image: "perfume-capilar-pink.jpg", gallery: ["perfume-capilar-pink.jpg", "perfume-capilar-ray.jpg"], galleryLabels: ["Transcendent Pink", "Ray Flower"], stock: "check" },
  { id: "serum-abacate-pitaya", name: "Sérum Abacate e Pitaya", detail: "Mia Make · Skin Fruit · 30 ml", category: "skincare", priceCents: 1000, image: "serum-abacate-pitaya.jpg", imageFit: "contain", stock: "check" },
  { id: "serum-rosa-mosqueta-max-love", name: "Sérum Rosa Mosqueta – Max Love", detail: "Max Love Studio · 30 ml", category: "skincare", priceCents: 1000, image: "serum-rosa-mosqueta-max-love.jpg", imageFit: "contain", stock: "check" },
  { id: "serum-vitamina-c-max-love", name: "Sérum Vitamina C – Max Love", detail: "Max Love Studio · 30 ml", category: "skincare", priceCents: 1000, image: "eb59afe2e0fcc6d9.jpg", stock: "check" },
  { id: "presilhas-flor", name: "Presilhas Flor", detail: "Acessório de beleza · cores variadas", category: "accessories", priceCents: 700, image: "4324abe2eb9ba18f.jpg", stock: "check" },
  { id: "escova-cabelo", name: "Escova de Cabelo", detail: "Acessório para pentear · cores variadas", category: "accessories", priceCents: 1000, image: "escova-cabelo-cores.jpg", imageFit: "contain", stock: "check" },
  { id: "po-banana-fenzza", name: "Pó de Banana – Fenzza", detail: "Fenzza Make Up", category: "makeup", priceCents: 1000, image: "452e129b1e32e16a.jpg", stock: "check" },
  { id: "gloss-lip-oil", name: "Gloss Lip Oil", detail: "Vivat · hidratante labial · cores variadas", category: "makeup", priceCents: 1000, image: "gloss-lip-oil.jpg", imageFit: "contain", stock: "check" },
  { id: "hidratante-vaquinha", name: "Hidratante Vaquinha", detail: "Bell Corpus · 250 ml", category: "skincare", priceCents: 1500, image: "hidratante-vaquinha.jpg", imageFit: "contain", stock: "check" },
  { id: "creme-corporal-cereja", name: "Creme Corporal Cereja", detail: "Body Juice · extrato de cereja e ácido hialurônico · 100 g", category: "skincare", priceCents: 1500, image: "creme-corporal-cereja.jpg", imageFit: "contain", stock: "check" },
  { id: "esfoliante-corporal", name: "Esfoliante Corporal", detail: "S.Hine's · Sunset Coral · 220 g", category: "skincare", priceCents: 1000, image: "esfoliante-corporal-sunset-coral.jpg", imageFit: "contain", stock: "check" },
  { id: "body-splash-vaquinha", name: "Body Splash Vaquinha", detail: "Bell Corpus · 200 ml · unidade", category: "fragrance", priceCents: 1500, image: "body-splash-vaquinha-kit.jpg", imageFit: "contain", stock: "check" },
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

// Textos comerciais curtos, baseados no nome e nas características já cadastradas.
const productDescriptions = {
  "lip-gloss": "Um toque de brilho para realçar os lábios e completar sua make. Compacto e fácil de levar na bolsa para retocar quando quiser.",
  "lip-gloss-teddy": "Seu novo detalhe favorito para uma make delicada: um gloss prático de 3 ml, perfeito para levar com você e dar um acabamento luminoso aos lábios.",
  "esfoliante-vitamina-c": "Acrescente um momento de esfoliação à sua rotina de cuidados faciais. Uma escolha prática para quem gosta de dedicar atenção extra à pele.",
  "perfume-capilar": "Leve seu perfume capilar favorito para a rotina: escolha entre Transcendent Pink e Ray Flower. Frascos de 30 ml, práticos para ter sempre por perto.",
  "serum-abacate-pitaya": "Um sérum facial de Abacate e Pitaya para incluir no seu ritual de autocuidado. O frasco de 30 ml é um convite a reservar um momento só seu.",
  "serum-rosa-mosqueta-max-love": "Um passo especial para sua rotina facial: Sérum Rosa Mosqueta em frasco de 30 ml, ideal para deixar seu momento de cuidado ainda mais completo.",
  "serum-vitamina-c-max-love": "Inclua o Sérum Vitamina C na sua rotina de cuidados com a pele. Uma opção prática para criar um ritual diário do seu jeito.",
  "presilhas-flor": "Um detalhe charmoso para completar o penteado. As presilhas em formato de flor estão disponíveis em cores variadas para combinar com seu estilo.",
  "escova-cabelo": "Prática para acompanhar seus cuidados com os cabelos no dia a dia. Escolha entre azul, pink ou preta; consulte a cor disponível no momento do pedido.",
  "po-banana-fenzza": "Finalize sua maquiagem com o Pó de Banana Fenzza e dê aquele toque final à produção. Um item versátil para ter no nécessaire.",
  "gloss-lip-oil": "Brilho e cuidado labial em um só passo. O Lip Oil tem proposta hidratante e vem em cores variadas para você escolher a sua favorita.",
  "hidratante-vaquinha": "Transforme o cuidado diário em um momento gostoso com o Hidratante Vaquinha. A embalagem de 250 ml é perfeita para deixar no seu cantinho de autocuidado.",
  "creme-corporal-cereja": "Um toque especial de cereja para o seu ritual de cuidado corporal. O Creme Body Juice vem em embalagem de 100 g para deixar seu momento de autocuidado ainda mais gostoso.",
  "esfoliante-corporal": "Um momento de esfoliação para deixar o cuidado corporal mais especial. Sunset Coral em pote de 220 g, para incluir na sua rotina de beleza.",
  "body-splash-vaquinha": "Finalize sua rotina com o cheirinho leve do Body Splash Vaquinha. São 200 ml para acompanhar seus momentos de cuidado e perfumação.",
  "mousse-facial-manga-rosa": "Uma mousse facial com extrato de manga rosa e água de coco para dar um toque especial ao seu ritual de cuidados. Embalagem de 150 ml.",
  "lamina": "Praticidade para cuidar das sobrancelhas: o kit vem com 3 aparelhos, para você ter sempre um à mão no seu nécessaire.",
  "bronzer-choco-fun": "Dê um toque bronzeado à sua make com o Bronzer Choco Fun. Um detalhe que ajuda a completar produções leves ou mais marcantes.",
  "esfoliante-labial": "Um cuidado extra para os lábios: o esfoliante labial é aquele passo especial para incluir na sua rotina de beleza.",
  "bruma-fixadora": "Finalize sua maquiagem com a Bruma Fixadora Skin Pro Matte. A embalagem de 130 ml é prática para completar sua rotina de make.",
  "esfoliante-acido-salicilico": "Um esfoliante com ácido salicílico, indicado no rótulo para pele oleosa e acneica. Inclua nos cuidados seguindo as instruções da embalagem.",
  "esfoliante-body-juice-cereja": "Deixe seu autocuidado mais gostoso com o Esfoliante Corporal Body Juice Cereja. Um passo especial para a sua rotina, em embalagem de 100 g.",
  "pure-seduction": "A loção perfumada Pure Seduction é para quem quer adicionar sua fragrância favorita ao ritual de cuidado corporal. Embalagem de 236 ml.",
  "amber-romance": "Um toque perfumado para o seu cuidado diário: conheça a loção Amber Romance, em embalagem de 236 ml.",
  "bare-vanilla": "A loção perfumada Bare Vanilla combina seu cuidado corporal com uma fragrância marcante. São 236 ml para aproveitar no dia a dia.",
  "love-spell": "Um momento de cuidado com a fragrância Love Spell. Loção perfumada de 236 ml para deixar sua rotina ainda mais especial.",
  "strawberry-champagne": "A loção perfumada Strawberries & Champagne é um convite para tornar seu cuidado corporal mais especial. Embalagem de 236 ml.",
  "kit-doce-de-leite-vaquinha": "Um trio para deixar o cuidado corporal mais completo: sabonete, esfoliante e hidratante Vaquinha em uma combinação especial de Doce de Leite.",
  "agua-micelar-max-love": "Escolha sua versão favorita — Rosa Mosqueta, Antioxidante ou Carvão — e acrescente a Água Micelar à sua rotina de cuidados com a pele.",
};

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
const productDialog = document.querySelector("#product-dialog");
const productDialogContent = document.querySelector("#product-dialog-content");
let lastProductTrigger = null;
let activeModalProduct = null;
let activeModalVariantIndex = 0;
const cart = loadCart();
let activeCategory = "all";
let toastTimer;

function formatPrice(priceCents) {
  return Number.isInteger(priceCents) ? currency.format(priceCents / 100) : "Preço a confirmar";
}

function imageMarkup(product, className = "") {
  if (product.image) {
    const imageFit = product.imageFit === "contain" ? " product-image-contain" : "";
    return `<img class="${className}${imageFit}" src="assets/instagram/${product.image}" alt="${product.name}" loading="lazy" data-view-product="${product.id}" role="button" tabindex="0" aria-label="Ver detalhes de ${product.name}" />`;
  }
  return `<div class="product-image-placeholder ${className}" role="button" tabindex="0" data-view-product="${product.id}" aria-label="Ver detalhes de ${product.name}"><span aria-hidden="true">♡</span><small>Foto em breve</small></div>`;
}

function productCard(product) {
  const message = `Olá! Tenho interesse no produto ${product.name}. Gostaria de mais informações.`;
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  const purchaseAction = product.galleryLabels?.length > 1
    ? `<button class="product-cta product-cta-button" type="button" data-view-product="${product.id}">Escolher fragrância <span aria-hidden="true">↗</span></button>`
    : `<a class="product-cta" href="${href}" target="_blank" rel="noreferrer">Quero esse produto <span aria-hidden="true">↗</span></a>`;
  const badge = product.stock === "available"
    ? '<span class="stock-badge available"><i></i> Disponível</span>'
    : product.stock === "unavailable"
      ? '<span class="stock-badge unavailable"><i></i> Indisponível</span>'
      : '<span class="stock-badge check-stock"><i></i> Consulte disponibilidade</span>';

  const imageContent = product.gallery?.length > 1
    ? `<div class="product-gallery-pair" aria-label="Duas fragrâncias de perfume capilar">
        ${product.gallery.map((image, index) => `<button class="product-gallery-option" type="button" data-view-product="${product.id}" data-gallery-variant="${index}" aria-label="Ver ${product.galleryLabels[index]}"><img class="product-gallery-photo" src="assets/instagram/${image}" alt="Perfume Capilar ${product.galleryLabels[index]}" loading="lazy"><span>${product.galleryLabels[index]}</span></button>`).join("")}
        <span class="product-gallery-sequence" aria-hidden="true">›</span>
      </div>`
    : imageMarkup(product);

  return `<article class="product-card" id="product-${product.id}" data-product-id="${product.id}"${product.gallery?.length > 1 ? ` data-gallery='${JSON.stringify(product.gallery)}'` : ""}>
    <div class="product-image-wrap">
      ${imageContent}
      <span class="photo-heart" aria-hidden="true">♡</span>
    </div>
    <div class="product-info">
      <div class="product-status">${badge}<span class="category-tag">${categoryNames[product.category]}</span></div>
      <h3><button class="product-title-button" type="button" data-view-product="${product.id}">${product.name}</button></h3>
      <p class="product-price">${formatPrice(product.priceCents)}</p>
      ${product.detail ? `<p class="product-detail">${product.detail}</p>` : '<p class="product-detail product-detail-empty" aria-hidden="true"></p>'}
      <button class="product-detail-trigger" type="button" data-view-product="${product.id}">Ver detalhes <span aria-hidden="true">＋</span></button>
      <div class="product-purchase">
        <button class="add-to-cart" type="button" data-add-to-cart="${product.id}" ${product.stock === "unavailable" ? "disabled" : ""}>Adicionar ao carrinho <span aria-hidden="true">＋</span></button>
        ${purchaseAction}
      </div>
    </div>
  </article>`;
}

function showcaseImageMarkup(product) {
  if (product.gallery?.length > 1) {
    return `<div class="showcase-gallery-pair" aria-label="Perfume Capilar nas fragrâncias ${product.galleryLabels.join(" e ")}">
      ${product.gallery.map((image, index) => `<div class="showcase-gallery-option"><img src="assets/instagram/${image}" alt="Perfume Capilar ${product.galleryLabels[index]}" loading="lazy"><span>${product.galleryLabels[index]}</span></div>`).join("")}
      <span class="showcase-gallery-sequence" aria-hidden="true">›</span>
    </div>`;
  }
  return imageMarkup(product);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character]));
}

function productPurchaseHref(product, variantIndex = 0) {
  const variant = product.galleryLabels?.[variantIndex];
  const productName = variant ? `${product.name} – ${variant}` : product.name;
  const message = `Olá! Gostaria de comprar o produto ${productName} no valor de ${formatPrice(product.priceCents)}. Ele está disponível?`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function updateModalVariant(index) {
  const product = activeModalProduct;
  if (!product?.gallery?.length) return;
  activeModalVariantIndex = (index + product.gallery.length) % product.gallery.length;
  const label = product.galleryLabels[activeModalVariantIndex];
  const image = productDialogContent.querySelector("#product-modal-image");
  image.src = `assets/instagram/${product.gallery[activeModalVariantIndex]}`;
  image.alt = `${product.name} ${label}`;
  productDialogContent.querySelector("[data-selected-variant]").textContent = label;
  productDialogContent.querySelectorAll("[data-modal-variant]").forEach((button) => {
    button.setAttribute("aria-pressed", String(Number(button.dataset.modalVariant) === activeModalVariantIndex));
  });
  productDialogContent.querySelector("[data-modal-buy]").href = productPurchaseHref(product, activeModalVariantIndex);
}

function openProductDetails(product, trigger) {
  if (!product) return;
  lastProductTrigger = trigger;
  activeModalProduct = product;
  activeModalVariantIndex = Number(trigger?.dataset?.galleryVariant || 0);
  const price = formatPrice(product.priceCents);
  const description = productDescriptions[product.id] || "Um detalhe especial para completar sua rotina de beleza e autocuidado.";
  const variantLabel = product.galleryLabels?.[activeModalVariantIndex];
  const image = product.image
    ? `<img class="product-modal-image${product.imageFit === "contain" || product.gallery?.length > 1 ? " product-image-contain" : ""}" id="product-modal-image" src="assets/instagram/${escapeHtml(product.gallery?.[activeModalVariantIndex] || product.image)}" alt="${escapeHtml(product.name)}${variantLabel ? ` ${escapeHtml(variantLabel)}` : ""}" />`
    : '<div class="product-modal-placeholder" aria-hidden="true">♡</div>';
  const variantChoices = product.gallery?.length > 1
    ? `<div class="product-modal-variants" aria-label="Escolha uma fragrância">${product.galleryLabels.map((label, index) => `<button type="button" data-modal-variant="${index}" aria-pressed="${index === activeModalVariantIndex}">${label}</button>`).join("")}</div>`
    : "";
  productDialogContent.innerHTML = `<div class="product-modal-layout">
    <div class="product-modal-visual">${image}</div>
    <div class="product-modal-info">
      <h2 id="product-dialog-title">${escapeHtml(product.name)}</h2>
      ${variantLabel ? `<p class="product-modal-selected-variant" data-selected-variant>${escapeHtml(variantLabel)}</p>` : ""}
      <p class="product-modal-price">${price}</p>
      ${variantChoices}
      <section class="product-modal-description-wrap" aria-labelledby="product-description-label">
        <h3 id="product-description-label">Descrição</h3>
        <p class="product-modal-description">${escapeHtml(description)}</p>
      </section>
      <div class="product-modal-actions">
        <a class="button button-primary" data-modal-buy href="${productPurchaseHref(product, activeModalVariantIndex)}" target="_blank" rel="noreferrer">QUERO COMPRAR ESSE PRODUTO <span aria-hidden="true">↗</span></a>
        <button class="product-modal-continue" type="button" data-close-product-dialog>Voltar à loja</button>
      </div>
    </div>
  </div>`;
  productDialog.showModal();
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
  const featuredIds = [
    "lip-gloss",
    "body-splash-vaquinha",
    "perfume-capilar",
    "serum-rosa-mosqueta-max-love",
    "presilhas-flor",
    "hidratante-vaquinha",
    "pure-seduction",
    "amber-romance",
    "bare-vanilla",
    "love-spell",
    "strawberry-champagne",
    "kit-doce-de-leite-vaquinha",
  ];
  const featured = featuredIds.map((id) => products.find((product) => product.id === id)).filter((product) => product?.image && product.stock !== "unavailable");
  featured.splice(2, 0,
    { id: "kit-cereja-corporal", target: "#kit-cereja-corporal", name: "Kit Cuidado Corporal Cereja", priceCents: 3000, image: "kit-cereja-corporal.jpg" },
    { id: "kit-vaquinha-corporal", target: "#kit-vaquinha-corporal", name: "Kit Vaquinha: Body Splash + Hidratante", priceCents: 3000, image: "kit-vaquinha-corporal.jpg" },
  );
  featured.push(
    { id: "kit-rotina-cuidados-rosto", target: "#kit-rotina-cuidados-rosto", name: "Kit Rotina de Cuidados com o Rosto", priceCents: 3400, image: "kit-rotina-cuidados-rosto.jpg", imageFit: "contain" },
    { id: "kit-beleza-perfume", target: "#kit-beleza-perfume", name: "Kit Beleza & Perfume", priceCents: 4200, image: "kit-beleza-perfume.jpg", imageFit: "contain" },
  );
  const track = document.querySelector("#showcase-track");
  const viewport = document.querySelector("#showcase-viewport");
  const status = document.querySelector("#showcase-status");
  track.innerHTML = featured.map((product) => `<a class="showcase-card" href="${product.target || `#product-${product.id}`}" aria-label="Ver ${product.name} no catálogo">
    <div class="showcase-photo">${showcaseImageMarkup(product)}</div>
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
  track.addEventListener("click", (event) => {
    if (event.target.closest("[data-view-product]")) return;
    const card = event.target.closest("a.showcase-card");
    if (!card || card.hasAttribute("data-target")) return;
    const product = featured.find((item) => card.getAttribute("href") === `#product-${item.id}`);
    if (!product) return;
    event.preventDefault();
    openProductDetails(product, card);
  });
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

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-view-product]");
  if (!trigger) return;
  const product = products.find((item) => item.id === trigger.dataset.viewProduct);
  if (!product) return;
  event.preventDefault();
  openProductDetails(product, trigger);
});

document.addEventListener("keydown", (event) => {
  const trigger = event.target.closest?.('[data-view-product][role="button"]');
  if (!trigger || !["Enter", " "].includes(event.key)) return;
  event.preventDefault();
  openProductDetails(products.find((item) => item.id === trigger.dataset.viewProduct), trigger);
});

productDialog.addEventListener("click", (event) => {
  const variantButton = event.target.closest("[data-modal-variant]");
  if (variantButton) {
    updateModalVariant(Number(variantButton.dataset.modalVariant));
    return;
  }
  if (event.target === productDialog || event.target.closest("[data-close-product-dialog]")) productDialog.close();
});
productDialog.addEventListener("close", () => {
  if (lastProductTrigger?.isConnected) lastProductTrigger.focus();
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





