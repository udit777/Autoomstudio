import { Section } from '@/components/ui/Section';

export function AIResearchAssistantBlogPage() {
    return (
        <div className="min-h-screen bg-white font-sans pt-[57px]">
            {/* Hero Section */}
            <div className="bg-[#8c5861] text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(ellipse at 50% -20%, rgba(255,255,255,0.2) 0%, transparent 60%)'
                }}></div>

                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h1 className="text-2xl md:text-3xl font-bold mb-6 mx-auto max-w-3xl leading-snug">
                        Meet Your New Research Partner:<br />
                        AutoomStudio's<br />
                        AI-Powered Virtual Agent
                    </h1>
                    <p className="text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-light tracking-wide text-gray-50">
                        Researchers today deal with too much information, which makes it hard to move forward and be creative. AutoomStudio helps solve this problem with its AI Research Assistant Agent. It uses powerful LLM models and smart AuSoMe Manager technology. This easy-to-use Autonomous Agent helps you find, study, and work on research faster and easier. It lets you do more with less effort by using smart automation.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <Section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">

                    {/* Blog Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 pb-4 inline-block">
                            AI Research Assistant
                        </h2>
                    </div>

                    {/* First Image Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="text-center group">
                            <div className="block h-48 md:h-40 rounded-sm overflow-hidden mb-3">
                                <img src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2074&auto=format&fit=crop" alt="Ausomemgr AI Agent 1.0" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <p className="text-sm text-gray-600 font-medium">Ausomemgr AI Agent 1.0</p>
                        </div>
                        <div className="text-center group">
                            <div className="block h-48 md:h-40 rounded-sm overflow-hidden mb-3">
                                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" alt="Ausomemgr AI Agent 2.0" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <p className="text-sm text-gray-600 font-medium">Ausomemgr AI Agent 2.0</p>
                        </div>
                        <div className="text-center group">
                            <div className="block h-48 md:h-40 rounded-sm overflow-hidden mb-3">
                                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" alt="Ausomemgr AI Agent 3.0" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <p className="text-sm text-gray-600 font-medium">Ausomemgr AI Agent 3.0</p>
                        </div>
                    </div>

                    {/* Text Blocks */}
                    <div className="space-y-8 text-gray-700 leading-relaxed text-base font-medium mx-auto max-w-4xl">

                        <div className="text-center mb-10">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Your Intelligent Research Partner</h3>
                            <p className="text-gray-600 text-left">
                                The AI Research Assistant Agent serves as your personal research companion, working tirelessly alongside you to unlock new possibilities. This Agentic AI solution delivers artificial agency that transforms research workflows. By automating routine tasks and enhancing your natural abilities through AI Intelligence, our Intelligent Agent helps you focus on what truly matters: generating insights and making discoveries.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Seamless Information Gathering and Synthesis</h3>
                            <p className="text-gray-600 mb-4">
                                Finding relevant information has never been easier. Our AI-Powered Virtual Agent effortlessly searches academic databases, web content, and real-time platforms like X, delivering clear, actionable findings within seconds. This AI Automation capability means instead of spending hours sifting through countless sources, you receive precisely what you need when you need it.
                            </p>
                            <p className="text-gray-600">
                                The agent doesn't just collect information—it synthesizes findings into coherent summaries, highlighting connections between sources that might otherwise go unnoticed. This synthesis creates a foundation for new insights that accelerate your research journey.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Communicate Naturally, Receive Exactly What You Need</h3>
                            <p className="text-gray-600 mb-4">
                                Simply ask questions in your own words, and our assistant understands exactly what you're looking for—even with complex research queries. Supporting multiple languages and voice interaction, the assistant adapts to your preferred communication style, making research feel like having a conversation with a knowledgeable colleague.
                            </p>
                            <p className="text-gray-600">
                                The Language Model technology that powers our AI Agent understands contextual nuances and academic terminology across disciplines, ensuring precise responses to even the most specialized inquiries.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Bring Your Data to Life</h3>
                            <p className="text-gray-600 mb-4">
                                Transform raw data into meaningful insights with powerful analysis and visualization tools. Our assistant creates customizable charts and graphs that make patterns immediately apparent, helping you communicate findings with impact and clarity.
                            </p>
                            <p className="text-gray-600">
                                Advanced algorithmic analysis identifies correlations and outliers automatically, drawing attention to findings that deserve further investigation. These visualization capabilities transform complex datasets into compelling visual stories that support your arguments and enhance understanding.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Streamline Your Writing Process</h3>
                            <p className="text-gray-600 mb-4">
                                From drafting polished outlines to generating properly formatted citations in styles like APA, our assistant accelerates the writing process. Focus on developing your ideas while the assistant handles the formatting details, ensuring your work looks as professional as the thinking behind it.
                            </p>
                            <p className="text-gray-600">
                                The agent can suggest improvements to clarity and structure, helping refine your arguments while maintaining your authentic voice throughout. This collaborative approach to writing reduces revision cycles and improves overall quality.
                            </p>
                        </div>

                        {/* Title for next image section */}
                        <div className="text-center pt-8 pb-4">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">Collaborate Without Boundaries</h3>
                        </div>

                        {/* Second Image Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="block h-48 md:h-40 rounded-sm overflow-hidden group">
                                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" alt="Collaborate 1" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="block h-48 md:h-40 rounded-sm overflow-hidden group">
                                <img src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=2069&auto=format&fit=crop" alt="Collaborate 2" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="block h-48 md:h-40 rounded-sm overflow-hidden group">
                                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" alt="Collaborate 3" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-600 mb-4">
                                Research thrives on collaboration. Our assistant integrates seamlessly with your existing workflows, syncs across all your devices, and makes sharing with team members effortless. Everyone stays in sync, with the right information available exactly when needed.
                            </p>
                            <p className="text-gray-600">
                                The Intelligent Agent facilitates asynchronous collaboration by maintaining research context across sessions and team members, eliminating repetitive explanations and enabling true knowledge continuity.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Personalized to Your Research Journey</h3>
                            <p className="text-gray-600 mb-4">
                                As you work with the assistant, it learns your preferences, expertise level, and research history. This allows it to offer increasingly relevant recommendations and resources, becoming more valuable with every interaction.
                            </p>
                            <p className="text-gray-600">
                                This AI Intelligence adapts to your unique research fingerprint, anticipating needs before you express them and suggesting connections based on your specific interests and past explorations.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Specialized Research Support at Every Stage</h3>
                            <p className="text-gray-600 mb-4">
                                From automating literature reviews to suggesting promising hypotheses and assisting with grant proposals, our assistant provides specialized support throughout the research lifecycle, helping you overcome roadblocks and maintain momentum.
                            </p>
                            <p className="text-gray-600">
                                The Autonomous Agent excels at identifying methodological approaches that have succeeded in similar research contexts, providing inspiration when you need fresh perspectives on challenging problems.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Thoughtful, Step-by-Step Problem Solving</h3>
                            <p className="text-gray-600 mb-4">
                                Complex research questions require methodical thinking. Our assistant breaks down problems, conducts iterative searches, and explains its reasoning—ensuring you receive reliable, precise answers you can trust.
                            </p>
                            <p className="text-gray-600">
                                The artificial agency exhibited by our AI Agent means it can pursue multiple lines of inquiry simultaneously, evaluating evidence from diverse perspectives before synthesizing findings into comprehensive answers.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Access Anywhere, Anytime</h3>
                            <p className="text-gray-600">
                                Available on web, iOS, Android, and X app, with both free and premium tiers, our assistant meets you where you are. Whether you're a student, professional researcher, or curious mind, there's an option that fits your needs.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Your Data, Your Control</h3>
                            <p className="text-gray-600">
                                We prioritize your privacy with encrypted data and user-controlled memory settings, ensuring compliance with research standards while keeping your valuable intellectual property secure.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Conclusion: Embracing the Future of Research</h3>
                            <p className="text-gray-600 mb-4">
                                The field of research is advancing at an extraordinary speed. With AutoomStudio's AI-Powered Research Assistant Agent, you're not just keeping up—you're leading the way. Our Intelligent Agent empowers researchers to tackle increasingly complex questions, explore vast datasets with confidence, and collaborate more effectively than ever before.
                            </p>
                            <p className="text-gray-600">
                                By combining the analytical power of advanced AI Automation with the creativity and intuition of human researchers, we're creating a new paradigm for knowledge discovery. The result is research that moves faster, reaches deeper, and creates more meaningful impact.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Join the Research Revolution</h3>
                            <p className="text-gray-600 mb-4">
                                At Ausomemgr, our mission is to empower human potential through intelligent automation. The AI Agent represents this vision in action—helping researchers like you save valuable time, dramatically boost productivity, and achieve breakthroughs that might otherwise remain undiscovered with our Language Model technology.
                            </p>
                            <p className="text-gray-600">
                                Ready to transform your research experience? Try the AI Research Assistant Agent today on Ausomemgr's platform and discover what you can achieve when our AI-Powered Autonomous Agent amplifies your natural talents through artificial agency.
                            </p>
                        </div>

                    </div>
                </div>
            </Section>
        </div>
    );
}
