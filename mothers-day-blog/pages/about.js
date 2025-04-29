import Header from '../components/header';
import Footer from '../components/footer';
import { FaInstagram, FaLinkedin, FaHeart, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-serif text-gray-800">
      <Header />

      {/* Banner */}
      <div className="w-full h-[400px] md:h-[450px]">
        <img
          src="/images/m7.jpg"
          alt="Mother’s Day Tribute Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Section */}
      <main className="flex-1 max-w-6xl mx-auto px-6 -mt-32 z-10 relative">
        <motion.div
          className="bg-white px-10 py-12 shadow-xl rounded-md text-center w-full max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6">My name is Aayush</h1>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4 text-2xl text-gray-700">
  <a href="https://www.instagram.com/aayush10_08?igsh=MWEyd2RybnlrbXdhZA==" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="hover:text-pink-500 transition" />
  </a>
  <a href="https://www.linkedin.com/in/aayushsah?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="hover:text-blue-600 transition" />
  </a>
            <a href="#" className="hover:text-red-500 transition"><FaHeart /></a>
            <a href="#" className="hover:text-red-600 transition"><FaYoutube /></a>
          </div>

          {/* Quote */}
          <p className="italic text-gray-600 mb-8">
          A mother’s love is the first whisper of safety, the loudest cheer of success, and the quiet strength behind every step we take.
          </p>

          {/* Intro Content */}
          <div className="text-left text-gray-700 space-y-4 mb-10 max-w-3xl mx-auto">
            <p>
            I’m Aayush, an engineering student from VIT Bhopal, currently pursuing an Integrated M.Tech. While technology fascinates me and innovation drives me, theres one force that has shaped my foundation long before any degree — the unconditional love and support of my mother.
            </p>
            <p>
            A mother’s presence is the very first blessing we receive in life. Her care isn’t just nurturing — it becomes the blueprint for how we grow, think, and feel. From her gentle reminders to drink water, to the way she wraps love into our lunchboxes — it’s the little things that shape our biggest values. Her habits quietly become our guide, her resilience inspires our strength, and her laughter often becomes the melody that keeps us going through tough times.
            </p>
            <p>
            Mothers are our first teachers, our first friends, and truly our first love. They believe in us long before we believe in ourselves. Whether it’s cheering for us after every small achievement or staying awake through nights when we’re sick, they’re always there — giving, loving, and healing. Their love doesn’t ask for anything in return, and yet it becomes the very foundation on which we build our dreams.
            </p>
          </div>

          {/* Tribute Images with animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <motion.img
              src="/images/m1.jpeg"
              alt="Tribute Image 1"
              className="w-full h-64 object-cover rounded-md shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
            <motion.img
              src="/images/m4.jpeg"
              alt="Tribute Image 2"
              className="w-full h-64 object-cover rounded-md shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Reflection Paragraphs */}
          <div className="text-left text-gray-700 space-y-4 max-w-3xl mx-auto">
            <p>
            I love my mother deeply — with all my heart. She’s my superhero, my comfort, and my forever well-wisher. I promise myself that I’ll always honor her efforts, respect her sacrifices, and never let a single moment bring sorrow to her heart. Her happiness is my goal, and her smile is my success. Every small thing I achieve, every lesson I learn — it’s all a tribute to her love. I’ll always strive to make her proud, and above all, never let her feel unappreciated — because she deserves the world and more.
            </p>
            <p>
              Behind every successful child is a mother who sacrificed sleep, time, and energy to lift others first.
              Their love has shaped us, their guidance has raised generations.
            </p>
            <p>
              This space isn’t just about memories — it’s about presence. May this blog be a reminder to call her,
              thank her, hug her, or simply carry her spirit forward in all you do.
            </p>
          </div>
        </motion.div>
      </main>
      {/* Instagram Style Grid (Optional Tribute Section) */}
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
