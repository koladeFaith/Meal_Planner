'use client'
import { Button } from "@/components/ui/button";
import { Menu, User } from "lucide-react";
import Link from "next/link";
const Header = () => {
    return (
        <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                            NourishPlan
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-foreground hover:text-primary transition-colors">
                            Home
                        </Link>
                        <Link href="/recipes" className="text-foreground hover:text-primary transition-colors">
                            Recipes
                        </Link>
                        <Link href="/meal-planner" className="text-foreground hover:text-primary transition-colors">
                            Meal Planner
                        </Link>
                        <Link href="/shopping-list" className="text-foreground hover:text-primary transition-colors">
                            Shopping List
                        </Link>
                        <Link href="/dashboard" className="text-foreground hover:text-primary transition-colors">
                            Dashboard
                        </Link>
                    </nav>

                    Auth Buttons
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/signin">
                            <Button variant="ghost">
                                <User className="w-4 h-4 mr-2" />
                                Sign In
                            </Button>
                        </Link>
                        <Link to="/signup">
                            <Button variant="hero" size="sm">
                                Get Started
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;