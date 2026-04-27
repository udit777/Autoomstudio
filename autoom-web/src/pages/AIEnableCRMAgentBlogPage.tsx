import { BlogLayout } from '@/components/layout/BlogLayout';
import { allBlogPosts, blogCategories } from '@/data/blogData';

export function AIEnableCRMAgentBlogPage() {
    // Find current post info from data
    const currentPost = allBlogPosts.find(p => p.link === '/blog/ai-enable-crm-agent') || allBlogPosts[1];
    
    // Get related posts
    const relatedPosts = allBlogPosts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3);
        
    // Get top articles
    const topArticles = allBlogPosts.slice(0, 5);

    return (
        <BlogLayout
            title="Transform Your Customer Relationships with Our AI-Powered CRM Agent"
            author="AutoomStudio Team"
            date="MAR 2, 2025"
            featuredImage={currentPost.image}
            category={currentPost.category}
            description="In a world where customer connections and efficiency are both key to success, finding the right balance is tough. AutoomStudio offers a solution with its AI-powered CRM AI Agent."
            heroStyle={{ background: 'linear-gradient(135deg, #426ba8 0%, #355687 100%)' }}
            relatedPosts={relatedPosts}
            topArticles={topArticles}
            categories={blogCategories}
        >
            <div className="space-y-12">
                <section className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">The Power of AuSoMe Manager</h2>
                    <p>
                        AuSoMe Manager represents the pinnacle of AI Automation and Intelligence, capable of transforming virtually any repetitive task into a seamless, automated process. This revolutionary Autonomous Agent serves as the foundation for our suite of business solutions, bringing unprecedented efficiency to organizations of all sizes through its agentic capabilities.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                    <div className="group">
                        <div className="aspect-video rounded-xl overflow-hidden mb-3 shadow-md border border-gray-100">
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="CRM Agent Interface" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <p className="text-center text-sm font-bold text-gray-600">Lead Management</p>
                    </div>
                    <div className="group">
                        <div className="aspect-video rounded-xl overflow-hidden mb-3 shadow-md border border-gray-100">
                            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" alt="Customer Engagement" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <p className="text-center text-sm font-bold text-gray-600">Personalized Outreach</p>
                    </div>
                    <div className="group">
                        <div className="aspect-video rounded-xl overflow-hidden mb-3 shadow-md border border-gray-100">
                            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" alt="Workflow Automation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <p className="text-center text-sm font-bold text-gray-600">Smart Workflows</p>
                    </div>
                </div>

                <section className="space-y-8">
                    <h3 className="text-2xl font-bold text-gray-900">How CRM AI Agent Transforms Your Business</h3>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#426ba8]/10 flex items-center justify-center text-[#426ba8] font-bold flex-shrink-0">1</div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">Intelligent Lead Management</h4>
                                <p className="text-gray-600">Automatically evaluates, qualifies, and nurtures your leads, ensuring your team focuses on prospects with the highest conversion potential.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#426ba8]/10 flex items-center justify-center text-[#426ba8] font-bold flex-shrink-0">2</div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">Personalized Customer Engagement</h4>
                                <p className="text-gray-600">Provides AI-driven recommendations, dynamically personalizes content, and maintains consistent communication across all channels.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#426ba8]/10 flex items-center justify-center text-[#426ba8] font-bold flex-shrink-0">3</div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">Automated Workflows</h4>
                                <p className="text-gray-600">From routine follow-ups to smart scheduling, CRM AI Agent handles the operational details so your team can focus on strategy.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Conclusion: Transform Your Business with AI Intelligence</h3>
                    <p className="text-gray-600 mb-6">
                        In today's competitive landscape, businesses must find innovative ways to meet rising customer expectations without straining resources. AutoomStudio's CRM AI Agent, driven by the advanced AuSoMe Manager, blends cutting-edge AI with practical business needs.
                    </p>
                    <p className="text-gray-600 mb-8">
                        The future of CRM lies in intelligent, natural-feeling automated interactions that build meaningful connections. To gain a competitive advantage and elevate your customer engagement strategy, join a community of businesses embracing intelligent automation.
                    </p>
                    <button className="bg-[#426ba8] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#355687] transition-all shadow-md">
                        Schedule a Personalized Demo
                    </button>
                </section>
            </div>
        </BlogLayout>
    );
}
