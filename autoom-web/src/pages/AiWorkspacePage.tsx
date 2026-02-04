import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Share2, Mail, Users, Search, Phone, Database, Briefcase, Zap, CheckCircle, ArrowRight } from 'lucide-react';
// import robotImage from '@/assets/ausomemgr_robot_lady_1770038971589.png'; // Removed missing asset import
// I will use a placeholder or relative path if I can't move it.
// The user uploaded media usually goes to artifacts. I should probably use a relative path if it's in a known asset location, or just use the artifact path if I can.
// Wait, I can't import from artifacts directly in source easily unless I move it.
// I'll assume standard asset management: I'll try to use a placeholder or the provided image if I can "copy" it.
// For now, I will use a placeholder or standard import if I can't "copy" files.
// Actually, I can use the uploaded media path if I know it, but usually we move assets to src/assets.
// I'll assume I can use the robot image name and I'll ask user to move it or I'll just use a placeholder text for the image src for now and ask user to fix or I'll try to find a similar one.
// Better: I'll check if I can just reference it.
// Re-reading: "ausomemgr_robot_lady..." exists in artifacts.
// I'll write the code assuming it is in `src/assets/ausomemgr_robot_lady.png` and I might need to move it there if I had a tool for it.
// Since I don't have a "move file" tool, I will just reference it by name and user can place it.
// Wait, I see "ausomemgr_robot_lady_1770038971589.png" in the finding tool output.
// I'll use a local import style `import robotLady from '@/assets/ausomemgr_robot_lady_1770038971589.png'` and assume it's there or user has it.
// Actually, better to just use a public URL or placeholder if I'm not sure. But I want to match design.
// I'll use a generic illustration for now or just the name and hope.

