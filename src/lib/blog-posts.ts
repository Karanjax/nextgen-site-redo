import blogAiSearch from "@/assets/blog-ai-search.jpg";
import blogStrategy from "@/assets/blog-strategy.jpg";
import blogSchema from "@/assets/blog-schema.jpg";

export type BlogPost = {
  slug: string;
  image: string;
  cat: string;
  time: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  content: { type: "p" | "h2" | "h3" | "quote" | "ul"; text?: string; items?: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-search-visibility-law-firms",
    image: blogAiSearch,
    cat: "AI Search",
    time: "4 min read",
    title: "Why law firms need a complete digital system to stay visible in AI search.",
    excerpt:
      "Generative engines don't crawl your site the way Google did a decade ago. Here's the system that keeps you cited.",
    date: "May 18, 2026",
    author: "Kara Noreika",
    content: [
      { type: "p", text: "When a prospective client asks ChatGPT or Perplexity for a recommendation, your firm either shows up — or it doesn't. There is no second page. There is no scroll. The model picks a handful of sources, summarises them, and the conversation moves on." },
      { type: "h2", text: "The old SEO playbook is no longer enough" },
      { type: "p", text: "For two decades, the goal was to rank. Keywords, backlinks, and a decent technical foundation could carry a firm into the top three blue links. AI search rewards something different: structured authority. The engines need to understand who you are, what you do, who you serve, and why you're credible — without ambiguity." },
      { type: "h2", text: "What a complete digital system actually looks like" },
      { type: "ul", items: [
        "Schema markup that makes your services, people, and locations machine-readable",
        "A consistent entity profile across your site, directories, and third-party citations",
        "Long-form content that answers the questions your clients ask in their own words",
        "An authorship layer that ties expertise back to real, verifiable people",
      ] },
      { type: "quote", text: "Visibility in AI search isn't a marketing tactic. It's an infrastructure decision." },
      { type: "h2", text: "Where to start this week" },
      { type: "p", text: "Audit your top five service pages. Can a model summarise them in one paragraph and get the facts right? If the answer is no, that's your starting point. Clarity first, then structure, then distribution." },
      { type: "p", text: "If you'd like a second pair of eyes on where you stand, that's exactly what the discovery call is for." },
    ],
  },
  {
    slug: "ai-revolution-pivots",
    image: blogStrategy,
    cat: "Strategy",
    time: "6 min read",
    title: "Beyond the search bar: 5 ways law firms must pivot for the AI revolution.",
    excerpt: "Five concrete shifts in how marketing, content, and client intake need to work in an AI-first world.",
    date: "May 4, 2026",
    author: "Kara Noreika",
    content: [
      { type: "p", text: "The search bar is shrinking. Conversational interfaces are growing. The firms that adapt now will own the next decade of client acquisition." },
      { type: "h2", text: "1. Treat content as training data" },
      { type: "p", text: "Every page you publish is a candidate citation for a language model. Write with that audience in mind: clear claims, sourced facts, defined terms." },
      { type: "h2", text: "2. Build for entities, not keywords" },
      { type: "p", text: "Models reason about people, places, services, and cases — not strings of text. Your job is to make every entity in your firm legible." },
      { type: "h2", text: "3. Measure share of voice, not rank" },
      { type: "p", text: "Position one in Google means very little when a model never surfaces a list. Track how often you're cited, and for which prompts." },
      { type: "h2", text: "4. Invest in authorship" },
      { type: "p", text: "Bylined, credentialed authors with a verifiable trail across the web outperform anonymous content every time." },
      { type: "h2", text: "5. Build the feedback loop" },
      { type: "p", text: "Prompt-test your firm weekly. The results will change. Your content strategy should change with them." },
    ],
  },
  {
    slug: "schema-markup-citations",
    image: blogSchema,
    cat: "Schema",
    time: "5 min read",
    title: "Schema markup: the secret behind websites Google and AI choose to cite.",
    excerpt: "A practical primer on the structured data that makes your pages legible to machines — and irresistible to AI engines.",
    date: "April 22, 2026",
    author: "Kara Noreika",
    content: [
      { type: "p", text: "Schema markup is the quiet, invisible layer that turns a webpage from a wall of text into a structured record a machine can reason about." },
      { type: "h2", text: "Why it matters more than ever" },
      { type: "p", text: "Generative engines need confidence before they cite you. Schema gives them that confidence by labelling exactly what each piece of content represents — a service, a person, an article, an FAQ." },
      { type: "h2", text: "The four schemas every firm should run" },
      { type: "ul", items: [
        "Organization — your name, logo, contact details, and social profiles",
        "Person — every attorney, with credentials and areas of expertise",
        "Service — each practice area, with description and audience",
        "FAQPage — the real questions clients ask, answered concisely",
      ] },
      { type: "quote", text: "If the structured data is missing or wrong, the model will guess. You don't want it guessing." },
      { type: "h2", text: "How to validate what you have" },
      { type: "p", text: "Run your top pages through Google's Rich Results Test. If errors appear, fix them this week. If nothing appears at all, that's the bigger problem." },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
