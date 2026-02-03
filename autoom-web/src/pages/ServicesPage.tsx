import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Specific services list matching the reference image provided by the user
const servicesList = [
    {
        id: 'ai-workspace',
        title: 'ai workspace Services',
        content: {
            title: 'AI Workspace - Ausomemgr',
            description: '',
            points: [
                'Robust Architecture: Design and implement a strong AI-ready foundation, ensuring your workspace infrastructure is optimized to handle data-intensive processes and complex machine learning workflows.',
                'Scalability: Effortlessly scale your AI capabilities with an infrastructure that expands as your models, data, and business needs grow—without compromising performance.',
                'Performance Optimization: Optimize compute resources, data pipelines, and model deployment environments to ensure high-speed processing, low latency, and efficient resource usage.',
                'Reliability: Trust in a resilient AI workspace designed for maximum uptime, ensuring your critical AI operations run smoothly and consistently with minimal interruptions.',
                'Proactive Management: Leverage proactive monitoring and management tools tailored for AI workloads—detecting and resolving performance bottlenecks or system anomalies before they affect your workflows.'
            ]
        }
    },
    {
        id: 'it-infrastructure',
        title: 'IT Infrastructure services',
        content: {
            title: 'IT Infrastructure Services',
            description: '',
            points: [
                'Robust Architecture: Design and implement a solid IT foundation, ensuring your infrastructure is tailored to support your business needs.',
                'Scalability: Easily expand your operations with a scalable infrastructure that grows alongside your business.',
                'Performance Optimization: Fine-tune your networks, servers, and storage for optimal speed and efficiency.',
                'Reliability: Rely on our expertise to build a reliable IT environment, minimizing downtime and ensuring uninterrupted business operations.',
                'Proactive Management: Benefit from proactive monitoring and management, addressing potential issues before they impact your business.'
            ]
        }
    },
    {
        id: 'software-dev',
        title: 'Software Development Services',
        content: {
            title: 'Software Development Services',
            description: '',
            points: [
                'Custom Solutions: Tailor-made software applications designed to meet your specific business requirements and objectives.',
                'End-to-End Development: From ideation to deployment, we guide you through the entire software development life cycle.',
                'Innovation: Stay ahead of the competition with innovative and cutting-edge software solutions.',
                'Scalable Architecture: Build applications that can grow and adapt as your business evolves.',
                'User-Centric Design: Focus on creating intuitive and user-friendly interfaces for enhanced user experiences.'
            ]
        }
    },
    {
        id: 'digital-marketing',
        title: 'Digital Marketing and Analytics',
        content: {
            title: 'Digital Marketing and Services',
            description: '',
            points: [
                'Comprehensive Marketing Strategies: Craft and implement digital marketing strategies encompassing SEO, social media, and content marketing.',
                'Data-Driven Insights: Leverage analytics tools to gain valuable insights into user behavior, enabling informed decision-making.',
                'Brand Visibility: Enhance your online presence and brand visibility through targeted digital marketing campaigns.',
                'ROI Optimization: Maximize return on investment by continually refining and optimizing your digital marketing strategies.',
                'Adaptability: Stay agile in the dynamic digital landscape with adaptable and responsive marketing approaches.'
            ]
        }
    },
    {
        id: 'security-compliance',
        title: 'Security and Compliance Services',
        content: {
            title: 'Security and Compliance Services',
            description: '',
            points: [
                'Threat Mitigation: Protect your digital assets with advanced security measures designed to mitigate evolving cyber threats.',
                'Regulatory Compliance: Ensure adherence to industry standards and regulations, safeguarding your business from legal and reputational risks.',
                'Data Encryption: Implement robust encryption techniques to secure sensitive data and maintain confidentiality.',
                'Incident Response: Swift and effective responses to security incidents, minimizing potential damage and downtime.',
                'Continuous Monitoring: Employ continuous monitoring tools to detect and address security vulnerabilities in real-time.'
            ]
        }
    },
    {
        id: 'communication',
        title: 'Communication and Collaboration',
        content: {
            title: 'Communication and Collaboration',
            description: '',
            points: [
                'Unified Solutions: Integrate various communication channels into a unified platform for seamless collaboration.',
                'Scalable Communication: Adapt your communication tools as your organization grows, ensuring consistent connectivity.',
                'Productivity Enhancement: Enhance team collaboration and productivity with intuitive communication tools.',
                'Remote Accessibility: Facilitate remote work with secure and efficient communication and collaboration solutions.',
                'User Training and Support: Provide training and support to ensure users can effectively utilize communication and collaboration tools.'
            ]
        }
    },
    {
        id: 'support',
        title: 'Support and Maintenance',
        content: {
            title: 'Support and Maintenance',
            description: '',
            points: [
                'Proactive Maintenance: Conduct regular system checks and updates to prevent potential issues before they occur.',
                'Timely Support: Provide responsive and reliable support to address any IT-related challenges promptly.',
                'Patch Management: Keep your systems up-to-date with the latest patches and updates for enhanced security.',
                'Documentation: Maintain comprehensive documentation for systems and procedures, facilitating efficient troubleshooting.',
                'Performance Monitoring: Continuously monitor system performance to identify and address potential bottlenecks or issues.'
            ]
        }
    }
];

