import Header from '../components/header';
import Footer from '../components/footer';
import posts from '../data/posts';
import PostCard from '../components/postcard';
import HoverMenu from '../components/HoverMenu';
import Slider from 'react-slick'

export default function Categories() {
  // Group posts by 5 tribute categories
  const groupedPosts = {
    Memories: posts.filter((p) => p.category === "Memories"),
    "Health & Care": posts.filter((p) => p.category === "Health & Care"),
    Inspiration: posts.filter((p) => p.category === "Inspiration"),
    Tributes: posts.filter((p) => p.category === "Tributes"),
    Celebrations: posts.filter((p) => p.category === "Celebrations"),
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
  // Inside the map function for categories
  <Slider {...settings}>
    {posts.map((post) => (
      <PostCard key={post.id} post={post} />
    ))}
  </Slider>

  return (
    <div className="flex flex-col min-h-screen bg-white font-serif text-gray-800">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 text-left">Categories</h1>

        <div className="relative mb-10">
          <HoverMenu />
        </div>

        {Object.entries(groupedPosts).map(([category, posts]) => (
          <section key={category} className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}
