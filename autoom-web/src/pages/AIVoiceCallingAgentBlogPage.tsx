import { Section } from '@/components/ui/Section';

export function AIVoiceCallingAgentBlogPage() {
    return (
        <div className="min-h-screen bg-white font-sans pt-[57px]">
            {/* Hero Section */}
            <div className="bg-[#5b806d] text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(ellipse at 50% -20%, rgba(255,255,255,0.2) 0%, transparent 60%)'
                }}></div>

                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h1 className="text-2xl md:text-3xl font-bold mb-6 mx-auto max-w-3xl leading-snug">
                        The New Language of Business:<br />
                        AutoomStudio's<br />
                        Autonomous Voice Agent
                    </h1>
                    <p className="text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-light tracking-wide text-gray-50">
                        In the current swift-moving business environment, efficient communication is crucial, but it frequently takes up important time and resources. At AutoomStudio, we're changing that equation with our revolutionary AI-powered Voice Calling AI Agent, powered by our flagship automation platform, AuSoMe Manager—an intelligent agent designed for comprehensive AI automation.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <Section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">

                    {/* Blog Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 pb-4 inline-block">
                            AI Voice Calling Agent
                        </h2>
                    </div>

                    {/* First Image Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
                                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" alt="Ausomemgr AI Agent 3.0" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <p className="text-sm text-gray-600 font-medium">Ausomemgr AI Agent 3.0</p>
                        </div>
                    </div>

                    {/* Text Blocks */}
                    <div className="space-y-8 text-gray-700 leading-relaxed text-base font-medium mx-auto max-w-4xl">

                        <div className="text-center mb-10">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Transforming Communication Through Intelligent Automation</h3>
                            <p className="text-gray-600 text-left mb-4">
                                AuSoMe Manager—our Automated Solution Meta Engine—has already transformed how businesses handle repetitive tasks across departments. As an autonomous agent leveraging advanced language models (LLMs), it brings agentic AI intelligence to every process. Now, we're bringing that same powerful automation capability to voice communication, creating seamless interactions that save time while enhancing the human connection your customers value.
                            </p>
                            <p className="text-gray-600 text-left">
                                Our Voice Calling AI Agent represents a breakthrough in communication technology, combining artificial agency with the personal touch that keeps your customers engaged and satisfied.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Key Features That Set Our Voice Calling AI Agent Apart :</h3>
                            <ul className="space-y-4 list-none p-0">
                                <li>
                                    <strong className="text-gray-900">Natural Conversation Flow:</strong> <span className="text-gray-600">Unlike traditional automated systems, our AI-powered Virtual Agent engages in natural, flowing conversations that adapt to context. Powered by sophisticated language models, it understands nuance, responds appropriately to unexpected turns in conversation, and maintains coherence throughout the interaction.</span>
                                </li>
                                <li>
                                    <strong className="text-gray-900">Emotional Intelligence:</strong> <span className="text-gray-600">The intelligent agent detects emotional cues in a caller's voice and adjusts its tone and approach accordingly. Whether a customer is frustrated, excited, or confused, the AI automation responds with appropriate empathy and solutions.</span>
                                </li>
                                <li>
                                    <strong className="text-gray-900">Real-Time Transcription and Analysis:</strong> <span className="text-gray-600">Every call is transcribed and analyzed instantly by our agentic AI, capturing valuable insights and action items. This feature turns every conversation into actionable data, helping you improve services and identify trends.</span>
                                </li>
                                <li>
                                    <strong className="text-gray-900">Seamless Integration:</strong> <span className="text-gray-600">The autonomous agent connects effortlessly with your existing CRM, scheduling systems, and databases, ensuring that information flows smoothly across your business ecosystem without manual intervention.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Title for next image section */}
                        <div className="text-center pt-8 pb-4">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">Real-World Applications That Drive Results</h3>
                        </div>

                        {/* Second Image Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="block h-48 md:h-40 rounded-sm overflow-hidden group">
                                <img src="https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop" alt="Application 1" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="block h-48 md:h-40 rounded-sm overflow-hidden group">
                                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" alt="Application 2" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="block h-48 md:h-40 rounded-sm overflow-hidden group">
                                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" alt="Application 3" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                        </div>

                        <div>
                            <ul className="space-y-4 list-none p-0">
                                <li>
                                    <strong className="text-gray-900">Retail Customer Support:</strong> <span className="text-gray-600">A national retail chain implemented our intelligent agent to handle initial customer inquiries, resolving A.I.automating 78% of support inquiries without the need for human involvement. For complex cases requiring a human touch, the AI-powered virtual agent prepared comprehensive summaries for support staff, reducing resolution time by 40%.</span>
                                </li>
                                <li>
                                    <strong className="text-gray-900">Healthcare Appointment Management:</strong> <span className="text-gray-600">Medical practices using our autonomous agent have transformed their scheduling systems. The language model handles appointment booking, confirmation, rescheduling, and reminders—all while answering basic questions about preparation and location. This artificial agency has reduced no-show rates by 35% and freed staff to focus on in-person patient care.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-6">The Benefits of Intelligent Voice Automation:</h3>
                            <p className="text-gray-600 mb-4">
                                When you implement AutoomStudio's AI-powered virtual agent, you're not just adding another tech tool—you're fundamentally transforming your communication strategy with cutting-edge AI intelligence.
                            </p>
                            <p className="text-gray-600 mb-4">
                                By leveraging our agentic AI for automating routine calls, your team reclaims hours of productive time each week. The consistent quality of interactions managed by our language model leads to more satisfying customer experiences, while the data gathered through AI automation provides invaluable business intelligence.
                            </p>
                            <p className="text-gray-600">
                                Perhaps most importantly, the intelligent agent handles the predictable so your team can focus on the exceptional—those high-value interactions where human creativity and problem-solving truly shine alongside artificial agency.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-6">Experience the Future of Communication</h3>
                            <p className="text-gray-600 mb-4">
                                Ready to see how AuSoMe Manager's autonomous agent can transform your business communication? Visit our interactive demo on AutoomStudio's website to experience a conversation with our LLM and visualize the possibilities for AI automation in your organization.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Our team of AI intelligence experts is standing by to answer your questions and develop a customized implementation that addresses your specific communication challenges. Contact us today to schedule a personalized demonstration and take the first step toward more efficient, effective, and engaging business communication.
                            </p>
                            <p className="text-gray-600">
                                With AutoomStudio's agentic AI-powered virtual agent, the future of communication isn't just automated—it's intelligent, adaptable, and remarkably human while delivering the full potential of artificial agency.
                            </p>
                        </div>

                    </div>
                </div>
            </Section>
        </div>
    );
}
