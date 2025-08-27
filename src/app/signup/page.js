// pages/auth.js
"use client"
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import axios from "axios";
import * as Yup from 'yup'
import { toast } from "sonner";
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
export default function Signup() {
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required("Full Name is required"),
            email: Yup.string()
                .required("Email Address is required")
                .email("Invalid Email"),
            password: Yup.string()
                .required("Password is required")
                .min(6, "Paswword must be 6 characters or more"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Confirm Password is required"),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await axios.post(
                    "https://meal-planner-backend-7f2r.onrender.com/user/signup",
                    values
                );

                console.log(response.data.message);
                toast.success(response.data.message);
                resetForm();
                setTimeout(() => {
                    router.push("/login");
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
                    toast.error(error.message);
                }
            }
        },
    });
    console.log(formik.touched);
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <Head>
                <title>Sign Up - NutriPlan</title>
                <meta name="description" content="Create your NutriPlan account" />
            </Head>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg"
            >
                <div>
                    <div className="flex justify-center">
                        <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 极 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 极 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                    </div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Create your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Sign in here
                        </Link>
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="name" className="sr-only">Full Name</label>
                            <input
                                id="name"
                                name="fullName"
                                type="text"
                                autoComplete="name"
                                required
                                className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Full Name"
                                value={formik.values.fullName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />

                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                            <input
                                id="confirm-password"
                                name="confirmPassword"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Confirm Password"
                                value={formik.values.comfirmPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />

                        </div>
                    </div>

                    <div className="flex items-center">
                        <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            required
                        />
                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                            I agree to the{' '}
                            <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                Terms and Conditions
                            </a>
                        </label>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                        >
                            Sign up
                        </button>
                    </div>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
                            >
                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 极-5.373 12-12S18.628 0 12 0zm5.894 8.221l-2.166 2.066c-.121.119-.321.18-.513.18-.099 0-.197-.02-.287-.06-.25-.111-.412-.363-.412-.642v-.832h4.431c.225 0 .431.224.431.448v1.723c0 .458-.373.832-.832.832h-1.264v1.689c0 .458-.373.832-.832.832h-1.723a.441.441 0 01-.448-.431v-4.019c0-.225.206-.431.431-.431h2.437v-.832c0-.279.162-.531.412-.642.25-.111.547-.072.极.104z" />
                                </svg>
                                <span className="ml-2">Facebook</span>
                            </button>

                            <button
                                type="button"
                                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors"
                            >
                                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.372 0 0 5.373 极 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm5.894 8.221l-2.166 2.066c-.121.119-.321.18-.513.18-.099 0-.197-.02-.287-.极 -.25-.111-.412-.363-.412-.极v-.832h4.431c.225 0 .431.224.431.448v1.723c0 .458-.373.832-.832.832h-1.264v1.689c0 .458-.373.832-.832.832极 -1.723a.441.441 0 01-.448-.431v-4.019c0-.225.206-.431.431-.431h2.437v-.832c0-.279.162-.531.412-.642.25-.111.547-.072.极.104z" />
                                </svg>
                                <span className="ml-2">Google</span>
                            </button>
                        </div>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}