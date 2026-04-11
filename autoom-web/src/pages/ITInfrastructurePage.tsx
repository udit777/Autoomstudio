import { useState } from 'react';

import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import itInfrastructureManagementBg from '@/assets/it_infrastructure_management_bg.jpg';
import domainHostingBg from '@/assets/domain_hosting_bg.jpg';
import legacyModernizationBg from '@/assets/legacy_modernization_bg.jpg';

const itServices = [
    {
        id: 'infrastructure-management',
        title: 'IT Infrastructure Management Services',
        content: {
            title: 'IT Infrastructure Management Services',
            description: `Efficiency is the cornerstone of any successful business operation. Our IT Infrastructure Management Services ensure that your systems are not just operational but optimized for peak performance. From network monitoring and maintenance to end-user support, we provide comprehensive solutions that allow you to focus on your core business functions while we handle the technical intricacies.`,
            learnMoreText: 'Learn more about IT Infrastructure Management Services...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: itInfrastructureManagementBg
        }
    },
    {
        id: 'data-center',
        title: 'Data Center Management',
        content: {
            title: 'Data Center Management',
            description: `In the heart of every digitally-driven enterprise lies the data center, and its efficient management is paramount. Our Data Center Management services guarantee the integrity, security, and availability of your critical data. Whether it's optimizing server performance, ensuring data redundancy, or implementing disaster recovery plans, we've got your back.`,
            learnMoreText: 'Learn more about Data Center Management...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?q=80&w=2574&auto=format&fit=crop'
        }
    },
    {
        id: 'domain-hosting',
        title: 'Domain & Hosting Services',
        content: {
            title: 'Domain & Hosting Services',
            description: `Your online presence begins with a strong domain and reliable hosting. Our Domain & Hosting Services offer a hassle-free experience, providing domain registration, management, and hosting solutions tailored to your business needs. Enjoy seamless scalability, high-performance servers, and 24/7 support to keep your digital presence running smoothly.`,
            learnMoreText: 'Learn more about Domain & Hosting Services...',
            learnMoreLink: '/domain-hosting-solutions-info',
            accessLink: '/contact',
            image: domainHostingBg
        }
    },
    {
        id: 'legacy-modernization',
        title: 'Legacy System Modernization',
        content: {
            title: 'Legacy System Modernization',
            description: `Embrace the future without abandoning the past. Our Legacy System Modernization services breathe new life into your existing systems, ensuring they align with contemporary technological standards. From migrating legacy applications to modern platforms to updating outdated infrastructure, we pave the way for enhanced efficiency and compatibility.`,
            learnMoreText: 'Learn more about Legacy System Modernization...',
            learnMoreLink: '/legacy-system-modernization-info',
            accessLink: '/contact',
            image: legacyModernizationBg
        }
    }
];

export function ITInfrastructurePage() {
    const [activeTab, setActiveTab] = useState(itServices[0].id);
    const activeService = itServices.find(s => s.id === activeTab) || itServices[0];

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
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#facc15] mb-4 drop-shadow-lg font-serif">
                        IT Infrastructure Services
                    </h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto py-16 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {/* Left Column: Navigation Tabs */}
                    <div className="lg:col-span-1 flex flex-col gap-4 h-full">
                        {itServices.map((service) => (
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

                                    <p className="text-gray-200 mb-2 leading-relaxed">
                                        {activeService.content.description}
                                    </p>

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
