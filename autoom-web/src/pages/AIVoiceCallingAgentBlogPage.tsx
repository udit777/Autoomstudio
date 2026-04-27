import { BlogLayout } from '@/components/layout/BlogLayout';
import { allBlogPosts, blogCategories } from '@/data/blogData';

export function AIVoiceCallingAgentBlogPage() {
    // Find current post info from data
    const currentPost = allBlogPosts.find(p => p.link === '/blog/ai-voice-calling-agent') || allBlogPosts[5];
    
    // Get related posts
    const relatedPosts = allBlogPosts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3);
        
    // Get top articles
    const topArticles = allBlogPosts.slice(0, 5);

    return (
        <BlogLayout
            title="The New Language of Business: AutoomStudio's Autonomous Voice Agent"
            author="AutoomStudio Team"
            date="MAR 2, 2025"
            featuredImage={currentPost.image}
            category={currentPost.category}
            description="In the current swift-moving business environment, efficient communication is crucial, but it frequently takes up important time and resources."
            heroStyle={{ background: 'linear-gradient(135deg, #5b806d 0%, #4a6b5a 100%)' }}
            relatedPosts={relatedPosts}
            topArticles={topArticles}
            categories={blogCategories}
        >
            <div className="space-y-12">
                <section className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Transforming Communication Through Intelligent Automation</h2>
                    <p>
                        AuSoMe Manager—our Automated Solution Meta Engine—has already transformed how businesses handle repetitive tasks across departments. Now, we're bringing that same powerful automation capability to voice communication, creating seamless interactions that save time while enhancing the human connection your customers value.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                    <div className="group">
                        <div className="aspect-video rounded-xl overflow-hidden mb-3 shadow-md border border-gray-100">
                            <img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop" alt="Voice AI 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <p className="text-center text-sm font-bold text-gray-600">Natural Flow</p>
                    </div>
                    <div className="group">
                        <div className="aspect-video rounded-xl overflow-hidden mb-3 shadow-md border border-gray-100">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Voice AI 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <p className="text-center text-sm font-bold text-gray-600">Emotional Intel</p>
                    </div>
                    <div className="group">
                        <div className="aspect-video rounded-xl overflow-hidden mb-3 shadow-md border border-gray-100">
                            <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" alt="Voice AI 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <p className="text-center text-sm font-bold text-gray-600">Real-Time Insights</p>
                    </div>
                </div>

                <section className="space-y-8">
                    <h3 className="text-2xl font-bold text-gray-900">Key Features of Our Voice AI</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2">Natural Conversation Flow</h4>
                            <p className="text-sm text-gray-600">Engages in natural, flowing conversations that adapt to context and understand nuance.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2">Emotional Intelligence</h4>
                            <p className="text-sm text-gray-600">Detects emotional cues in a caller's voice and adjusts its tone and approach accordingly.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2">Real-Time Analysis</h4>
                            <p className="text-sm text-gray-600">Every call is transcribed and analyzed instantly, capturing valuable insights and action items.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2">Seamless Integration</h4>
                            <p className="text-sm text-gray-600">Connects effortlessly with your existing CRM and scheduling systems for smooth data flow.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Real-World Results</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <div className="text-3xl font-bold text-[#5b806d] mb-2">78%</div>
                            <h4 className="font-bold text-gray-900 mb-2">Support Automation</h4>
                            <p className="text-sm text-gray-600">Retail chain automated 78% of support inquiries without human involvement.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <div className="text-3xl font-bold text-[#5b806d] mb-2">35%</div>
                            <h4 className="font-bold text-gray-900 mb-2">Reduced No-Shows</h4>
                            <p className="text-sm text-gray-600">Medical practices reduced appointment no-shows through automated reminders.</p>
                        </div>
                    </div>
                </section>

                <section className="text-center py-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience the Future of Communication</h3>
                    <p className="max-w-2xl mx-auto text-gray-600 mb-10">
                        Our team of AI intelligence experts is standing by to develop a customized implementation that addresses your specific communication challenges.
                    </p>
                    <button className="bg-[#5b806d] text-white px-12 py-4 rounded-xl font-bold hover:bg-[#4a6b5a] transition-all shadow-lg hover:shadow-xl">
                        BOOK A DEMO TODAY
                    </button>
                </section>
            </div>
        </BlogLayout>
    );
}
