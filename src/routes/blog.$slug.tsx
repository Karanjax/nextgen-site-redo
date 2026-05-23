import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import witLogo from "@/assets/wit-logo-full.png";
import { blogPosts, getPostBySlug, type BlogPost } from "@/lib/blog-posts";


export const Route = createFileRoute("/blog/$slug")({
  component: BlogPostPage,
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    const title = post ? `${post.title} — Woman In Tech` : "Article — Woman In Tech";
    const description = post?.excerpt ?? "Insights from the Woman In Tech lab.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        ...(post ? [{ property: "og:image", content: post.image as unknown as string }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background text-ink">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-3">Article not found</h1>
        <Link to="/" className="text-magenta font-semibold">← Back home</Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen flex items-center justify-center bg-background text-ink">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-3">Something went wrong</h1>
        <button onClick={reset} className="text-magenta font-semibold">Try again</button>
      </div>
    </div>
  ),
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Minimal nav */}
      <nav
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] max-w-[1200px]"
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          alignItems: "center",
          gap: "32px",
          padding: "6px 12px 6px 16px",
          background: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(20px)",
          border: "1px solid var(--line)",
          borderRadius: "100px",
          boxShadow: "0 1px 2px rgba(11,20,55,0.04), 0 2px 6px rgba(11,20,55,0.04)",
        }}
      >
        <Link to="/" className="flex items-center" aria-label="Woman In Tech home">
          <img src={witLogo} alt="Woman In Tech" className="h-20 w-auto object-contain" />
        </Link>

        <div className="hidden md:flex gap-2 justify-center">
          {[
            { label: "Home", href: "/" },
            { label: "Framework", href: "/#framework" },
            { label: "Results", href: "/#results" },
            { label: "About", href: "/#about" },
            { label: "Insights", href: "/#blog" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium rounded-full text-ink-soft hover:text-ink hover:bg-bg-tint transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
          style={{ background: "linear-gradient(135deg, #e91e8a, #ff7a1a)" }}
        >
          Contact
        </Link>
      </nav>

      {/* Article hero */}
      <article className="pt-36 md:pt-44 pb-24 px-6">
        <div className="max-w-[820px] mx-auto">
          <Link
            to="/"
            hash="blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-soft hover:text-magenta transition-colors mb-8"
          >
            <span aria-hidden>←</span> Back to insights
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-lime-soft text-[#5a7505] rounded-full text-xs font-semibold uppercase tracking-wider">
              {post.cat}
            </span>
            <span className="text-sm text-ink-mute">{post.date}</span>
            <span className="text-sm text-ink-mute">·</span>
            <span className="text-sm text-ink-mute">{post.time}</span>
          </div>

          <h1 className="text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink mb-6">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-ink-soft leading-relaxed mb-10">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-3 mb-12 pb-8 border-b border-line">
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ background: "linear-gradient(135deg, #e91e8a, #ff7a1a)" }}
            >
              KN
            </div>
            <div>
              <div className="text-sm font-semibold text-ink">{post.author}</div>
              <div className="text-xs text-ink-mute">Founder, Woman In Tech</div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-line mb-12">
            <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
          </div>

          {/* Body */}
          <div className="space-y-6 text-[17px] leading-[1.75] text-ink-soft">
            {(post.content as BlogPost["content"]).map((block, i: number) => {
              if (block.type === "h2") {
                return (
                  <h2 key={i} className="text-2xl md:text-3xl font-bold text-ink tracking-tight pt-6">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "h3") {
                return (
                  <h3 key={i} className="text-xl font-bold text-ink tracking-tight pt-4">
                    {block.text}
                  </h3>
                );
              }
              if (block.type === "quote") {
                return (
                  <blockquote
                    key={i}
                    className="border-l-4 border-magenta pl-6 py-2 text-xl md:text-2xl font-semibold text-ink italic"
                  >
                    {block.text}
                  </blockquote>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={i} className="list-disc pl-6 space-y-2 marker:text-magenta">
                    {block.items?.map((item: string, j: number) => (
                      <li key={j}>{item}</li>

                    ))}
                  </ul>
                );
              }
              return (
                <p key={i}>{block.text}</p>
              );
            })}
          </div>

          {/* CTA */}
          <div
            className="mt-16 p-8 md:p-10 rounded-3xl text-white"
            style={{ background: "linear-gradient(135deg, #0b1437 0%, #1a2660 100%)" }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Want to put this into practice?</h3>
            <p className="text-white/75 mb-6 max-w-xl">
              Book a free 30-minute discovery call and we'll map out your visibility gaps together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-ink font-semibold text-sm hover:bg-white/90 transition-colors"
            >
              Book a call →
            </Link>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="px-6 pb-24 bg-bg-soft pt-20">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-ink">Keep reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="bg-white border border-line rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(11,20,55,0.06),0_12px_32px_rgba(11,20,55,0.08)] group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between text-xs text-ink-mute font-semibold mb-3">
                      <span className="bg-bg-tint px-2.5 py-0.5 rounded-full uppercase tracking-wider text-[10px]">{p.cat}</span>
                      <span>{p.time}</span>
                    </div>
                    <h3 className="text-[19px] font-bold tracking-tight leading-snug mb-3.5 text-ink">{p.title}</h3>
                    <span className="text-[13px] font-semibold text-magenta flex items-center gap-1.5">
                      Read article <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
