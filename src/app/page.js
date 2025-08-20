import React from 'react'
import Image from "next/image";
const Page = () => {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-white text-gray-900">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 md:px-20 py-4 shadow-md bg-white fixed w-full top-0 z-50 ">
        <h1 className="text-2xl font-bold text-green-600">MealPlanner</h1>
        <nav className="hidden md:flex gap-6 font-medium">
          <a href="#features" className="hover:text-green-600">Features</a>
          <a href="#recipes" className="hover:text-green-600">Recipes</a>
          <a href="#mealplan" className="hover:text-green-600">Meal Plans</a>
          <a href="#contact" className="hover:text-green-600">Contact</a>
        </nav>
        <button className="md:hidden p-2 border rounded-lg">☰</button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-start justify-between gap-8 px-6 md:px-20 pt-32 pb-16">
        <div className="max-w-lg">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Plan Your Meals, <span className="text-green-600">Save Time</span>, Eat Healthy
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover recipes, create personalized meal plans, and track your nutrition – all in one place.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700">
              Get Started
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl shadow hover:bg-gray-200">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full md:w-2/4">
          <Image
            src="/images/meal-planner.jpg"
            alt="Healthy food"
            width={700}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 md:py-20 px-6 md:px-20 bg-green-50">
        <h3 className="text-3xl font-bold text-center mb-12">Why Choose MealPlanner?</h3>
        <div className="grid gap-8 md:grid-cols-3 text-center">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">🍲 Easy Recipes</h4>
            <p className="text-gray-600">Access a wide range of healthy recipes you can cook in minutes.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">📅 Custom Meal Plans</h4>
            <p className="text-gray-600">Plan meals for your week and stick to your goals effortlessly.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">⚡ Save Time</h4>
            <p className="text-gray-600">No more “what to eat today?” stress — we’ve got you covered.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h3 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h3>
        <p className="text-gray-600 mb-8">
          Join thousands of users making healthier food choices today.
        </p>
        <button className="px-8 py-4 bg-green-600 text-white rounded-xl text-lg shadow hover:bg-green-700">
          Sign Up Free
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        <p>© {new Date().getFullYear()} MealPlanner. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default Page

