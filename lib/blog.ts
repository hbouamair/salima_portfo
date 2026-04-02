export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  coverHero?: string;
  paragraphs: string[];
  blockquote?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "something-i-need-to-tell-you",
    title: "Something I need to tell you",
    date: "September 18, 2016",
    category: "Nature",
    excerpt:
      "Gathering stars deep he For above open morning fruit blessed, void. Sea seed fruit were don't, days man second.",
    image: "/images/post-1-mid.jpg",
    coverHero: "/images/post1.jpg",
    paragraphs: [
      "Gathering stars deep he For above open morning fruit blessed, void. Sea seed fruit were don't, days man second. In day isn't own Whales also evening it together.",
      "Created midst beast lights dominion he life fill very for their. Divide let kind created all she'd unto stars. And behold greater may in god image void cattle us days midst creepeth. Sixth also. Tree give it beast upon. Saying land in.",
      "All. Seasons saying creepeth appear hath fruitful. Male he years which abundantly beast you'll stars lesser creepeth Unto midst creepeth make. Isn't air, unto light forth divide their days. Fish.",
    ],
  },
  {
    slug: "heres-a-simple-trick",
    title: "Here's a Simple Trick",
    date: "September 5, 2016",
    category: "Cities",
    excerpt:
      "Blessed cattle. Can't morning Over female, of divided. Rule were great i female.",
    image: "/images/post-2-mid.jpg",
    coverHero: "/images/post2.jpg",
    paragraphs: [
      "Blessed cattle. Can't morning Over female, of divided. Rule were great i female. Male. You're set first gathered, made behold so meat, tree for evening dominion you're let is, great said isn't fruitful i.",
      "Creeping, darkness have waters, let signs bring multiply. Face own fowl seasons morning appear. Living his lights. Set earth she'd i grass, forth from a fourth deep be seas also seasons them.",
    ],
  },
  {
    slug: "the-history-of-nature",
    title: "The History of Nature",
    date: "August 27, 2016",
    category: "Nature",
    excerpt:
      "Appear from tree day is he which without evening. Creeping above land beast seasons very was give brought i.",
    image: "/images/post-3-mid.jpg",
    coverHero: "/images/post3.jpg",
    paragraphs: [
      "Appear from tree day is he which without evening. Creeping above land beast seasons very was give brought i. Their. Set life gathering shall spirit day lights sixth moveth. Life meat. Was sixth cattle subdue creeping every a, can't behold, moveth.",
      "Seasons saying creeping fruitful grass. Moving hath great don't abundantly sea that which two waters waters. Third in isn't creepeth above was fruitful of herb to.",
    ],
  },
  {
    slug: "are-you-doing-the-right-way",
    title: "Are you doing the Right Way?",
    date: "August 14, 2016",
    category: "Branding",
    excerpt:
      "Life set land bearing him fifth whose waters. For be. Also. Darkness the firmament very all saying.",
    image: "/images/post-4-mid.jpg",
    coverHero: "/images/post4.jpeg",
    paragraphs: [
      "Life set land bearing him fifth whose waters. For be. Also. Darkness the firmament very all saying. Firmament and day you. May that form itself greater have fill air fruit said a.",
      "Man shall firmament second that had seas. Deep. Unto herb. Fruitful, male grass land, living you you're there gathering also Lights be, set, fly.",
    ],
  },
  {
    slug: "ten-things-about-photography",
    title: "Ten things about Photography",
    date: "August 14, 2016",
    category: "Design",
    excerpt:
      "Etiam cursus. Leo nulla sapien dignissim magnis taciti rutrum tempus ut.",
    image: "/images/post-5-mid.jpg",
    coverHero: "/images/post5.jpeg",
    paragraphs: [
      "Etiam cursus. Leo nulla sapien dignissim magnis taciti rutrum tempus ut. Quam lacinia cras varius nullam non condimentum ut euismod integer. Rutrum sociosqu gravida ultricies litora magnis ullamcorper cursus dolor parturient sed senectus sed accumsan.",
    ],
  },
  {
    slug: "why-you-should-always-first",
    title: "Why you should Always First",
    date: "August 14, 2016",
    category: "Design",
    excerpt:
      "Shall together meat is two years deep beast Whose also green above life kind him bring them called subdue signs.",
    image: "/images/post-6-mid.jpg",
    coverHero: "/images/post-6.jpg",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus orci a purus lacinia consectetur. Vestibulum rutrum ex in odio placerat dictum.",
      "Quisque cursus risus id ante fermentum, in auctor quam consectetur. Vestibulum est nisi, tempus ac vehicula sit amet, blandit et sapien.",
      "Pellentesque viverra nisl a erat volutpat commodo. Etiam sem justo, pellentesque egestas finibus at, rutrum efficitur ex.",
    ],
    blockquote:
      "Donec consectetur arcu eu diam cursus consectetur. Interdum malesuada faucibus. Morbi dapibus eros vitae nisi blandit lacinia.",
  },
  {
    slug: "my-favorite-place-on-earth-is",
    title: "My Favorite Place on earth is...",
    date: "June 21, 2016",
    category: "Cities",
    excerpt:
      "Morning hath. Open beginning won't signs him a us. Said open, and fowl under female blessed cattle seas cattle beginning they're.",
    image: "/images/post-9-mid.jpg",
    coverHero: "/images/post9.png",
    paragraphs: [
      "Morning hath. Open beginning won't signs him a us. Said open, and fowl under female blessed cattle seas cattle beginning they're. Waters.",
      "Dry all which fly upon without firmament to fruitful let have divide fifth firmament days.",
    ],
  },
  {
    slug: "five-things-about-nature",
    title: "Five things about Nature",
    date: "July 3, 2016",
    category: "Nature",
    excerpt:
      "Us saw his firmament give face moveth air beast every, after stars also moved together day replenish had doesn't seasons multiply morning upon spirit she'd appear.",
    image: "/images/post-7-mid.jpg",
    coverHero: "/images/post7.jpeg",
    paragraphs: [
      "Us saw his firmament give face moveth air beast every, after stars also moved together day replenish had doesn't seasons multiply morning upon spirit she'd appear.",
      "Bring won't it wherein likeness yielding fly light. Dominion moving she'd whose was beginning they're seed days days from day image heaven, kind and seas light dry, without lesser sixth seed make and, fowl may saying, void.",
    ],
  },
  {
    slug: "the-history-of-branding",
    title: "The History of Branding",
    date: "June 26, 2016",
    category: "Branding",
    excerpt:
      "Subdue divide. From is subdue face signs grass spirit man bearing, gathering under fly cattle night over air given fowl saw.",
    image: "/images/post-8-mid.jpg",
    coverHero: "/images/post8.jpg",
    paragraphs: [
      "Subdue divide. From is subdue face signs grass spirit man bearing, gathering under fly cattle night over air given fowl saw. Fruit subdue. Without won't.",
      "Had herb dry a likeness divide under beast midst in open subdue multiply brought, under two waters behold abundantly creeping.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
