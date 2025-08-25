// pages/shopping.js
'use client'
import { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';

const initialItems = [
    { id: 1, name: 'Avocado', category: 'Produce', purchased: false },
    { id: 2, name: 'Tomatoes', category: 'Produce', purchased: false },
    { id: 3, name: 'Chicken Breast', category: 'Meat', purchased: false },
    { id: 4, name: 'Quinoa', category: 'Pantry', purchased: true },
    { id: 5, name: 'Milk', category: 'Dairy', purchased: false },
    { id: 6, name: 'Eggs', category: 'Dairy', purchased: true },
    { id: 7, name: 'Whole Wheat Bread', category: 'Pantry', purchased: false },
];

const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'produce', name: 'Produce' },
    { id: 'dairy', name: 'Dairy' },
    { id: 'meat', name: 'Meat' },
    { id: 'pantry', name: 'Pantry' },
];

export default function Shopping() {
    const [items, setItems] = useState(initialItems);
    const [newItem, setNewItem] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const togglePurchased = (id) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, purchased: !item.purchased } : item
        ));
    };

    const addItem = () => {
        if (newItem.trim()) {
            setItems([...items, {
                id: Date.now(),
                name: newItem,
                category: 'Pantry',
                purchased: false
            }]);
            setNewItem('');
        }
    };

    const filteredItems = selectedCategory === 'all'
        ? items
        : items.filter(item => item.category.toLowerCase() === selectedCategory);

    const purchasedCount = items.filter(item => item.purchased).length;
    const totalCount = items.length;

    return (
        <div className="min-h-screen bg-gray-50">
            <Head>
                <title>Shopping List - NutriPlan</title>
                <meta name="description" content="Your shopping list" />
            </Head>

            {/* Header */}
            <header className="bg-white shadow-sm py-4 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Shopping List</h1>
                        <p className="text-sm text-gray-500 mt-1">
                            {purchasedCount} of {totalCount} items purchased
                        </p>
                    </div>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                            Clear All
                        </button>
                        <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                            Send to Phone
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                {/* Category Filters */}
                <div className="flex overflow-x-auto pb-4 mb-6 -mx-4 px-4">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-4 py-2 rounded-full mr-3 whitespace-nowrap ${selectedCategory === category.id ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Add Item Form */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl shadow-sm p-6 mb-6"
                >
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Add new item..."
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            value={newItem}
                            onChange={(e) => setNewItem(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && addItem()}
                        />
                        <button
                            onClick={addItem}
                            className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-r-lg hover:bg-indigo-700 transition-colors"
                        >
                            Add
                        </button>
                    </div>
                </motion.div>

                {/* Shopping List */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                    <AnimatePresence>
                        {filteredItems.map(item => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className={`flex items-center p-4 border-b border-gray-100 ${item.purchased ? 'bg-green-50' : ''}`}
                            >
                                <button
                                    onClick={() => togglePurchased(item.id)}
                                    className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mr-4 flex items-center justify-center ${item.purchased ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}
                                >
                                    {item.purchased && (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </button>
                                <div className="flex-1">
                                    <span className={`${item.purchased ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                                        {item.name}
                                    </span>
                                    <span className="ml-2 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                        {item.category}
                                    </span>
                                </div>
                                <button className="text-gray-400 hover:text-red-500 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {filteredItems.length === 0 && (
                        <div className="text-center py-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <h3 className="mt-2 text-lg font-medium text-gray-900">No items in your list</h3>
                            <p className="mt-1 text-gray-500">Get started by adding some items to your shopping list.</p>
                        </div>
                    )}
                </motion.div>
            </main>
        </div>
    );
}