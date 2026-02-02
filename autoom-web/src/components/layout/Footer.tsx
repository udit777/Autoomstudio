import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                            <img src={logo} alt="Autoom Studio" className="h-10 w-auto brightness-0 invert" />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The Leading Automation IT Services in India. We handle the tech, you unleash the potential.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Company</h3>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
                            <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors text-sm">Portfolio</Link></li>
                            <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">Blog & Insights</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</Link></li>
                            <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Services</h3>
                        <ul className="space-y-3">
                            <li><Link to="/services/bpa" className="text-gray-400 hover:text-white transition-colors text-sm">Business Automation</Link></li>
                            <li><Link to="/services/software-dev" className="text-gray-400 hover:text-white transition-colors text-sm">Software Development</Link></li>
                            <li><Link to="/services/social-media" className="text-gray-400 hover:text-white transition-colors text-sm">Digital Marketing</Link></li>
                            <li><Link to="/services/cybersecurity" className="text-gray-400 hover:text-white transition-colors text-sm">Cybersecurity</Link></li>
                            <li><Link to="/services/infrastructure" className="text-gray-400 hover:text-white transition-colors text-sm">IT Infrastructure</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-gray-400 text-sm">Odisha, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <a href="tel:+910000000000" className="text-gray-400 hover:text-white transition-colors text-sm">+91 000 000 0000</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <a href="mailto:info@autoomstudio.com" className="text-gray-400 hover:text-white transition-colors text-sm">info@autoomstudio.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© {currentYear} Autoom Studio. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="text-gray-500 hover:text-white text-sm">Privacy Policy</Link>
                        <Link to="/terms" className="text-gray-500 hover:text-white text-sm">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
