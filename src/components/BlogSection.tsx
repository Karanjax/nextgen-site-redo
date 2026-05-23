import { Link } from "@tanstack/react-router";
import { blogPosts } from "@/lib/blog-posts";

const posts = blogPosts;



export function BlogSection() {
  return (
    <section className="py-[120px] px-8 bg-bg-soft" id="blog">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-[50px] gap-5">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-lime-soft text-[#5a7505] rounded-full text-xs font-semibold tracking-wide mb-5">
              Field Notes
            </span>
            <h2 className="text-[clamp(36px,5vw,60px)] font-bold leading-[1.05] tracking-[-0.03em]">
              Latest insights from the lab.
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-magenta transition-colors">
            View all articles
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="bg-white border border-line rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(11,20,55,0.06),0_12px_32px_rgba(11,20,55,0.08)] group"
            >
              <div className="aspect-video overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={800} height={512} />
              </div>
              <div className="p-6">
                <div className="flex justify-between text-xs text-ink-mute font-semibold mb-3">
                  <span className="bg-bg-tint px-2.5 py-0.5 rounded-full uppercase tracking-wider text-[10px]">{post.cat}</span>
                  <span>{post.time}</span>
                </div>
                <h3 className="text-[19px] font-bold tracking-tight leading-snug mb-3.5">{post.title}</h3>
                <span className="text-[13px] font-semibold text-magenta flex items-center gap-1.5">
                  Read article <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