export function ServicesPage() {
    const [activeTab, setActiveTab] = useState(servicesList[0].id);

    const activeService = servicesList.find(s => s.id === activeTab) || servicesList[0];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[#050511]">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="https://autoomstudio.com/wp-content/uploads/2024/03/autoom-services-video.mp4" type="video/mp4" />
                </video>
                {/* Removed overlays/text as requested */}
            </div>

            {/* Our Speciality Section */}
            <Section className="py-20">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center text-[#EA580C] mb-16">Our Speciality</h2>

                    {/* items-stretch ensures both columns match height */}
                    <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                        {/* Left Column: Tabs - flex-col and justify-between to spread buttons evenly */}
                        <div className="lg:w-1/4 flex flex-col justify-between gap-3 min-h-[600px]">
                            {servicesList.map((service) => (
                                <button
                                    key={service.id}
                                    onClick={() => setActiveTab(service.id)}
                                    className={cn(
                                        "w-full text-left px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform shadow-sm flex items-center flex-1", // flex-1 makes buttons grow
                                        activeTab === service.id
                                            ? "bg-[#65a30d] text-white shadow-md ring-2 ring-[#65a30d]/50"
                                            : "bg-[#EAB308] text-white hover:bg-[#CA8A04] hover:scale-105"
                                    )}
                                >
                                    {service.title}
                                </button>
                            ))}
                        </div>

                        {/* Right Column: Content */}
                        <div className="lg:w-3/4 flex">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-[#0f172a] rounded-2xl overflow-hidden shadow-2xl w-full flex flex-col p-8 md:p-12 text-white min-h-[600px]"
                                >
                                    <div className="relative z-10 flex flex-col h-full justify-center">
                                        <div className="flex flex-col items-center mb-8">
                                            {/* Symbol removed as requested */}
                                            <h3 className="text-3xl md:text-4xl font-bold mb-2 text-center text-white">{activeService.content.title}</h3>
                                        </div>

                                        <div className="space-y-6 text-gray-300 leading-relaxed text-lg flex-grow">
                                            <p className="text-center md:text-left">
                                                {activeService.content.description}
                                            </p>
                                            <div className="space-y-4 mt-6">
                                                {activeService.content.points.map((point, idx) => (
                                                    <div key={idx} className="flex items-start gap-3">
                                                        <CheckCircle className="w-5 h-5 text-[#EAB308] shrink-0 mt-1" />
                                                        <span>{point}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-12 flex justify-center">
                                            <Button className="bg-[#EAB308] hover:bg-[#CA8A04] text-black font-bold px-8 py-3 rounded-md">
                                                Your Solutions Hub
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
