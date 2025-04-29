export default function CategoryList() {
    const categories = ["Stories", "Health", "Inspiration"];
  
    return (
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Categories</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="px-6 py-4 bg-gray-100 hover:bg-gray-200 rounded-md text-lg font-medium cursor-pointer transition"
            >
              {cat}
            </div>
          ))}
        </div>
      </section>
    );
  }
  