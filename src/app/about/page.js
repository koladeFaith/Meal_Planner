// pages/about.js
"use client"
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <Head>
                <title>About Us - NutriPlan</title>
                <meta name="description" content="Learn about NutriPlan and our mission" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Navigation */}
            <nav className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg"></div>
                    <span className="text-xl font-bold text-indigo-600">NutriPlan</span>
                </Link>
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</Link>
                    <Link href="/recipes" className="text-gray-600 hover:text-indigo-600 transition-colors">Recipes</Link>
                    <Link href="/planner" className="text-gray-600 hover:text-indigo-600 transition-colors">Planner</Link>
                    <Link href="/about" className="text-indigo-600 font-medium">About</Link>
                </div>
                <div className="flex space-x-4">
                    <Link href="/auth" className="px-4 py-2 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors">Login</Link>
                    <Link href="/auth" className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">Sign Up</Link>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-3">
                <Link href="/" className="flex flex-col items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="text-xs mt-1">Home</span>
                </Link>
                <Link href="/recipes" className="flex flex-col items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span className="text-xs mt-1">Recipes</span>
                </Link>
                <Link href="/planner" className="flex flex-col items-center text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs mt-1">Planner</span>
                </Link>
                <Link href="/about" className="flex flex-col items-center text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs mt-1">About</span>
                </Link>
            </div>

            <main className="pb-16 md:pb-0">
                {/* Hero Section */}
                <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Story</h1>
                        <p className="text-lg text-gray-600 mb-8">
                            NutriPlan was born from a simple idea: meal planning should be easy, enjoyable, and accessible to everyone.
                        </p>
                    </motion.div>
                </section>

                {/* Mission Section */}
                <section className="py-12 bg-white px-4 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="md:w-1/2"
                            >
                                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
                                <p className="text-gray-600 mb-4">
                                    At NutriPlan, we believe that healthy eating should be simple and sustainable. Our mission is to help people
                                    create nutritious meal plans without the stress and guesswork.
                                </p>
                                <p className="text-gray-600 mb-4">
                                    We combine technology with nutrition science to provide personalized recommendations that fit your dietary
                                    preferences, schedule, and health goals.
                                </p>
                                <p className="text-gray-600">
                                    Whether you're a busy professional, a parent managing a family's meals, or someone on a specific health journey,
                                    NutriPlan is designed to make your life easier and healthier.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="md:w-1/2 flex justify-center"
                            >
                                <div className="relative w-full h-80 bg-indigo-100 rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/placeholder-about.jpg"
                                        alt="Team working together"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-2xl"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                We're a diverse group of nutritionists, developers, and designers passionate about helping people eat better.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    name: 'Alex Johnson',
                                    role: 'Founder & CEO',
                                    bio: 'Nutrition expert with 10+ years of experience in dietary planning and health coaching.',
                                    image: '/placeholder-team.jpg'
                                },
                                {
                                    name: 'Maria Chen',
                                    role: 'Head of Product',
                                    bio: 'Product designer focused on creating intuitive user experiences for health applications.',
                                    image: '/placeholder-team.jpg'
                                },
                                {
                                    name: 'David Kim',
                                    role: 'Lead Developer',
                                    bio: 'Full-stack developer passionate about building solutions that make a difference in people\'s lives.',
                                    image: '/placeholder-team.jpg'
                                },
                                {
                                    name: 'Sarah Williams',
                                    role: 'Nutrition Director',
                                    bio: 'Registered dietitian specializing in personalized nutrition and meal planning strategies.',
                                    image: '/placeholder-team.jpg'
                                }
                            ].map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                                >
                                    <div className="relative h-60">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-semibold text-gray-800 text-lg">{member.name}</h3>
                                        <p className="text-indigo-600 mb-2">{member.role}</p>
                                        <p className="text-gray-600 text-sm">{member.bio}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-16 bg-white px-4 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                These principles guide everything we do at NutriPlan, from product development to customer support.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    ),
                                    title: 'Trust & Transparency',
                                    description: 'We believe in being open about how our platform works and providing accurate, evidence-based nutrition information.'
                                },
                                {
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    ),
                                    title: 'Inclusivity',
                                    description: 'We design for all dietary needs and preferences, ensuring everyone can find recipes and plans that work for them.'
                                },
                                {
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    ),
                                    title: 'Innovation',
                                    description: 'We continuously improve our platform with new features based on user feedback and the latest nutrition research.'
                                }
                            ].map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-50 p-8 rounded-xl text-center"
                                >
                                    <div className="flex justify-center mb-4">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-4 md:px-8 bg-indigo-600">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your meal planning?</h2>
                        <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
                            Join thousands of users who are saving time, eating healthier, and reducing food waste with NutriPlan.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link href="/auth" className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors text-center">
                                Get Started Free
                            </Link>
                            <Link href="/recipes" className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors text-center">
                                Browse Recipes
                            </Link>
                        </div>
                    </motion.div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-12 px-4 md:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-indigo-500 rounded-lg"></div>
                            <span className="text-xl font-bold">NutriPlan</span>
                        </div>
                        <p className="text-gray-400">Plan your meals, nourish your body, simplify your life.</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                            <li><Link href="/recipes" className="text-gray-400 hover:text-white transition-colors">Recipes</Link></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400">© 2023 NutriPlan. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}