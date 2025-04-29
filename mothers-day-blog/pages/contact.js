import Header from '../components/header';
import Footer from '../components/footer';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen font-serif bg-white text-gray-800">
      <Header />

      <main className="flex-1 max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
  {/* Left Panel: Image + Tribute Text */}
  <div>
    <h1 className="text-5xl font-bold mb-8">Contact</h1>

    {/* Tribute Image */}
    <img
      src="/images/love.jpeg"
      alt="A mother and child tribute"
      className="w-full h-auto rounded-md shadow mb-6"
    />

    {/* Emotional Text */}
    <div className="text-gray-700 leading-relaxed text-sm space-y-4">
      <p>“She held your hand for just a little while… but your heart forever.”</p>
      <p>
        Whether she’s near or far, a mother’s love echoes in every heartbeat, in every warm
        memory, in every quiet strength we carry.
      </p>
      <p>
        Write to her. For her. Because every word of love written here becomes a flower in her
        eternal garden of care.
      </p>
    </div>
  </div>

  {/* Right Panel: Contact Form */}
  <form className="space-y-6 self-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 border-b border-gray-400 focus:outline-none"
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-3 border-b border-gray-400 focus:outline-none"
        required
      />
    </div>
    <input
      type="text"
      placeholder="Subject"
      className="w-full p-3 border-b border-gray-400 focus:outline-none"
    />
    <textarea
      placeholder="Your message"
      className="w-full p-3 border-b border-gray-400 focus:outline-none"
      rows="5"
      required
    />
    <button
      type="submit"
      className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
    >
      Send
    </button>
  </form>
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
