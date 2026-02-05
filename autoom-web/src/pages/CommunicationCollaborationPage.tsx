import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const communicationServices = [
    {
        id: 'it-project-management',
        title: 'IT Project Management',
        content: {
            title: 'IT Project Management',
            description: (
                <ul className="list-none space-y-2 text-sm md:text-base">
                    <li>We Develop a detailed project plan with timelines and milestones.</li>
                    <li>Monitor team workload and optimize resource allocation.</li>
                    <li>Identify and assess potential risks.</li>
                    <li>Develop risk mitigation strategies.</li>
                    <li>Regularly update stakeholders on project progress.</li>
                    <li>Implement cost control measures.</li>
                    <li>Develop and manage project budgets.</li>
                    <li>Conduct regular quality assessments.</li>
                    <li>Implement quality standards and processes.</li>
                    <li>Develop strategies for handling project changes.</li>
                    <li>Manage relationships with external vendors.</li>
                    <li>We Offer services for developing custom software solutions and Manage the entire software development lifecycle.</li>
                    <li>We Provide analytics for continuous improvement.</li>
                    <li>Ensure data backup and recovery processes are robust.</li>
                    <li>Streamlined incident reporting system.</li>
                    <li>24/7 support system.</li>
                </ul>
            ),
            learnMoreText: 'Learn more about IT Project Management...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop'
        }
    },
    {
        id: 'cms-development',
        title: 'Content Management Systems (CMS) Development',
        content: {
            title: 'Content Management Systems (CMS) Development',
            description: 'Empower your team with flexible and scalable Content Management Systems. We develop custom CMS solutions that allow you to easily manage, update, and publish content without technical expertise, ensuring your website remains dynamic and engaging.',
            learnMoreText: 'Learn more about CMS Development...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop'
        }
    },
    {
        id: 'devops-services',
        title: 'DevOps Services',
        content: {
            title: 'DevOps Services',
            description: 'Streamline your software development and operations with our DevOps services. We automate workflows, improve collaboration, and accelerate delivery, ensuring high-quality software releases and robust infrastructure management.',
            learnMoreText: 'Learn more about DevOps Services...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: 'https://images.unsplash.com/photo-1667372393119-c85c020799a3?q=80&w=2670&auto=format&fit=crop'
        }
    }
];

export function CommunicationCollaborationPage() {
    const [activeTab, setActiveTab] = useState(communicationServices[0].id);
    const activeService = communicationServices.find(s => s.id === activeTab) || communicationServices[0];

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
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2684&auto=format&fit=crop')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#facc15] drop-shadow-lg font-serif">
                        Communication and Collaboration
                    </h1>
                </div>
            </div>

            {/* Navigation Tabs (Horizontal) */}
            <div className="container mx-auto px-4 mt-8">
                <div className="flex justify-center gap-4 flex-wrap">
                    {communicationServices.map((service) => (
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
            <div className="container mx-auto px-4 py-8">
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
