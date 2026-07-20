const products = [
  // Beverage Luxe

  {
    name: "Iced Latte Luxe Candle",
    desc: "Warm glowing candle with the brand's signature look — soft peach cream aroma.",
    fragrance: "Peach / Cream / Vanilla",
    burn: "25–30 hours",
    price: 649,
    cat: "beverage",
    image: "images/products/Glass_Candle8.png",
    badge: "Bestseller",
  },

  {
    name: "Mango Mastani Delight Candle",
    desc: "Delicious mango mastani dessert candle in a wine glass with a yellow ribbon — summer in a glass.",
    fragrance: "Sweet Mango / Mango Vanilla",
    burn: "30–35 hours",
    price: 649,
    cat: "beverage",
    image: "images/products/Glass_Candle7.png",
  },

  // Fruit Dessert

  {
    name: "Berry Bliss Dessert Candle",
    desc: "Sweet berry bliss in a glass — a luscious strawberry vanilla candle for cozy evenings.",
    fragrance: "Strawberry / Vanilla / Berry Bliss",
    burn: "25–30 hours",
    price: 699,
    cat: "fruit",
    image: "images/products/Desert_Candle1.png",
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
    name: "Strawberry Dessert Candle",
    desc: "Handcrafted strawberry-shaped soy wax in an apple glass bowl — sweet & irresistible.",
    fragrance: "Sweet Strawberry Vanilla",
    burn: "25–30 hours",
    price: 499,
    cat: "fruit",
    image: "images/products/Dil2.png",
    badge: "New",
  },
  {
    name: "Summer Mango Indulgence",
    desc: "Tropical mango cubes in a glass bowl — sunshine and sweetness in every burn.",
    fragrance: "Sweet Mango / Mango Vanilla",
    burn: "25–30 hours",
    price: 499,
    cat: "fruit",
    image: "images/products/Dil3.png",
  },
  {
    name: "Mango Cream Delight Candle",
    desc: "Delicious mango cream dessert candle in a wine glass with a yellow ribbon — summer in a glass.",
    fragrance: "Sweet Mango / Vanilla",
    burn: "15–20 hours",
    price: 349,
    cat: "fruit",
    image: "images/products/Desert_Candle2.png",
    badge: "Bestseller",
  },
  {
    name: "Strawbery Milk Delight Candle",
    desc: "A delicate pink rose-topped candle with glitter — romantic and elegant.",
    fragrance: "Rose / Vanilla Floral",
    burn: "15–20 hours",
    price: 349,
    cat: "fruit",
    image: "images/products/Desert_Candle3.png",
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
    name: "Petal Dream Candle",
    desc: "Pink flower bouquet jar candle with a satin ribbon — blooming peony dreams.",
    fragrance: "Rose / Peony / Floral Blend",
    burn: "30–35 hours",
    price: 649,
    cat: "floral",
    image: "images/products/Glass_Flower2.png",
  },
  {
    name: "Golden Petal Glow Candle",
    desc: "Golden floral jar candle with dried baby's breath — mystical fragrance elegance.",
    fragrance: "Vanilla / Floral Musk",
    burn: "30–35 hours",
    price: 649,
    cat: "floral",
    image: "images/products/Glass_Flower3.png",
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
    name: "Ocean Breeze Candle",
    desc: "Teal ocean-inspired candle with seashell accents — coastal calm in every breath.",
    fragrance: "Sea Salt / Fresh Aqua / Driftwood",
    burn: "25–30 hours",
    price: 649,
    cat: "classic",
    image: "images/products/Glass_Candle10.png",
    badge: "Bestseller",
  },
  {
    name: "Blush Bloom Candle",
    desc: "Soft pink rose candle with shimmer — delicate floral musk for a dreamy ambience.",
    fragrance: "Rose Vanilla / Floral Musk",
    burn: "30–35 hours",
    price: 549,
    cat: "classic",
    image: "images/products/Glass_Candle1.png",
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

  // Bloom Glow
  {
    name: "Amethyst Bloom Candle",
    desc: "Yellow flower bouquet jar candle with a blue ribbon — a gift of golden warmth.",
    fragrance: "Vanilla Floral / Fresh Blossom",
    burn: "30–35 hours",
    price: 649,
    cat: "bloom",
    image: "images/products/Glass_Flower1.png",
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
    name: "Golden Petal Glow Candle",
    desc: "Golden floral jar candle with dried baby's breath — mystical fragrance elegance.",
    fragrance: "Vanilla / Floral Musk",
    burn: "30–35 hours",
    price: 649,
    cat: "bloom",
    image: "images/products/Glass_Flower3.png",
  },

  // Signature
  {
    name: "Lavender Pearl Gift Hamper",
    desc: "A luxurious Raksha Bandhan hamper featuring a handcrafted lavender rose candle, elegant pearl-filled star decorative tray with wax embellishments, stylish floral earrings, and a premium wooden gift basket. A perfect blend of elegance and fragrance for festive gifting.",
    fragrance: "Lavender Blossom",
    burn: "25–30 hours",
    price: 999,
    cat: "signature",
    image: "images/products/gift5.jpeg",
    badge: "Premium Gift",
  },
  {
    name: "Pearl Star",
    desc: "A luxurious gift basket featuring a pearl-filled star candle, elegant rose candle, and coastal-inspired decorative accents.",
    fragrance: "Vanilla / White Musk / Floral",
    burn: "20–25 hours",
    price: 799,
    cat: "signature",
    image: "images/products/gift4.jpeg",
    badge: "Premium",
  },
  {
    name: "Golden Bloom Luxe Candle",
    desc: "Luxurious golden pot filled with handcrafted red and blush wax roses — truly royal.",
    fragrance: "Red Roses / Soft Peony / Creamy Vanilla",
    burn: "30–35 hours",
    price: 699,
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
    name: "Mermaid Dreamscape Candle",
    desc: "A sleeping mermaid nestled in a starfish shell with pearls — magical ocean fantasy.",
    fragrance: "Ocean Mist / Coconut / Soft Amber",
    burn: "15–20 hours",
    price: 499,
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
  {
    name: "Celestial Angel Candle",
    desc: "Deep cranberry candle in a margarita glass — rich, bold, and beautifully topped.",
    fragrance: "Rose / Vanilla Floral",
    burn: "30–35 hours",
    price: 649,
    cat: "signature",
    image: "images/products/Glass_Candle13.png",
    badge: "Bestseller",
  },

  // Teddy
  {
    name: "Teddy Dream Delight Candle",
    desc: "Adorable blue teddy bear with chocolate bar and a moon — sweet cocoa dreams.",
    fragrance: "Sweet Cocoa / Creamy Vanilla / Soft Caramel",
    burn: "5–10 hours",
    price: 149,
    cat: "teddy",
    image: "images/products/Teddy_Candle1.png",
    badge: "Bestseller",
  },
  {
    name: "Starry Teddy Bliss Candle",
    desc: "Yellow teddy with stars and moon — a dreamy night-time companion for little ones.",
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

  // Gift Baskets
  {
    name: "Blue Waves Brother Rakhi Hamper",
    desc: "A beautifully curated Raksha Bandhan hamper featuring a handcrafted blue swirl scented candle, premium designer rakhi, decorative star resin tray, heartfelt 'For My Bro' message card, and an elegant wooden gift basket. A memorable gift made especially for your brother.",
    fragrance: "Ocean Mist / Vanilla",
    burn: "20–24 hours",
    price: 849,
    cat: "basket",
    image: "images/products/gift6.jpeg",
    badge: "Rakhi Special",
  },
  {
    name: "Chocolate Delight Rakhi Hamper",
    desc: "A premium Raksha Bandhan hamper featuring a sunflower scented candle, Cadbury Dairy Milk Silk chocolate, handcrafted designer rakhi, and an elegant decorative resin tray. A thoughtful gift to make your brother feel extra special.",
    fragrance: "Sunflower / Honey Vanilla",
    burn: "20–24 hours",
    price: 849,
    cat: "basket",
    image: "images/products/gift2.jpeg",
    badge: "Rakhi Special",
  },
  {
    name: "Blue Blossom Rakhi Gift Box",
    desc: "A charming Rakhi gift box featuring handcrafted blue and yellow floral candles, a cute teddy candle, premium designer rakhi, and delicious chocolate accents. Perfect for celebrating sibling love.",
    fragrance: "Blue Orchid / Vanilla",
    burn: "22–26 hours",
    price: 799,
    cat: "basket",
    image: "images/products/gift3.jpeg",
    badge: "Rakhi Special",
  },
  {
    name: "Birthday Celebration Gift Basket",
    desc: "A delightful birthday gift basket featuring handcrafted decorative candles, dessert-inspired candles, floral accents, and a birthday greeting tag. A perfect surprise for friends, family, and loved ones.",
    fragrance: "Vanilla / Mango / Floral",
    burn: "24–28 hours",
    price: 899,
    cat: "basket",
    image: "images/products/gift1.jpeg",
    badge: "Birthday Special",
  },

  {
    name: "Royal Rose Candle Basket",
    desc: "An elegant handcrafted wicker basket featuring luxurious rose-shaped candles in vibrant pink and red hues, beautifully accented with dried flowers. A perfect gift for birthdays, anniversaries, Valentine's Day, and special celebrations.",
    fragrance: "Rose / Vanilla / Floral Blend",
    burn: "35–40 hours (combined)",
    price: 999,
    cat: "basket",
    image: "images/products/gift basket1.jpeg",
    badge: "Bestseller",
  },
  {
    name: "Blush Bloom Basket",
    desc: "Delicate peach and rose candle flowers in a woven basket — soft and elegant.",
    fragrance: "Rose / Vanilla / Floral Bliss",
    burn: "30–40 hours",
    price: 999,
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
    name: "Eternal Love Luxury Basket",
    desc: "Golden pot filled with handcrafted rose candles and pampas — a premium luxury gift.",
    fragrance: "Red Roses / Vanilla / Floral Blend",
    burn: "40+ hours (combined)",
    price: 1399,
    cat: "basket",
    image: "images/products/Flower_Basket1.png",
    badge: "Bestseller",
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
    name: "Royal Rose Bloom Basket",
    desc: "Beautiful rose candle trio in a golden vase — delicate petals for a romantic setting.",
    fragrance: "Fresh Rose / Peony / Musk",
    burn: "25–30 hours (combined)",
    price: 699,
    cat: "basket",
    image: "images/products/Mini_Basket3.png",
  },

  // Candle Bouquet

  {
    name: "Crimson Elegance Candle Bouquet",
    desc: "An exquisite handcrafted candle bouquet with luxurious rose-shaped soy wax candles, complemented by dried floral accents and wrapped in premium pastel paper.",
    fragrance: "Rose / Peony",
    burn: "30–35 hours (combined)",
    price: 999,
    cat: "bouquet",
    image: "images/products/candle bouquet2.jpeg",
    badge: "Premium Bouquet",
  },
  {
    name: "Golden Blush Candle Bouquet",
    desc: "Premium handcrafted soy wax candle bouquet featuring blooming rose candles in warm golden and coral shades, elegantly wrapped for unforgettable gifting moments.",
    fragrance: "Rose / Vanilla",
    burn: "30–35 hours (combined)",
    price: 1119,
    cat: "bouquet",
    image: "images/products/candle bouquet1.jpeg",
    badge: "Premium",
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
