import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden flex flex-col">
      <img src={post.imageUrl} alt={post.title} className="h-48 w-full object-cover" />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-2 flex-1">{post.excerpt}</p>

        {/* Timing added here */}
        {post.date && (
          <p className="text-xs text-gray-400 mb-2">Published on {post.date}</p>
        )}

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{post.readingTime} min read</span>
          <span>{post.category}</span>
        </div>
        <Link href={`/posts/${post.id}`}>
          <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}
