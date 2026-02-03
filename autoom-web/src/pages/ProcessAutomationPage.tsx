import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock data for the process automation services tabs
const processServices = [
    {
        id: 'automation-tool',
        title: 'Automation Tool Development',
        content: {
            title: 'Automation Tool Development',
            points: [
                'Our Automation Tool Development involves creating customized solutions specifically designed to meet the unique needs and requirements of your business. We take the time to understand your processes and challenges, ensuring that the tools we develop align seamlessly with your operations.',
                'Our tools will supercharge your business by making things run smoother. We find and fix problems, automate boring tasks, and make everything work better. Your team can then concentrate on the important stuff, leading to a more efficient and productive operation.',
                'We help turn your automation ideas into reality, from the initial idea to making it happen. Our team works closely with yours to make sure everything goes smoothly, and we\'ll keep supporting you even after it\'s all setup. With our help, your team will have what they need to succeed in today\'s fast-changing business world.'
            ],
            learnMore: 'https://autoomstudio.com/automation-tool-development-info/',
            accessLink: 'https://autoomstudio.com/automation-tool-development/'
        }
    },
    {
        id: 'repetitive-task',
        title: 'Repetitive Task Automation',
        content: {
            title: 'Repetitive Task Automation',
            points: [
                'Our Workflow Optimization solution boosts productivity by automating repetitive tasks, saving time, and improving accuracy. This streamlined approach enhances overall workflow efficiency, making processes more effective and reducing manual effort for increased productivity.',
                'Automating routine tasks liberates your team to focus on critical, strategic work, fostering creativity and problem-solving. This redirection of efforts enhances productivity, as your workforce engages in projects demanding a human touch, unlocking their full potential for innovation and efficiency.',
                'Our solution is designed to boost your organization\'s efficiency by automating tasks, saving time and resources. With streamlined processes and optimized resource allocation, we ensure significant cost savings, allowing your team to focus on core activities and improving overall productivity.'
            ],
            learnMore: 'https://autoomstudio.com/repetitive-task-automation-info/',
            accessLink: 'https://autoomstudio.com/repetitive-task-automation/'
        }
    },
    {
        id: 'sales-process',
        title: 'Sales Process Automation',
        content: {
            title: 'Sales Process Automation',
            points: [
                'Our Sales Process Automation ensures a smooth transition from leads to deals, streamlining every stage of the sales process. With automated workflows and intelligent systems, we eliminate bottlenecks, reducing manual efforts and enhancing the overall efficiency of your sales team.',
                'Our solutions are designed to optimize your revenue generation. By leveraging advanced analytics and data-driven insights, we identify and capitalize on key sales opportunities. This strategic approach empowers your team to focus on high-value prospects, ultimately increasing the conversion rates and maximizing overall sales revenue.',
                'Boost your sales game with our Sales Process Automation! We take care of the boring stuff like data entry and follow-ups, so your sales team can focus on closing deals and building strong customer relationships. It\'s all about saving time and making every effort count.'
            ],
            learnMore: 'https://autoomstudio.com/sales-process-automation-info/',
            accessLink: 'https://autoomstudio.com/sales-process-automation/'
        }
    },
    {
        id: 'custom-bot',
        title: 'Custom Bot Automation',
        content: {
            title: 'Custom Bot Automation',
            points: [
                'Our Custom Bot Automation is specifically designed to meet the unique needs of your business. Each bot is crafted with precision, taking into account the intricacies of your operations and workflow. This tailored approach ensures that the bots seamlessly integrate into your processes, effectively handling complex tasks that would otherwise require human intervention.',
                'Our bots mimic human actions, offering tailored customer service. They respond to queries, handle issues, and share information with a human touch, enhancing the user experience through personalized interactions.',
                'Think of our Custom Bots as your super-efficient helpers! They don\'t just handle customer service but also take care of boring stuff like data entry. This frees up your team to do important and creative work, boosting overall efficiency and productivity. These bots are like error-proof assistants, making your business tasks a breeze.'
            ],
            learnMore: 'https://autoomstudio.com/custom-bot-development-info/',
            accessLink: 'https://autoomstudio.com/custom-bot-development/'
        }
    }
];

export function ProcessAutomationPage() {
    const [activeTab, setActiveTab] = useState(processServices[0].id);

    const activeService = processServices.find(s => s.id === activeTab) || processServices[0];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[#050511]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050511] to-transparent"></div>

                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl tracking-tight">
                        Process Automation <span className="text-gray-400">Services</span>
                    </h1>
                </div>
            </div>

            {/* Content Section */}
            <Section className="py-20 bg-[#111111]"> {/* Dark background for the section */}
                <div className="container mx-auto">
                    {/* Grid Background Pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                        backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }}></div>

                    <div className="flex flex-col lg:flex-row gap-8 relative z-10 items-stretch">
                        {/* Left Column: Tabs */}
                        <div className="lg:w-1/4 flex flex-col gap-4">
                            {processServices.map((service) => (
                                <button
                                    key={service.id}
                                    onClick={() => setActiveTab(service.id)}
                                    className={cn(
                                        "w-full text-center px-6 py-6 rounded-lg font-bold text-sm lg:text-base transition-all duration-300 transform shadow-md border-2 flex-1 flex items-center justify-center",
                                        activeTab === service.id
                                            ? "bg-[#4ade80] text-white border-[#4ade80] shadow-[0_0_15px_rgba(74,222,128,0.5)] scale-105" // Green Active
                                            : "bg-[#facc15] text-white border-[#facc15] hover:bg-[#eab308] hover:border-[#eab308]" // Orange Inactive
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
                                    className="bg-[#0f172a]/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-10 text-white w-full flex flex-col justify-between min-h-[500px]"
                                >
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">{activeService.content.title}</h3>

                                        <div className="space-y-4 text-gray-200 leading-relaxed text-lg">
                                            {activeService.content.points.map((point, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <ChevronRight className="w-5 h-5 text-[#facc15] shrink-0 mt-1.5" /> {/* Arrow Icon */}
                                                    <span>{point}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-6">
                                            <a href={activeService.content.learnMore} className="text-[#facc15] hover:underline font-semibold block mb-2">
                                                Learn more about {activeService.content.title}.
                                            </a>
                                        </div>
                                    </div>

                                    <div className="mt-8 flex justify-center">
                                        <a href={activeService.content.accessLink}>
                                            <Button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold px-10 py-4 rounded-md text-lg">
                                                Access Our Solutions
                                            </Button>
                                        </a>
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
