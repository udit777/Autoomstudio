import { Section } from '@/components/ui/Section';


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


        </div>
    );
}
