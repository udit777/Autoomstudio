import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { services } from '@/data/services';
import logo from '@/assets/logo.png';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
    }, [location]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-white/95 backdrop-blur-md border-gray-200 py-1 shadow-sm"
                    : "bg-white/95 backdrop-blur-md border-gray-200 py-2 shadow-sm"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 z-50">
                    <img src={logo} alt="Autoom Studio" className="h-10 w-auto object-contain" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link to="/" className="text-sm font-bold text-black hover:text-[#EAB308] transition-colors">Home</Link>

                    {/* Products Link */}
                    <Link to="/products" className="text-sm font-bold text-black hover:text-[#EAB308] transition-colors">
                        Products
                    </Link>

                    {/* Services Dropdown */}
                    <div className="relative group">
                        <button
                            className="flex items-center gap-1 text-sm font-bold text-black hover:text-[#EAB308] transition-colors py-2"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                        >
                            Services <ChevronDown className="w-4 h-4" />
                        </button>
                        <div
                            className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white border border-gray-100 rounded-xl shadow-xl p-6 grid grid-cols-2 gap-4 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 transform origin-top z-50 mt-2"
                        >
                            {services.map((service) => (
                                <Link
                                    key={service.id}
                                    to={service.path}
                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item"
                                >
                                    <div className={cn("p-2 rounded-md bg-gray-100 text-gray-900 group-hover/item:text-[#EAB308] transition-colors")}>
                                        <service.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-black mb-1 group-hover/item:text-[#EAB308] transition-colors">{service.title}</div>
                                        <div className="text-xs text-gray-500 line-clamp-1">{service.description}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <button className="text-sm font-bold text-black hover:text-[#EAB308] transition-colors">
                        Process Automation
                    </button>

                    <button className="text-sm font-bold text-black hover:text-[#EAB308] transition-colors">
                        Social Media
                    </button>

                </nav>

                {/* CTA Button */}
                <div className="hidden md:flex items-center gap-4">
                    <Link to="/contact">
                        <div className="p-[1px] rounded-full bg-gradient-to-r from-[#D946EF] to-[#8B5CF6]">
                            <button className="px-5 py-1.5 rounded-full bg-white hover:bg-gray-50 text-black font-bold text-sm transition-all duration-300">
                                Contact Us
                            </button>
                        </div>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-black"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-6 flex flex-col gap-4 md:hidden shadow-lg">
                    <Link to="/" className="text-black hover:text-[#EAB308] font-bold">Home</Link>
                    <Link to="/contact" className="text-black hover:text-[#EAB308] font-bold">Contact</Link>
                    <div className="border-t border-gray-100 pt-4">
                        <span className="text-gray-400 text-xs uppercase tracking-wider mb-2 block">Services</span>
                        {services.map((service) => (
                            <Link
                                key={service.id}
                                to={service.path}
                                className="block py-2 text-sm text-black hover:text-[#EAB308]"
                            >
                                {service.title}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
