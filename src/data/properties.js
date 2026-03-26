// src/data/properties.js
// ─────────────────────────────────────────────────────────────────────────────
// IMPORTANT: Add or edit properties here.
// All fields marked (optional) can be set to null — the page hides that
// section automatically. Required fields must always be present.
// ─────────────────────────────────────────────────────────────────────────────

export const properties = [

  // ── CURRENT LISTINGS ──────────────────────────────────────────────────────

  {
    // ── Required ──────────────────────────────────────────────────────────────
    slug:      "example-current-listing",
    status:    "for-sale",           // "for-sale" | "sold" | "under-offer"
    title:     "Your Next Listing",
    suburb:    "Rototuna",
    city:      "Hamilton",
    postcode:  "3210",
    price:     "Price By Negotiation",
    bedrooms:  4,
    bathrooms: 2,
    parking:   2,

    // ── Specs (optional — set null to hide) ───────────────────────────────────
    floorArea: 180,
    landArea:  600,
    tenure:    "Freehold",

    // ── Description (optional — set [] to hide) ───────────────────────────────
    description: [
      "Add your property description here. This is a placeholder listing — replace the details in properties.js with your actual current listing.",
      "Update the slug, title, suburb, price, bedrooms, bathrooms, parking, and any other fields to match the real property.",
    ],

    // ── Features (optional — set [] to hide) ──────────────────────────────────
    features: [
      "Double garaging",
      "Open-plan living",
      "Modern kitchen",
      "Close to schools",
      "Freehold title",
      "Low-maintenance section",
    ],

    // ── Gallery (optional — set [] to hide) ───────────────────────────────────
    // Each item: { src: "/images/filename.jpg", alt: "Description" }
    gallery: [
      // { src: "/images/your-listing-1.jpg", alt: "Front of property" },
      // { src: "/images/your-listing-2.jpg", alt: "Living room" },
    ],

    // ── 360° Tour (optional — set null for placeholder) ───────────────────────
    tourUrl: null,
    // tourUrl: "https://kuula.co/share/XXXXX?fs=1&vr=0",

    // ── Open Home (optional — set null to hide) ───────────────────────────────
    openHome: null,
    // openHome: { date: "Sunday 30 March", time: "1:00 pm – 1:30 pm" },
  },

  {
    slug:      "8-dalesford-street",
    status:    "for-sale",
    title:     "8 Dalesford Street",
    suburb:    "Silverdale",
    city:      "Hamilton",
    postcode:  "3216",
    price:     "Auction 9th April 2026",
    bedrooms:  4,
    bathrooms: 1,
    parking:   2,

    floorArea: null,
    landArea:  690,
    tenure:    "Freehold",

    description: [
      "First time ever on the market, this much-loved generational family home is now ready for its next exciting chapter. Whether you're a growing family, savvy investor, or flipper looking for strong returns, this property offers endless potential you won't want to miss.",
      "Featuring 4 generous bedrooms plus versatile living spaces, a spacious kitchen and dining area with scope to modernise, a large lounge capturing plenty of natural light, double garage with off-street parking, and a freehold section with room for kids, pets, or future landscaping.",
      "With solid bones and so much scope to renovate, refresh, or redevelop, this is a golden opportunity in an excellent location close to schools, shops, transport, and parks. Estate sale — must sell. Properties like this don't come up often, act quickly!",
    ],

    features: [
      "Estate sale — first time on the market",
      "4 generous bedrooms",
      "Separate lounge with natural light",
      "Spacious kitchen and dining",
      "Double garage + off-street parking",
      "Freehold 690m² section",
      "Brick/masonry veneer exterior",
      "Close to schools, shops, and parks",
    ],

    gallery: [
      // { src: "/images/8-dalesford-1.jpg", alt: "Front of property" },
    ],

    tourUrl:  "https://kuula.co/share/collection/7MKn9?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1",
    openHome: null,
    // openHome: { date: "Sunday 30 March", time: "1:00 pm – 1:30 pm" },
  },

  // ── SOLD PROPERTIES ───────────────────────────────────────────────────────

  {
    slug:      "12a-karaka-street",
    status:    "sold",
    title:     "12A Karaka Street",
    suburb:    "Nawton",
    city:      "Hamilton",
    postcode:  "3200",
    price:     "$775,001",
    bedrooms:  3,
    bathrooms: 1,
    parking:   2,

    floorArea: 145,
    landArea:  520,
    tenure:    "Freehold",

    description: [
      "A fresh, modern and much-loved family home in the heart of Nawton. Beautifully presented with light-filled living spaces, a well-appointed kitchen, and seamless flow to a private, low-maintenance outdoor area.",
      "Three generous bedrooms, a tidy bathroom, and a double garage make this the ideal family package. Zoned for local schools and within easy reach of Hamilton's amenities.",
    ],

    features: [
      "Fresh, modern interior",
      "Double garaging",
      "Low-maintenance section",
      "Close to schools and shops",
      "Open-plan living and dining",
      "Freehold title",
    ],

    gallery: [
      // { src: "/images/12a-karaka-1.jpg", alt: "Front of property" },
    ],

    tourUrl:  null,
    openHome: null,
  },

  {
    slug:      "51-shakespeare-avenue",
    status:    "sold",
    title:     "51 Shakespeare Avenue",
    suburb:    "Enderley",
    city:      "Hamilton",
    postcode:  "3214",
    price:     "$610,000",
    bedrooms:  3,
    bathrooms: 1,
    parking:   1,

    floorArea: 110,
    landArea:  480,
    tenure:    "Freehold",

    description: [
      "A tidy, character-filled home in the heart of Enderley. Well maintained throughout with comfortable living spaces and a practical layout perfect for first home buyers or investors.",
      "Set on a manageable section with off-street parking, conveniently located close to schools, shops, and public transport.",
    ],

    features: [
      "Character features throughout",
      "Off-street parking",
      "Practical layout",
      "Close to schools and transport",
      "Manageable section size",
      "Freehold title",
    ],

    gallery:  [],
    tourUrl:  null,
    openHome: null,
  },

  {
    slug:      "162-great-south-road",
    status:    "sold",
    title:     "162 Great South Road",
    suburb:    "Ngāruawāhia",
    city:      "Ngāruawāhia",
    postcode:  "3720",
    price:     "$620,000",
    bedrooms:  3,
    bathrooms: 1,
    parking:   1,

    floorArea: 105,
    landArea:  510,
    tenure:    "Freehold",

    description: [
      "A solid, well-presented home on Great South Road in Ngāruawāhia. Comfortable and practical throughout, ideal for first home buyers or investors seeking strong value.",
      "Positioned conveniently close to local amenities, schools, and easy motorway access.",
    ],

    features: [
      "Practical family layout",
      "Off-street parking",
      "Close to schools",
      "Easy motorway access",
      "Manageable section",
      "Freehold title",
    ],

    gallery:  [],
    tourUrl:  null,
    openHome: null,
  },
];