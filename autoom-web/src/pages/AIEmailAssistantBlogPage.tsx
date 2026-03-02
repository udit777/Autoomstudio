import { Section } from '@/components/ui/Section';

export function AIEmailAssistantBlogPage() {
    return (
        <div className="min-h-screen bg-white font-sans pt-[57px]">
            {/* Hero Section */}
            <div className="bg-[#618c7a] text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(ellipse at 50% -20%, rgba(255,255,255,0.2) 0%, transparent 60%)'
                }}></div>

                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h1 className="text-2xl md:text-3xl font-bold mb-6 mx-auto max-w-3xl leading-snug">
                        The Future of Email Management:<br />
                        AuSoMe Manager's<br />
                        Intelligent Agent Technology
                    </h1>
                    <p className="text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-light tracking-wide text-gray-50">
                        Many professionals spend about 3.1 hours each day just managing emails—that adds up to almost 16 weeks every year. What if you could get that time back and handle emails more efficiently? AuSoMe Manager from AutoomStudio can help. It's your smart AI Agent that uses advanced automation to improve how you work.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <Section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">

                    {/* Blog Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 pb-4 inline-block">
                            AI Email Assistant Agent
                        </h2>
                    </div>

                    {/* First Image Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="text-center group">
                            <div className="block h-48 md:h-40 rounded-sm overflow-hidden mb-3">
                                <img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop" alt="Ausomemgr AI Agent 1.0" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <p className="text-sm text-gray-600 font-medium">Ausomemgr AI Agent 1.0</p>
                        </div>
                        <div className="text-center group">
                            <div className="block h-48 md:h-40 rounded-sm overflow-hidden mb-3">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Ausomemgr AI Agent 2.0" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <p className="text-sm text-gray-600 font-medium">Ausomemgr AI Agent 2.0</p>
                        </div>
                        <div className="text-center group">
                            <div className="block h-48 md:h-40 rounded-sm overflow-hidden mb-3">
                                <img src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop" alt="Ausomemgr AI Agent 3.0" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <p className="text-sm text-gray-600 font-medium">Ausomemgr AI Agent 3.0</p>
                        </div>
                    </div>

                    {/* Text Blocks */}
                    <div className="space-y-10 text-gray-700 leading-relaxed text-base font-medium mx-auto max-w-4xl">

                        <div className="text-center">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Introducing AutoomStudio's AuSoMe Manager</h3>
                            <p className="text-gray-600 mb-4 text-left">
                                At AutoomStudio, we've created AuSoMe Manager with one goal: to automate any task with ease. Our flagship AI-powered solution leverages advanced Language Models (LLMs) and AI Intelligence to learn your preferences, adapt to your work style, and handle repetitive tasks through intelligent automation so you can focus on what truly matters.
                            </p>
                            <p className="text-gray-600 text-left">
                                AuSoMe Manager represents a new generation of workplace tools that go beyond simple automation. By harnessing the power of generative AI and agentic technology, we've created an assistant that doesn't just follow instructions—it anticipates needs, makes intelligent decisions, and continuously improves its performance based on your feedback and patterns.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">How the Email Assistant AI Agent Revolutionizes Your Inbox</h3>
                            <p className="text-gray-600 mb-4">
                                Sarah, a marketing director at a fast-growing tech company, used to start each morning with the daunting task of sorting through 50+ new emails. Between client communications, team updates, and vendor negotiations, she spent nearly two hours daily just organizing her inbox before actual work could begin.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Now, she opens her inbox to find everything already organized by priority and category – thanks to our autonomous Email Assistant AI Agent. "The first time I logged in and saw my emails perfectly sorted, with drafts already prepared for routine responses, I almost couldn't believe it," Sarah recalls.
                            </p>
                            <p className="text-gray-600 mb-6">
                                This intelligent agent doesn't just sort your inbox; it transforms your entire email experience through artificial agency:
                            </p>

                            <ul className="space-y-4 list-none p-0">
                                <li>
                                    <strong>AI-Powered Smart Inbox Management:</strong> <span className="text-gray-600">Automatically categorizes emails by urgency, sender relationships, and content type – no more hunting for important messages. The system learns from your interactions, becoming more accurate with each passing day.</span>
                                </li>
                                <li>
                                    <strong>Context-Aware Replies:</strong> <span className="text-gray-600">Our AI intelligence suggests personalized responses based on your communication history and relationship with the sender. It reflects your distinct voice and manner of communication, guaranteeing uniformity in all your professional engagements.</span>
                                </li>
                                <li>
                                    <strong>Perfect Draft Generation:</strong> <span className="text-gray-600">The Language Model creates professional email drafts with adjustable tone settings – from warm and friendly to formal and concise. Need to negotiate with a vendor? The system will adopt a confident, precise tone. Reaching out to a long-time client? It switches to familiar and personable.</span>
                                </li>
                                <li>
                                    <strong>Seamless Meeting Coordination:</strong> <span className="text-gray-600">This virtual AI agent identifies scheduling requests and integrates with your calendar to suggest available time slots. It can negotiate meeting times across multiple participants' schedules without the endless back-and-forth that typically consumes your day.</span>
                                </li>
                                <li>
                                    <strong>Intelligent Task Extraction:</strong> <span className="text-gray-600">Our agentic system pulls action items from emails and can add them directly to your task management system. It distinguishes between FYI communications and those requiring concrete actions, ensuring nothing gets overlooked.</span>
                                </li>
                                <li>
                                    <strong>Autonomous Deadline Tracking:</strong> <span className="text-gray-600">The AI automation proactively reminds you of approaching deadlines mentioned in emails, ensuring nothing falls through the cracks. It prioritizes these reminders based on importance and time sensitivity, so you're always focusing on what matters most.</span>
                                </li>
                            </ul>

                            <p className="text-gray-600 mt-6 italic">
                                "I've reclaimed nearly 10 hours weekly since implementing AuSoMe Manager's AI-powered Email Assistant," Sarah reports. "However, the reduction in time isn't even the most impressive aspect. My response quality has improved, I never miss important messages, and my stress levels have plummeted. It's like having a brilliant virtual agent who knows exactly how I want to handle every email."
                            </p>
                        </div>

                        {/* Title for next image section */}
                        <div className="text-center pt-8 pb-2">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">Experience the AuSoMe Difference</h3>
                        </div>

                        {/* Second Image Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-4">
                            <div className="block h-48 md:h-40 rounded-sm overflow-hidden group">
                                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" alt="AuSoMe Difference 1" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="block h-48 md:h-40 rounded-sm overflow-hidden group">
                                <img src="https://images.unsplash.com/photo-1620912189866-474843af5ec3?q=80&w=2069&auto=format&fit=crop" alt="AuSoMe Difference 2" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="block h-48 md:h-40 rounded-sm overflow-hidden group">
                                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="AuSoMe Difference 3" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-600 mb-4">
                                What separates AuSoMe Manager from other email management tools? It's the distinction between a simple sorting mechanism and a genuine cognitive assistant. While conventional tools rely on static rules, our autonomous agent continuously evolves with your changing needs and communication patterns.
                            </p>
                            <p className="text-gray-600 mb-4">
                                For team leaders, AuSoMe Manager offers unprecedented insights into communication bottlenecks and workflow optimization opportunities. For individual contributors, it provides the breathing room needed to focus on creative and strategic work rather than administrative tasks.
                            </p>
                            <p className="text-gray-600">
                                Ready to transform your inbox from a source of stress to a model of efficiency? Experience AuSoMe Manager's smart Email Assistant now and become one of the thousands of professionals who have found the pleasure of a more organized inbox thanks to our autonomous agent technology.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Conclusion: The Future of Email Is Here</h3>
                            <p className="text-gray-600 mb-4">
                                In a world where digital communication continues to expand, having an AI-powered solution that truly understands context, priorities, and personal preferences isn't just convenient—it's essential. AuSoMe Manager's Email Assistant represents the cutting edge of artificial agency, combining sophisticated Language Models with intuitive automation to create a truly intelligent experience.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Unlike basic filters or rules-based systems, our agentic AI adapts to your unique communication style and evolves with your needs. It doesn't just manage emails; it transforms how you interact with your entire digital workspace.
                            </p>
                            <p className="text-gray-600 mb-4">
                                The data is clear: professionals using AI-powered email management report 37% higher productivity and 42% lower stress levels related to digital communications. When your inbox works for you—not against you—the impact ripples through every aspect of your professional life.
                            </p>
                            <p className="text-gray-600">
                                Join the AI automation revolution and discover what's possible when you partner with an intelligent agent designed to amplify your productivity, not just organize your inbox. Your future self will thank you.<br />
                                <a href="#" className="font-bold text-[#EAB308] hover:text-[#d3a005] transition-colors mt-2 inline-block">Request a Demo →</a>
                            </p>
                        </div>

                    </div>
                </div>
            </Section>
        </div>
    );
}
