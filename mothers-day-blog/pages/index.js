import Header from '../components/header';
import Footer from '../components/footer';
import posts from '../data/posts';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaHeart, FaYoutube } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // 📦 Add framer-motion

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const featuredPosts = posts.slice(0, 5);
  const currentPost = featuredPosts[currentIndex];

  const categories = ["Memories", "Health & Care", "Inspiration", "Tributes", "Celebrations"];

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredPosts.length);
      setFade(true);
    }, 300);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
      setFade(true);
    }, 300);
  };

  const handleDotClick = (index) => {
    if (index !== currentIndex) {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex(index);
        setFade(true);
      }, 300);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-serif text-gray-800 bg-white">
      <Header />

      {/* Hero Carousel */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[400px] w-full bg-gray-100 flex items-center justify-center text-center overflow-hidden"
      >
        <img
          src="https://www.financialexpress.com/wp-content/uploads/2024/05/Godrej-2024-05-11T121115.123.png"
          alt={currentPost.title}
          className={`absolute inset-0 w-full h-full object-cover opacity-30 transition-opacity duration-700 ease-in-out ${fade ? 'opacity-30' : 'opacity-0'}`}
        />
        <div className={`relative z-10 bg-white px-10 py-6 rounded shadow max-w-xl transition-opacity duration-700 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-sm text-gray-500 mb-1">{currentPost.category}</p>
          <h2 className="text-2xl font-bold mb-2">{currentPost.title}</h2>
          <p className="text-gray-600 text-sm mb-3">{currentPost.excerpt.slice(0, 100)}...</p>
          <Link href={`/posts/${currentPost.id}`}>
            <button className="bg-black text-white px-4 py-2 text-sm rounded hover:bg-gray-800">Read more</button>
          </Link>
        </div>

        {/* Arrows */}
        <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-gray-600 hover:text-black">&#8592;</button>
        <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-gray-600 hover:text-black">&#8594;</button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {featuredPosts.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-black' : 'bg-gray-400'}`}
            ></button>
          ))}
        </div>
      </motion.div>

      {/* Explore by Category */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-8 mb-16 px-4 md:px-8"
      >
        <h3 className="text-xl font-semibold mb-8 md:mb-10">Explore by category</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {[
            { name: 'Memories', img: '/images/cat-memories.jpg' },
            { name: 'Health & Care', img: '/images/istockphoto-1459436747-612x612.jpg' },
            { name: 'Inspiration', img: '/images/How-to-Be-a-Great-Mother.jpg' },
            { name: 'Tributes', img: '/images/Pregnant-woman.jpg' },
            { name: 'Celebrations', img: '/images/mothers-2.avif' },
          ].map((cat, i) => (
            <Link key={i} href={{ pathname: '/categories', query: { category: cat.name } }}>
              <div className="relative h-36 bg-black text-white rounded-md overflow-hidden hover:scale-105 transition-transform group cursor-pointer">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="absolute w-full h-full object-cover opacity-60 group-hover:opacity-80 transition"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
                  <div className="border-t border-white w-8 mb-1"></div>
                  <span className="text-sm font-medium text-center">{cat.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Recent Articles + Sidebar */}
      <main className="flex-1 max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-4 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3"
        >
          <h3 className="text-xl font-semibold mb-6 -mt-4">Recent Articles</h3>
          <div className="space-y-8">
            {posts.map(post => (
              <motion.div 
                key={post.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * post.id }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover rounded" />
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-500 mb-1">#{post.category} • {post.readingTime} minutes reading</p>
                  <h4 className="text-lg font-bold">{post.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{post.excerpt.slice(0, 100)}...</p>
                  <Link href={`/posts/${post.id}`}>
                    <button className="bg-black text-white px-4 py-1 text-sm rounded hover:bg-gray-800">Read more</button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-10"
        >
          <div className="bg-gray-100 p-6 text-center rounded shadow">
            <h4 className="font-bold text-xl mb-2">Aayush</h4>
            <p className="text-base text-gray-600 mb-3">Engineer | Blogger | Son</p>
            <p className="text-sm mb-4">
              Writing in honor of all mothers — their grace, their strength, and their silent sacrifices.
            </p>
            <div className="flex justify-center space-x-4 text-2xl text-gray-700">
  <a href="https://www.instagram.com/aayush10_08?igsh=MWEyd2RybnlrbXdhZA==" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="hover:text-pink-500 transition" />
  </a>
  <a href="https://www.linkedin.com/in/aayushsah?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="hover:text-blue-600 transition" />
  </a>
              <FaHeart className="hover:text-red-500 transition" />
              <FaYoutube className="hover:text-red-600 transition" />
            </div>
          </div>

          <div className="bg-white shadow p-6 rounded">
            <h5 className="text-lg font-bold mb-2">Quote</h5>
            <p className="text-base italic">
              “A mother’s love is the first whisper of safety, the loudest cheer of success, and the quiet strength behind every step we take.”
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded shadow">
            <h5 className="text-lg font-bold mb-2">Newsletter</h5>
            <p className="text-sm mb-3">Subscribe for weekly gratitude posts and updates!</p>
            <input type="email" placeholder="Your Email" className="w-full border p-2 mb-2 text-sm" />
            <button className="bg-black text-white px-4 py-2 w-full text-sm rounded">Subscribe</button>
          </div>
        </motion.aside>
      </main>

      {/* Instagram Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gray-100 py-6"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-lg font-semibold mb-4">Follow me on Instagram</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-300 h-24 rounded shadow-sm"></div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
