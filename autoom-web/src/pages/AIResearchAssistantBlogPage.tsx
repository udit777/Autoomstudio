import { BlogLayout } from '@/components/layout/BlogLayout';
import { allBlogPosts, blogCategories } from '@/data/blogData';

export function AIResearchAssistantBlogPage() {
    // Find current post info from data
    const currentPost = allBlogPosts.find(p => p.link === '/blog/ai-research-assistant') || allBlogPosts[4];
    
    // Get related posts
    const relatedPosts = allBlogPosts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3);
        
    // Get top articles
    const topArticles = allBlogPosts.slice(0, 5);

    return (
        <BlogLayout
            title="Meet Your New Research Partner: AutoomStudio's AI-Powered Virtual Agent"
            author="AutoomStudio Team"
            date="MAR 2, 2025"
            featuredImage={currentPost.image}
            category={currentPost.category}
            description="Researchers today deal with too much information, which makes it hard to move forward and be creative. AutoomStudio helps solve this problem with its AI Research Assistant Agent."
            heroStyle={{ background: 'linear-gradient(135deg, #8c5861 0%, #7a4d55 100%)' }}
            relatedPosts={relatedPosts}
            topArticles={topArticles}
            categories={blogCategories}
        >
            <div className="space-y-12">
                <section className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Intelligent Research Partner</h2>
                    <p>
                        The AI Research Assistant Agent serves as your personal research companion, working tirelessly alongside you to unlock new possibilities. This Agentic AI solution delivers artificial agency that transforms research workflows. By automating routine tasks and enhancing your natural abilities through AI Intelligence, our Intelligent Agent helps you focus on what truly matters: generating insights and making discoveries.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                    <div className="group">
                        <div className="aspect-video rounded-xl overflow-hidden mb-3 shadow-md border border-gray-100">
                            <img src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2074&auto=format&fit=crop" alt="AI Agent 1.0" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <p className="text-center text-sm font-bold text-gray-600">Information Synthesis</p>
                    </div>
                    <div className="group">
                        <div className="aspect-video rounded-xl overflow-hidden mb-3 shadow-md border border-gray-100">
                            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" alt="AI Agent 2.0" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <p className="text-center text-sm font-bold text-gray-600">Data Visualization</p>
                    </div>
                    <div className="group">
                        <div className="aspect-video rounded-xl overflow-hidden mb-3 shadow-md border border-gray-100">
                            <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" alt="AI Agent 3.0" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <p className="text-center text-sm font-bold text-gray-600">Collaborative Analysis</p>
                    </div>
                </div>

                <section className="space-y-8">
                    <h3 className="text-2xl font-bold text-gray-900">Seamless Information Gathering</h3>
                    <p>
                        Finding relevant information has never been easier. Our AI-Powered Virtual Agent effortlessly searches academic databases, web content, and real-time platforms like X, delivering clear, actionable findings within seconds. This AI Automation capability means instead of spending hours sifting through countless sources, you receive precisely what you need when you need it.
                    </p>
                    <div className="bg-[#f8f9fa] p-8 rounded-2xl border border-gray-100">
                        <h4 className="font-bold text-gray-900 mb-4">Communicate Naturally</h4>
                        <p className="text-gray-600">
                            Simply ask questions in your own words, and our assistant understands exactly what you're looking for—even with complex research queries. Supporting multiple languages and voice interaction, the assistant adapts to your preferred communication style.
                        </p>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Bring Your Data to Life</h3>
                    <p className="mb-8">
                        Transform raw data into meaningful insights with powerful analysis and visualization tools. Our assistant creates customizable charts and graphs that make patterns immediately apparent, helping you communicate findings with impact and clarity.
                    </p>
                    
                    <div className="rounded-2xl overflow-hidden mb-12 shadow-lg h-96">
                        <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" alt="Collaborative Research" className="w-full h-full object-cover" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2">Streamline Your Writing</h4>
                            <p className="text-gray-600 text-sm">From drafting polished outlines to generating properly formatted citations in styles like APA, our assistant accelerates the writing process.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2">Collaborate Without Boundaries</h4>
                            <p className="text-gray-600 text-sm">Research thrives on collaboration. Our assistant integrates seamlessly with your existing workflows and syncs across all your devices.</p>
                        </div>
                    </div>
                </section>

                <section className="border-t border-gray-100 pt-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Join the Research Revolution</h3>
                    <p className="text-center max-w-2xl mx-auto mb-8">
                        Ready to transform your research experience? Try the AI Research Assistant Agent today and discover what you can achieve when AI amplifies your natural talents.
                    </p>
                    <div className="flex justify-center">
                        <button className="bg-[#8c5861] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#7a4d55] transition-colors shadow-lg shadow-[#8c5861]/20">
                            Get Started for Free
                        </button>
                    </div>
                </section>
            </div>
        </BlogLayout>
    );
}
