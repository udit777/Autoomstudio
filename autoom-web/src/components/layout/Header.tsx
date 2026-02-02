import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { services } from '@/data/services';
import logo from '@/assets/logo.png';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
        setOpenDropdown(null);
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
                <nav className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
                    <Link to="/" className="text-sm font-bold text-black hover:text-[#EAB308] transition-colors">Home</Link>

                    {/* Products Dropdown */}
                    <Link
                        to="/products"
                        className="flex items-center gap-1 text-sm font-bold text-black hover:text-[#EAB308] transition-colors py-2"
                    >
                        Products <ChevronDown className="w-4 h-4" />
                    </Link>

                    {/* Services Dropdown */}
                    <div className="relative group">
                        <button
                            className="flex items-center gap-1 text-sm font-bold text-black hover:text-[#EAB308] transition-colors py-2"
                            onMouseEnter={() => setOpenDropdown('services')}
                        >
                            Services <ChevronDown className="w-4 h-4" />
                        </button>
                        <div
                            className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white border border-gray-100 rounded-xl shadow-xl p-6 grid grid-cols-2 gap-4 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 transform origin-top z-50 mt-2 text-left"
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

                    {/* Process Automation Dropdown */}
                    <button className="flex items-center gap-1 text-sm font-bold text-black hover:text-[#EAB308] transition-colors py-2">
                        Process Automation Services <ChevronDown className="w-4 h-4" />
                    </button>

                    {/* Social Media Dropdown */}
                    <button className="flex items-center gap-1 text-sm font-bold text-black hover:text-[#EAB308] transition-colors py-2">
                        Social Media Services <ChevronDown className="w-4 h-4" />
                    </button>

                    {/* More Dropdown */}
                    <button className="flex items-center gap-1 text-sm font-bold text-black hover:text-[#EAB308] transition-colors py-2">
                        More <ChevronDown className="w-4 h-4" />
                    </button>
                </nav>

                {/* CTA Button / Contact Us */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link to="/contact">
                        <button className="px-5 py-2 rounded-full bg-[#004d4f] hover:bg-[#00383a] text-white font-bold text-sm transition-all duration-300">
                            Contact Us
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden p-2 text-black z-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-6 flex flex-col gap-4 lg:hidden shadow-lg h-screen overflow-y-auto pt-4">
                    <Link to="/" className="text-black hover:text-[#EAB308] font-bold text-lg">Home</Link>

                    <Link to="/products" className="flex items-center justify-between text-black hover:text-[#EAB308] font-bold text-lg py-2">
                        Products <ChevronDown className="w-4 h-4" />
                    </Link>

                    <div>
                        <button onClick={() => setOpenDropdown(openDropdown === 'mobile-services' ? null : 'mobile-services')} className="flex items-center justify-between w-full text-black hover:text-[#EAB308] font-bold text-lg py-2">
                            Services <ChevronDown className={cn("w-4 h-4 transition-transform", openDropdown === 'mobile-services' && "rotate-180")} />
                        </button>
                        {openDropdown === 'mobile-services' && (
                            <div className="pl-4 space-y-2 mt-2">
                                {services.map((service) => (
                                    <Link
                                        key={service.id}
                                        to={service.path}
                                        className="block py-2 text-sm text-gray-600 hover:text-[#EAB308]"
                                    >
                                        {service.title}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="text-black hover:text-[#EAB308] font-bold text-lg py-2 flex items-center justify-between">
                        Process Automation <ChevronDown className="w-4 h-4" />
                    </div>
                    <div className="text-black hover:text-[#EAB308] font-bold text-lg py-2 flex items-center justify-between">
                        Social Media <ChevronDown className="w-4 h-4" />
                    </div>
                    <div className="text-black hover:text-[#EAB308] font-bold text-lg py-2 flex items-center justify-between">
                        More <ChevronDown className="w-4 h-4" />
                    </div>

                    <Link to="/contact" className="text-black hover:text-[#EAB308] font-bold text-lg py-2">Contact Us</Link>
                </div>
            )}
        </header>
    );
}