const agents = [
    {
        id: 'social-media',
        name: 'AI Social Media Agent 🤖',
        icon: Share2,
        color: 'bg-green-500',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop', // Placeholder
        content: {
            title: 'Social Media AI Agent',
            description: "Autoom Studio's AI Social Media Agent is an advanced automation solution designed to revolutionize how businesses manage their online presence. As part of Autoom Studio's comprehensive AI Workspace, this agent seamlessly integrates artificial intelligence with social media strategies to enhance engagement, streamline operations, and drive measurable results.",
            features: [
                'AI-Driven Customer Interaction: Delivers instant, intelligent responses to customer inquiries, comments, and messages, fostering real-time engagement.',
                'Smart Scheduling: Optimizes post timings based on audience activity analysis to maximize reach and impact.',
                'Content Creation Support: Generates creative content ideas, captions, and visuals tailored to your brand\'s voice and audience preferences.',
                'Comprehensive Analytics and Reporting: Provides detailed insights into campaign performance, audience demographics, and engagement metrics to refine strategies.'
            ],
            footer: "Designed for marketers, entrepreneurs, and content creators, Autoom Studio's AI Social Media Agent empowers users to maintain a consistent and engaging online presence. By automating routine tasks and providing intelligent insights, it allows businesses to focus on strategic growth and audience connection."
        }
    },
    {
        id: 'email-assistant',
        name: 'AI Email assistant agent 🤖',
        icon: Mail,
        color: 'bg-green-500',
        image: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop', // Placeholder
        content: {
            title: 'Personal Email AI Agent',
            description: "The AI Email Assistant Agent is a smart automation tool built to optimize and streamline email communications for businesses and professionals. Powered by advanced artificial intelligence, this agent can manage large volumes of emails, generate personalized replies, and ensure timely follow-ups—all with minimal human intervention. Designed to enhance productivity and customer engagement, it prioritizes messages based on urgency and integrates smoothly with existing email systems.",
            features: [
                'Automated Email Management: Sorts, categorizes, and prioritizes incoming emails to keep your inbox organized and manageable.',
                'Intelligent Drafting: Drafts professional and context-aware responses to common inquiries, saving you time on repetitive communication.',
                'Priority Sorting: Highlights urgent emails that require immediate attention, ensuring you never miss critical updates or opportunities.',
                'Seamless CRM Integration: Syncs email interactions with your CRM system, keeping your customer records up-to-date automatically.'
            ],
            footer: "This AI assistant is ideal for teams seeking to reduce manual workload, increase responsiveness, and deliver a consistent, high-quality communication experience across the board."
        }
    },
    {
        id: 'crm-agent',
        name: 'AI Enable CRM Agent 🤖',
        icon: Users,
        color: 'bg-green-500',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop', // Placeholder
        content: {
            title: 'AI Enable CRM Agent 🤖',
            description: "Autoom Studio's AI CRM Agent, part of the AuSoMe Manager platform, is an advanced automation tool designed to revolutionize customer relationship management. By integrating artificial intelligence, this agent automates and enhances various CRM functions, enabling businesses to engage with customers more effectively and efficiently.",
            features: [
                'Automated Customer Interactions: The AI CRM Agent can autonomously handle customer communications, providing timely and personalized responses that improve customer satisfaction and loyalty.',
                'Intelligent Lead Management: By analyzing customer data and behavior, the agent identifies and prioritizes potential leads, automating follow-up actions to accelerate the sales cycle.',
                'Seamless Integration: The agent integrates smoothly with existing CRM systems and tools, ensuring a unified approach to customer data management and communication.',
                'Real-Time Analytics: Gain actionable insights through real-time analytics, enabling data-driven decisions to refine customer engagement strategies and enhance sales performance.'
            ],
            footer: "Designed for businesses aiming to enhance efficiency and customer satisfaction, Autoom Studio's AI CRM Agent empowers teams to focus on strategic initiatives while the agent manages routine CRM tasks autonomously."
        }
    },
    {
        id: 'research-assistant',
        name: 'AI Research Assistant 🤖',
        icon: Search,
        color: 'bg-green-500',
        image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2074&auto=format&fit=crop', // Placeholder
        content: {
            title: 'AI Research Assistant',
            description: "The AI Research Assistant from Autoom Studio's AI Workspace is an innovative tool designed to streamline the research process with the power of artificial intelligence. Whether you're a researcher, analyst, or business professional, this AI-powered assistant automates data gathering, analysis, and reporting, enabling more efficient and insightful research.",
            features: [
                'Automated Research: The AI Research Assistant autonomously collects relevant data from a variety of sources, reducing the manual effort and time typically required for research tasks.',
                'Advanced Data Analysis: Using sophisticated algorithms, the assistant processes and analyzes the gathered data to extract meaningful patterns, trends, and insights, supporting data-driven decisions.',
                'Easy Integration: The assistant easily integrates with your existing research tools and platforms, creating a seamless workflow for teams and individuals alike.',
                'Real-Time Reporting: It provides real-time analytics and reporting, enabling instant access to research findings and helping refine strategies as needed.'
            ],
            footer: "Designed for professionals across industries, the AI Research Assistant helps users focus on high-value tasks while the AI efficiently handles the routine, ensuring productivity and accuracy."
        }
    },
    {
        id: 'voice-agent',
        name: 'AI voice calling agent 🤖',
        icon: Phone,
        color: 'bg-green-500',
        image: 'https://images.unsplash.com/photo-1557200130-97276ddc360a?q=80&w=2070&auto=format&fit=crop', // Placeholder
        content: {
            title: 'AI Voice Calling Agent',
            description: "Autoom Studio's AI Voice Calling Agent, integrated within the AuSoMe Manager platform, is a state-of-the-art automation tool designed to revolutionize customer communication. This intelligent agent leverages advanced artificial intelligence to handle voice-based interactions, enabling businesses to engage with customers more efficiently and effectively.",
            features: [
                'Automated Voice Interactions: The AI Voice Calling Agent autonomously manages voice calls, providing timely and personalized responses to customer inquiries, thereby enhancing customer satisfaction and reducing response times.',
                'Seamless Integration: This agent integrates smoothly with existing communication systems and customer relationship management (CRM) platforms, ensuring a cohesive workflow and consistent communication across channels.',
                'Real-Time Analytics: Gain actionable insights through real-time analytics, enabling data-driven decisions to refine communication strategies and improve customer engagement.',
                '24/7 Availability: The AI Voice Calling Agent operates round-the-clock, ensuring that customer inquiries are addressed promptly, regardless of time, thereby improving accessibility and customer experience.'
            ],
            footer: "Designed for businesses aiming to enhance efficiency and customer satisfaction, Autoom Studio's AI Voice Calling Agent empowers teams to focus on strategic initiatives while the agent manages routine voice interactions autonomously."
        }
    },
    {
        id: 'lead-manager',
        name: 'AI Lead Generation Manager 🤖',
        icon: Briefcase,
        color: 'bg-green-500',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
        content: {
            title: 'AI Lead Generator Agent',
            description: "The AI Lead Generator Manager from Autoom Studio's AI Workspace is an advanced automation tool designed to revolutionize the lead generation process for businesses. Leveraging the power of artificial intelligence, this agent automates the discovery and engagement of potential customers, enabling businesses to focus on closing deals and building relationships.",
            features: [
                'Automated Lead Discovery: The AI Lead Generator Manager autonomously identifies and compiles a list of 500 potential leads per segment every month, with the capability to generate up to 1,500 leads for a product.',
                'Multi-Channel Outreach: Utilizing a combined messaging strategy across email and LinkedIn, the agent develops and sends personalized message sequences to engage contacts effectively.',
                'Dedicated Email Network: Positive replies are redirected to your primary email through a dedicated email network, ensuring seamless communication.',
                'Safe LinkedIn Usage: The agent engages with leads in your LinkedIn inbox using a dedicated IP, ensuring unique and personalized messaging.',
                'Sales Opportunity Focus: The agent is designed to engage only with sales opportunities, ensuring that your team focuses on high-potential leads.'
            ],
            footer: "Designed for businesses aiming to enhance efficiency and customer acquisition, Autoom Studio's AI Lead Generator Manager empowers teams to focus on strategic initiatives while the agent manages routine lead generation tasks autonomously."
        }
    },
    {
        id: 'data-analyst',
        name: 'AI Data Analyst agent 🤖',
        icon: Database,
        color: 'bg-green-500',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
        content: {
            title: 'AI Data Analyst Agent',
            description: "The AI Data Analyst Agent is a powerful tool designed to automate and enhance the data analysis process, providing businesses with fast and accurate insights. Built to integrate seamlessly with existing workflows, this AI-powered agent transforms raw data into valuable business intelligence, enabling informed decision-making without the need for extensive manual effort.",
            features: [
                'Automated Data Analysis: The AI Data Analyst Agent automatically processes large datasets, extracting meaningful insights by identifying trends, correlations, and patterns.',
                'Real-Time Reporting: The agent generates dynamic, real-time reports that help businesses stay updated with the latest data, empowering teams to make timely decisions.',
                'Seamless Integration: It integrates effortlessly with existing data platforms, ensuring a smooth workflow and helping businesses manage their data from multiple sources in one place.',
                'Customizable Insights: Users can configure the agent to focus on specific KPIs or metrics, making the analysis tailored to their business needs and objectives.'
            ],
            footer: "Designed for businesses of all sizes, the AI Data Analyst Agent frees up valuable time by automating routine analysis tasks, allowing teams to focus on strategic actions that drive growth."
        }
    }
];

