"use client";
import Image from "next/image";
import Link from "next/link";

export default function BlogSection() {
  const blogs = [
    {
      title: "Why Every Business Needs a Website in 2025",
      summary:
        "Explore how a modern, responsive website built with cutting-edge web development techniques can transform your business and boost your online presence.",
      link: "/blog/why-every-business-needs-a-website-2025",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Choosing Between Custom Apps and Off-the-Shelf Solutions",
      summary:
        "Discover how tailored app development can meet your unique business needs better than generic software, and why it's a smart long-term investment.",
      link: "/blog/custom-app-vs-off-the-shelf",
      image:
        "https://images.unsplash.com/photo-1612832021376-99c0b7b1c6b5?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "SEO Strategies That Drive Real Traffic in 2025",
      summary:
        "Learn the latest SEO optimization techniques to improve your search rankings, increase organic traffic, and stay ahead in a competitive digital market.",
      link: "/blog/seo-basics-business-owners",
      image:
        "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Automating Your Business Processes for Efficiency and Growth",
      summary:
        "Explore powerful automation tools and scripts that can streamline operations, save time, and increase productivity across your business workflows.",
      link: "/blog/business-automation-tools",
      image:
        "https://images.unsplash.com/photo-1581093588401-050f19b9f74b?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28" id="blog">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
          Latest from Our Blog
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Insights on Web Development, App Development, SEO, and Automation to
          help your business thrive.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="group rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-500"
          >
            <div className="relative overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                width={800} // Set appropriate dimensions
                height={450} // Maintain aspect ratio (800x450 ≈ 16:9)
                className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {blog.title}
              </h3>
              <p className="text-gray-600 mt-3 mb-5">{blog.summary}</p>
              <Link
                href={blog.link}
                className="inline-flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all duration-300"
              >
                Read More
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
