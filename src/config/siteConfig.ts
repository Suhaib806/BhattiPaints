export interface ProductCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  whereUsed: string;
  whyExplore: string;
  applicationAreas: string[];
  ctaLabel: string;
  ctaHref: string;
  secondaryLinkLabel?: string;
  secondaryLinkHref?: string;
  accentHex: string;
  surfaceBg: string;
  textColor: string;
  image: string;
  imageAlt: string;
  emphasis: "primary-flagship" | "primary-feature" | "secondary-horizontal";
}

/**
 * TEMPORARY PROTOTYPE CATALOGUE PRODUCT INTERFACE
 * Inspired by industry packaging & product structure (Brighto Paints reference).
 * Replace `officialProductImageUrl` with official Bhatti Paints container photography
 * when available. When empty, a clearly labelled neutral Bhatti Paints studio
 * container mockup (Drum / Gallon / Metal Tin / Texture Tub) is rendered.
 */
export interface CatalogueProduct {
  id: string;
  code: string;
  name: string;
  seriesLabel: string;
  categoryId:
    | "interior-wall-paints"
    | "exterior-wall-paints"
    | "decorative-paints"
    | "protective-coatings"
    | "primers-undercoats";
  categoryLabel: string;
  finishType: string;
  containerStyle: "plastic-drum" | "gallon-bucket" | "metal-tin" | "texture-tub";
  availableSizes: string[];
  defaultSize: string;
  surfaces: string;
  description: string;
  bandColor: string;
  secondaryBandColor: string;
  lidColor: string;
  isFlagship?: boolean;
  /**
   * TEMPORARY ASSET SLOT:
   * Leave empty ("") to display the neutral Bhatti Paints studio container mockup,
   * or provide the path to official Bhatti Paints product photography (e.g. "/products/stain-free.png").
   */
  officialProductImageUrl: string;
}

export interface CustomerSolution {
  number: string;
  id: string;
  role: string;
  audienceLabel: string;
  description: string;
  journeyNote: string;
  cta: string;
  href: string;
  accent: string;
  image: string;
  imageAlt: string;
}

export interface PaintSwatch {
  code: string;
  name: string;
  hex: string;
  family: string;
  undertone: string;
  recommendedRoom: string;
  trimPairing: { name: string; hex: string; code: string };
  accentPairing: { name: string; hex: string; code: string };
}

export interface PaletteGroup {
  id: string;
  name: string;
  tagline: string;
  description: string;
  swatches: PaintSwatch[];
}

export type GalleryFilterCategory =
  | "Interior"
  | "Exterior"
  | "Textures"
  | "Colour Inspiration";

export interface ShowcaseSpace {
  id: string;
  number: string;
  title: string;
  caption: string;
  pillarLabel: string;
  filterCategory: GalleryFilterCategory;
  finishNote: string;
  paletteSwatches: string[];
  accentHex: string;
  image: string;
  aspect: "wide" | "tall" | "square" | "detail";
  colSpan: "lg:col-span-7" | "lg:col-span-5" | "lg:col-span-4" | "lg:col-span-8" | "lg:col-span-6";
  description: string;
}

