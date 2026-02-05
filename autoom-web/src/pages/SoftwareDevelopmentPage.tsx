import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const softwareServices = [
    {
        id: 'web-development',
        title: 'Web Development',
        content: {
            title: 'Web Development',
            description: (
                <>
                    <p className="mb-4">
                        <strong>Tailored Solutions:</strong> Our web development services are customized to meet your specific business needs. We collaborate closely with you to understand your goals and deliver a website that aligns perfectly with your brand and objectives.
                    </p>
                    <p className="mb-4">
                        <strong>Responsive Design:</strong> Ensuring a seamless user experience across devices is our priority. We create responsive websites that adapt to various screen sizes, providing a consistent and user-friendly interface on desktops, tablets, and mobile devices.
                    </p>
                    <p className="mb-4">
                        <strong>Scalability:</strong> As your business grows, so should your website. We build scalable solutions that can easily accommodate increasing traffic and evolving requirements, ensuring your online presence remains robust and efficient.
                    </p>
                    <p className="mb-4">
                        <strong>SEO Optimization:</strong> We integrate search engine optimization (SEO) best practices into our web development process. This means your website is not just visually appealing but also optimized for search engines, improving its visibility and ranking on search result pages.
                    </p>
                    <p className="mb-4">
                        <strong>Security First:</strong> Security is paramount in today's digital landscape. Our web development team implements industry-leading security measures, safeguarding your website and user data from potential threats, giving you peace of mind.
                    </p>
                </>
            ),
            learnMoreText: 'Learn more about Web Development...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop'
        }
    },
    {
        id: 'ui-ux-design',
        title: 'UI/UX Design',
        content: {
            title: 'UI/UX Design',
            description: 'Our UI/UX design services focus on creating intuitive and engaging user experiences. We combine aesthetics with functionality to deliver designs that users love.',
            learnMoreText: 'Learn more about UI/UX Design...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop'
        }
    },
    {
        id: 'custom-software',
        title: 'Custom Software Development',
        content: {
            title: 'Custom Software Development',
            description: 'We build custom software solutions tailored to your unique business requirements. From enterprise applications to specialized tools, we deliver software that drives efficiency.',
            learnMoreText: 'Learn more about Custom Software Development...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2000&auto=format&fit=crop'
        }
    },
    {
        id: 'open-source',
        title: 'Open Source Software Customization',
        content: {
            title: 'Open Source Software Customization',
            description: 'Leverage the power of open source software with our customization services. We tailor existing open source solutions to fit your specific needs, saving you time and resources.',
            learnMoreText: 'Learn more about Open Source Customization...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=2000&auto=format&fit=crop'
        }
    },
    {
        id: 'mobile-app',
        title: 'Mobile App Development',
        content: {
            title: 'Mobile App Development',
            description: 'Reach your customers on the go with our mobile app development services. We create high-quality iOS and Android apps that provide seamless mobile experiences.',
            learnMoreText: 'Learn more about Mobile App Development...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop'
        }
    },
    {
        id: 'software-testing',
        title: 'Software Testing and Quality Assurance',
        content: {
            title: 'Software Testing and Quality Assurance',
            description: 'Ensure your software is bug-free and reliable with our QA services. We perform rigorous testing to identify and fix issues before they reach your users.',
            learnMoreText: 'Learn more about Software Testing...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2000&auto=format&fit=crop'
        }
    },
    {
        id: 'ecommerce',
        title: 'E-commerce Solutions',
        content: {
            title: 'E-commerce Solutions',
            description: 'Build robust e-commerce platforms that drive sales. We offer end-to-end e-commerce solutions, from store setup to payment integration and inventory management.',
            learnMoreText: 'Learn more about E-commerce Solutions...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2000&auto=format&fit=crop'
        }
    }
];

export function SoftwareDevelopmentPage() {
    const [activeTab, setActiveTab] = useState(softwareServices[0].id);
    const activeService = softwareServices.find(s => s.id === activeTab) || softwareServices[0];

    return (
        <div className="bg-white min-h-screen relative">
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
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#facc15] mb-4 drop-shadow-lg font-serif">
                        Software Development Services
                    </h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto py-16 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {/* Left Column: Navigation Tabs */}
                    <div className="lg:col-span-1 flex flex-col gap-4 h-full">
                        {softwareServices.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveTab(service.id)}
                                className={cn(
                                    "w-full text-center px-6 py-4 rounded font-bold text-sm lg:text-base transition-all duration-200 flex-1 flex items-center justify-center",
                                    activeTab === service.id
                                        ? "bg-[#65d36e] text-white" // Green Active
                                        : "bg-[#ebb446] text-white hover:opacity-90" // Orange Inactive
                                )}
                            >
                                {service.title}
                            </button>
                        ))}
                    </div>

                    {/* Right Column: Active Service Content */}
                    <div className="lg:col-span-2 h-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="relative rounded-xl overflow-hidden min-h-[400px] h-full text-white p-8 md:p-12 flex flex-col justify-center"
                            >
                                {/* Background Image with Overlay */}
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={activeService.content.image}
                                        alt={activeService.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/70"></div>
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h2 className="text-3xl font-bold mb-4 text-white">{activeService.content.title}</h2>

                                    <div className="text-gray-200 mb-2 leading-relaxed">
                                        {activeService.content.description}
                                    </div>

                                    <a
                                        href={activeService.content.learnMoreLink}
                                        className="text-[#facc15] font-bold hover:underline mb-8 block text-sm"
                                    >
                                        {activeService.content.learnMoreText}
                                    </a>

                                    <div className="flex justify-center mt-6">
                                        <Button className="bg-[#facc15] hover:bg-[#eab308] text-black font-bold px-8 py-2 rounded-full">
                                            Access Our Solutions
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
