import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white py-6 font-serif text-sm text-gray-700">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Left side: Title and copyright */}
        <div>
          <h2 className="text-lg font-semibold text-black mb-1">Mothers Day Blog</h2>
          <p className="text-xs text-gray-500"> With love & gratitude © 2025 Aayush. All Rights Reserved.</p>
        </div>

        {/* Right side: Navigation links */}
        <div className="flex space-x-6 text-gray-500 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About me</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
