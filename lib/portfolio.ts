export type PortfolioCategory =
  | "Mockup"
  | "Print"
  | "Branding"
  | "Design"
  | "Photography";

export type PortfolioItem = {
  slug: string;
  title: string;
  category: PortfolioCategory;
  image: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "vinyl-record",
    title: "Vinyl Record",
    category: "Mockup",
    image: "/images/pr1.jpg",
  },
  {
    slug: "modern-t-shirt",
    title: "Modern T-Shirt",
    category: "Print",
    image: "/images/pr2.jpg",
  },
  {
    slug: "minimal-bag",
    title: "Minimal Bag",
    category: "Branding",
    image: "/images/pr3.jpg",
  },
  {
    slug: "clean-groovy",
    title: "Clean & Groovy",
    category: "Design",
    image: "/images/pr4.jpeg",
  },
  {
    slug: "minimal-mobile-app",
    title: "Minimal Mobile App",
    category: "Design",
    image: "/images/pr5.jpeg",
  },
  {
    slug: "white-t-shirt",
    title: "White T-Shirt",
    category: "Print",
    image: "/images/pr6.jpeg",
  },
  {
    slug: "business-card",
    title: "Business Card",
    category: "Branding",
    image: "/images/pr7.jpg",
  },
  {
    slug: "heja-stockholm",
    title: "Heja Stockholm",
    category: "Photography",
    image: "/images/pr8.jpg",
  },
  {
    slug: "paper-bag",
    title: "Paper Bag",
    category: "Photography",
    image: "/images/pr9.jpg",
  },
];

export function getPortfolioBySlug(slug: string) {
  return portfolioItems.find((p) => p.slug === slug);
}
