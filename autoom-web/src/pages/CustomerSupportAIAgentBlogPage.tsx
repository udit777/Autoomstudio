import { Section } from '@/components/ui/Section';

export function CustomerSupportAIAgentBlogPage() {
    return (
        <div className="min-h-screen bg-white font-sans pt-[57px]">
            {/* Hero Section */}
            <div className="bg-[#5b806d] text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(ellipse at 50% -20%, rgba(255,255,255,0.2) 0%, transparent 60%)'
                }}></div>

                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h1 className="text-2xl md:text-3xl font-bold mb-6 mx-auto max-w-3xl leading-snug">
                        AuSoMe Support:<br />
                        How Agentic AI Is Redefining Customer Engagement
                    </h1>
                    <p className="text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-light tracking-wide text-gray-50">
                        Customer expectations have changed a lot in the digital age. They want quick, accurate, and personalized answers any time they ask. AutoomStudio meets these needs with its Contact AI Agent. It is powered by advanced LLM models and the smart AuSoMe Manager technology. This powerful Autonomous Agent helps businesses talk to customers in a better way, turning every conversation into a chance to impress using smart AI automation.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <Section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">

                    {/* Blog Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 pb-4 inline-block">
                            Customer Support AI Agent:
                        </h2>
                    </div>

                    {/* First Image Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="text-center group">
                            <div className="block h-48 md:h-40 rounded-sm overflow-hidden mb-3">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Ausomemgr AI Agent 1.0" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <p className="text-sm text-gray-600 font-medium">Ausomemgr AI Agent 1.0</p>
                        </div>
                        <div className="text-center group">
                            <div className="block h-48 md:h-40 rounded-sm overflow-hidden mb-3">
                                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" alt="Ausomemgr AI Agent 2.0" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
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

                        <div className="text-center mb-8">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Reimagining Customer Support for the Modern Business</h3>
                            <p className="text-gray-600 text-left mb-4">
                                Imagine your customers receiving instant, personalized support at 3 AM on a Sunday, in their preferred language, through their favorite communication channel. That's the reality with Contact AI Agent—a truly agentic solution powered by AI intelligence.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">1. Always-On Global Support:</h4>
                                <p className="text-gray-600">With 24/7 multilingual capabilities, your business never sleeps. Whether your customers are in Tokyo, Toronto, or Toulouse, they'll receive the same exceptional service in their native language.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">2. Truly Personal Interactions:</h4>
                                <p className="text-gray-600">AuSoMe Manager remembers customer preferences, purchase history, and past interactions, creating conversations that feel genuinely human and thoughtfully tailored.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">3. Effortless Automation:</h4>
                                <p className="text-gray-600">Say goodbye to repetitive tasks. Our AI handles routine inquiries, FAQ responses, and ticketing automatically, freeing your team to focus on what humans do best—solving complex challenges and building relationships.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">4. Seamless Omnichannel Experience:</h4>
                                <p className="text-gray-600">Whether through chat, email, SMS, or social media, customers enjoy consistent, high-quality support across all touchpoints.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">5. Emotional Intelligence at Scale:</h4>
                                <p className="text-gray-600">Real-time sentiment analysis helps prioritize urgent needs and adjust tone accordingly, ensuring every customer feels understood.</p>
                            </div>
                        </div>

                        {/* Title for next image section */}
                        <div className="text-center pt-8 pb-4">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">Beyond Basic Automation: The AuSoMe Difference</h3>
                        </div>

                        {/* Second Image Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="block h-48 md:h-40 rounded-sm overflow-hidden group">
                                <img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop" alt="Difference 1" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="block h-48 md:h-40 rounded-sm overflow-hidden group">
                                <img src="https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop" alt="Difference 2" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="block h-48 md:h-40 rounded-sm overflow-hidden group">
                                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" alt="Difference 3" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                        </div>

                        <div className="text-center mb-6">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900">What sets our Contact AI Agent apart is its ability to work harmoniously with your human team through artificial agency:</h3>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">1. Smart Human Handoffs:</h4>
                                <p className="text-gray-600">When situations require a personal touch, our agentic AI transfers conversations to your staff with complete context, creating seamless transitions customers won't even notice.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">2. Natural, On-Brand Conversations:</h4>
                                <p className="text-gray-600">Our generative LLM creates responses that sound authentically human while perfectly aligned with your brand voice—no robotic interactions here.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">3. Proactive Problem-Solving:</h4>
                                <p className="text-gray-600">Why wait for issues to arise? Our AI intelligence uses predictive analytics to identify and address potential problems before customers even experience them.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">4. Knowledge at Your Fingertips:</h4>
                                <p className="text-gray-600">Integrated with your knowledge base, our AI-powered virtual agent delivers instant, accurate self-service solutions for customers who prefer finding answers themselves.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">5. Real-Time Agent Assistance:</h4>
                                <p className="text-gray-600">For your human support team, AuSoMe Manager works alongside them as an Intelligent Agent, suggesting responses and providing insights that enhance every interaction.</p>
                            </div>
                        </div>

                        <div className="pt-6">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Built for the Enterprise, Customized for Your Business:</h3>
                            <p className="text-gray-600 mb-6 font-bold">Our AI-powered virtual agent isn't just powerful—it's practical:</p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">1. Secure and Compliant:</h4>
                                <p className="text-gray-600">We prioritize data privacy with transparent, secure practices that meet global compliance standards.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">2. Insightful Analytics:</h4>
                                <p className="text-gray-600">Track resolution rates, customer satisfaction, and other key metrics to continuously improve your support operations.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">3. Enterprise-Ready Integration:</h4>
                                <p className="text-gray-600">Our AI automation scales effortlessly with your business and integrates smoothly with your existing CRM and enterprise systems.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">4. Tailored to Your Needs:</h4>
                                <p className="text-gray-600">Our customizable Intelligent Agent builder lets you create solutions specifically designed for your unique business requirements.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">5. Beyond Text:</h4>
                                <p className="text-gray-600">With voice AI and multi-modal understanding, our Language Model enables customers to interact through their preferred communication method.</p>
                            </div>
                        </div>

                        <div className="pt-6">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-6">Ready to Transform Your Customer Experience?</h3>
                            <p className="text-gray-600 mb-4">
                                The future of customer support isn't about choosing between human touch and technological efficiency—it's about bringing them together brilliantly through AI automation. With our Autonomous Agent, you're not just keeping up with customer expectations; you're exceeding them.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Discover how AuSoMe Manager, our AI-powered virtual agent, can transform your customer support into a proactive, personalized, and efficient experience. Visit us at AutoomStudio or contact our team today for a personalized demonstration of our Language Model's capabilities. Your customers are waiting for something amazing—let's deliver it together with intelligent artificial agency.
                            </p>
                        </div>

                    </div>
                </div>
            </Section>
        </div>
    );
}
