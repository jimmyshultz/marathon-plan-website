import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Marathon Pace: How to Find Your Sweet Spot",
      excerpt: "Learning to run at the right pace is crucial for marathon success. Discover how to determine your marathon pace and why pacing strategy can make or break your race.",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Training",
      slug: "understanding-marathon-pace"
    },
    {
      id: 2,
      title: "The Science Behind Jack Daniels' VDOT System",
      excerpt: "Dive deep into the physiological principles that make Dr. Jack Daniels' training methodology so effective for distance runners of all levels.",
      date: "December 10, 2024",
      readTime: "12 min read",
      category: "Science",
      slug: "jack-daniels-vdot-system"
    },
    {
      id: 3,
      title: "Marathon Fueling: What to Eat Before, During, and After",
      excerpt: "Master your marathon nutrition strategy with evidence-based guidelines for pre-race meals, in-race fueling, and post-marathon recovery nutrition.",
      date: "December 8, 2024",
      readTime: "10 min read",
      category: "Nutrition",
      slug: "marathon-fueling-guide"
    },
    {
      id: 4,
      title: "Common Marathon Training Mistakes and How to Avoid Them",
      excerpt: "Learn from the most frequent errors that derail marathon training and discover practical strategies to stay on track toward your goal.",
      date: "December 5, 2024",
      readTime: "9 min read",
      category: "Training",
      slug: "marathon-training-mistakes"
    },
    {
      id: 5,
      title: "Building Your Base: The Foundation of Marathon Success",
      excerpt: "Why aerobic base building is essential for marathon performance and how to develop it effectively in your training program.",
      date: "December 1, 2024",
      readTime: "11 min read",
      category: "Training",
      slug: "building-aerobic-base"
    },
    {
      id: 6,
      title: "Mental Strategies for Marathon Success",
      excerpt: "Develop mental toughness and race-day confidence with proven psychological techniques used by elite marathon runners.",
      date: "November 28, 2024",
      readTime: "7 min read",
      category: "Mental Training",
      slug: "mental-strategies-marathon"
    }
  ];

  const categories = ["All", "Training", "Science", "Nutrition", "Mental Training"];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Marathon Training Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, training tips, and evidence-based advice to help you achieve your marathon goals
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 bg-white border border-gray-300 rounded-full hover:bg-blue-50 hover:border-blue-300 transition-colors text-gray-700 hover:text-blue-600"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 mb-12 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">Featured</span>
              <span className="text-blue-100">{blogPosts[0].category}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{blogPosts[0].title}</h2>
            <p className="text-lg text-blue-100 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-blue-100">
                <span>{blogPosts[0].date}</span>
                <span>•</span>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <Link
                href={`/blog/${blogPosts[0].slug}`}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read Article
              </Link>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-800 leading-tight">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Get the latest marathon training tips, race strategies, and expert advice delivered to your inbox
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              No spam, unsubscribe at any time
            </p>
          </div>
        </div>

        {/* Related Resources */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">Explore More Resources</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/training-guides"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Training Guides
            </Link>
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              View Training Plans
            </Link>
            <Link
              href="/about"
              className="inline-block px-8 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
            >
              About Our Methodology
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}