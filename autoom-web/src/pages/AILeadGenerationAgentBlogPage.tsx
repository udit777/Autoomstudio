import { BlogLayout } from '@/components/layout/BlogLayout';
import { allBlogPosts, blogCategories } from '@/data/blogData';

export function AILeadGenerationAgentBlogPage() {
    // Find current post info from data
    const currentPost = allBlogPosts.find(p => p.link === '/blog/ai-lead-generation-agent') || allBlogPosts[2];
    
    // Get related posts
    const relatedPosts = allBlogPosts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3);
        
    // Get top articles
    const topArticles = allBlogPosts.slice(0, 5);

    return (
        <BlogLayout
            title="Revolutionize Your Lead Generation with AuSoMe Manager AI"
            author="AutoomStudio Team"
            date="MAR 2, 2025"
            featuredImage={currentPost.image}
            category={currentPost.category}
            description="Premium leads are now easier to find and convert! AutoomStudio brings you an incredible solution that changes everything. Our special AI technology, called AuSoMe Manager, is an Autonomous agent that transforms your entire lead generation process."
            heroStyle={{ background: 'linear-gradient(135deg, #bda27e 0%, #a68d6a 100%)' }}
            relatedPosts={relatedPosts}
            topArticles={topArticles}
            categories={blogCategories}
        >
            <div className="space-y-12">
                <section className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Intelligent Lead Generation on Autopilot</h2>
                    <p>
                        AuSoMe Manager doesn't just automate lead generation – it reimagines the entire process. Our autonomous agent works tirelessly across multiple platforms, including LinkedIn and X, to identify and engage with your ideal prospects. By leveraging advanced LLM technology and AI Intelligence, AuSoMe Manager discovers potential customers who truly align with your ideal customer profile through sophisticated artificial agency.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                    <div className="group">
                        <div className="aspect-video rounded-xl overflow-hidden mb-3 shadow-md border border-gray-100">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Lead Discovery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <p className="text-center text-sm font-bold text-gray-600">Multi-Platform Discovery</p>
                    </div>
                    <div className="group">
                        <div className="aspect-video rounded-xl overflow-hidden mb-3 shadow-md border border-gray-100">
                            <img src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop" alt="Lead Scoring" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <p className="text-center text-sm font-bold text-gray-600">Intelligent Scoring</p>
                    </div>
                    <div className="group">
                        <div className="aspect-video rounded-xl overflow-hidden mb-3 shadow-md border border-gray-100">
                            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" alt="Outreach" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <p className="text-center text-sm font-bold text-gray-600">Personalized Outreach</p>
                    </div>
                </div>

                <section className="space-y-8">
                    <h3 className="text-2xl font-bold text-gray-900">Transformative Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
                            <h4 className="font-bold text-gray-900 mb-2">Lead Discovery</h4>
                            <p className="text-sm text-gray-600">Continuously scans LinkedIn, X, and other platforms to uncover promising leads you might otherwise miss.</p>
                        </div>
                        <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
                            <h4 className="font-bold text-gray-900 mb-2">Smart Scoring</h4>
                            <p className="text-sm text-gray-600">Instantly evaluates lead quality and potential fit, prioritizing your most valuable prospects automatically.</p>
                        </div>
                        <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
                            <h4 className="font-bold text-gray-900 mb-2">CRM Sync</h4>
                            <p className="text-sm text-gray-600">Works harmoniously with your existing systems, ensuring smooth data flow and comprehensive tracking.</p>
                        </div>
                        <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
                            <h4 className="font-bold text-gray-900 mb-2">Scalable Engagement</h4>
                            <p className="text-sm text-gray-600">Multi-channel engagement via email, LinkedIn, and SMS — all tailored to each prospect's preferences.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-[#bda27e]/10 p-10 rounded-3xl border border-[#bda27e]/20">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Benefits Are Clear</h3>
                    <div className="space-y-4 max-w-3xl mx-auto text-gray-700">
                        <p>
                            Our clients consistently report significant time savings – up to 20 hours per week per sales representative – allowing their teams to focus on strategic initiatives rather than manual prospecting. 
                        </p>
                        <p>
                            More importantly, they see substantial increases in conversion rates – typically 35-50% higher than traditional methods – turning more prospects into customers with less effort.
                        </p>
                    </div>
                    <div className="flex justify-center mt-8">
                        <button className="bg-[#bda27e] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#a68d6a] transition-all">
                            Boost Your Sales Pipeline
                        </button>
                    </div>
                </section>
            </div>
        </BlogLayout>
    );
}
