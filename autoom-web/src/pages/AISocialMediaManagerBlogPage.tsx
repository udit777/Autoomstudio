import { Section } from '@/components/ui/Section';

export function AISocialMediaManagerBlogPage() {
    return (
        <div className="min-h-screen bg-white font-sans pt-[57px]">
            {/* Hero Section */}
            <div className="bg-[#426ba8] text-white py-20 px-4 relative overflow-hidden">
                {/* Wavy background graphic overlay (approximate based on design) */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(ellipse at 50% -20%, rgba(255,255,255,0.2) 0%, transparent 60%)'
                }}></div>

                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h1 className="text-xl md:text-2xl font-bold mb-6 mx-auto max-w-2xl leading-snug">
                        Unlock Social Media Success with AutoomStudio's<br />
                        AI-Powered Automation
                    </h1>
                    <p className="text-sm md:text-[15px] leading-relaxed max-w-3xl mx-auto font-light tracking-wide text-gray-100">
                        Social media success is now easier than ever! AutoomStudio brings you a powerful Social Media Manager service
                        that changes everything. Our special AI technology, called AuSoMe Manager, is an Autonomous agent that
                        handles all your social media tasks automatically. This LLM model takes care of everything so you don't have to
                        worry about your online presence.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <Section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">

                    {/* Blog Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-lg md:text-xl font-bold text-gray-800 border-b pb-4 inline-block px-10">
                            AI Social Media Manager
                        </h2>
                    </div>

                    {/* First Image Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="text-center">
                            <div className="h-40 rounded-sm overflow-hidden mb-3">
                                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" alt="Ausomemgr AI Agent 1.0" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-xs text-gray-600 font-medium">Ausomemgr AI Agent 1.0</p>
                        </div>
                        <div className="text-center">
                            <div className="h-40 rounded-sm overflow-hidden mb-3">
                                <img src="https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2062&auto=format&fit=crop" alt="Ausomemgr AI Agent 2.0" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-xs text-gray-600 font-medium">Ausomemgr AI Agent 2.0</p>
                        </div>
                        <div className="text-center">
                            <div className="h-40 rounded-sm overflow-hidden mb-3">
                                <img src="https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop" alt="Ausomemgr AI Agent 3.0" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-xs text-gray-600 font-medium">Ausomemgr AI Agent 3.0</p>
                        </div>
                    </div>

                    {/* Text Blocks */}
                    <div className="space-y-10 text-gray-700 leading-relaxed text-[15px] font-medium mx-auto max-w-3xl">

                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Meet Your New Social Media Partner</h3>
                            <p>
                                AutoomStudio has developed AuSoMe Manager, a sophisticated Language Model (LLM) and Autonomous Agent, to transform how businesses handle their online presence. This AI Intelligence system doesn't just support your social media efforts—it elevates them through seamless AI Automation while maintaining your authentic brand voice.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Streamlined Content Management Across Platforms</h3>
                            <p>
                                Social Media Manager, driven by Agentic AI, simplifies your entire content workflow. From creation to scheduling to posting, our AI-Powered Virtual Agent handles it all across Instagram, X, LinkedIn, and more. The intelligent scheduling feature ensures your content goes live when your audience is most active, maximizing visibility and engagement without requiring you to be online 24/7.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Building Genuine Connections with Your Audience</h3>
                            <p>
                                What truly sets our service apart is its ability to foster meaningful engagement through Artificial Agency. Our AI Agent monitors comments and messages across platforms, providing personalized responses that sound like they came directly from your team. This real-time interaction builds community around your brand and keeps conversations flowing naturally, even while you focus on other aspects of your business.
                            </p>
                        </div>

                        {/* Title for next image section */}
                        <div className="text-center pt-8 pb-4">
                            <h3 className="text-lg font-bold text-gray-900">Data-Driven Insights That Drive Growth</h3>
                        </div>

                        {/* Second Image Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="h-40 rounded-sm overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" alt="Analytics Robot" className="w-full h-full object-cover" />
                            </div>
                            <div className="h-40 rounded-sm overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" alt="Data Screen" className="w-full h-full object-cover" />
                            </div>
                            <div className="h-40 rounded-sm overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" alt="Business Meeting" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        <div>
                            <p>
                                Grasping effective strategies is essential for achieving success on social media. Our AI-Powered analytics dashboard tracks performance metrics and translates them into actionable insights. Even more impressive, our Intelligent Agent detects emerging trends in your industry and suggests relevant content ideas to keep your brand at the forefront of conversations.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Effortless Integration, Exceptional Results</h3>
                            <p>
                                The platform is designed with busy professionals in mind. The intuitive dashboard brings all your social accounts into one centralized hub, requiring minimal setup time. Multiple team members can collaborate seamlessly, while the AI maintains consistency in your brand voice across all communications.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Real Success Story: Sarah's Boutique</h3>
                            <p className="mb-4">
                                Consider Sarah, who runs a local fashion boutique. Before discovering Social Media Manager, she spent hours each week struggling to maintain her online presence. After implementing our service, her engagement increased by 47% within just three months. The AI helped craft visually appealing posts, responded to customer inquiries even during off-hours, and identified trending fashion topics to incorporate into her content strategy.
                            </p>
                            <p>
                                "I finally feel like I'm connecting with my customers online without sacrificing time with them in-store," Sarah shared. "The platform literally pays for itself through the new customers it's brought in."
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Experience the Power of AuSoMe Manager Today</h3>
                            <p className="mb-4">
                                Are you prepared to enhance your social media visibility while getting back your precious time? Join the growing community of businesses that have discovered the perfect balance of AI Automation and authenticity with AutoomStudio's Autonomous Agent technology.
                            </p>
                            <p>
                                Start your free trial today and see firsthand how our AI-Powered Virtual Agent can become your most valuable digital team member. Your future customers are waiting to connect with you online!
                            </p>
                        </div>

                    </div>
                </div>
            </Section>
        </div>
    );
}
