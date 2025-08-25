// pages/planner.js
"use client"
import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const meals = ['Breakfast', 'Lunch', 'Dinner'];

export default function Planner() {
    const [selectedDay, setSelectedDay] = useState(0);
    const [mealPlan, setMealPlan] = useState({});

    const addRecipeToMeal = (day, meal, recipe) => {
        setMealPlan(prev => ({
            ...prev,
            [`${day}-${meal}`]: recipe
        }));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Head>
                <title>Meal Planner - NutriPlan</title>
                <meta name="description" content="Plan your weekly meals" />
            </Head>

            {/* Header */}
            <header className="bg-white shadow-sm py-4 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Meal Planner</h1>
                    <div className="flex space-x-4">
                        <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                            Generate Plan
                        </button>
                        <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                            Export PDF
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                {/* Day Selector */}
                <div className="flex overflow-x-auto pb-4 mb-6 -mx-4 px-4">
                    {days.map((day, index) => (
                        <button
                            key={day}
                            onClick={() => setSelectedDay(index)}
                            className={`px-6 py-3 rounded-lg mr-3 whitespace-nowrap ${selectedDay === index ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                        >
                            {day}
                        </button>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl shadow-sm p-6"
                >
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">{days[selectedDay]}'s Meals</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {meals.map(meal => (
                            <div key={meal} className="border border-gray-200 rounded-lg p-4">
                                <h3 className="font-medium text-gray-700 mb-4">{meal}</h3>

                                {mealPlan[`${selectedDay}-${meal}`] ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-indigo-50 rounded-lg p-3 mb-4"
                                    >
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-medium text-indigo-800">{mealPlan[`${selectedDay}-${meal}`]}</h4>
                                                <p className="text-xs text-indigo-600">580 calories</p>
                                            </div>
                                            <button
                                                onClick={() => addRecipeToMeal(selectedDay, meal, null)}
                                                className="text-indigo-500 hover:text-indigo-700"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        <p className="text-sm text-gray-500 mt-1">No meal planned</p>
                                    </div>
                                )}

                                <button
                                    onClick={() => addRecipeToMeal(selectedDay, meal, `Sample ${meal} Recipe`)}
                                    className="w-full py-2 bg-indigo-50 text-indigo-600 font-medium rounded-lg hover:bg-indigo-100 transition-colors text-sm"
                                >
                                    Add Recipe
                                </button>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Suggested Recipes */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-xl shadow-sm p-6 mt-6"
                >
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Suggested Recipes</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {['Overnight Oats', 'Chicken Salad', 'Veggie Pasta', 'Protein Smoothie'].map(recipe => (
                            <div key={recipe} className="border border-gray-200 rounded-lg p-3">
                                <h4 className="font-medium text-gray-800">{recipe}</h4>
                                <p className="text-xs text-gray-500 mb-2">320 calories • 15min</p>
                                <button className="w-full py-1 bg-indigo-50 text-indigo-600 text-xs font-medium rounded hover:bg-indigo-100 transition-colors">
                                    Add to Plan
                                </button>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </main>
        </div>
    );
}