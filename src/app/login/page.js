// pages/auth.js
"use client"
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'sonner'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useRouter } from 'next/navigation';
export default function Login() {
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            // rememberMe: false
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid Email")
                .required("Email Address is required"),
            password: Yup.string()
                .required("Password is required")
                .min(6, "Paswword must be 6 characters or more"),
            // rememberMe: Yup.boolean().oneOf([true], "You must accept the terms")
        }),
        onSubmit: async (values) => {
            try {
                const response = await axios.post(
                    "https://meal-planner-backend-7f2r.onrender.com/user/signin",
                    values
                );
                localStorage.setItem("token", response.data.token);
                console.log(response);
                console.log(response.data.message);
                toast.success(response.data.message);
                setTimeout(() => {
                    router.push('/dashboard')
                }, 2000);
            } catch (error) {
                if (
                    error.response &&
                    error.response.data &&
                    error.response.data.message
                ) {
                    console.error("Error: " + error.response.data.message);
                    toast.error(error.response.data.message);
                } else {
                    console.error("An unexpected error occurred: " + error.message);
                    toast.error("Something went wrong");
                }
            }
        },
    });
    console.log(formik.touched);
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8">
            <Head>
                <title>Login - NutriPlan</title>
                <meta name="description" content="Login to your NutriPlan account" />
            </Head>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full space-y-6 bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg mx-4"
            >
                <div>
                    <div className="flex justify-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a极 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                    </div>
                    <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl font-extrabold text-gray-900 text-center">
                        Sign in to your account
                    </h2>
                    <p className="text-center text-sm text-gray-600 mt-2">
                        Don't have an account?{' '}
                        <Link href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Sign up here
                        </Link>
                    </p>
                </div>

                <form className="mt-6 space-y-4" onSubmit={formik.handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-red-500 text-sm">{formik.errors.email}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.password && formik.errors.password && (
                                <p className="text-red-500 text-sm">{formik.errors.password}</p>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center justify-between flex-col sm:flex-row gap-2 sm:gap-0">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="rememberMe"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                        >
                            Sign in
                        </button>
                    </div>

                    <div className="mt-4">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center">
                                <span className="px-2 bg-white text-gray-500 text-sm">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                className="w-full inline-flex justify-center items-center py-2 px-2 sm:px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
                            >

                                <span className="ml-1 sm:ml-2 text-xs sm:text-sm">Facebook</span>
                            </button>

                            <button
                                type="button"
                                className="w-full inline-flex justify-center items-center py-2 px-2 sm:px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
                            >
                                <span className="ml-1 sm:ml-2 text-xs sm:text-sm">Google</span>
                            </button>
                        </div>
                    </div>
                </form>

                {/* Mobile-friendly signup link at bottom for easy access */}
                <div className="md:hidden pt-4 border-t border-gray-200 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Sign up
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}