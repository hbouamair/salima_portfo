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
    slug: "bougroug-nataal-media-campaign",
    title: "Behind the Scenes: The Bougroug x Nataal Media Campaign",
    date: "March 12, 2025",
    category: "Editorial",
    excerpt:
      "Stepping into the world of Bougroug with styling by Anwar Bougroug and Ucee Fel Idrissi, photographed by Keziah Quarcoo for Nataal Media. A celebration of Moroccan fashion on the global stage.",
    image: "/images/pro6.jpeg",
    coverHero: "/images/pro6.jpeg",
    paragraphs: [
      "Some campaigns feel like they were meant to exist long before anyone dreamed them up. The Bougroug x Nataal Media shoot was one of those — a collision of Moroccan heritage and contemporary fashion that felt both inevitable and groundbreaking.",
      "Working with stylist Anwar Bougroug and Ucee Fel Idrissi brought a level of creative intention that elevated every frame. Each look was a conversation between tradition and modernity — draped fabrics meeting architectural silhouettes, earthy tones playing against unexpected metallic accents.",
      "Photographer Keziah Quarcoo captured the energy with precision. Her eye for natural light and movement turned what could have been a standard campaign into something that felt more like visual storytelling. Art director Sheena Brobbey orchestrated the entire vision, ensuring that every detail — from the set design to the final edit — served the larger narrative.",
      "Being featured in Nataal Media, a platform dedicated to amplifying African and diaspora creativity, added deeper meaning to the project. It wasn't just about clothes or poses; it was about representation, about showing that Moroccan fashion deserves its place in the global conversation.",
      "Wearing both Bougroug and Late For Work Wear, I felt the weight and the lightness of what these brands represent — rooted in identity, reaching for something universal.",
    ],
    blockquote:
      "Fashion is never just fabric. It's the story you choose to tell the world about where you come from and where you're going.",
  },
  {
    slug: "high-atlas-editorial",
    title: "Chrome Lips at 2,600 Meters: The High Atlas Editorial",
    date: "February 28, 2025",
    category: "Fashion",
    excerpt:
      "She didn't come to ski. Purple fur on frozen rock. Chrome lips at 2,600 meters. Heels where boots should be. The Atlas didn't know what to do with her — so it watched.",
    image: "/images/pr4.jpeg",
    coverHero: "/images/pr5.jpeg",
    paragraphs: [
      "There's something about shooting in the High Atlas Mountains that strips away everything artificial. At 2,600 meters, the air is thinner, the light is sharper, and every creative decision feels amplified against the raw scale of the landscape.",
      "The concept was deliberate contrast — high fashion against high altitude. Purple fur draped over frozen rock. Chrome-finished lips catching the mountain sun. Heels planted where hiking boots belonged. The mountains have seen centuries of travelers, but they'd never seen anything quite like this.",
      "Every shot was a negotiation between the elements and the vision. The wind had its own ideas about how the fur should fall. The ice had opinions about where I could stand. But that tension — between control and chaos — is exactly what made the images feel alive.",
      "The Atlas Mountains are patient. They've watched civilizations rise and fall. For one afternoon, they watched a fashion shoot unfold on their ancient slopes, and I'd like to think they were at least a little curious.",
    ],
    blockquote:
      "The most powerful fashion moments happen when you take something completely out of context. That's where the magic lives — in the collision between worlds.",
  },
  {
    slug: "papers-editorial-morocco",
    title: "Papers: An Editorial Shot in Morocco",
    date: "February 15, 2025",
    category: "Photography",
    excerpt:
      "A creative collaboration with photographer Anonym Shot, art directed by Elboumeima, with makeup by Karima Aboulhouda. Morocco, 2025.",
    image: "/images/pro8.jpg",
    coverHero: "/images/pro8.jpg",
    paragraphs: [
      "The 'Papers' editorial was born from a simple idea: what happens when you strip fashion photography down to its raw materials? Paper, light, skin, texture. No elaborate sets, no digital manipulation — just the essential elements working in harmony.",
      "Photographer Anonym Shot brought a documentary sensibility to the editorial work, capturing moments that felt candid even when they were carefully composed. Art director Elboumeima created a visual language around paper — folded, crumpled, torn, and reborn — as a metaphor for the creative process itself.",
      "Karima Aboulhouda's makeup work deserves special recognition. She created looks that complemented the paper theme without being literal — dewy skin that caught light like gloss on a fresh print, lip colors that echoed the warm tones of aged parchment. With assistance from Amz Shot on set, every technical detail was handled with precision.",
      "Shooting in Morocco always adds a layer of meaning to the work. The light here is different — golden and forgiving, harsh and dramatic, sometimes within the same hour. It's a light that tells the truth, and 'Papers' needed that honesty.",
    ],
  },
  {
    slug: "winter-rehearsed-editorial",
    title: "Winter, Rehearsed: Behind the Frozen Set",
    date: "January 20, 2025",
    category: "Editorial",
    excerpt:
      "A winter editorial brought to life by an international creative team — from styling by Moda Na Kota to fashion by Wasp Fashion Style, captured by Novarita Photography.",
    image: "/images/pro11.jpg",
    coverHero: "/images/pro11.jpg",
    paragraphs: [
      "Winter is the season fashion loves to romanticize — the coats, the layers, the excuse for dramatic silhouettes and rich textures. 'Winter, Rehearsed' leaned into that romance, but with a twist: we treated winter not as a season to endure, but as a performance to perfect.",
      "Stylist Moda Na Kota curated looks that balanced practicality with fantasy. Each outfit told a story of someone who wasn't just surviving winter, but commanding it. Designer Wasp Fashion Style contributed pieces that walked the line between structured and fluid — architectural in form, but alive in motion.",
      "Makeup artist Elena MUA Pro created looks that echoed the cold palette of the environment — icy highlights, muted lips, skin that seemed to glow from within despite the grey skies. Every detail supported the narrative of elegant resilience.",
      "Photographer Novarita captured it all with a sensitivity to mood and atmosphere. The images don't just show winter fashion — they make you feel the chill, hear the crunch of snow, sense the quiet determination it takes to look this composed when the temperature drops below zero.",
      "This was teamwork at its finest — a group of creatives from different backgrounds and disciplines, coming together to rehearse winter until it was perfect.",
    ],
    blockquote:
      "The best fashion editorials don't just show you what to wear. They show you who to be.",
  },
  {
    slug: "enlightened-series",
    title: "ENLIGHTENED: Finding Light in Every Frame",
    date: "December 10, 2024",
    category: "Art Direction",
    excerpt:
      "A deeply personal series exploring the relationship between light, shadow, and self-expression in fashion photography.",
    image: "/images/pro9.jpeg",
    coverHero: "/images/pro9.jpeg",
    paragraphs: [
      "ENLIGHTENED started as a concept about lighting techniques and evolved into something much more personal. The series explores what it means to be 'seen' — not just in the photographic sense, but in the deeper, more vulnerable sense of being truly visible.",
      "In fashion, we spend so much time curating surfaces — the right angle, the right expression, the right amount of mystery. But the moments that truly resonate are the ones where the surface cracks open and something real shines through. That's what enlightenment means in this context: the courage to let light reach the places you usually keep in shadow.",
      "Each image in the series plays with literal and figurative illumination. Hard light that reveals texture and imperfection. Soft light that wraps and protects. Colored light that transforms and transports. The techniques serve the emotion, never the other way around.",
      "Looking back at the final images, I see a story about growth — about learning to be comfortable in the spotlight, about understanding that vulnerability is not the opposite of strength but its truest expression.",
    ],
  },
  {
    slug: "dream-team-mouslam-rabat",
    title: "Dream Team: A Day with Mouslam Rabat",
    date: "November 25, 2024",
    category: "Behind the Scenes",
    excerpt:
      "When the creative chemistry is right, magic happens. A look inside a collaborative shoot with Mouslam Rabat, Lisa Lea J, and Karima Maruan.",
    image: "/images/pro1.jpeg",
    coverHero: "/images/pro1.jpeg",
    paragraphs: [
      "Some shoots are work. Some shoots are play. The best ones are both. Working with Mouslam Rabat, Lisa Lea J, and Karima Maruan was one of those rare sessions where every element clicked into place — the kind of day where you lose track of time because the creative energy keeps building.",
      "What makes a 'dream team' in fashion isn't just individual talent — it's the chemistry between collaborators. Mouslam Rabat brought vision and direction, Lisa Lea J contributed an eye for detail that caught things the rest of us missed, and Karima Maruan's work on styling pulled everything into a cohesive visual story.",
      "The session produced images that feel effortless, which is ironic because they were the product of hours of careful preparation, spontaneous improvisation, and the kind of creative debate that only happens when everyone trusts each other enough to push back.",
      "In an industry that often celebrates the solo genius — the lone photographer, the visionary designer — it's worth remembering that the best work is almost always collaborative. It's the conversation between talents, the friction and the harmony, that produces something none of us could have created alone.",
    ],
    blockquote:
      "The best creative partnerships don't happen by accident. They happen when talented people choose to be generous with each other.",
  },
  {
    slug: "nitah-official-campaign",
    title: "For Nitah Official: Moroccan Luxury Reimagined",
    date: "October 18, 2024",
    category: "Campaign",
    excerpt:
      "A campaign shoot for Nitah Official that celebrates Moroccan craftsmanship and contemporary luxury — where heritage meets the future.",
    image: "/images/pro4.jpeg",
    coverHero: "/images/pro4.jpeg",
    paragraphs: [
      "Working with Nitah Official was an opportunity to explore what Moroccan luxury looks like in 2024 — not as a nostalgic callback to traditional aesthetics, but as a living, evolving conversation between heritage and innovation.",
      "Nitah's designs carry the DNA of Moroccan craftsmanship: the precision of zellige tilework translated into geometric patterns, the fluidity of traditional draping reimagined in contemporary cuts, the richness of color that Morocco is famous for refined into a modern palette.",
      "The campaign was shot to reflect this duality. Clean, minimal compositions that let the clothes speak, balanced with environmental shots that rooted the collection in its Moroccan context. Every frame asked the same question: what does it look like when a culture's fashion legacy grows up?",
      "As a Moroccan model, campaigns like this carry personal significance. They're not just jobs; they're opportunities to participate in the story of Moroccan fashion — to help shape how the world sees us and how we see ourselves.",
    ],
  },
  {
    slug: "the-art-of-the-bangs",
    title: "Bangs Effect: How a Simple Change Transforms Everything",
    date: "September 5, 2024",
    category: "Style",
    excerpt:
      "Sometimes the smallest changes make the biggest impact. Exploring how a new hairstyle can completely shift your presence in front of the camera.",
    image: "/images/post4.jpeg",
    coverHero: "/images/post4.jpeg",
    paragraphs: [
      "Bangs. Such a small thing — a few inches of hair falling across the forehead — and yet the effect is seismic. After years of pulled-back, clean-lined looks, switching to bangs felt like unlocking a completely different character.",
      "In modeling, your face is your instrument, and every change to its framing alters the music. Bangs add mystery — they partially conceal the eyes, creating shadow and depth where there was openness. They soften strong features and add edge to soft ones. They're a contradiction in hair form.",
      "The camera reads bangs differently depending on the light, the angle, the mood. Straight-on, they create a bold, graphic frame. From the side, they reveal and conceal in equal measure. In motion, they add a dynamic element that photographers love — unpredictable, alive, never quite the same twice.",
      "What I didn't expect was how much the change would affect me personally. Looking in the mirror, I saw a version of myself I'd never met before — familiar but different, recognizable but mysterious. That's the real bangs effect: not just a change in appearance, but a shift in how you see yourself.",
    ],
  },
  {
    slug: "modeling-in-morocco-2024",
    title: "The Rise of Moroccan Fashion: A Model's Perspective",
    date: "August 14, 2024",
    category: "Industry",
    excerpt:
      "Morocco's fashion scene is experiencing a renaissance. From Casablanca to Marrakech, local designers and international brands are turning their eyes to the Kingdom.",
    image: "/images/pr5.jpeg",
    coverHero: "/images/pr4.jpeg",
    paragraphs: [
      "Something is happening in Moroccan fashion, and it's bigger than any single brand or designer. The Kingdom is experiencing a creative renaissance — a generation of designers, photographers, stylists, and models who are redefining what Moroccan fashion means on the global stage.",
      "From Casablanca's avant-garde studios to Marrakech's artisan workshops, there's an energy that's impossible to ignore. Brands like Bougroug and Nitah are proving that Moroccan luxury can compete with — and often surpass — European fashion houses in terms of craftsmanship, vision, and cultural relevance.",
      "For models, this shift is transformative. A decade ago, a Moroccan model's career trajectory almost always pointed outward — to Paris, Milan, New York. Today, there's a growing recognition that world-class work can happen right here. International magazines are featuring Moroccan talent. Global brands are shooting campaigns in Moroccan locations. The direction of influence is beginning to reverse.",
      "But there's still work to do. Infrastructure, representation, industry standards — these are areas where Morocco's fashion ecosystem is still developing. The progress is real, but it's not automatic. It requires intentional effort from everyone involved: designers who invest in local talent, agencies that fight for fair treatment, and models who use their platforms to advocate for the industry they're building.",
      "I'm proud to be part of this moment. Proud to work with Moroccan creatives who refuse to compromise their vision. Proud to represent a country whose fashion story is just beginning to be told.",
    ],
    blockquote:
      "The future of fashion isn't being decided only in Paris or Milan. It's being shaped in places like Casablanca, Lagos, and São Paulo — wherever creativity meets cultural depth.",
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
