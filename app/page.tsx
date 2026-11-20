"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-200 via-white to-pink-200">
      <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-md">
        <h1 className="text-3xl font-bold text-purple-700">
          Bazar24X7
        </h1>

        <div className="flex gap-6">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Categories</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <section className="text-center py-24 px-6">
        <h1 className="text-6xl font-extrabold text-gray-800">
          Welcome to Bazar24X7
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Shop Everything You Need In One Place
        </p>

        <button className="mt-8 bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700">
          Shop Now
        </button>
      </section>

      <section className="grid md:grid-cols-3 gap-8 p-10">
        <div className="bg-white p-6 rounded-3xl shadow-lg">
          <h2 className="text-xl font-bold">Fashion</h2>
          <p className="mt-2 text-gray-500">
            Latest trends and styles.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-lg">
          <h2 className="text-xl font-bold">Electronics</h2>
          <p className="mt-2 text-gray-500">
            Gadgets and accessories.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-lg">
          <h2 className="text-xl font-bold">Home & Living</h2>
          <p className="mt-2 text-gray-500">
            Products for every home.
          </p>
        </div>
      </section>
    </main>
  );
}