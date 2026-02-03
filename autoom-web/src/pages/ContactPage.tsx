import { Section } from '@/components/ui/Section';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, MessageCircle } from 'lucide-react';

export function ContactPage() {
    return (
        <div className="min-h-screen bg-white pt-[57px]">
            {/* 1. Header Strip - "Contact Us" at the top */}
            <div className="bg-[#004d4f] py-12 flex flex-col items-center justify-center">
                <h1 className="text-white text-4xl font-normal tracking-wide">Contact Us</h1>
                <div className="w-24 h-1 bg-white mt-4"></div>
            </div>

            {/* 2. Contact Form Section under the header */}
            <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80")', minHeight: '650px' }}>
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative container mx-auto px-4 py-16 flex flex-col items-center justify-center h-full">
                    <div className="w-full max-w-5xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-white text-left mb-8">Let's Connect Together!</h2>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Full Name*"
                                    className="w-full bg-white/20 backdrop-blur-sm border border-white/50 rounded-md px-4 py-3 text-white placeholder-gray-200 focus:outline-none focus:border-[#EAB308] transition-colors"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email*"
                                    className="w-full bg-white/20 backdrop-blur-sm border border-white/50 rounded-md px-4 py-3 text-white placeholder-gray-200 focus:outline-none focus:border-[#EAB308] transition-colors"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <input
                                    type="text"
                                    placeholder="Contact No*"
                                    className="w-full bg-white/20 backdrop-blur-sm border border-white/50 rounded-md px-4 py-3 text-white placeholder-gray-200 focus:outline-none focus:border-[#EAB308] transition-colors"
                                />
                                <input
                                    type="text"
                                    placeholder="WhatsApp"
                                    className="w-full bg-white/20 backdrop-blur-sm border border-white/50 rounded-md px-4 py-3 text-white placeholder-gray-200 focus:outline-none focus:border-[#EAB308] transition-colors"
                                />
                                <input
                                    type="text"
                                    placeholder="Skype"
                                    className="w-full bg-white/20 backdrop-blur-sm border border-white/50 rounded-md px-4 py-3 text-white placeholder-gray-200 focus:outline-none focus:border-[#EAB308] transition-colors"
                                />
                            </div>

                            <input
                                type="text"
                                placeholder="Your Address / Location"
                                className="w-full bg-white/20 backdrop-blur-sm border border-white/50 rounded-md px-4 py-3 text-white placeholder-gray-200 focus:outline-none focus:border-[#EAB308] transition-colors"
                            />

                            <textarea
                                placeholder="Your Message*"
                                rows={4}
                                className="w-full bg-white/20 backdrop-blur-sm border border-white/50 rounded-md px-4 py-3 text-white placeholder-gray-200 focus:outline-none focus:border-[#EAB308] transition-colors resize-none"
                            ></textarea>

                            <div className="flex justify-center pt-4">
                                <button className="bg-[#E67E22] hover:bg-[#D35400] text-white font-bold py-3 px-16 rounded-md transition-all duration-300 shadow-lg text-lg">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Social Sidebar - Fixed */}
                <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-0 bg-transparent hidden md:flex">
                    <a href="#" className="bg-[#3b5998] p-2 text-white hover:opacity-90 transition-opacity"><Facebook className="w-5 h-5" /></a>
                    <a href="#" className="bg-[#000000] p-2 text-white hover:opacity-90 transition-opacity"><Twitter className="w-5 h-5" /></a>
                    <a href="#" className="bg-[#0077b5] p-2 text-white hover:opacity-90 transition-opacity"><Linkedin className="w-5 h-5" /></a>
                    <a href="#" className="bg-[#E1306C] p-2 text-white hover:opacity-90 transition-opacity"><Instagram className="w-5 h-5" /></a>
                    <a href="#" className="bg-[#FF0000] p-2 text-white hover:opacity-90 transition-opacity"><Youtube className="w-5 h-5" /></a>
                </div>
            </div>

            {/* 3. Address and Map Section */}
            <Section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Legal Info */}
                        <div className="flex flex-col items-center lg:items-center text-center">
                            <div className="space-y-4 text-gray-700">
                                <p className="text-lg">You may contact us using the information below:</p>

                                <div>
                                    <p className="font-bold">Legal entity name:</p>
                                    <p>AUTOOM STUDIO (OPC) PRIVATE LIMITED</p>
                                </div>

                                <div>
                                    <p className="font-bold">Registered Address:</p>
                                    <p>FLAT NO 303, PLOT NO 334, RASULGARH, GGP COLONY, RASULGARH,</p>
                                    <p>BHUBANESWAR, KHORDHA, ODISHA, 751010</p>
                                </div>

                                <div>
                                    <p>Telephone No: + 91 9545453412</p>
                                    <p>E-Mail ID: connect@autoomstudio.com</p>
                                </div>
                            </div>

                            {/* Back Button (Orange) */}
                            <div className="absolute left-4 bottom-4 lg:static lg:mt-8 lg:self-start hidden">
                                <button className="bg-[#EAB308] text-white px-6 py-2 rounded-md font-bold">Back</button>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="w-full h-[350px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.662283592873!2d85.86016331491953!3d20.272583986411996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190a6c6731245b%3A0x80352709280145c3!2sRasulgarh%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1645427183000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Chat Buttons */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
                <button className="bg-[#25D366] p-3 rounded-2xl text-white shadow-lg hover:scale-110 transition-transform flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                </button>
                <button className="bg-[#8B5CF6] p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}
