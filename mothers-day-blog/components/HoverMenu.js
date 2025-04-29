import { useState } from 'react';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';

export default function HoverMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const openMenu = () => {
    setVisible(true);
    setTimeout(() => setIsOpen(true), 10);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setTimeout(() => setVisible(false), 300);
  };

  return (
    <div className="fixed top-4 left-4 z-50 font-serif">
      {/* Hamburger Icon */}
      <div
        className="space-y-1 cursor-pointer"
        onMouseEnter={openMenu}
      >
        <div className="w-6 h-0.5 bg-black transition"></div>
        <div className="w-6 h-0.5 bg-black transition"></div>
        <div className="w-6 h-0.5 bg-black transition"></div>
      </div>

      {/* Fade-In/Fade-Out Menu */}
      {visible && (
        <div
          className={`fixed inset-0 bg-black/90 text-white backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onMouseLeave={closeMenu}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 left-6 text-white hover:text-gray-400"
            onClick={closeMenu}
          >
            <FaTimes size={24} />
          </button>

          {/* Main Layout */}
          <div className="flex flex-col items-start justify-center h-full w-full px-10">
            {/* Navigation */}
            <nav className="mb-12 text-4xl font-semibold space-y-8">
              {[
                { label: 'Home', href: '/' },
                { label: 'About me', href: '/about' },
                { label: 'Categories', href: '/categories' },
                { label: 'Contact', href: '/contact' },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={closeMenu}
                  className="group relative pl-10 block"
                >
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-white w-0 group-hover:w-6 transition-all duration-300 ease-in-out"></span>
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Newsletter Box Centered on Screen */}
            <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-white text-black p-8 rounded shadow-lg w-[400px] max-w-full">
              <h5 className="text-xl font-bold mb-2">Newsletter</h5>
              <p className="text-sm mb-4">Subscribe to receive exclusive content updates, travel & photo tips!</p>
              <input
                type="email"
                placeholder="example@domain.com"
                className="w-full border border-gray-300 p-2 mb-3 text-sm rounded"
              />
              <button className="bg-black text-white w-full py-2 rounded hover:bg-gray-800 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
