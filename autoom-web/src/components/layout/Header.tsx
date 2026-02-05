import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, BookOpen, Users, Briefcase, CreditCard } from 'lucide-react';
import { cn } from '@/lib/utils';
import { services } from '@/data/services';
import { products } from '@/data/products';
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
                    {/* Products Dropdown */}
                    <div className="relative group">
                        <Link
                            to="/products"
                            className="flex items-center gap-1 text-sm font-bold text-black hover:text-[#EAB308] transition-colors py-2"
                        >
                            Products <ChevronDown className="w-4 h-4" />
                        </Link>
                        <div
                            className="absolute top-full left-0 w-[280px] bg-white border border-gray-100 rounded-xl shadow-xl p-4 flex flex-col gap-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 transform origin-top z-50 mt-2 text-left"
                        >
                            {products.map((product) => (
                                <Link
                                    key={product.id}
                                    to={product.path}
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item"
                                >
                                    <span className="text-sm text-gray-700 font-medium group-hover/item:text-[#EAB308] transition-colors">
                                        {product.title}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Services Dropdown */}
                    <div className="relative group">
                        <Link
                            to="/services"
                            className="flex items-center gap-1 text-sm font-bold text-black hover:text-[#EAB308] transition-colors py-2"
                            onMouseEnter={() => setOpenDropdown('services')}
                        >
                            Services <ChevronDown className="w-4 h-4" />
                        </Link>
                        <div
                            className="absolute top-full left-0 w-80 bg-white border border-gray-100 rounded-xl shadow-xl p-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 transform origin-top z-50 mt-2 text-left flex"
                        >
                            {/* Left Side: Main Categories */}
                            <div className="w-full py-2 bg-white rounded-xl">
                                {services.map((service) => (
                                    <div
                                        key={service.id}
                                        className="relative group/category"
                                        onMouseEnter={() => setOpenDropdown(service.id)}
                                    >
                                        <Link
                                            to={service.path}
                                            className="flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#EAB308] hover:text-white transition-colors"
                                        >
                                            {service.title}
                                            {service.subServices && <ChevronRight className="w-4 h-4" />}
                                        </Link>

                                        {/* Right Side: Sub-menu (Flyout) */}
                                        {service.subServices && (
                                            <div className="absolute left-full top-0 w-[400px] min-h-full bg-white border border-gray-100 rounded-xl shadow-xl py-2 invisible opacity-0 group-hover/category:visible group-hover/category:opacity-100 transition-all duration-200 ml-1">
                                                <div className="flex flex-col">
                                                    {service.subServices.map((subItem) => (
                                                        <Link
                                                            key={subItem.id}
                                                            to={subItem.path}
                                                            className="block px-6 py-3 text-sm text-gray-600 hover:text-[#EAB308] hover:bg-gray-50 transition-colors"
                                                        >
                                                            {subItem.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Process Automation Dropdown */}
                    <div className="relative group">
                        <Link
                            to="/process-automation"
                            className="flex items-center gap-1 text-sm font-bold text-black hover:text-[#EAB308] transition-colors py-2 whitespace-nowrap"
                        >
                            Process Automation <ChevronDown className="w-4 h-4" />
                        </Link>
                        <div
                            className="absolute top-full left-0 w-[280px] bg-white border border-gray-100 rounded-xl shadow-xl p-4 flex flex-col gap-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 transform origin-top z-50 mt-2 text-left"
                        >
                            <Link to="/process-automation/automation-tool" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                                <span className="text-sm text-gray-700 font-medium group-hover/item:text-[#EAB308] transition-colors">Automation tool Development</span>
                            </Link>
                            <Link to="/process-automation/repetitive-task" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                                <span className="text-sm text-gray-700 font-medium group-hover/item:text-[#EAB308] transition-colors">Repetitive Task Automation</span>
                            </Link>
                            <Link to="/process-automation/sales-process" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                                <span className="text-sm text-gray-700 font-medium group-hover/item:text-[#EAB308] transition-colors">Sales Process Automation</span>
                            </Link>
                            <Link to="/process-automation/custom-bot" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                                <span className="text-sm text-gray-700 font-medium group-hover/item:text-[#EAB308] transition-colors">Custom Bot development</span>
                            </Link>
                        </div>
                    </div>



                    {/* More Dropdown */}
                    <div className="relative group">
                        <Link to="/more" className="flex items-center gap-1 text-sm font-bold text-black hover:text-[#EAB308] transition-colors py-2">
                            More <ChevronDown className="w-4 h-4" />
                        </Link>
                        <div
                            className="absolute top-full right-0 w-[250px] bg-white border border-gray-100 rounded-xl shadow-xl p-4 flex flex-col gap-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 transform origin-top z-50 mt-2 text-left"
                        >
                            <Link to="/pricing" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                                <div className="p-2 rounded-md bg-gray-100 text-gray-900 group-hover/item:text-[#EAB308] transition-colors">
                                    <CreditCard className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-bold text-black group-hover/item:text-[#EAB308] transition-colors">Pricing</span>
                            </Link>
                            <Link to="/blog" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                                <div className="p-2 rounded-md bg-gray-100 text-gray-900 group-hover/item:text-[#EAB308] transition-colors">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-bold text-black group-hover/item:text-[#EAB308] transition-colors">Blog</span>
                            </Link>
                            <Link to="/about" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                                <div className="p-2 rounded-md bg-gray-100 text-gray-900 group-hover/item:text-[#EAB308] transition-colors">
                                    <Users className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-bold text-black group-hover/item:text-[#EAB308] transition-colors">About Us</span>
                            </Link>
                            <Link to="/careers" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                                <div className="p-2 rounded-md bg-gray-100 text-gray-900 group-hover/item:text-[#EAB308] transition-colors">
                                    <Briefcase className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-bold text-black group-hover/item:text-[#EAB308] transition-colors">Career</span>
                            </Link>
                        </div>
                    </div>
                    {/* Contact Us Link */}
                    <Link to="/contact" className="flex items-center gap-1 text-sm font-bold text-black hover:text-[#EAB308] transition-colors py-2">
                        Contact Us
                    </Link>
                </nav>



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

                    <div className="relative">
                        <button onClick={() => setOpenDropdown(openDropdown === 'mobile-products' ? null : 'mobile-products')} className="flex items-center justify-between w-full text-black hover:text-[#EAB308] font-bold text-lg py-2">
                            Products <ChevronDown className={cn("w-4 h-4 transition-transform", openDropdown === 'mobile-products' && "rotate-180")} />
                        </button>
                        {openDropdown === 'mobile-products' && (
                            <div className="pl-4 space-y-2 mt-2">
                                <Link to="/products" className="block py-2 text-sm font-bold text-black hover:text-[#EAB308]">
                                    All Products
                                </Link>
                                {products.map((product) => (
                                    <Link
                                        key={product.id}
                                        to={product.path}
                                        className="block py-2 text-sm text-gray-600 hover:text-[#EAB308]"
                                    >
                                        {product.title}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <div>
                        <button onClick={() => setOpenDropdown(openDropdown === 'mobile-services' ? null : 'mobile-services')} className="flex items-center justify-between w-full text-black hover:text-[#EAB308] font-bold text-lg py-2">
                            Services <ChevronDown className={cn("w-4 h-4 transition-transform", openDropdown === 'mobile-services' && "rotate-180")} />
                        </button>
                        {openDropdown === 'mobile-services' && (
                            <div className="pl-4 space-y-2 mt-2">
                                <Link
                                    to="/services"
                                    className="block py-2 text-sm font-bold text-black hover:text-[#EAB308]"
                                >
                                    All Services
                                </Link>
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

                    <Link to="/process-automation" className="text-black hover:text-[#EAB308] font-bold text-lg py-2 flex items-center justify-between">
                        Process Automation <ChevronDown className="w-4 h-4" />
                    </Link>

                    <div>
                        <button onClick={() => setOpenDropdown(openDropdown === 'more' ? null : 'more')} className="flex items-center justify-between w-full text-black hover:text-[#EAB308] font-bold text-lg py-2">
                            More <ChevronDown className={cn("w-4 h-4 transition-transform", openDropdown === 'more' && "rotate-180")} />
                        </button>
                        {openDropdown === 'more' && (
                            <div className="pl-4 space-y-2 mt-2">
                                <Link to="/pricing" className="block py-2 text-sm text-gray-600 hover:text-[#EAB308] flex items-center gap-2">
                                    <CreditCard className="w-4 h-4" /> Pricing
                                </Link>
                                <Link to="/blog" className="block py-2 text-sm text-gray-600 hover:text-[#EAB308] flex items-center gap-2">
                                    <BookOpen className="w-4 h-4" /> Blog
                                </Link>
                                <Link to="/about" className="block py-2 text-sm text-gray-600 hover:text-[#EAB308] flex items-center gap-2">
                                    <Users className="w-4 h-4" /> About Us
                                </Link>
                                <Link to="/careers" className="block py-2 text-sm text-gray-600 hover:text-[#EAB308] flex items-center gap-2">
                                    <Briefcase className="w-4 h-4" /> Career
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link to="/contact" className="text-black hover:text-[#EAB308] font-bold text-lg py-2">Contact Us</Link>
                </div>
            )}
        </header>
    );
}
