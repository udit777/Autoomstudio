import { BlogLayout } from '@/components/layout/BlogLayout';
import { allBlogPosts, blogCategories } from '@/data/blogData';

export function AISocialMediaManagerBlogPage() {
    // Find current post info from data
    const currentPost = allBlogPosts.find(p => p.link === '/blog/ai-social-media-manager') || allBlogPosts[0];
    
    // Get related posts
    const relatedPosts = allBlogPosts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3);
        
    // Get top articles
    const topArticles = allBlogPosts.slice(0, 5);

    return (
        <BlogLayout
            title="Unlock Social Media Success with AutoomStudio's AI-Powered Automation"
            author="AutoomStudio Team"
            date="MAR 2, 2025"
            featuredImage={currentPost.image}
            category={currentPost.category}
            description="Achieving social media success is now more effortless than ever! AutoomStudio introduces a revolutionary AI Social Media Manager service designed to transform your digital strategy."
            heroStyle={{ background: 'linear-gradient(135deg, #426ba8 0%, #355687 100%)' }}
            relatedPosts={relatedPosts}
            topArticles={topArticles}
            categories={blogCategories}
        >
            <div className="space-y-12">
                <section className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Your Dedicated Social Media Partner</h2>
                    <p>
                        AutoomStudio has engineered <strong>AuSoMe Manager</strong>, a highly sophisticated Language Model (LLM) and autonomous agent, specifically built to revolutionize how forward-thinking businesses approach their online brand. This robust artificial intelligence system does far more than just act as a basic tool—it truly elevates your entire strategy through seamless, hands-free <strong>AI automation</strong>.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                    <div className="group">
                        <div className="aspect-video rounded-xl overflow-hidden mb-3 shadow-md border border-gray-100">
                            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" alt="AI Agent Interface" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <p className="text-center text-sm font-bold text-gray-600">Smart Scheduling</p>
                    </div>
                    <div className="group">
                        <div className="aspect-video rounded-xl overflow-hidden mb-3 shadow-md border border-gray-100">
                            <img src="https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2062&auto=format&fit=crop" alt="Content Generation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <p className="text-center text-sm font-bold text-gray-600">Creative Content</p>
                    </div>
                    <div className="group">
                        <div className="aspect-video rounded-xl overflow-hidden mb-3 shadow-md border border-gray-100">
                            <img src="https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop" alt="Data Analytics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <p className="text-center text-sm font-bold text-gray-600">Growth Analytics</p>
                    </div>
                </div>

                <section className="space-y-8">
                    <h3 className="text-2xl font-bold text-gray-900">Streamlined Content Management</h3>
                    <p>
                        Our powerful AI Social Media Manager simplifies your marketing workflow fundamentally. From brainstorming creative content generation to executing precise AI-driven scheduling and automated publishing, our intelligent virtual assistant manages the entire pipeline effortlessly across Instagram, X (Twitter), LinkedIn, Facebook, and more.
                    </p>
                    
                    <div className="bg-[#f0f7ff] p-8 rounded-2xl border border-[#d0e5ff]">
                        <h4 className="font-bold text-[#426ba8] mb-4 text-xl">Real-Time Engagement</h4>
                        <p className="text-gray-700">
                            Your new AI virtual agent meticulously monitors audience comments and direct messages across all digital platforms, instantly delivering personalized, context-aware responses that sound exactly as if they were typed by your dedicated social media team.
                        </p>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Story: Sarah's Boutique</h3>
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h1s0 0 0 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path></svg>
                        </div>
                        <p className="text-gray-600 italic mb-6 leading-relaxed">
                            "I genuinely feel like I'm finally connecting deeply with my digital customers without being forced to sacrifice priceless face-to-face time with them in-store. This platform literally pays for its own cost entirely through the significant influx of new customers it has independently generated."
                        </p>
                        <div className="font-bold text-gray-900">— Sarah, Local Fashion Boutique Owner</div>
                    </div>
                </section>

                <section className="text-center pt-12">
                    <h3 className="text-3xl font-bold text-[#0e5863] mb-6">Experience the Impact of AuSoMe Manager</h3>
                    <p className="max-w-2xl mx-auto text-gray-600 mb-10">
                        Watch firsthand exactly how our AI-powered virtual agent immediately becomes your most reliable, productive digital team member.
                    </p>
                    <a 
                        href="https://ausomemgr.com/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-3 bg-[#426ba8] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#355687] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        START YOUR FREE TRIAL NOW
                    </a>
                </section>
            </div>
        </BlogLayout>
    );
}
