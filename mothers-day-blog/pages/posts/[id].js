import { useRouter } from 'next/router';
import posts from '../../data/posts';
import Header from '../../components/header';
import Footer from '../../components/footer';
import PostCard from '../../components/postcard';

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;

  const post = posts.find((p) => p.id.toString() === id);
  const related = posts.filter((p) => p.id !== post?.id).slice(0, 3); // Optional related

  if (!post) return null;

  return (
    <div className="flex flex-col min-h-screen font-serif bg-white text-gray-800">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 py-16">
        {/* Main Post Heading */}
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-6">
          {post.date} • {post.readingTime} min read • {post.category}
        </p>

        {/* Cover Image */}
        <img src={post.imageUrl} alt={post.title} className="w-full rounded-md shadow mb-8" />

        {/* Full Article Body */}
        <div className="space-y-6 text-base leading-relaxed text-gray-700">
          {post.content?.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Optional Related Posts */}
        <div className="mt-16">
          <h2 className="text-xl font-semibold mb-6">Interesting Articles to Read</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((rel) => (
              <PostCard key={rel.id} post={rel} />
            ))}
          </div>
        </div>
      </main>

      {/* Optional: Instagram Footer Grid */}
      <section className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Follow more tributes on Instagram</h2>
            <button className="bg-black text-white px-4 py-2 flex items-center gap-2">
              Follow me on Instagram <span>📷</span>
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="bg-gray-300 h-32 flex items-center justify-center">
                <span className="text-gray-500">Image</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
