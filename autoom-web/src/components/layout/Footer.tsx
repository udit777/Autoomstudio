import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-[#003845] text-white pt-16 pb-4">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* About Column */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 font-heading">About</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            "Autoom Studio: The leading Automation IT Services in India. Empowering businesses with cutting-edge automation solutions, we are dedicated to delivering seamless business automation. Unleash the power of innovation, enhance productivity, and thrive in the competitive landscape with our bespoke solutions. We specialize in revolutionizing businesses through automation. Experience a seamless integration of technology and efficiency as we propel your enterprise to new heights."
                        </p>
                    </div>

                    {/* Quick Links Column */}
                    <div className="md:pl-10">
                        <h3 className="text-xl font-bold mb-6 font-heading">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><span className="text-[10px]">»</span> Home</Link></li>
                            <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><span className="text-[10px]">»</span> Services</Link></li>
                            <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><span className="text-[10px]">»</span> Blog</Link></li>
                            <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><span className="text-[10px]">»</span> Career</Link></li>
                            <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><span className="text-[10px]">»</span> About</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><span className="text-[10px]">»</span> Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Address Column */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 font-heading">Address</h3>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5 fill-current" />
                                <span className="text-gray-300 text-sm">3A Hindustan House, Plot No- 334, GGP Square, Rasulgarh, Bhubaneswar, Odisha, 751010</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-white shrink-0 fill-current" />
                                <a href="tel:+919545453412" className="text-gray-300 hover:text-white transition-colors text-sm">+919545453412</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-white shrink-0 fill-current" />
                                <a href="mailto:connect@stautoomstudio.com" className="text-gray-300 hover:text-white transition-colors text-sm">connect[AT]autoomstudio[DOT]com</a>
                            </li>
                        </ul>

                        <div className="flex gap-4">
                            <a href="#" className="bg-white/10 p-2 rounded hover:bg-white/20 transition-colors"><Twitter className="w-4 h-4 text-white" /></a>
                            <a href="#" className="bg-white/10 p-2 rounded hover:bg-white/20 transition-colors"><Linkedin className="w-4 h-4 text-white" /></a>
                            <a href="#" className="bg-white/10 p-2 rounded hover:bg-white/20 transition-colors"><Instagram className="w-4 h-4 text-white" /></a>
                            <a href="#" className="bg-white/10 p-2 rounded hover:bg-white/20 transition-colors"><Facebook className="w-4 h-4 text-white" /></a>
                            <a href="#" className="bg-white/10 p-2 rounded hover:bg-white/20 transition-colors"><Youtube className="w-4 h-4 text-white" /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <span>||</span>
                        <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
                        <span>||</span>
                        <Link to="/refund" className="hover:text-white">Refund and Cancellation</Link>
                    </div>
                    <div>
                        © {new Date().getFullYear()} All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
