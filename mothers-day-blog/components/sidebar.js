import { useState } from 'react';

export default function Sidebar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <aside className="bg-gray-100 p-6 rounded-md shadow-md space-y-8">
      {/* Author Profile */}
      <div className="text-center">
        <img
          src="/images/author.jpg"  // 👉 upload a placeholder author image here
          alt="Author"
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-xl font-bold">Aayush</h3>
        <p className="text-gray-600">Passionate storyteller and lifelong learner.</p>
      </div>

      {/* Highlights or Destinations */}
      <div>
        <h4 className="text-lg font-bold mb-2">Highlights</h4>
        <ul className="text-gray-600 list-disc list-inside space-y-1">
          <li>Life Lessons</li>
          <li>Health Tips</li>
          <li>Inspirational Stories</li>
        </ul>
      </div>

      {/* Search Input */}
      <div>
        <h4 className="text-lg font-bold mb-2">Search Posts</h4>
        <input
          type="text"
          placeholder="Search posts..."
          value={query}
          onChange={handleInputChange}
          className="w-full p-3 border rounded-md"
        />
      </div>
    </aside>
  );
}