export function AiWorkspacePage() {
    const [activeAgentId, setActiveAgentId] = useState('social-media');
    const activeAgent = agents.find(a => a.id === activeAgentId) || agents[0];

    return (
        <div className="min-h-screen bg-white pt-[57px]"> {/* Offset for fixed header */}
            {/* Hero Header */}
            <div
                className="relative py-24 text-center overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('https://autoomstudio.com/wp-content/uploads/2025/04/image_2025-04-29_12-42-16.png')" }}
            >
                <div className="absolute inset-0 bg-black/60"></div> {/* Dark overlay for readability */}
                <div className="relative z-10 container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-2 text-white">
                        AI Workspace - AuSoMeMgr🤖
                    </h1>
                </div>
            </div>

            {/* Intro Section */}
            <Section className="bg-white pt-8 pb-2 md:pt-12 md:pb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative min-h-[400px] md:min-h-0">
                        {/* Robot Image */}
                        <div className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl bg-blue-100">
                            <img
                                src="https://autoomstudio.com/wp-content/uploads/2025/04/Smart-AI.png"
                                alt="AuSoMeMgr Robot"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="bg-gray-900 p-8 md:p-12 rounded-xl h-full flex flex-col justify-center shadow-2xl">
                        <h2 className="text-3xl font-bold font-heading mb-6 text-white">SMART AI AGENT WORKFLOWS</h2>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            <strong className="text-[#EAB308]">AuSoMeMgr.com</strong> is your ultimate AI workspace, offering a full suite of intelligent agents designed to streamline and supercharge your professional tasks. Repeated activities and workflows for daily operations like research on the web, communication with customers, data analysis, task assignments, managing your social media presence, handling emails, creating and organizing documents, managing contracts, voice calling, and AI-assisted interviews—AuSoMeMgr.com has a custom AI agent available for it.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            AuSoMeMgr.com custom designs each AI agent to optimize efficiency, enhance productivity, and free up your time for more strategic and creative pursuits. Whether you are a business professional, entrepreneur, or content creator, AuSoMeMgr.com provides cutting-edge AI solutions tailored to meet all your modern workflow needs in one powerful platform.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Agents Tab Section */}
            <Section className="bg-white pt-2 pb-8 md:pt-4 md:pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Sidebar */}
                    <div className="flex flex-col gap-3 lg:col-span-1 h-full">
                        {agents.map((agent) => (
                            <button
                                key={agent.id}
                                onClick={() => setActiveAgentId(agent.id)}
                                className={`w-full text-left px-6 py-4 flex items-center gap-3 transition-all duration-200 rounded-lg shadow-sm font-bold text-white flex-1
                                    ${activeAgentId === agent.id ? 'bg-[#5FDA70]' : 'bg-[#EAB308] hover:bg-[#D9A507]'}
                                `}
                            >
                                <span className="flex-1">{agent.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div
                        className="lg:col-span-2 rounded-xl overflow-hidden shadow-2xl relative min-h-[600px] text-white bg-cover bg-center"
                        style={{ backgroundImage: `url('${activeAgent.image}')` }}
                    >
                        <div className="absolute inset-0 bg-black/70"></div> {/* Dark Overlay */}

                        <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-center">
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">{activeAgent.content.title}</h3>

                            <p className="text-gray-200 mb-8 leading-relaxed text-sm md:text-base">
                                {activeAgent.content.description}
                            </p>

                            <div className="mb-8">
                                <h4 className="font-bold mb-4 uppercase tracking-wider text-sm text-white">KEY FEATURES</h4>
                                <ul className="space-y-1">
                                    {activeAgent.content.features?.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-200 text-sm font-semibold">
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {activeAgent.content.footer && (
                                <p className="text-gray-300 text-sm mb-8 leading-relaxed italic">
                                    {activeAgent.content.footer}
                                </p>
                            )}

                            <div className="text-center">
                                <a
                                    href="https://ausomemgr.com/managers"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block"
                                >
                                    <Button className="bg-[#E9762B] hover:bg-[#d66a25] text-white font-bold rounded-full px-8 py-3 text-lg border-2 border-white/20">
                                        Access Ausomemgr
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
