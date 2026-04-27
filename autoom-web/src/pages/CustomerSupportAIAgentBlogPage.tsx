import { BlogLayout } from '@/components/layout/BlogLayout';
import { allBlogPosts, blogCategories } from '@/data/blogData';

export function CustomerSupportAIAgentBlogPage() {
    // Find current post info from data
    const currentPost = allBlogPosts.find(p => p.link === '/blog/customer-support-ai-agent') || allBlogPosts[7];
    
    // Get related posts
    const relatedPosts = allBlogPosts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3);
        
    // Get top articles
    const topArticles = allBlogPosts.slice(0, 5);

    return (
        <BlogLayout
            title="AuSoMe Support: How Agentic AI Is Redefining Customer Engagement"
            author="AutoomStudio Team"
            date="MAR 2, 2025"
            featuredImage={currentPost.image}
            category={currentPost.category}
            description="Customer expectations have changed a lot in the digital age. They want quick, accurate, and personalized answers any time they ask. AutoomStudio meets these needs with its Contact AI Agent."
            heroStyle={{ background: 'linear-gradient(135deg, #0e5863 0%, #0a434b 100%)' }}
            relatedPosts={relatedPosts}
            topArticles={topArticles}
            categories={blogCategories}
        >
            <div className="space-y-12">
                <section className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Customer Support AI Agent: Reimagining Engagement</h2>
                    <p>
                        Imagine your customers receiving instant, personalized support at 3 AM on a Sunday, in their preferred language, through their favorite communication channel. That's the reality with Contact AI Agent—a truly agentic solution powered by AI intelligence.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                    <div className="group">
                        <div className="aspect-video rounded-xl overflow-hidden mb-3 shadow-md">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="AI Agent 1.0" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <p className="text-center text-sm font-bold text-[#0e5863]">Ausomemgr AI Agent 1.0</p>
                    </div>
                    <div className="group">
                        <div className="aspect-video rounded-xl overflow-hidden mb-3 shadow-md">
                            <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" alt="AI Agent 2.0" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <p className="text-center text-sm font-bold text-[#0e5863]">Ausomemgr AI Agent 2.0</p>
                    </div>
                    <div className="group">
                        <div className="aspect-video rounded-xl overflow-hidden mb-3 shadow-md">
                            <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" alt="AI Agent 3.0" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <p className="text-center text-sm font-bold text-[#0e5863]">Ausomemgr AI Agent 3.0</p>
                    </div>
                </div>

                <section className="space-y-8">
                    <h3 className="text-2xl font-bold text-gray-900">Key Benefits of AI-Powered Support</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-[#0e5863] mb-2 text-lg">1. Always-On Global Support</h4>
                            <p className="text-sm text-gray-600">With 24/7 multilingual capabilities, your business never sleeps. Whether your customers are in Tokyo, Toronto, or Toulouse, they'll receive exceptional service.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-[#0e5863] mb-2 text-lg">2. Truly Personal Interactions</h4>
                            <p className="text-sm text-gray-600">AuSoMe Manager remembers customer preferences, purchase history, and past interactions, creating conversations that feel genuinely human.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-[#0e5863] mb-2 text-lg">3. Effortless Automation</h4>
                            <p className="text-sm text-gray-600">Say goodbye to repetitive tasks. Our AI handles routine inquiries, FAQ responses, and ticketing automatically, freeing your team for complex challenges.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-[#0e5863] mb-2 text-lg">4. Emotional Intelligence</h4>
                            <p className="text-sm text-gray-600">Real-time sentiment analysis helps prioritize urgent needs and adjust tone accordingly, ensuring every customer feels understood.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">The AuSoMe Difference</h3>
                    <p className="mb-8">
                        What sets our Contact AI Agent apart is its ability to work harmoniously with your human team through artificial agency. It's not just about replacing humans; it's about empowering them.
                    </p>
                    
                    <div className="rounded-2xl overflow-hidden mb-12 shadow-lg h-96">
                        <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" alt="The AuSoMe Difference" className="w-full h-full object-cover" />
                    </div>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-[#0e5863]/10 flex items-center justify-center text-[#0e5863] font-bold flex-shrink-0">1</div>
                            <div>
                                <h4 className="font-bold text-gray-900">Smart Human Handoffs</h4>
                                <p className="text-gray-600">When situations require a personal touch, our agentic AI transfers conversations with complete context.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-[#0e5863]/10 flex items-center justify-center text-[#0e5863] font-bold flex-shrink-0">2</div>
                            <div>
                                <h4 className="font-bold text-gray-900">Natural, On-Brand Conversations</h4>
                                <p className="text-gray-600">Our generative LLM creates responses that sound authentically human while perfectly aligned with your brand voice.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-[#0e5863]/10 flex items-center justify-center text-[#0e5863] font-bold flex-shrink-0">3</div>
                            <div>
                                <h4 className="font-bold text-gray-900">Proactive Problem-Solving</h4>
                                <p className="text-gray-600">Our AI intelligence uses predictive analytics to identify and address potential problems before they escalate.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Customer Experience?</h3>
                    <p className="mb-6">
                        Discover how AuSoMe Manager can transform your customer support into a proactive, personalized, and efficient experience.
                    </p>
                    <button className="bg-[#0e5863] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#0c4a54] transition-colors">
                        Request a Demo
                    </button>
                </section>
            </div>
        </BlogLayout>
    );
}
