import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const marketingServices = [
    {
        id: 'ppc',
        title: 'Pay-per-Click (PPC) Advertising',
        content: {
            title: 'Pay-per-Click (PPC) Advertising',
            description: (
                <ul className="list-none space-y-2">
                    <li>Craft laser-focused PPC campaigns from goal-setting to platform selection.</li>
                    <li>Act as campaign architects, building a solid foundation for success.</li>
                    <li>Use cutting-edge tools to uncover hidden gems for targeted website traffic.</li>
                    <li>Write irresistible ad copy that grabs attention and compels clicks.</li>
                    <li>Craft persuasive spells as wordsmiths with superpowers.</li>
                    <li>Track every click, conversion, and metric like a hawk.</li>
                    <li>Provide clear, actionable reports to reveal what's working and what needs tweaking.</li>
                    <li>Act as data detectives, uncovering insights that fuel campaign evolution.</li>
                    <li>Bring back potential customers with targeted ads reminding them of your awesomeness.</li>
                    <li>Act as memory joggers, gently nudging users back into the sales funnel.</li>
                    <li>Conquer platforms like Facebook, Instagram, and Twitter.</li>
                    <li>Craft engaging social media ads to build brand awareness and drive website traffic.</li>
                    <li>Act as social media superheroes, spreading your message like wildfire.</li>
                </ul>
            ),
            learnMoreText: 'Learn more about Pay-per-Click (PPC) Advertising...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2000&auto=format&fit=crop'
        }
    },
    {
        id: 'digital-marketing',
        title: 'Digital Marketing Services',
        content: {
            title: 'Digital Marketing Services',
            description: 'Comprehensive digital marketing strategies to grow your business online. From strategy to execution, we help you reach your target audience effectively.',
            learnMoreText: 'Learn more about Digital Marketing...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
        }
    },
    {
        id: 'social-ads',
        title: 'Social Media Advertising',
        content: {
            title: 'Social Media Advertising',
            description: 'Targeted social media advertising campaigns on major platforms. Reach your ideal customers where they spend their time.',
            learnMoreText: 'Learn more about Social Media Advertising...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop'
        }
    },
    {
        id: 'seo',
        title: 'Search Engine Optimization(SEO)',
        content: {
            title: 'Search Engine Optimization(SEO)',
            description: 'Improve your search engine rankings and drive organic traffic. We specialize in on-page, off-page, and technical SEO strategies.',
            learnMoreText: 'Learn more about SEO...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=2080&auto=format&fit=crop'
        }
    },
    {
        id: 'smo',
        title: 'Social Media Optimization (SMO)',
        content: {
            title: 'Social Media Optimization (SMO)',
            description: 'Optimize your social media profiles and content to increase visibility and engagement. Build a strong community around your brand.',
            learnMoreText: 'Learn more about SMO...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop'
        }
    },
    {
        id: 'analytics',
        title: 'Web & Social Analytics',
        content: {
            title: 'Web & Social Analytics',
            description: 'Data-driven insights to measure performance and optimize ROI. We help you make informed decisions based on real user data.',
            learnMoreText: 'Learn more about Analytics...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
        }
    }
];

export function DigitalMarketingPage() {
    const [activeTab, setActiveTab] = useState(marketingServices[0].id);
    const activeService = marketingServices.find(s => s.id === activeTab) || marketingServices[0];

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
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#facc15] mb-4 drop-shadow-lg font-serif">
                        Digital Marketing and Analytics
                    </h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto py-16 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {/* Left Column: Navigation Tabs */}
                    <div className="lg:col-span-1 flex flex-col gap-4 h-full">
                        {marketingServices.map((service) => (
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

                                    <div className="text-gray-200 mb-6 leading-relaxed">
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
