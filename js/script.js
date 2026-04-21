const products = [
  // Beverage Luxe
  {
    name: "Kyoto Matcha Luxe",
    desc: "A calming matcha-inspired soy candle with fresh herbal notes, perfect for zen moments.",
    fragrance: "Matcha / Green Tea / Fresh Herbal",
    burn: "25–30 hours",
    price: 649,
    cat: "beverage",
    image: "images/products/Glass_Candle10.png",
    badge: "Bestseller",
  },
  {
    name: "Berry Bliss Dessert Candle",
    desc: "Sweet berry bliss in a glass — a luscious strawberry vanilla candle for cozy evenings.",
    fragrance: "Strawberry / Vanilla / Berry Bliss",
    burn: "25–30 hours",
    price: 699,
    cat: "beverage",
    image: "images/products/Desert_Candle1.png",
  },
  {
    name: "Iced Latte Luxe Candle",
    desc: "Rich coffee and mocha aromas that bring the cafe to your living room.",
    fragrance: "Coffee / Vanilla / Mocha",
    burn: "30–35 hours",
    price: 649,
    cat: "beverage",
    image: "images/products/Glass_Candle7.png",
  },

  // Fruit Dessert
  {
    name: "Strawberry Dessert Candle",
    desc: "Handcrafted strawberry-shaped soy wax in an apple glass bowl — sweet & irresistible.",
    fragrance: "Sweet Strawberry Vanilla",
    burn: "25–30 hours",
    price: 499,
    cat: "fruit",
    image: "images/products/Glass_Candle1.png",
    badge: "Bestseller",
  },
  {
    name: "Blueberry Dessert Candle",
    desc: "Adorable blueberry-topped soy candle in a heart-shaped glass — a berry lover's dream.",
    fragrance: "Sweet Blueberry Vanilla",
    burn: "25–30 hours",
    price: 499,
    cat: "fruit",
    image: "images/products/Dil1.png",
  },
  {
    name: "Summer Mango Indulgence",
    desc: "Tropical mango cubes in a glass bowl — sunshine and sweetness in every burn.",
    fragrance: "Sweet Mango / Mango Vanilla",
    burn: "25–30 hours",
    price: 499,
    cat: "fruit",
    image: "images/products/Dil2.png",
    badge: "New",
  },
  {
    name: "Orange Citrus Burst Candle",
    desc: "Fresh orange segments in a butterfly glass — zesty citrus to brighten your space.",
    fragrance: "Orange Citrus / Sweet Tangerine",
    burn: "25–30 hours",
    price: 499,
    cat: "fruit",
    image: "images/products/Dil3.png",
  },

  // Floral
  {
    name: "SoftRose Romanace Candle",
    desc: "Cheerful sunflower-topped soy candle in a cupcake mould — fresh citrus sunshine.",
    fragrance: "Citrus / Orange Fresh",
    burn: "25–30 hours",
    price: 499,
    cat: "floral",
    image: "images/products/Glass_Flower5.png",
  },
  {
    name: "Strawbery Milk Delight Candle",
    desc: "A delicate pink rose-topped candle with glitter — romantic and elegant.",
    fragrance: "Rose / Vanilla Floral",
    burn: "15–20 hours",
    price: 349,
    cat: "floral",
    image: "images/products/Desert_Candle3.png",
  },
  {
    name: "Amethyst Bloom Candle",
    desc: "Yellow flower bouquet jar candle with a blue ribbon — a gift of golden warmth.",
    fragrance: "Vanilla Floral / Fresh Blossom",
    burn: "30–35 hours",
    price: 649,
    cat: "floral",
    image: "images/products/Glass_Flower1.png",
    badge: "Bestseller",
  },
  {
    name: "Sunflower Citrus Candle",
    desc: "Purple daisy soy candle in a white cupcake mould — calming lavender vibes.",
    fragrance: "Lavender / Fresh Herbal / Floral",
    burn: "20–25 hours",
    price: 349,
    cat: "floral",
    image: "images/products/Diya1.png",
  },

  // Classic
  {
    name: "Iced Latte Luxe Candle",
    desc: "Warm glowing candle with the brand's signature look — soft peach cream aroma.",
    fragrance: "Peach / Cream / Vanilla",
    burn: "25–30 hours",
    price: 649,
    cat: "classic",
    image: "images/products/Glass_Candle8.png",
    badge: "Bestseller",
  },
  {
    name: "Midnight Sky Candle",
    desc: "Stunning blue galaxy-themed candle with stars and clouds — a night sky in a glass.",
    fragrance: "Lavender Vanilla / Ocean Breeze",
    burn: "30–35 hours",
    price: 549,
    cat: "classic",
    image: "images/products/Glass_Candle4.png",
  },
  {
    name: "Blush Bloom Candle",
    desc: "Soft pink rose candle with shimmer — delicate floral musk for a dreamy ambience.",
    fragrance: "Rose Vanilla / Floral Musk",
    burn: "30–35 hours",
    price: 549,
    cat: "classic",
    image: "images/products/Glass_Candle3.png",
  },
  {
    name: "Ocean Breeze Candle",
    desc: "Teal ocean-inspired candle with seashell accents — coastal calm in every breath.",
    fragrance: "Sea Salt / Fresh Aqua / Driftwood",
    burn: "30–35 hours",
    price: 599,
    cat: "classic",
    image: "images/products/Glass_Candle5.png",
  },

  // Bloom Glow
  {
    name: "Celestial Angel Candle",
    desc: "Deep cranberry candle in a margarita glass — rich, bold, and beautifully topped.",
    fragrance: "Rose / Vanilla Floral",
    burn: "30–35 hours",
    price: 649,
    cat: "bloom",
    image: "images/products/Glass_Candle13.png",
    badge: "Bestseller",
  },
  {
    name: "Petal Dream Candle",
    desc: "Pink flower bouquet jar candle with a satin ribbon — blooming peony dreams.",
    fragrance: "Rose / Peony / Floral Blend",
    burn: "30–35 hours",
    price: 649,
    cat: "bloom",
    image: "images/products/Glass_Flower2.png",
  },
  {
    name: "Amethyst Bloom Candle",
    desc: "Purple floral jar candle with dried baby's breath — mystical lavender elegance.",
    fragrance: "Lavender / Floral Musk",
    burn: "30–35 hours",
    price: 649,
    cat: "bloom",
    image: "images/products/Glass_Flower3.png",
  },

  // Signature
  {
    name: "Golden Bloom Luxe Candle",
    desc: "Luxurious golden pot filled with handcrafted red and blush wax roses — truly royal.",
    fragrance: "Red Roses / Soft Peony / Creamy Vanilla",
    burn: "30–35 hours",
    price: 999,
    cat: "signature",
    image: "images/products/Frame1.png",
  },
  {
    name: "Sunset Blossom Delight",
    desc: "Warm sunset gradient candle — sweet citrus and honey tones for golden hour vibes.",
    fragrance: "Sweet Citrus / Blooming Florals / Warm Honey",
    burn: "5–10 hours",
    price: 649,
    cat: "signature",
    image: "images/products/Glass_Candle12.png",
  },
  {
    name: "Midnight Bloom Bliss Candle",
    desc: "Deep blue candle with cloud-like wax toppers and sparkle — enchanting night blooms.",
    fragrance: "Blue Lotus / Fresh Linen / Soft Amber",
    burn: "20–25 hours",
    price: 599,
    cat: "signature",
    image: "images/products/Glass_Candle2.png",
  },
  {
    name: "Mango Mastani Delight Candle",
    desc: "Delicious mango mastani dessert candle in a wine glass with a yellow ribbon — summer in a glass.",
    fragrance: "Sweet Mango / Mango Vanilla",
    burn: "15–20 hours",
    price: 349,
    cat: "signature",
    image: "images/products/Desert_Candle2.png",
    badge: "Bestseller",
  },
  {
    name: "Mermaid Dreamscape Candle",
    desc: "A sleeping mermaid nestled in a starfish shell with pearls — magical ocean fantasy.",
    fragrance: "Ocean Mist / Coconut / Soft Amber",
    burn: "15–20 hours",
    price: 799,
    cat: "signature",
    image: "images/products/StarFish_Candle2.png",
    badge: "Limited",
  },
  {
    name: "Rose Glod Mermaid Candle",
    desc: "Shimmering mermaid tail rising from pearl-topped wax in a fishbowl — pure enchantment.",
    fragrance: "Rose Gold / Vanilla / Sea Breeze",
    burn: "15–20 hours",
    price: 399,
    cat: "signature",
    image: "images/products/Glass_Candle14.png",
  },
  {
    name: "Seashell Starfish Candle",
    desc: "Ocean treasures in a starfish dish — shells, pearls, and coastal calm.",
    fragrance: "Sea Salt / Sandy Driftwood / Fresh Ozone",
    burn: "10–15 hours",
    price: 399,
    cat: "signature",
    image: "images/products/StarFish_Candle1.png",
  },

  // Teddy
  {
    name: "Teddy Dream Delight Candle",
    desc: "Adorable yellow teddy bear with chocolate bar and a moon — sweet cocoa dreams.",
    fragrance: "Sweet Cocoa / Creamy Vanilla / Soft Caramel",
    burn: "5–10 hours",
    price: 149,
    cat: "teddy",
    image: "images/products/Teddy_Candle1.png",
    badge: "Bestseller",
  },
  {
    name: "Starry Teddy Bliss Candle",
    desc: "Blue teddy with stars and moon — a dreamy night-time companion for little ones.",
    fragrance: "Sweet Cocoa / Creamy Vanilla / Soft Caramel",
    burn: "5–10 hours",
    price: 149,
    cat: "teddy",
    image: "images/products/Teddy_Candle2.png",
  },
  {
    name: "Cotton Candy Teddy Candle",
    desc: "Peach teddy with purple moon and stars — playful and adorable.",
    fragrance: "Sweet Cocoa / Creamy Vanilla / Soft Caramel",
    burn: "5–10 hours",
    price: 149,
    cat: "teddy",
    image: "images/products/Teddy_Candle3.png",
  },
  {
    name: "Sweet Dreams Teddy Candle",
    desc: "White teddy with golden moon — pure innocence and warm vanilla comfort.",
    fragrance: "Sweet Cocoa / Creamy Vanilla / Soft Caramel",
    burn: "5–10 hours",
    price: 149,
    cat: "teddy",
    image: "images/products/Teddy_Candle4jpeg.png",
  },
  {
    name: "Sleeping Angel Candle",
    desc: "Baby angel sleeping peacefully in a blue pearl bowl — serene and heavenly.",
    fragrance: "Baby Powder / Soft Vanilla / Fresh Cotton",
    burn: "10–15 hours",
    price: 249,
    cat: "teddy",
    image: "images/products/Glass_Candle12.png",
  },

  // Gift Baskets
  {
    name: "Eternal Love Luxury Basket",
    desc: "Golden pot filled with handcrafted rose candles and pampas — a premium luxury gift.",
    fragrance: "Red Roses / Vanilla / Floral Blend",
    burn: "40+ hours (combined)",
    price: 1399,
    cat: "basket",
    image: "images/products/Flower_Basket6.png",
    badge: "Bestseller",
  },
  {
    name: "Fruity Delight Candle Hamper",
    desc: "Wicker basket overflowing with red and white rose candles and dried flowers — pure romance.",
    fragrance: "Rose / Vanilla / Floral Blend",
    burn: "35–40 hours (combined)",
    price: 799,
    cat: "basket",
    image: "images/products/Flower_Basket2.png",
  },
  {
    name: "Blush Bloom Basket",
    desc: "Delicate peach and rose candle flowers in a woven basket — soft and elegant.",
    fragrance: "Rose / Vanilla / Floral Bliss",
    burn: "30–40 hours",
    price: 999,
    cat: "basket",
    image: "images/products/Flower_Basket1.png",
  },
  {
    name: "Red Velvet Love Basket",
    desc: "Pink lotus and flower candles in a handled basket — a stunning gift of love.",
    fragrance: "Lavender / Rose / Floral Blend",
    burn: "35–40 hours (combined)",
    price: 999,
    cat: "basket",
    image: "images/products/Flower_Basket4.png",
  },
  {
    name: "Lavender Blossom Candle",
    desc: "A fruit basket filled with banana, strawberry, and pumpkin shaped candles — a sweet delight!",
    fragrance: "Mixed Fruity (Sweet & Refreshing)",
    burn: "5-10 hours (combined)",
    price: 199,
    cat: "basket",
    image: "images/products/Mini_Basket1.png",
    badge: "Gift Set",
  },
  {
    name: "Rose Petal Love Basket",
    desc: "Beautiful rose candle trio in a fish bowl — delicate petals for a romantic setting.",
    fragrance: "Fresh Rose / Peony / Musk",
    burn: "25–30 hours (combined)",
    price: 699,
    cat: "basket",
    image: "images/products/Mini_Basket3.png",
  },
];

