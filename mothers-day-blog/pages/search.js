
import { useRouter } from 'next/router';
import Header from '../components/header';
import Footer from '../components/footer';
import posts from '../data/posts';
import Link from 'next/link';

export default function SearchPage() {
  const router = useRouter();
  const { q } = router.query;
  const query = q ? q.toLowerCase() : '';

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(query) ||
    post.excerpt.toLowerCase().includes(query) ||
    post.category.toLowerCase().includes(query)
  );

  return (
    <div className="flex flex-col min-h-screen font-serif bg-white text-gray-800">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">Search Results for </h1>
        {filteredPosts.length > 0 ? (
          <div className="space-y-8">
            {filteredPosts.map(post => (
              <div key={post.id} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover rounded" />
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-500 mb-1">#{post.category} • {post.readingTime} minutes reading</p>
                  <h4 className="text-lg font-bold">{post.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{post.excerpt.slice(0, 100)}...</p>
                  <Link href={`/posts/${post.id}`}>
                    <button className="bg-black text-white px-4 py-1 text-sm rounded hover:bg-gray-800">Read more</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No articles found matching your search.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}
