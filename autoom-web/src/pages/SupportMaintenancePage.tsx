import { Button } from '@/components/ui/Button';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import supportHeroBg from '@/assets/support_hero_bg.jpg';

export function SupportMaintenancePage() {
    return (
        <div className="bg-[#0a0a0a] min-h-screen relative font-sans overflow-hidden">
            {/* Hero Section */}
            <div className="relative h-[400px] flex items-center justify-center overflow-hidden z-20">
                <div className="absolute inset-0">
                    <img 
                        src={supportHeroBg} 
                        alt="Support and Maintenance Hero" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold text-[#facc15] drop-shadow-lg font-serif"
                    >
                        Support and Maintenance
                    </motion.h1>
                </div>
            </div>

            {/* Subtle Orange Grid Background */}
            <div 
                className="absolute inset-0 z-0 opacity-[0.15]"
                style={{
                    backgroundImage: 'linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            ></div>

            {/* Social Media Sidebar - Fixed Right */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1">
                <a href="#" className="bg-[#3b5998] p-2 text-white hover:w-12 w-10 transition-all duration-300 flex items-center justify-center overflow-hidden">
                    <Facebook size={20} />
                </a>
                <a href="#" className="bg-[#000000] p-2 text-white hover:w-12 w-10 transition-all duration-300 flex items-center justify-center overflow-hidden">
                    <Twitter size={20} />
                </a>
                <a href="#" className="bg-[#0077b5] p-2 text-white hover:w-12 w-10 transition-all duration-300 flex items-center justify-center overflow-hidden">
                    <Linkedin size={20} />
                </a>
                <a href="#" className="bg-[#d62976] p-2 text-white hover:w-12 w-10 transition-all duration-300 flex items-center justify-center overflow-hidden">
                    <Instagram size={20} />
                </a>
                <a href="#" className="bg-[#ff0000] p-2 text-white hover:w-12 w-10 transition-all duration-300 flex items-center justify-center overflow-hidden">
                    <Youtube size={20} />
                </a>
            </div>

            {/* Main Content Area */}
            <div className="container mx-auto px-4 py-20 relative z-10 flex flex-col items-center justify-center min-h-[80vh]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl w-full bg-black/95 rounded-2xl p-8 md:p-12 shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-gray-800 relative z-10"
                >
                    <h2 className="text-xl md:text-2xl font-bold mb-10 text-[#f97316] uppercase tracking-wider">IT Helpdesk and Support</h2>

                    <div className="text-gray-200 mb-12 leading-relaxed text-left space-y-8 text-sm md:text-base lg:text-lg font-medium opacity-90">
                        <p>
                            Autoom Studio is here to boost your business online. We specialize in creating user-friendly and visually stunning websites that go beyond expectations, delivering a seamless and enjoyable user experience. With a focus on modern design, we make sure your online presence is not just good-looking but also highly functional.
                        </p>
                        <p>
                            What makes us stand out? Our dedication to ongoing support and maintenance. We understand the importance of consistent attention to keep your online presence thriving. Trust us as your reliable partner for all support needs, ensuring your website stays up-to-date with the latest in technology and design trends. At Autoom Studio, we combine innovation with reliability, offering a full range of IT services to shape the future of your digital presence. Join us for a journey where cutting-edge design meets unwavering support—we're here to lead the way with you.
                        </p>
                    </div>

                    <a
                        href="#"
                        className="text-[#f97316] font-bold hover:underline mb-12 block text-left text-sm md:text-base transition-colors hover:text-[#fb923c]"
                    >
                        Learn more about IT Helpdesk and Support.
                    </a>

                    <div className="flex justify-center md:justify-center mt-6">
                        <Button className="bg-[#f2a138] hover:bg-[#e69127] text-white font-bold px-14 py-4 rounded-lg text-lg transition-all hover:shadow-[0_0_25px_rgba(242,161,56,0.4)] hover:scale-105 active:scale-95">
                            Access Our Solutions
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