const grid = document.getElementById("productGrid");

function renderProducts(cat) {
  const filtered =
    cat === "all" ? products : products.filter((p) => p.cat === cat);
  grid.innerHTML = "";

  filtered.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.style.transitionDelay = `${i * 0.06}s`;
    card.innerHTML = `
      <div class="product-image-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
      </div>
      <div class="product-info">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <p class="product-fragrance">${p.fragrance}</p>
        <p class="product-burn">&#x1F56F; ${p.burn}</p>
        <div class="product-footer">
          <span class="product-price">&#x20B9;${p.price}</span>
          <button class="product-btn" onclick="enquireProduct('${p.name.replace(/'/g, "\\'")}')">Enquire</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => card.classList.add("visible"));
    });
  });
}

document.querySelectorAll(".cat-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".cat-tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    renderProducts(tab.dataset.cat);
  });
});

function enquireProduct(name) {
  const msg = encodeURIComponent(
    `Hi! I'm interested in the "${name}" candle. Could you share more details?`,
  );
  window.open(`https://wa.me/919845947424?text=${msg}`, "_blank");
}

renderProducts("all");

// Navbar scroll
window.addEventListener("scroll", () => {
  document
    .getElementById("navbar")
    .classList.toggle("scrolled", window.scrollY > 50);
});

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

function closeNav() {
  navLinks.classList.remove("open");
}

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
