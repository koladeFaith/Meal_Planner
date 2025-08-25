// pages/recipes.js
"use client"
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

const recipes = [
    {
        id: 1,
        title: 'Avocado Toast with Poached Eggs',
        image: '/placeholder-recipe.jpg',
        time: '15 min',
        rating: 4.8,
        category: 'Breakfast'
    },
    {
        id: 2,
        title: 'Quinoa Salad with Roasted Vegetables',
        image: '/placeholder-recipe.jpg',
        time: '30 min',
        rating: 4.5,
        category: 'Lunch'
    },
    {
        id: 3,
        title: 'Grilled Salmon with Asparagus',
        image: '/placeholder-recipe.jpg',
        time: '25 min',
        rating: 4.9,
        category: 'Dinner'
    },
    {
        id: 4,
        title: 'Berry Smoothie Bowl',
        image: '/placeholder-recipe.jpg',
        time: '10 min',
        rating: 4.7,
        category: 'Breakfast'
    },
    {
        id: 5,
        title: 'Chicken Caesar Wrap',
        image: '/placeholder-recipe.jpg',
        time: '20 min',
        rating: 4.3,
        category: 'Lunch'
    },
    {
        id: 6,
        title: 'Vegetable Stir Fry',
        image: '/placeholder-recipe.jpg',
        time: '25 min',
        rating: 4.6,
        category: 'Dinner'
    },
];

const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snacks'];

export default function Recipes() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredRecipes = recipes.filter(recipe => {
        const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
        const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <Head>
                <title>Recipes - NutriPlan</title>
                <meta name="description" content="Browse our recipe collection" />
            </Head>

            {/* Header */}
            <header className="bg-white shadow-sm py-4 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Recipes</h1>
                    <div className="flex space-x-4">
                        <div className="relative flex-1 max-w-md">
                            <input
                                type="text"
                                placeholder="Search recipes..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors hidden md:block">
                            Add Recipe
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                {/* Category Filters */}
                <div className="flex overflow-x-auto pb-4 mb-6 -mx-4 px-4">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full mr-3 whitespace-nowrap ${selectedCategory === category ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Recipe Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredRecipes.map(recipe => (
                        <motion.div
                            key={recipe.id}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                        >
                            <div className="relative h-48">
                                <Image
                                    src={recipe.image}
                                    alt={recipe.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-semibold text-gray-800">{recipe.title}</h3>
                                    <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">{recipe.time}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="ml-1 text-sm text-gray-600">{recipe.rating}</span>
                                    </div>
                                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{recipe.category}</span>
                                </div>
                                <button className="mt-4 w-full py-2 bg-indigo-50 text-indigo-600 font-medium rounded-lg hover:bg-indigo-100 transition-colors">
                                    View Recipe
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {filteredRecipes.length === 0 && (
                    <div className="text-center py-12">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="mt-2 text-lg font-medium text-gray-900">No recipes found</h3>
                        <p className="mt-1 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                    </div>
                )}
            </main>

            {/* Mobile Add Button */}
            <div className="md:hidden fixed bottom-4 right-4">
                <button className="w-14 h-14 bg-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </button>
            </div>
        </div>
    );
}