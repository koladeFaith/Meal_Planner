// pages/admin/add-recipe.js
"use client";
import { useState } from "react";

export default function AddRecipe() {
    const [recipe, setRecipe] = useState({
        title: "",
        category: "Breakfast",
        time: "",
        rating: "",
        ingredients: "",
        steps: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe({ ...recipe, [name]: value });
    };

    const handleImageUpload = (e) => {
        setRecipe({ ...recipe, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 👉 send data to backend API
        console.log("Recipe submitted:", recipe);

        alert("Recipe added successfully!");
        setRecipe({
            title: "",
            category: "Breakfast",
            time: "",
            rating: "",
            ingredients: "",
            steps: "",
            image: null,
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-6">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
                <h1 className="text-2xl font-bold mb-6">Add New Recipe</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Recipe Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={recipe.title}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Category
                        </label>
                        <select
                            name="category"
                            value={recipe.category}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option>Breakfast</option>
                            <option>Lunch</option>
                            <option>Dinner</option>
                            <option>Snacks</option>
                        </select>
                    </div>

                    {/* Cooking Time */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Cooking Time (e.g. 20 min)
                        </label>
                        <input
                            type="text"
                            name="time"
                            value={recipe.time}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>

                    {/* Rating */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Rating (1 - 5)
                        </label>
                        <input
                            type="number"
                            name="rating"
                            step="0.1"
                            min="1"
                            max="5"
                            value={recipe.rating}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    {/* Ingredients */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Ingredients
                        </label>
                        <textarea
                            name="ingredients"
                            value={recipe.ingredients}
                            onChange={handleChange}
                            rows="4"
                            placeholder="List ingredients separated by commas"
                            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>

                    {/* Steps */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Steps / Instructions
                        </label>
                        <textarea
                            name="steps"
                            value={recipe.steps}
                            onChange={handleChange}
                            rows="6"
                            placeholder="Step by step instructions..."
                            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Recipe Image
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="mt-1 block w-full text-gray-700"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                        Save Recipe
                    </button>
                </form>
            </div>
        </div>
    );
}
