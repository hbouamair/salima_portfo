export type PortfolioCategory =
  | "Editorial"
  | "Campaign"
  | "Fashion"
  | "Commercial"
  | "Portrait";

export type PortfolioItem = {
  slug: string;
  title: string;
  category: PortfolioCategory;
  image: string;
  span?: "tall" | "wide";
  description?: string;
  client?: string;
  year?: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "bougroug-nataal",
    title: "Bougroug x Nataal",
    category: "Editorial",
    image: "/images/pro6.jpeg",
    span: "tall",
    description:
      "An editorial collaboration with Bougroug and Nataal Media exploring the intersection of Moroccan heritage and contemporary fashion. Shot on location in Casablanca, the series reinterprets traditional silhouettes through a modern lens.",
    client: "Nataal Media",
    year: "2024",
  },
  {
    slug: "desert-mirage",
    title: "Desert Mirage",
    category: "Campaign",
    image: "/images/pr4.jpeg",
    description:
      "Campaign shoot capturing the raw beauty of Morocco's arid landscapes. Warm earth tones and flowing fabrics create an ethereal contrast against the sunlit terrain.",
    client: "Bougroug",
    year: "2023",
  },
  {
    slug: "golden-hour",
    title: "Golden Hour",
    category: "Portrait",
    image: "/images/pro9.jpeg",
    description:
      "A portrait series shot during the fleeting moments of golden hour. The warm light sculpts and reveals, creating an intimate dialogue between subject and environment.",
    year: "2024",
  },
  {
    slug: "retro-summer",
    title: "Retro Summer",
    category: "Commercial",
    image: "/images/pro5.jpg",
    span: "tall",
    description:
      "A vibrant commercial shoot channeling retro summer aesthetics — bold colors, playful styling, and a carefree Moroccan backdrop that brings vintage-inspired fashion to life.",
    client: "Brand Campaign",
    year: "2023",
  },
  {
    slug: "chrome-atlas",
    title: "Chrome Atlas",
    category: "Fashion",
    image: "/images/pr5.jpeg",
    description:
      "A fashion-forward exploration of metallic textures and sharp geometry, merging avant-garde styling with an industrial mood.",
    year: "2024",
  },
  {
    slug: "noir-studio",
    title: "Noir Studio",
    category: "Portrait",
    image: "/images/pro2.jpeg",
    description:
      "Stripped-back black-and-white studio portraits that focus on form, movement, and raw energy. Minimal styling allows the personality of the subject to command every frame.",
    year: "2024",
  },
  {
    slug: "moroccan-heritage",
    title: "Moroccan Heritage",
    category: "Campaign",
    image: "/images/pro4.jpeg",
    span: "wide",
    description:
      "A campaign celebrating Moroccan craftsmanship and cultural identity. Traditional textiles meet contemporary design in a series that honors heritage while looking firmly forward.",
    client: "Nitah Official",
    year: "2023",
  },
  {
    slug: "seaside-editorial",
    title: "Seaside Editorial",
    category: "Editorial",
    image: "/images/post6.jpeg",
    description:
      "An energetic editorial set along the Moroccan coast, blending sportswear styling with the carefree spirit of summer by the sea.",
    year: "2023",
  },
  {
    slug: "terrace-gold",
    title: "Terrace Gold",
    category: "Fashion",
    image: "/images/pro10.jpeg",
    description:
      "Shot on a Casablanca rooftop with the city sprawling below, this series pairs opulent gold accessories with flowing traditional garments for a look that is both regal and modern.",
    year: "2024",
  },
  {
    slug: "the-wall",
    title: "The Wall",
    category: "Portrait",
    image: "/images/pro3.jpeg",
    span: "tall",
    description:
      "An architectural portrait study using clean geometric lines and negative space. The interplay of skin, stone, and shadow creates a striking visual tension.",
    year: "2023",
  },
  {
    slug: "winter-rehearsed",
    title: "Winter Rehearsed",
    category: "Editorial",
    image: "/images/pro11.jpg",
    description:
      "A moody winter editorial that layers rich textures and deep tones, capturing the quiet intensity of the colder season through fashion storytelling.",
    year: "2024",
  },
  {
    slug: "enlightened",
    title: "Enlightened",
    category: "Portrait",
    image: "/images/post5.jpeg",
    description:
      "A studio portrait bathed in warm amber light, exploring themes of introspection and quiet strength. Jewelry and bare form create a contemplative visual narrative.",
    year: "2024",
  },
  {
    slug: "market-day",
    title: "Market Day",
    category: "Commercial",
    image: "/images/pro1.jpeg",
    description:
      "A commercial campaign set in the vibrant energy of a Moroccan market. Colorful surroundings and natural movement bring an authentic, lived-in quality to the collection.",
    client: "Brand Campaign",
    year: "2023",
  },
  {
    slug: "raw-expression",
    title: "Raw Expression",
    category: "Editorial",
    image: "/images/pro8.jpg",
    span: "tall",
    description:
      "A raw and unfiltered editorial exploring movement and emotion in their most authentic form, stripping back artifice to reveal something deeply human.",
    year: "2024",
  },
  {
    slug: "elegance",
    title: "Elegance",
    category: "Fashion",
    image: "/images/pr6.jpeg",
    description:
      "A fashion series built around the concept of effortless elegance, combining clean lines with luxe fabrics for a timeless yet modern result.",
    year: "2023",
  },
];

export function getPortfolioBySlug(slug: string) {
  return portfolioItems.find((p) => p.slug === slug);
}