export const SITE_CONFIG = {
  company: {
    name: "Bhatti Paints (Pvt.) Ltd.",
    shortName: "Bhatti Paints",
    established: 1972,
    location: "Bahawalpur, Punjab, Pakistan",
    city: "Bahawalpur, Pakistan",
    tagline: "Every Wall Has a Story. Make Yours Colourful.",
    heroSupportingText:
      "Bringing quality, colour, and inspiration to the spaces where life happens. Discover paint solutions from Bhatti Paints.",
    legacyHeadline: "More Than Paint. A Legacy of Colour.",
    legacyCopy:
      "Since 1972, Bhatti Paints has been part of the journey of bringing colour and character to spaces. Built on experience and a commitment to quality, our story continues with every wall transformed.",
  },

  /**
   * EDITABLE CONTACT & SOCIAL CONFIGURATION
   * Leave strings empty ("") until verified by Bhatti Paints management,
   * or fill in official verified details here to automatically populate
   * all CTAs, WhatsApp links, and Footer contact blocks.
   */
  contact: {
    phone: "", // e.g., "+92 (062) 000-0000" — Editable placeholder
    whatsapp: "", // e.g., "923000000000" — Editable placeholder
    email: "", // e.g., "info@bhattipaints.com" — Editable placeholder
    address: "", // e.g., "Head Office / Showroom Address" — Editable placeholder
    city: "Bahawalpur, Punjab, Pakistan",
    workingHoursPlaceholder: "Mon – Sat · Verify official showroom hours in config",
    social: {
      facebook: "",
      instagram: "",
      linkedin: "",
      youtube: "",
    },
  },

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Products", href: "#products" },
    { label: "Colour Inspiration", href: "#colour-inspiration" },
    { label: "Our Story", href: "#story" },
    { label: "Contact", href: "#contact" },
  ],

  logoSpectrum: [
    { name: "Crimson Vermilion", hex: "#C8283C" },
    { name: "Heritage Magenta", hex: "#B5267F" },
    { name: "Marigold Ochre", hex: "#F08A1C" },
    { name: "Saffron Sun", hex: "#F2E40F" },
    { name: "Botanical Emerald", hex: "#3FAE49" },
    { name: "Verdigris Teal", hex: "#3CB8B0" },
    { name: "Cobalt Ultramarine", hex: "#1E73BE" },
    { name: "Nocturne Indigo", hex: "#3B3F8F" },
  ],

  heroMoods: [
    {
      id: "cholistan-sand",
      name: "Cholistan Sand",
      code: "BP-104",
      hex: "#DEC9AC",
      wallOverlay: "rgba(222, 201, 172, 0.34)",
      roomLabel: "Contemporary Living Room · Warm Desert Plaster",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85",
    },
    {
      id: "derawar-indigo",
      name: "Derawar Nocturne",
      code: "BP-408",
      hex: "#2B3A55",
      wallOverlay: "rgba(43, 58, 85, 0.42)",
      roomLabel: "Evening Lounge · Deep Architectural Blue",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
    },
    {
      id: "mughal-sage",
      name: "Mughal Courtyard",
      code: "BP-502",
      hex: "#7E9481",
      wallOverlay: "rgba(126, 148, 129, 0.36)",
      roomLabel: "Sunlit Drawing Room · Botanical Mineral Green",
      image:
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2000&q=85",
    },
    {
      id: "multan-terracotta",
      name: "Multan Terracotta",
      code: "BP-201",
      hex: "#B8624A",
      wallOverlay: "rgba(184, 98, 74, 0.38)",
      roomLabel: "Architectural Gallery · Warm Kiln Clay",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85",
    },
  ],

  /**
   * CENTRALIZED PRODUCT DISCOVERY CATEGORIES
   * Initial category suggestions. Easily remove, reorder, or replace categories
   * here once the official Bhatti Paints product catalogue is confirmed.
   */
  productCategories: [
    {
      id: "interior-wall-paints",
      number: "01",
      title: "Interior Wall Paints",
      description:
        "Paint solutions for bedrooms, living rooms, offices, and indoor spaces.",
      whereUsed: "Bedrooms, living rooms, drawing rooms, offices, and indoor ceilings & walls",
      whyExplore:
        "Choose interior finishes that set the tone, warmth, and character of everyday living and working environments.",
      applicationAreas: ["Bedrooms", "Living Rooms", "Offices", "Indoor Spaces"],
      ctaLabel: "Explore Interior Paints",
      ctaHref: "#contact",
      secondaryLinkLabel: "Preview Interior Colours",
      secondaryLinkHref: "#colour-inspiration",
      accentHex: "#1E73BE",
      surfaceBg: "#FAF8F5",
      textColor: "#161514",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1500&q=85",
      imageAlt: "Contemporary painted living room interior with warm natural light",
      emphasis: "primary-flagship",
    },
    {
      id: "exterior-wall-paints",
      number: "02",
      title: "Exterior Wall Paints",
      description:
        "Paint solutions for exterior walls, building facades, and outdoor spaces.",
      whereUsed: "Exterior walls, residential elevations, commercial facades, and boundary walls",
      whyExplore:
        "Define architectural presence and bring lasting curb appeal to exterior masonry and outdoor structures.",
      applicationAreas: ["Exterior Walls", "Building Facades", "Outdoor Spaces"],
      ctaLabel: "Explore Exterior Paints",
      ctaHref: "#contact",
      secondaryLinkLabel: "View Exterior Inspiration",
      secondaryLinkHref: "#showcase",
      accentHex: "#F08A1C",
      surfaceBg: "#EAE3D7",
      textColor: "#161514",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
      imageAlt: "Modern residential facade with crisp painted exterior walls",
      emphasis: "primary-feature",
    },
    {
      id: "decorative-paints",
      number: "03",
      title: "Decorative Paints",
      description:
        "Decorative finishes and special visual effects for walls and interiors.",
      whereUsed: "Feature walls, reception areas, alcoves, and statement interior surfaces",
      whyExplore:
        "Introduce expressive visual depth, artistic character, and distinctive surface interest to focal walls.",
      applicationAreas: ["Feature Walls", "Statement Interiors", "Special Visual Effects"],
      ctaLabel: "Explore Decorative Finishes",
      ctaHref: "#contact",
      secondaryLinkLabel: "Explore Accent Palettes",
      secondaryLinkHref: "#colour-inspiration",
      accentHex: "#B5267F",
      surfaceBg: "#161514",
      textColor: "#FAF8F5",
      image:
        "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Artisan decorative wall finish in a contemporary interior",
      emphasis: "primary-feature",
    },
    {
      id: "protective-coatings",
      number: "04",
      title: "Protective Coatings",
      description:
        "Coating solutions for suitable surfaces requiring protection.",
      whereUsed: "Doors, window frames, trim, metalwork, woodwork, and architectural fixtures",
      whyExplore:
        "Protect and finish everyday architectural elements and surfaces that require dedicated coating care.",
      applicationAreas: ["Wood & Trim", "Metalwork & Fixtures", "Protective Surfaces"],
      ctaLabel: "Explore Protective Coatings",
      ctaHref: "#contact",
      accentHex: "#3FAE49",
      surfaceBg: "#FAF8F5",
      textColor: "#161514",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Painted architectural woodwork and interior trim detail",
      emphasis: "secondary-horizontal",
    },
    {
      id: "primers-undercoats",
      number: "05",
      title: "Primers & Undercoats",
      description:
        "Surface preparation products used before applying finishing coats.",
      whereUsed: "New plaster, masonry, repainted walls, and surfaces prior to topcoat application",
      whyExplore:
        "Build a smooth, well-prepared foundation before applying interior, exterior, or decorative finishing coats.",
      applicationAreas: ["Surface Preparation", "Undercoats", "Pre-Paint Foundation"],
      ctaLabel: "Explore Primers",
      ctaHref: "#contact",
      accentHex: "#3CB8B0",
      surfaceBg: "#FAF8F5",
      textColor: "#161514",
      image:
        "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Wall surface preparation and primer application with roller",
      emphasis: "secondary-horizontal",
    },
  ] as ProductCategory[],

  /**
   * CENTRALIZED PRODUCT CATALOGUE SHOWCASE ("Find the Perfect Finish.")
   * Reference structure & container specifications modelled after industry-standard
   * Pakistani paint lines (Stain Free, Plastic Emulsion, Super Emulsion, All Weather,
   * Wall Shield, Synthetic Enamel, Aluminium Finish, Interior Primer, Exterior Primer,
   * Super Texture).
   *
   * IMPORTANT: All items use neutral Bhatti Paints prototype container mockups until
   * `officialProductImageUrl` is populated with verified Bhatti Paints studio photography.
   */
  catalogueProducts: [
    {
      id: "stain-free-emulsion",
      code: "BP-INT-01",
      name: "Stain Free",
      seriesLabel: "Premium Interior Washable Emulsion",
      categoryId: "interior-wall-paints",
      categoryLabel: "Interior Wall Paints",
      finishType: "Soft Sheen · Stain Repellent",
      containerStyle: "plastic-drum",
      availableSizes: ["1 Ltr", "4 Ltr", "16 Ltr"],
      defaultSize: "16 Ltr",
      surfaces: "Interior masonry, plaster, bedrooms, lounges & corridors",
      description:
        "Premium low-odour interior wall emulsion formulated for smooth application and easy wipe-clean maintenance across high-traffic indoor spaces.",
      bandColor: "#B5267F",
      secondaryBandColor: "#7E1756",
      lidColor: "#B5267F",
      isFlagship: true,
      officialProductImageUrl: "",
    },
    {
      id: "plastic-emulsion",
      code: "BP-INT-02",
      name: "Plastic Emulsion",
      seriesLabel: "100% Acrylic Interior Wall Finish",
      categoryId: "interior-wall-paints",
      categoryLabel: "Interior Wall Paints",
      finishType: "Smooth Matt / Soft Sheen",
      containerStyle: "plastic-drum",
      availableSizes: ["1 Ltr", "4 Ltr", "16 Ltr"],
      defaultSize: "16 Ltr",
      surfaces: "Living rooms, drawing rooms, ceilings & indoor wall boards",
      description:
        "Rich acrylic-based interior emulsion delivering a refined, velvety wall finish with uniform colour depth for residential and office interiors.",
      bandColor: "#1E73BE",
      secondaryBandColor: "#134B80",
      lidColor: "#1E73BE",
      isFlagship: true,
      officialProductImageUrl: "",
    },
    {
      id: "super-emulsion",
      code: "BP-INT-03",
      name: "Super Emulsion",
      seriesLabel: "Silky Smooth Interior Wall Paint",
      categoryId: "interior-wall-paints",
      categoryLabel: "Interior Wall Paints",
      finishType: "Ultra Silky Smooth Matt",
      containerStyle: "plastic-drum",
      availableSizes: ["0.91 Ltr", "3.64 Ltr", "14.56 Ltr"],
      defaultSize: "14.56 Ltr",
      surfaces: "Interior walls, ceilings, plastered & brickwork surfaces",
      description:
        "Dependable everyday interior emulsion offering smooth coverage and balanced matt elegance across whole-home interior repainting projects.",
      bandColor: "#3CB8B0",
      secondaryBandColor: "#227873",
      lidColor: "#227873",
      officialProductImageUrl: "",
    },
    {
      id: "all-weather",
      code: "BP-EXT-01",
      name: "All Weather",
      seriesLabel: "Ultimate Exterior Weather Coat",
      categoryId: "exterior-wall-paints",
      categoryLabel: "Exterior Wall Paints",
      finishType: "Weather-Resistant Low Sheen",
      containerStyle: "plastic-drum",
      availableSizes: ["1 Ltr", "4 Ltr", "16 Ltr"],
      defaultSize: "16 Ltr",
      surfaces: "Exterior facades, residential elevations & outdoor masonry",
      description:
        "Exterior acrylic architectural coating designed to protect building facades against intense sunlight, seasonal rain, and airborne dust.",
      bandColor: "#F08A1C",
      secondaryBandColor: "#C85A14",
      lidColor: "#D96B18",
      isFlagship: true,
      officialProductImageUrl: "",
    },
    {
      id: "wall-shield",
      code: "BP-EXT-02",
      name: "Wall Shield",
      seriesLabel: "Exterior Protective Masonry Finish",
      categoryId: "exterior-wall-paints",
      categoryLabel: "Exterior Wall Paints",
      finishType: "Smooth Exterior Acrylic Matt",
      containerStyle: "gallon-bucket",
      availableSizes: ["1 Ltr", "4 Ltr", "16 Ltr"],
      defaultSize: "4 Ltr",
      surfaces: "Boundary walls, verandas, commercial exteriors & cement render",
      description:
        "Durable exterior masonry finish formulated to preserve colour clarity and surface cleanliness on exposed outdoor walls.",
      bandColor: "#C8283C",
      secondaryBandColor: "#8A1726",
      lidColor: "#C8283C",
      officialProductImageUrl: "",
    },
    {
      id: "synthetic-enamel",
      code: "BP-PRO-01",
      name: "Synthetic Enamel",
      seriesLabel: "All-Purpose Wood & Metal Gloss",
      categoryId: "protective-coatings",
      categoryLabel: "Protective Coatings",
      finishType: "High Gloss Enamel",
      containerStyle: "metal-tin",
      availableSizes: ["0.25 Ltr", "0.91 Ltr", "3.64 Ltr", "14.56 Ltr"],
      defaultSize: "3.64 Ltr",
      surfaces: "Wooden doors, window frames, iron grilles, gates & trim",
      description:
        "High-opacity synthetic enamel providing a tough, mirror-smooth gloss film and lasting surface protection for interior and exterior wood and metal.",
      bandColor: "#3FAE49",
      secondaryBandColor: "#25732C",
      lidColor: "#D5D0C8",
      isFlagship: true,
      officialProductImageUrl: "",
    },
    {
      id: "aluminium-finish",
      code: "BP-PRO-02",
      name: "Aluminium Finish",
      seriesLabel: "Protective Metallic Silver Coating",
      categoryId: "protective-coatings",
      categoryLabel: "Protective Coatings",
      finishType: "Silver Metallic Gloss",
      containerStyle: "metal-tin",
      availableSizes: ["0.25 Ltr", "0.91 Ltr", "3.64 Ltr"],
      defaultSize: "3.64 Ltr",
      surfaces: "Structural steel, metal fixtures, piping, poles & tanks",
      description:
        "Lustrous silver metallic finish designed to shield metal surfaces against corrosion, weathering, and discolouration.",
      bandColor: "#4A5568",
      secondaryBandColor: "#2D3748",
      lidColor: "#D5D0C8",
      officialProductImageUrl: "",
    },
    {
      id: "interior-primer",
      code: "BP-PRM-01",
      name: "Interior Primer",
      seriesLabel: "Water-Based Interior Wall Sealer",
      categoryId: "primers-undercoats",
      categoryLabel: "Primers & Undercoats",
      finishType: "Matt Sealing Undercoat",
      containerStyle: "gallon-bucket",
      availableSizes: ["3.64 Ltr", "14.56 Ltr"],
      defaultSize: "3.64 Ltr",
      surfaces: "New interior plaster, brickwork, concrete & wall boards",
      description:
        "Waterborne interior primer that seals porous masonry and builds a uniform, high-adhesion foundation for interior emulsion topcoats.",
      bandColor: "#3B3F8F",
      secondaryBandColor: "#242763",
      lidColor: "#3B3F8F",
      officialProductImageUrl: "",
    },
    {
      id: "exterior-primer",
      code: "BP-PRM-02",
      name: "Exterior Primer",
      seriesLabel: "100% Acrylic Alkali-Resistant Primer",
      categoryId: "primers-undercoats",
      categoryLabel: "Primers & Undercoats",
      finishType: "Deep-Penetrating Acrylic Sealer",
      containerStyle: "plastic-drum",
      availableSizes: ["4 Ltr", "16 Ltr"],
      defaultSize: "16 Ltr",
      surfaces: "Exterior cement plaster, concrete facades & masonry walls",
      description:
        "Acrylic waterborne exterior primer engineered to resist alkali and efflorescence while anchoring exterior finishes to porous masonry.",
      bandColor: "#2C7A63",
      secondaryBandColor: "#1B5242",
      lidColor: "#2C7A63",
      officialProductImageUrl: "",
    },
    {
      id: "super-texture",
      code: "BP-DEC-01",
      name: "Super Texture",
      seriesLabel: "Architectural Decorative Texture Coating",
      categoryId: "decorative-paints",
      categoryLabel: "Decorative Paints",
      finishType: "Artisan Textured Finish",
      containerStyle: "texture-tub",
      availableSizes: ["6 KG", "24 KG"],
      defaultSize: "24 KG",
      surfaces: "Feature walls, exterior elevations, concrete & plaster",
      description:
        "Heavy-bodied acrylic texture finish for creating sculptural decorative patterns and dimensional architectural wall statements.",
      bandColor: "#8E3A59",
      secondaryBandColor: "#5C2238",
      lidColor: "#8E3A59",
      officialProductImageUrl: "",
    },
  ] as CatalogueProduct[],

  palettes: [
    {
      id: "warm-neutrals",
      name: "Warm Neutrals",
      tagline: "Sun-baked limestones, desert sands, and calm architectural linens",
      description:
        "Inspired by the warm light of Southern Punjab—effortless neutrals that anchor living spaces without feeling stark.",
      swatches: [
        {
          code: "BP-104",
          name: "Cholistan Sand",
          hex: "#DEC9AC",
          family: "Warm Neutrals",
          undertone: "Golden Desert Buff",
          recommendedRoom: "Living Rooms & Entrance Halls",
          trimPairing: { name: "Gallery Alabaster", hex: "#F5F2EB", code: "BP-301" },
          accentPairing: { name: "Multan Terracotta", hex: "#B8624A", code: "BP-201" },
        },
        {
          code: "BP-108",
          name: "Warm Linen",
          hex: "#E8D9C4",
          family: "Warm Neutrals",
          undertone: "Soft Oatmeal Cream",
          recommendedRoom: "Bedrooms & Family Lounges",
          trimPairing: { name: "Cotton Muslin", hex: "#FAF7F0", code: "BP-303" },
          accentPairing: { name: "Indus Umber", hex: "#6E523E", code: "BP-204" },
        },
        {
          code: "BP-112",
          name: "Bahawalpur Limestone",
          hex: "#D2C7B8",
          family: "Warm Neutrals",
          undertone: "Balanced Greige Stone",
          recommendedRoom: "Facades & Dining Spaces",
          trimPairing: { name: "Chalk Dust", hex: "#ECE8E0", code: "BP-302" },
          accentPairing: { name: "Derawar Nocturne", hex: "#2B3A55", code: "BP-408" },
        },
        {
          code: "BP-116",
          name: "Raw Silk Plaster",
          hex: "#C7B69E",
          family: "Warm Neutrals",
          undertone: "Muted Cashmere Taupe",
          recommendedRoom: "Studies & Formal Drawing Rooms",
          trimPairing: { name: "Gallery Alabaster", hex: "#F5F2EB", code: "BP-301" },
          accentPairing: { name: "Mughal Courtyard", hex: "#6F8873", code: "BP-502" },
        },
        {
          code: "BP-120",
          name: "Almond Mortar",
          hex: "#E5DDD0",
          family: "Warm Neutrals",
          undertone: "Subtle Warm Putty",
          recommendedRoom: "Whole-Home Continuity",
          trimPairing: { name: "Pure Gypsum", hex: "#F9F8F6", code: "BP-306" },
          accentPairing: { name: "Cinnamon Bark", hex: "#8F5843", code: "BP-205" },
        },
        {
          code: "BP-124",
          name: "Caravan Khaki",
          hex: "#B5A184",
          family: "Warm Neutrals",
          undertone: "Deep Earthy Travertine",
          recommendedRoom: "Exterior Elevations & Verandas",
          trimPairing: { name: "Warm Linen", hex: "#E8D9C4", code: "BP-108" },
          accentPairing: { name: "Pomegranate Rouge", hex: "#A82838", code: "BP-602" },
        },
      ],
    },
    {
      id: "earthy-tones",
      name: "Earthy Tones",
      tagline: "Kiln-fired terracotta, mineral ochre, and rich alluvial clay",
      description:
        "Grounded pigments that celebrate natural earth, handcrafted brick, and warm timber joinery.",
      swatches: [
        {
          code: "BP-201",
          name: "Multan Terracotta",
          hex: "#B8624A",
          family: "Earthy Tones",
          undertone: "Sun-Baked Red Clay",
          recommendedRoom: "Feature Walls & Dining Rooms",
          trimPairing: { name: "Warm Linen", hex: "#E8D9C4", code: "BP-108" },
          accentPairing: { name: "Midnight Indigo", hex: "#3B3F8F", code: "BP-412" },
        },
        {
          code: "BP-202",
          name: "Kiln Ochre",
          hex: "#C98A4B",
          family: "Earthy Tones",
          undertone: "Spiced Amber Earth",
          recommendedRoom: "Courtyards & Warm Studies",
          trimPairing: { name: "Gallery Alabaster", hex: "#F5F2EB", code: "BP-301" },
          accentPairing: { name: "Olive Grove", hex: "#6E7349", code: "BP-504" },
        },
        {
          code: "BP-203",
          name: "Dry Olive Clay",
          hex: "#8A8458",
          family: "Earthy Tones",
          undertone: "Weathered Moss & Khaki",
          recommendedRoom: "Libraries & Garden Rooms",
          trimPairing: { name: "Chalk Dust", hex: "#ECE8E0", code: "BP-302" },
          accentPairing: { name: "Cholistan Sand", hex: "#DEC9AC", code: "BP-104" },
        },
        {
          code: "BP-204",
          name: "Indus Umber",
          hex: "#6E523E",
          family: "Earthy Tones",
          undertone: "Deep Roasted Walnut",
          recommendedRoom: "Architectural Joinery & Studies",
          trimPairing: { name: "Almond Mortar", hex: "#E5DDD0", code: "BP-120" },
          accentPairing: { name: "Saffron Marigold", hex: "#E29526", code: "BP-601" },
        },
        {
          code: "BP-205",
          name: "Cinnamon Bark",
          hex: "#985B45",
          family: "Earthy Tones",
          undertone: "Warm Russet Sienna",
          recommendedRoom: "Cozy Lounges & Hospitality",
          trimPairing: { name: "Cotton Muslin", hex: "#FAF7F0", code: "BP-303" },
          accentPairing: { name: "Bahawalpur Limestone", hex: "#D2C7B8", code: "BP-112" },
        },
        {
          code: "BP-206",
          name: "Desert Rose Clay",
          hex: "#C99682",
          family: "Earthy Tones",
          undertone: "Muted Plaster Blush",
          recommendedRoom: "Bedrooms & Dressing Spaces",
          trimPairing: { name: "Gallery Alabaster", hex: "#F5F2EB", code: "BP-301" },
          accentPairing: { name: "Indus Umber", hex: "#6E523E", code: "BP-204" },
        },
      ],
    },
    {
      id: "contemporary-whites",
      name: "Contemporary Whites",
      tagline: "Nuanced gallery whites with warm, chalky, or cool architectural balance",
      description:
        "Never sterile—each white is tuned to respond gracefully to natural daylight and warm evening illumination.",
      swatches: [
        {
          code: "BP-301",
          name: "Gallery Alabaster",
          hex: "#F4F1EA",
          family: "Contemporary Whites",
          undertone: "Soft Warm Plaster",
          recommendedRoom: "Open-Plan Living & Galleries",
          trimPairing: { name: "Pure Gypsum", hex: "#F9F8F6", code: "BP-306" },
          accentPairing: { name: "Cholistan Sand", hex: "#DEC9AC", code: "BP-104" },
        },
        {
          code: "BP-302",
          name: "Chalk Dust",
          hex: "#EAE5DC",
          family: "Contemporary Whites",
          undertone: "Velvety Mineral Lime",
          recommendedRoom: "Hallways & Classic Interiors",
          trimPairing: { name: "Gallery Alabaster", hex: "#F4F1EA", code: "BP-301" },
          accentPairing: { name: "Deep Harbour", hex: "#27456B", code: "BP-402" },
        },
        {
          code: "BP-303",
          name: "Cotton Muslin",
          hex: "#F8F5EE",
          family: "Contemporary Whites",
          undertone: "Sunlit Ivory Whisper",
          recommendedRoom: "Ceilings, Trim & Serene Bedrooms",
          trimPairing: { name: "Bahawalpur Limestone", hex: "#D2C7B8", code: "BP-112" },
          accentPairing: { name: "Mughal Courtyard", hex: "#6F8873", code: "BP-502" },
        },
        {
          code: "BP-304",
          name: "Morning Mist",
          hex: "#E3E7E6",
          family: "Contemporary Whites",
          undertone: "Cool Architectural Silver-White",
          recommendedRoom: "Sun-Drenched South-Facing Rooms",
          trimPairing: { name: "Pure Gypsum", hex: "#F9F8F6", code: "BP-306" },
          accentPairing: { name: "Derawar Nocturne", hex: "#2B3A55", code: "BP-408" },
        },
        {
          code: "BP-305",
          name: "Ivory Parchment",
          hex: "#EFE9DC",
          family: "Contemporary Whites",
          undertone: "Creamy Heritage Off-White",
          recommendedRoom: "Traditional & Transitional Homes",
          trimPairing: { name: "Cotton Muslin", hex: "#F8F5EE", code: "BP-303" },
          accentPairing: { name: "Multan Terracotta", hex: "#B8624A", code: "BP-201" },
        },
        {
          code: "BP-306",
          name: "Pure Gypsum",
          hex: "#F7F7F4",
          family: "Contemporary Whites",
          undertone: "Crisp Architect's White",
          recommendedRoom: "Modernist Interiors & Trim",
          trimPairing: { name: "Chalk Dust", hex: "#EAE5DC", code: "BP-302" },
          accentPairing: { name: "Midnight Indigo", hex: "#3B3F8F", code: "BP-412" },
        },
      ],
    },
    {
      id: "deep-blues",
      name: "Deep Blues",
      tagline: "From glazed ceramic cobalt and harbour slate to midnight indigo",
      description:
        "Drawing on centuries of regional glazed tilework and tranquil evening skies for spaces of poise and contemplation.",
      swatches: [
        {
          code: "BP-402",
          name: "Deep Harbour",
          hex: "#27456B",
          family: "Deep Blues",
          undertone: "Classic Maritime Navy",
          recommendedRoom: "Studies, Dining Rooms & Cabinetry",
          trimPairing: { name: "Gallery Alabaster", hex: "#F4F1EA", code: "BP-301" },
          accentPairing: { name: "Kiln Ochre", hex: "#C98A4B", code: "BP-202" },
        },
        {
          code: "BP-405",
          name: "Multani Kashi Blue",
          hex: "#1E6091",
          family: "Deep Blues",
          undertone: "Artisan Ceramic Cobalt",
          recommendedRoom: "Statement Walls & Courtyards",
          trimPairing: { name: "Cotton Muslin", hex: "#F8F5EE", code: "BP-303" },
          accentPairing: { name: "Cholistan Sand", hex: "#DEC9AC", code: "BP-104" },
        },
        {
          code: "BP-408",
          name: "Derawar Nocturne",
          hex: "#2B3A55",
          family: "Deep Blues",
          undertone: "Charcoal-Infused Slate Blue",
          recommendedRoom: "Media Rooms & Master Bedrooms",
          trimPairing: { name: "Chalk Dust", hex: "#EAE5DC", code: "BP-302" },
          accentPairing: { name: "Warm Linen", hex: "#E8D9C4", code: "BP-108" },
        },
        {
          code: "BP-410",
          name: "Monsoon Slate",
          hex: "#5B748B",
          family: "Deep Blues",
          undertone: "Soft Mineral Steel Blue",
          recommendedRoom: "Bedrooms & Peaceful Offices",
          trimPairing: { name: "Pure Gypsum", hex: "#F7F7F4", code: "BP-306" },
          accentPairing: { name: "Bahawalpur Limestone", hex: "#D2C7B8", code: "BP-112" },
        },
        {
          code: "BP-412",
          name: "Midnight Indigo",
          hex: "#333775",
          family: "Deep Blues",
          undertone: "Rich Ultramarine Violet-Blue",
          recommendedRoom: "Feature Libraries & Formal Lounges",
          trimPairing: { name: "Gallery Alabaster", hex: "#F4F1EA", code: "BP-301" },
          accentPairing: { name: "Saffron Marigold", hex: "#E29526", code: "BP-601" },
        },
        {
          code: "BP-415",
          name: "Powder Sky",
          hex: "#B8CAD8",
          family: "Deep Blues",
          undertone: "Airy Mineral Chambray",
          recommendedRoom: "Nurseries, Verandas & Ceilings",
          trimPairing: { name: "Cotton Muslin", hex: "#F8F5EE", code: "BP-303" },
          accentPairing: { name: "Deep Harbour", hex: "#27456B", code: "BP-402" },
        },
      ],
    },
    {
      id: "greens",
      name: "Greens",
      tagline: "Restorative botanical sages, courtyard foliage, and mineral teal",
      description:
        "Biophilic greens that bridge indoor architecture with lush gardens and shaded verandas.",
      swatches: [
        {
          code: "BP-502",
          name: "Mughal Courtyard",
          hex: "#6F8873",
          family: "Greens",
          undertone: "Soft Architectural Eucalyptus",
          recommendedRoom: "Living Rooms & Kitchens",
          trimPairing: { name: "Gallery Alabaster", hex: "#F4F1EA", code: "BP-301" },
          accentPairing: { name: "Cholistan Sand", hex: "#DEC9AC", code: "BP-104" },
        },
        {
          code: "BP-504",
          name: "Olive Grove",
          hex: "#6E7349",
          family: "Greens",
          undertone: "Warm Mediterranean Leaf",
          recommendedRoom: "Dining Rooms & Studies",
          trimPairing: { name: "Warm Linen", hex: "#E8D9C4", code: "BP-108" },
          accentPairing: { name: "Multan Terracotta", hex: "#B8624A", code: "BP-201" },
        },
        {
          code: "BP-506",
          name: "Sage Garden",
          hex: "#9DB59A",
          family: "Greens",
          undertone: "Silvery Celadon Mist",
          recommendedRoom: "Bedrooms & Sunrooms",
          trimPairing: { name: "Cotton Muslin", hex: "#F8F5EE", code: "BP-303" },
          accentPairing: { name: "Indus Umber", hex: "#6E523E", code: "BP-204" },
        },
        {
          code: "BP-508",
          name: "Verdigris Teal",
          hex: "#328B84",
          family: "Greens",
          undertone: "Jewel-Toned Patina Copper",
          recommendedRoom: "Accent Alcoves & Boutiques",
          trimPairing: { name: "Pure Gypsum", hex: "#F7F7F4", code: "BP-306" },
          accentPairing: { name: "Saffron Marigold", hex: "#E29526", code: "BP-601" },
        },
        {
          code: "BP-510",
          name: "Cypress Canopy",
          hex: "#2D4F3E",
          family: "Greens",
          undertone: "Deep Botanical Forest",
          recommendedRoom: "Executive Studies & Lounges",
          trimPairing: { name: "Chalk Dust", hex: "#EAE5DC", code: "BP-302" },
          accentPairing: { name: "Kiln Ochre", hex: "#C98A4B", code: "BP-202" },
        },
        {
          code: "BP-512",
          name: "Pistachio Plaster",
          hex: "#CBD6C0",
          family: "Greens",
          undertone: "Whisper-Soft Botanical Neutral",
          recommendedRoom: "Hallways & Tranquil Suites",
          trimPairing: { name: "Cotton Muslin", hex: "#F8F5EE", code: "BP-303" },
          accentPairing: { name: "Cypress Canopy", hex: "#2D4F3E", code: "BP-510" },
        },
      ],
    },
    {
      id: "vibrant-accents",
      name: "Vibrant Accent Colours",
      tagline: "Expressive pigments inspired by the Bhatti Paints prism emblem",
      description:
        "High-chroma celebratory hues crafted for statement doors, architectural niches, creative studios, and commercial branding.",
      swatches: [
        {
          code: "BP-601",
          name: "Saffron Marigold",
          hex: "#E29526",
          family: "Vibrant Accent Colours",
          undertone: "Radiant Golden Turmeric",
          recommendedRoom: "Accent Doors, Studios & Cafés",
          trimPairing: { name: "Gallery Alabaster", hex: "#F4F1EA", code: "BP-301" },
          accentPairing: { name: "Derawar Nocturne", hex: "#2B3A55", code: "BP-408" },
        },
        {
          code: "BP-602",
          name: "Pomegranate Rouge",
          hex: "#B8293D",
          family: "Vibrant Accent Colours",
          undertone: "Rich Crimson Lacquer",
          recommendedRoom: "Dining Statements & Feature Niches",
          trimPairing: { name: "Warm Linen", hex: "#E8D9C4", code: "BP-108" },
          accentPairing: { name: "Bahawalpur Limestone", hex: "#D2C7B8", code: "BP-112" },
        },
        {
          code: "BP-603",
          name: "Heritage Berry",
          hex: "#9E2A6B",
          family: "Vibrant Accent Colours",
          undertone: "Deep Bougainvillea Magenta",
          recommendedRoom: "Creative Spaces & Boutique Retail",
          trimPairing: { name: "Cotton Muslin", hex: "#F8F5EE", code: "BP-303" },
          accentPairing: { name: "Cholistan Sand", hex: "#DEC9AC", code: "BP-104" },
        },
        {
          code: "BP-604",
          name: "Citron Zest",
          hex: "#96BA39",
          family: "Vibrant Accent Colours",
          undertone: "Fresh Botanical Lime",
          recommendedRoom: "Playrooms, Schools & Modern Studios",
          trimPairing: { name: "Pure Gypsum", hex: "#F7F7F4", code: "BP-306" },
          accentPairing: { name: "Cypress Canopy", hex: "#2D4F3E", code: "BP-510" },
        },
        {
          code: "BP-605",
          name: "Peacock Lagoon",
          hex: "#29969C",
          family: "Vibrant Accent Colours",
          undertone: "Luminous Turquoise Glaze",
          recommendedRoom: "Courtyard Features & Poolside Walls",
          trimPairing: { name: "Gallery Alabaster", hex: "#F4F1EA", code: "BP-301" },
          accentPairing: { name: "Warm Linen", hex: "#E8D9C4", code: "BP-108" },
        },
        {
          code: "BP-606",
          name: "Royal Amethyst",
          hex: "#54387F",
          family: "Vibrant Accent Colours",
          undertone: "Regal Plum Violet",
          recommendedRoom: "Dressing Rooms & Luxe Lounges",
          trimPairing: { name: "Chalk Dust", hex: "#EAE5DC", code: "BP-302" },
          accentPairing: { name: "Saffron Marigold", hex: "#E29526", code: "BP-601" },
        },
      ],
    },
  ] as PaletteGroup[],

  /**
   * CENTRALIZED PAINT & COLOUR INSPIRATION GALLERY ("Colour Your World.")
   * Over half of the visual content directly showcases paint application,
   * brushwork, roller motion, textured wall surfaces, and colour swatches.
   * Captions are illustrative design inspiration only.
   */
  showcaseSpaces: [
    {
      id: "colour-in-motion",
      number: "01",
      title: "Colour in Motion — Paint Application",
      caption: "Colour in Motion — Paint Application",
      pillarLabel: "05 — Paint in Action",
      filterCategory: "Colour Inspiration",
      finishNote: "Smooth Roller Application · Rich Pigment Coverage",
      paletteSwatches: ["#C8283C", "#F08A1C", "#FAF8F5"],
      accentHex: "#C8283C",
      image:
        "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1600&q=85",
      aspect: "wide",
      colSpan: "lg:col-span-7",
      description:
        "Fresh pigment meeting prepared plaster—showcasing the smooth flow, opacity, and transformative power of real paint application.",
    },
    {
      id: "textured-elegance",
      number: "02",
      title: "Textured Elegance — Decorative Finish",
      caption: "Textured Elegance — Decorative Finish",
      pillarLabel: "03 — Decorative Textures",
      filterCategory: "Textures",
      finishNote: "Tactile Artisan Wall Surface · Mineral Depth",
      paletteSwatches: ["#C46247", "#DEC9AC", "#6E523E"],
      accentHex: "#B5267F",
      image:
        "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=85",
      aspect: "tall",
      colSpan: "lg:col-span-5",
      description:
        "Close-up surface study of dimensional decorative wall texture, capturing subtle shadow play and artisanal plaster character.",
    },
    {
      id: "curated-colour-stories",
      number: "03",
      title: "Curated Harmony — Colour Stories & Swatches",
      caption: "Curated Harmony — Colour Stories",
      pillarLabel: "04 — Colour Stories",
      filterCategory: "Colour Inspiration",
      finishNote: "Physical Shade Cards · Complementary Tones",
      paletteSwatches: ["#1E73BE", "#3CB8B0", "#F2E40F", "#B5267F"],
      accentHex: "#1E73BE",
      image:
        "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85",
      aspect: "square",
      colSpan: "lg:col-span-4",
      description:
        "Exploring tonal progressions, physical colour swatches, and balanced pigment combinations before they are applied to the wall.",
    },
    {
      id: "warm-neutral-interior",
      number: "04",
      title: "Warm Neutral — Interior Wall Finish",
      caption: "Warm Neutral — Interior Wall Finish",
      pillarLabel: "01 — Interior Colours",
      filterCategory: "Interior",
      finishNote: "Velvet Matt Wall Finish · Calm Daylight Reflection",
      paletteSwatches: ["#DEC9AC", "#EAE3D7", "#F4F1EA"],
      accentHex: "#F08A1C",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1500&q=85",
      aspect: "wide",
      colSpan: "lg:col-span-8",
      description:
        "Sunlit interior walls finished in a soft, chalky warm neutral that anchors living spaces with quiet architectural warmth.",
    },
    {
      id: "deep-ocean-exterior",
      number: "05",
      title: "Deep Ocean — Contemporary Exterior",
      caption: "Deep Ocean — Contemporary Exterior",
      pillarLabel: "02 — Exterior Finishes",
      filterCategory: "Exterior",
      finishNote: "Weather-Resilient Facade Coating · Crisp Masonry",
      paletteSwatches: ["#2B3A55", "#D2C7B8", "#FAF8F5"],
      accentHex: "#3CB8B0",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
      aspect: "wide",
      colSpan: "lg:col-span-6",
      description:
        "Contemporary residential architecture showcasing clean exterior masonry finishes engineered for lasting outdoor colour clarity.",
    },
    {
      id: "brush-and-craft",
      number: "06",
      title: "Surface Preparation — Brush & Roller Craft",
      caption: "Surface Preparation — Paint in Action",
      pillarLabel: "05 — Paint in Action",
      filterCategory: "Colour Inspiration",
      finishNote: "Professional Application · Primer & Topcoat System",
      paletteSwatches: ["#3FAE49", "#EAE3D7", "#161514"],
      accentHex: "#3FAE49",
      image:
        "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1400&q=85",
      aspect: "wide",
      colSpan: "lg:col-span-6",
      description:
        "Professional surface preparation and roller application—demonstrating how proper priming and skilled brushwork create a flawless wall finish.",
    },
    {
      id: "mineral-plaster-texture",
      number: "07",
      title: "Raw Limestone — Textured Wall Surface",
      caption: "Raw Limestone — Decorative Finish",
      pillarLabel: "03 — Decorative Textures",
      filterCategory: "Textures",
      finishNote: "Brushed Mineral Effect · Statement Feature Wall",
      paletteSwatches: ["#C7B69E", "#8A8458", "#E8D9C4"],
      accentHex: "#B5267F",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85",
      aspect: "tall",
      colSpan: "lg:col-span-5",
      description:
        "Macro detail of a brushed mineral wall surface where layered pigment and subtle texture replace the need for wall ornament.",
    },
    {
      id: "natural-tones-living",
      number: "08",
      title: "Natural Tones — Living Spaces",
      caption: "Natural Tones — Living Spaces",
      pillarLabel: "01 — Interior Colours",
      filterCategory: "Interior",
      finishNote: "Botanical Sage & Warm Linen Pairing",
      paletteSwatches: ["#6F8873", "#F8F5EE", "#6E523E"],
      accentHex: "#3FAE49",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85",
      aspect: "wide",
      colSpan: "lg:col-span-7",
      description:
        "Restorative botanical wall tones paired with crisp ivory trim to transform bedrooms and indoor retreats through colour.",
    },
  ] as ShowcaseSpace[],

  whyPillars: [
    {
      number: "01",
      title: "Experience Since 1972",
      description: "A legacy built through decades of experience.",
      detail:
        "Rooted in Bahawalpur for over five decades, guiding homeowners, painters, and builders toward finishes that stand the test of time.",
      accent: "#C8283C",
    },
    {
      number: "02",
      title: "Colour Inspiration",
      description: "Discover possibilities for every space.",
      detail:
        "From sun-washed desert neutrals to expressive architectural accents, our curated palettes make colour selection intuitive and inspiring.",
      accent: "#F08A1C",
    },
    {
      number: "03",
      title: "Paint Solutions",
      description: "Explore paint categories for different applications.",
      detail:
        "Thoughtfully structured categories covering interior walls, exterior facades, decorative statements, protective enamels, and primers.",
      accent: "#3CB8B0",
    },
    {
      number: "04",
      title: "A Commitment to Quality",
      description: "A brand built around quality and customer trust.",
      detail:
        "Every tin reflects our dedication to dependable coverage, rich pigment character, and lasting relationships with the communities we serve.",
      accent: "#3B3F8F",
    },
  ],

  /**
   * CENTRALIZED CUSTOMER SOLUTIONS (AUDIENCE NAVIGATION)
   * Connects each customer segment to the right destination in the customer journey.
   */
  professionals: [
    {
      number: "01",
      id: "homeowners",
      role: "Homeowners",
      audienceLabel: "Residential Spaces & Home Renewal",
      description:
        "Explore colours, finishes, and paint solutions to bring your home to life.",
      journeyNote: "Colour Inspiration & Room Visualization",
      cta: "Explore Home Colours",
      href: "#colour-inspiration",
      accent: "#B5267F",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
      imageAlt: "Warm painted residential living space",
    },
    {
      number: "02",
      id: "architects-designers",
      role: "Architects & Designers",
      audienceLabel: "Architectural & Interior Concepts",
      description:
        "Discover colour inspiration and product information to help bring your architectural and interior concepts to life.",
      journeyNote: "Curated Palettes & Product Information",
      cta: "Explore Design Possibilities",
      href: "#colour-inspiration",
      accent: "#F08A1C",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
      imageAlt: "Architectural interior design and curated wall finishes",
    },
    {
      number: "03",
      id: "master-painters",
      role: "Master Painters",
      audienceLabel: "Application & Surface Preparation",
      description:
        "Find relevant paint categories and product information to support your painting and finishing projects.",
      journeyNote: "Primers, Undercoats & Finishing Categories",
      cta: "Explore Paint Solutions",
      href: "#products",
      accent: "#3CB8B0",
      image:
        "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=85",
      imageAlt: "Professional brushwork and wall paint application",
    },
    {
      number: "04",
      id: "contractors-builders",
      role: "Contractors & Builders",
      audienceLabel: "Residential & Commercial Developments",
      description:
        "Discuss paint requirements and explore solutions for residential and commercial projects.",
      journeyNote: "Direct Project & Product Enquiry",
      cta: "Discuss a Project",
      href: "#contact",
      accent: "#1E73BE",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
      imageAlt: "Contemporary residential and commercial building elevation",
    },
  ] as CustomerSolution[],
};

