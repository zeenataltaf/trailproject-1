// app/page.tsx
"use client";

import React from "react";

const StorePage = () => {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center text-center text-white">
        <img
          src="/elegentstore.jfif"
          alt="Store Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-50"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-5xl font-extrabold mb-4">Elegent Store</h1>
          <p className="text-lg mb-6">
            Discover stylish, modern products crafted for everyday life.
          </p>
          <a
            href="#products"
            className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Categories */}
      <section className="px-8 py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Clothing",
              img: "/clothing.jfif",
            },
            {
              name: "Accessories",
              img: "/accessories.jfif",
            },
            {
              name: "Home Decor",
              img: "/homedecor.jfif",
            },
          ].map((cat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="px-8 py-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Products</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Casual Jacket",
              price: "$49.99",
              img: "/jacket.jfif",
            },
            {
              title: "Leather Handbag",
              price: "$89.99",
              img: "/handbag.jfif",
            },
            {
              title: "Smart Watch",
              price: "$129.99",
              img: "/smartwatch.jfif",
            },
            {
              title: "Modern Lamp",
              price: "$59.99",
              img: "/lamp.jfif",
            },
          ].map((prod, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl shadow hover:shadow-xl transition overflow-hidden p-4 flex flex-col"
            >
              <img
                src={prod.img}
                alt={prod.title}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">{prod.title}</h3>
              <p className="text-indigo-600 font-bold">{prod.price}</p>
              <button className="mt-auto px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-8 py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">What Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Ali Khan",
              review:
                "The quality of products is amazing! My order arrived quickly and I’m really happy with my purchase.",
              img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
            },
            {
              name: "Sara Ahmed",
              review:
                "I love the designs! Stylish and comfortable. Definitely shopping here again.",
              img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop",
            },
            {
              name: "Hassan Raza",
              review:
                "Best online shopping experience. Easy checkout and great customer support.",
              img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200&h=200&fit=crop",
            },
          ].map((test, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow p-6 text-center"
            >
              <img
                src={test.img}
                alt={test.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-600 mb-4">“{test.review}”</p>
              <h4 className="font-semibold">{test.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-8 py-20 bg-linear-to-r from-indigo-600 to-purple-600 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
        <p className="mb-6 text-lg">
          Sign up to receive special offers and the latest product news.
        </p>
        <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 rounded-lg bg-white text-gray-800"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="px-8 py-10 bg-gray-900 text-gray-300 text-center">
        <p>&copy; {new Date().getFullYear()} Elegent Store. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default StorePage;