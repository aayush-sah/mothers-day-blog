import { useState } from 'react';
import HoverMenu from '/components/HoverMenu';
import { useRouter } from 'next/router';

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white font-serif relative z-50">
      {/* Left: Hamburger Menu */}
      <div className="flex-none">
        <HoverMenu />
      </div>

      {/* Center: Title */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-lg sm:text-xl font-semibold text-black">
        Mothers Day Tribute Blog
      </div>

      {/* Right: Search Icon */}
      <div className="flex-none text-xl cursor-pointer">
        <button onClick={() => setShowSearch(!showSearch)} title="Search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </button>
      </div>

      {/* Search Field */}
      {showSearch && (
        <form
          onSubmit={handleSearch}
          className="absolute right-16 top-1/2 transform -translate-y-1/2 flex items-center bg-white shadow px-2 py-1 rounded border border-gray-300"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="outline-none px-2 py-1 text-sm"
          />
          <button type="submit" className="text-sm text-black px-2 hover:underline">
            Go
          </button>
        </form>
      )}
    </header>
  );
}
