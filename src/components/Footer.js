import { Github, Twitter, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-muted/50 border-t border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                            NourishPlan
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Making healthy meal planning simple, enjoyable, and sustainable for everyone.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Recipes</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Meal Planner</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Shopping Lists</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Support</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; 2024 NourishPlan. All rights reserved. Made with ❤️ for healthy eating.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;