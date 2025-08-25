// pages/dashboard.js
"use client"
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Dashboard() {
    const [darkMode, setDarkMode] = useState(false);
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <Head>
                <title>Dashboard - NutriPlan</title>
                <meta name="description" content="Your personal dashboard" />
            </Head>

            {/* Header */}
            <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm py-4 px-6`}>
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Dashboard</h1>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-700'}`}
                    >
                        {darkMode ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 01-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                            </svg>
                        )}
                    </button>
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Sidebar */}
                    <aside className={`md:w-1/4 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm p-6`}>
                        <div className="flex flex-col items-center mb-6">
                            <div className="relative w-24 h-24 mb-4">
                                <Image
                                    src="/placeholder-avatar.jpg"
                                    alt="Profile"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full"
                                />
                            </div>
                            <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Sarah Johnson</h2>
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>sarah@example.com</p>
                        </div>

                        <nav className="space-y-2">
                            {['profile', 'recipes', 'plans', 'settings'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${activeTab === tab
                                        ? 'bg-indigo-100 text-indigo-700'
                                        : `${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}`}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <div className="md:w-3/4">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm p-6`}
                        >
                            {activeTab === 'profile' && (
                                <div>
                                    <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Profile Information</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Full Name</label>
                                            <input
                                                type="text"
                                                defaultValue="Sarah Johnson"
                                                className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
                                            />
                                        </div>
                                        <div>
                                            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email Address</label>
                                            <input
                                                type="email"
                                                defaultValue="sarah@example.com"
                                                className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
                                            />
                                        </div>
                                        <div>
                                            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Password</label>
                                            <input
                                                type="password"
                                                defaultValue="password"
                                                className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
                                            />
                                        </div>
                                        <div>
                                            <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Dietary Preferences</label>
                                            <select className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}>
                                                <option>Vegetarian</option>
                                                <option>Vegan</option>
                                                <option>Pescatarian</option>
                                                <option>Gluten-Free</option>
                                                <option>No Preferences</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                                        Save Changes
                                    </button>
                                </div>
                            )}

                            {activeTab === 'recipes' && (
                                <div>
                                    <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Saved Recipes</h2>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {['Avocado Toast', 'Quinoa Bowl', 'Grilled Salmon', 'Berry Smoothie', 'Veggie Wrap', 'Chicken Salad'].map(recipe => (
                                            <div key={recipe} className={`border rounded-lg p-3 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                                <h4 className={`font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{recipe}</h4>
                                                <p className={`text-xs mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Saved 2 days ago</p>
                                                <button className={`text-sm ${darkMode ? 'text-indigo-400' : 'text-indigo-600'} hover:underline`}>
                                                    View Recipe
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'plans' && (
                                <div>
                                    <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Saved Meal Plans</h2>

                                    <div className="space-y-4">
                                        {['Weekly Family Plan', 'Keto Diet Plan', 'Vegetarian Week', 'Quick & Easy Meals'].map(plan => (
                                            <div key={plan} className={`border rounded-lg p-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h4 className={`font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{plan}</h4>
                                                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Created 1 week ago • 7 recipes</p>
                                                    </div>
                                                    <button className={`px-3 py-1 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'}`}>
                                                        Use Plan
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'settings' && (
                                <div>
                                    <h2 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Account Settings</h2>

                                    <div className="space-y-6">
                                        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                                            <h4 className={`font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Notification Preferences</h4>
                                            <div className="space-y-2">
                                                {['Meal reminders', 'New recipes', 'Weekly summary', 'Special offers'].map(pref => (
                                                    <div key={pref} className="flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            id={pref}
                                                            defaultChecked
                                                            className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                                                        />
                                                        <label htmlFor={pref} className={`ml-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                            {pref}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                                            <h4 className={`font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Data & Privacy</h4>
                                            <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                Manage your data and privacy settings
                                            </p>
                                            <button className="text-sm text-indigo-600 hover:underline">
                                                Download your data
                                            </button>
                                        </div>

                                        <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                                            <h4 className={`font-medium mb-2 text-red-600`}>Danger Zone</h4>
                                            <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                Once you delete your account, there is no going back. Please be certain.
                                            </p>
                                            <button className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors">
                                                Delete Account
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </main>
        </div>
    );
}