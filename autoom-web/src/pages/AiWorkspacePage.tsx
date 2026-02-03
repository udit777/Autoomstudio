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
        name: 'AI Social Media Agent',
        icon: Share2,
        color: 'bg-green-500',
        content: {
            title: 'Social Media AI Agent',
            description: "Autoom Studio's AI Social Media Agent is an advanced automation solution designed to revolutionize how businesses manage their online presence. As part of Autoom Studio's comprehensive AI Workspace, this agent seamlessly integrates artificial intelligence with social media strategies to enhance engagement, streamline operations, and drive measurable results.",
            features: [
                'AI-Driven Customer Interaction',
                'Smart Scheduling',
                'Content Creation Support',
                'Comprehensive Analytics and Reporting'
            ],
            footer: "Designed for marketers, entrepreneurs, and content creators, Autoom Studio's AI Social Media Agent empowers users to maintain a consistent and engaging online presence. By automating routine tasks and providing intelligent insights, it allows businesses to focus on strategic growth and audience connection."
        }
    },
    {
        id: 'email-assistant',
        name: 'AI Email assistant agent',
        icon: Mail,
        color: 'bg-yellow-500',
        content: {
            title: 'AI Email Assistant',
            description: 'Automate your inbox management with intelligence.',
            features: [
                'Smart Sorting',
                'Auto-Responses',
                'Priority Flagging'
            ]
        }
    },
    {
        id: 'crm-agent',
        name: 'AI Enable CRM Agent',
        icon: Users,
        color: 'bg-orange-500',
        content: {
            title: 'AI Enabled CRM Agent',
            description: 'Enhance your customer relationships with AI insights.',
            features: [
                'Lead Scoring',
                'Automated Follow-ups',
                'Customer Sentiment Analysis'
            ]
        }
    },
    {
        id: 'research-assistant',
        name: 'AI Research Assistant',
        icon: Search,
        color: 'bg-yellow-600',
        content: {
            title: 'AI Research Assistant',
            description: 'Deep dive research capabilities at your fingertips.',
            features: [
                'Data Mining',
                'Trend Analysis',
                'Report Generation'
            ]
        }
    },
    {
        id: 'voice-agent',
        name: 'AI voice calling agent',
        icon: Phone,
        color: 'bg-yellow-500',
        content: {
            title: 'AI Voice Calling Agent',
            description: 'Human-like voice interactions for support and sales.',
            features: [
                'Natural Language Processing',
                'Call Routing',
                'Sentiment Detection'
            ]
        }
    },
    {
        id: 'lead-manager',
        name: 'AI Lead Generation Manager',
        icon: Briefcase,
        color: 'bg-yellow-500', // Color from screenshot seems consistent yellow/orange
        content: {
            title: 'AI Lead Generation Manager',
            description: 'Automate your lead gen pipeline.',
            features: [
                'Lead Qualification',
                'Outreach Automation',
                'Pipeline Management'
            ]
        }
    },
    {
        id: 'data-analyst',
        name: 'AI Data Analyst agent',
        icon: Database,
        color: 'bg-yellow-500',
        content: {
            title: 'AI Data Analyst Agent',
            description: 'Turn data into actionable insights instantly.',
            features: [
                'Predictive Analytics',
                'Visual Reporting',
                'Real-time Monitoring'
            ]
        }
    }
];

export function AiWorkspacePage() {
    const [activeAgentId, setActiveAgentId] = useState('social-media');
    const activeAgent = agents.find(a => a.id === activeAgentId) || agents[0];

    return (
        <div className="min-h-screen bg-gray-50 pt-[80px]"> {/* Offset for fixed header */}
            {/* Hero Header */}
            <div className="bg-black text-white py-16 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center"></div>
                <div className="relative z-10 container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold flex items-center justify-center gap-4">
                        AI Workspace - AuSoMeMgr
                        <span className="text-4xl">🤖</span>
                    </h1>
                </div>
            </div>

            {/* Intro Section */}
            <Section className="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        {/* Placeholder for the Robot Image */}
                        <div className="rounded-xl overflow-hidden shadow-2xl bg-blue-100 min-h-[300px] flex items-center justify-center">
                            {/* Ideally import the image here. For now using a representative placeholder style */}
                            <img
                                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop"
                                alt="AuSoMeMgr Robot"
                                className="w-full h-full object-cover"
                            />
                            {/* If we have the specific asset, we'd use it. User screenshot shows a specific 3D robot. */}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold font-heading mb-6 text-[#EAB308]">SMART AI AGENT WORKFLOWS</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            <strong>AuSoMeMgr.com</strong> is your ultimate AI workspace, offering a full suite of intelligent agents designed to streamline and supercharge your professional tasks. Repeated activities and workflows for daily operations like research on the web, communication with customers, data analysis, task assignments, managing your social media presence, handling emails, creating and organizing documents, managing contracts, voice calling, and AI-assisted interviews—AuSoMeMgr.com has a custom AI agent available for it.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            AuSoMeMgr.com custom designs each AI agent to optimize efficiency, enhance productivity, and free up your time for more strategic and creative pursuits. Whether you are a business professional, entrepreneur, or content creator, AuSoMeMgr.com provides cutting-edge AI solutions tailored to meet all your modern workflow needs in one powerful platform.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Agents Tab Section */}
            <Section className="bg-gray-900 text-white py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 rounded-xl overflow-hidden shadow-2xl border border-gray-800">
                    {/* Sidebar */}
                    <div className="bg-[#EAB308]/10 backdrop-blur-sm lg:col-span-1 border-r border-gray-800">
                        {agents.map((agent) => (
                            <button
                                key={agent.id}
                                onClick={() => setActiveAgentId(agent.id)}
                                className={`w-full text-left px-6 py-4 flex items-center gap-3 transition-all duration-200 border-b border-gray-800/50 hover:bg-[#EAB308]/20
                                    ${activeAgentId === agent.id ? `${agent.color} text-white font-bold` : 'text-gray-300 hover:text-white'}
                                `}
                            >
                                {activeAgentId === agent.id && <Zap className="w-4 h-4 fill-current" />}
                                {agent.name}
                                {activeAgentId === agent.id && <img src="https://flagcdn.com/w20/us.png" className="w-4 h-auto ml-auto opacity-0" alt="" />} {/* Spacer hack or icon */}
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-2 bg-gray-950 p-8 md:p-12 relative overflow-hidden">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 p-12 opacity-5">
                            <activeAgent.icon className="w-64 h-64" />
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-2">{activeAgent.content.title}</h3>
                            <div className="w-20 h-1 bg-[#EAB308] mb-6"></div>

                            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                                {activeAgent.content.description}
                            </p>

                            <div className="mb-8">
                                <h4 className="text-[#EAB308] font-bold mb-4 uppercase tracking-wider text-sm">Key Features</h4>
                                <ul className="space-y-3">
                                    {activeAgent.content.features?.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-[#EAB308]" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {activeAgent.content.footer && (
                                <p className="text-gray-400 text-sm mb-8 leading-relaxed border-l-2 border-gray-800 pl-4 italic">
                                    {activeAgent.content.footer}
                                </p>
                            )}

                            <Button className="bg-[#EAB308] hover:bg-[#CA9A00] text-black font-bold rounded-full px-8 py-6 text-lg">
                                Access AuSoMeMgr <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
