import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const securityServices = [
    {
        id: 'cybersecurity',
        title: 'Cybersecurity Services',
        content: {
            title: 'Cybersecurity Services',
            description: (
                <ul className="list-none space-y-2 text-sm md:text-base">
                    <li>Identify and eliminate potential vulnerabilities in your systems with rigorous testing and proactive measures.</li>
                    <li>Safeguard your network endpoints from malicious activities, ensuring a secure and productive digital environment.</li>
                    <li>Build an impenetrable barrier around your network infrastructure and monitor it constantly to keep cyber threats at bay.</li>
                    <li>Centralize and analyze security event data for early detection of threats, providing a comprehensive view of your cybersecurity landscape.</li>
                    <li>Securely manage user identities and control access privileges to prevent unauthorized entry and data breaches.</li>
                    <li>Develop a comprehensive strategy to effectively respond to and recover from cyber incidents, minimizing downtime and data loss.</li>
                    <li>Stay one step ahead of cyber adversaries with real-time threat intelligence, enabling proactive defense measures.</li>
                    <li>Leverage our experts and cutting-edge technology to detect and respond to threats in real-time, ensuring a proactive defense posture.</li>
                    <li>Rapid recovery solutions to mitigate the impact of ransomware attacks and restore normal operations.</li>
                    <li>In-depth analysis to identify the root cause of incidents, providing critical insights for future prevention.</li>
                </ul>
            ),
            learnMoreText: 'Learn more about Cybersecurity Services...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop'
        }
    },
    {
        id: 'backup-recovery',
        title: 'Data Backup and Recovery',
        content: {
            title: 'Data Backup and Recovery',
            description: 'Ensure business continuity with our robust data backup and recovery solutions. We provide automated backups, secure storage, and rapid recovery options to protect your critical data from loss or corruption. Don\'t let data loss cripple your business; stay prepared with our reliable services.',
            learnMoreText: 'Learn more about Data Backup and Recovery...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: 'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=2073&auto=format&fit=crop'
        }
    }
];

export function SecurityCompliancePage() {
    const [activeTab, setActiveTab] = useState(securityServices[0].id);
    const activeService = securityServices.find(s => s.id === activeTab) || securityServices[0];

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
            <div className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop')" }}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#facc15] drop-shadow-lg">
                        Security and Compliance Services
                    </h1>
                </div>
            </div>

            {/* Navigation Tabs (Horizontal) */}
            <div className="container mx-auto px-4 mt-8">
                <div className="flex justify-center gap-4 flex-wrap">
                    {securityServices.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => setActiveTab(service.id)}
                            className={cn(
                                "px-8 py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-200 shadow-md",
                                activeTab === service.id
                                    ? "bg-[#4ade80] text-black border-2 border-[#4ade80]" // Green Active
                                    : "bg-[#facc15] text-black hover:bg-[#eab308] border-2 border-[#facc15]" // Orange Inactive
                            )}
                        >
                            {service.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-8 mb-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-5xl mx-auto bg-black/80 rounded-3xl overflow-hidden shadow-2xl border border-gray-700 relative text-white"
                    >
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0 z-0 opacity-20">
                            <img
                                src={activeService.content.image}
                                alt={activeService.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="relative z-10 p-8 md:p-12 text-center">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">{activeService.content.title}</h2>

                            <div className="text-gray-200 mb-8 leading-relaxed text-left md:text-center max-w-4xl mx-auto">
                                {activeService.content.description}
                            </div>

                            <a
                                href={activeService.content.learnMoreLink}
                                className="text-[#facc15] font-bold hover:underline mb-8 block"
                            >
                                {activeService.content.learnMoreText}
                            </a>

                            <div className="flex justify-center">
                                <Button className="bg-[#facc15] hover:bg-[#eab308] text-black font-bold px-10 py-3 rounded-md text-lg transition-transform hover:scale-105">
                                    Access Our Solutions
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
