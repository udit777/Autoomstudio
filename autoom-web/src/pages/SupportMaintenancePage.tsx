import { Button } from '@/components/ui/Button';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

export function SupportMaintenancePage() {
    return (
        <div className="bg-[#115e59] min-h-screen relative font-sans">
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

            {/* Hero Section */}
            <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2669&auto=format&fit=crop')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#facc15] drop-shadow-lg font-serif">
                        Support and Maintenance
                    </h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-5xl mx-auto bg-black/80 rounded-3xl overflow-hidden shadow-2xl border border-gray-700 relative text-white"
                >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0 opacity-20">
                        <img
                            src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2000&auto=format&fit=crop"
                            alt="IT Helpdesk and Support"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="relative z-10 p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#f97316]">IT Helpdesk and Support</h2>

                        <div className="text-gray-200 mb-8 leading-relaxed text-left max-w-4xl mx-auto space-y-4">
                            <p>
                                Autoom Studio is here to boost your business online. We specialize in creating user-friendly and visually stunning websites that go beyond expectations, delivering a seamless and enjoyable user experience. With a focus on modern design, we make sure your online presence is not just good-looking but also highly functional.
                            </p>
                            <p>
                                What makes us stand out? Our dedication to ongoing support and maintenance. We understand the importance of consistent attention to keep your online presence thriving. Trust us as your reliable partner for all support needs, ensuring your website stays up-to-date with the latest in technology and design trends. At Autoom Studio, we combine innovation with reliability, offering a full range of IT services to shape the future of your digital presence. Join us for a journey where cutting-edge design meets unwavering support—we're here to lead the way with you.
                            </p>
                        </div>

                        <a
                            href="#"
                            className="text-[#facc15] font-bold hover:underline mb-8 block"
                        >
                            Learn more about IT Helpdesk and Support...
                        </a>

                        <div className="flex justify-center">
                            <Button className="bg-[#facc15] hover:bg-[#eab308] text-black font-bold px-10 py-3 rounded-md text-lg transition-transform hover:scale-105">
                                Access Our Solutions
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
