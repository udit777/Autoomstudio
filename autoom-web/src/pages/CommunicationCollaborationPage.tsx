import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import devopsBg from '@/assets/devops_bg.jpg';

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
            description: (
                <ul className="list-none space-y-2 text-sm md:text-base">
                    <li>Tailored solutions meeting your unique business needs.</li>
                    <li>Ensure mobile compatibility for an optimal user experience.</li>
                    <li>Unique themes tailored to your brand.</li>
                    <li>Build plugins/modules specific to your requirements.</li>
                    <li>Enhance existing functionalities.</li>
                    <li>Effortless transition between CMS platforms.</li>
                    <li>Ensure data integrity during the transfer process.</li>
                    <li>Enhance user experience through faster load times.</li>
                    <li>Optimize data storage and retrieval.</li>
                    <li>Proactive measures to counter potential threats.</li>
                    <li>Seamlessly blend CMS and online storefronts.</li>
                    <li>Tailor your e-commerce experience.</li>
                    <li>Connect with third-party services effortlessly.</li>
                    <li>Enable efficient communication between systems.</li>
                    <li>Multilingual capabilities: Reach a global audience seamlessly.</li>
                    <li>Enhance user engagement through AI.</li>
                    <li>Immediate assistance for critical issues.</li>
                    <li>Minimize disruption in case of data loss.</li>
                    <li>Mitigate security threats promptly.</li>
                </ul>
            ),
            learnMoreText: 'Learn more about Content Management Systems (CMS) Development...',
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
            description: (
                <ul className="list-none space-y-2 text-sm md:text-base">
                    <li>Automate your build and testing processes for seamless code integration.</li>
                    <li>Implement pipelines to smoothly move code from development to production.</li>
                    <li>Track code changes effortlessly for enhanced collaboration and versioning.</li>
                    <li>Gain insights into system performance, errors, and application behavior.</li>
                    <li>Foster teamwork through integrated communication tools like Slack or Microsoft Teams.</li>
                    <li>Optimize scalability and flexibility with expert guidance on microservices.</li>
                    <li>Efficiently deploy and scale applications using Docker and Kubernetes.</li>
                    <li>Automate infrastructure provisioning and management with advanced IaC solutions.</li>
                    <li>Integrate security into development with automated scans and vulnerability assessments.</li>
                    <li>Proactively monitor and respond with AI-driven operations for enhanced reliability.</li>
                    <li>Instill a culture of security across the DevOps lifecycle for robust development.</li>
                    <li>Minimize downtime with rapid incident response services.</li>
                    <li>Ensure business continuity with robust disaster recovery plans and testing.</li>
                    <li>Round-the-clock support for critical issues and emergencies.</li>
                    <li>Identify and prevent issues through thorough investigations and preventive measures.</li>
                </ul>
            ),
            learnMoreText: 'Learn more about DevOps Services...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: devopsBg
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
