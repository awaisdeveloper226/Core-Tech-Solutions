export default function BlogSection() {
  const blogs = [
    {
      title: "Why Every Business Needs a Website in 2025",
      summary:
        "In the digital-first world of 2025, discover why a well-built website is more than a luxury—it's a business necessity.",
      link: "/blog/why-every-business-needs-a-website-2025",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Custom App vs Off-the-Shelf Software",
      summary:
        "Struggling to choose between prebuilt tools and custom solutions? Learn the pros, cons, and the best fit for your business.",
      link: "/blog/custom-app-vs-off-the-shelf",
      image:
        "https://images.unsplash.com/photo-1612832021376-99c0b7b1c6b5?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "SEO Basics for Business Owners",
      summary:
        "Confused by SEO? Here's a practical guide to getting found on Google and growing your organic traffic—no jargon.",
      link: "/blog/seo-basics-business-owners",
      image:
        "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Turn Data Into Business Decisions",
      summary:
        "Explore how analytics helps you make smarter decisions and improve your performance with real-time dashboards.",
      link: "/blog/data-into-decisions",
      image:
        "https://images.unsplash.com/photo-1581093588401-050f19b9f74b?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28" id="blog">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Latest from Our Blog</h2>
        <p className="mt-4 text-lg text-gray-600">
          Insights to help you understand, grow, and succeed in the digital world.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 mb-4">{blog.summary}</p>
              <a
                href={blog.link}
                className="text-blue-600 hover:underline font-medium"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
