import { BlogLayout } from '@/components/layout/BlogLayout';
import { allBlogPosts, blogCategories } from '@/data/blogData';

export function Industry40BlogPage() {
    // Find current post info from data
    const currentPost = allBlogPosts.find(p => p.link === '/blog/industry-4-0-transforming') || allBlogPosts[8];
    
    // Get related posts
    const relatedPosts = allBlogPosts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3);
        
    // Get top articles
    const topArticles = allBlogPosts.slice(0, 5);

    return (
        <BlogLayout
            title="Industry 4.0: Transforming Businesses for a Brighter Future"
            author="AutoomStudio Team"
            date="MAR 2, 2025"
            featuredImage={currentPost.image}
            category={currentPost.category}
            description="The world of business is on the cusp of a transformative era, driven by the powerful forces of Industry 4.0. This next industrial revolution is marked by the convergence of advanced technologies, ushering in a future of increased efficiency, enhanced productivity, and boundless opportunities."
            heroStyle={{ background: 'linear-gradient(135deg, #ef7e3c 0%, #d66a2e 100%)' }}
            relatedPosts={relatedPosts}
            topArticles={topArticles}
            categories={blogCategories}
        >
            <div className="space-y-12">
                <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm mt-12">
                    <h3 className="text-2xl font-bold text-[#ef7e3c] mb-6">Unlocking a World of Possibilities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-2 h-2 rounded-full bg-[#ef7e3c] mt-2 flex-shrink-0"></div>
                                <p className="text-gray-600"><span className="font-bold text-gray-900">Enhanced decision-making:</span> Real-time data collection through IoT empowers businesses to make informed decisions.</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-2 h-2 rounded-full bg-[#ef7e3c] mt-2 flex-shrink-0"></div>
                                <p className="text-gray-600"><span className="font-bold text-gray-900">Boosting operational efficiency:</span> Automation and robotics streamline processes, minimizing human error.</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-2 h-2 rounded-full bg-[#ef7e3c] mt-2 flex-shrink-0"></div>
                                <p className="text-gray-600"><span className="font-bold text-gray-900">Revolutionizing customer experience:</span> Personalized product offerings and predictive maintenance elevate loyalty.</p>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" alt="Industry 4.0" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </section>

                <section className="space-y-8">
                    <h3 className="text-2xl font-bold text-gray-900">Taking the First Step</h3>
                    <p className="text-gray-600">
                        The journey towards Industry 4.0 is an exciting one, but it also requires careful planning and strategic execution.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-gray-50 p-6 rounded-2xl text-center">
                            <div className="font-bold text-[#0e5863] mb-2 text-sm uppercase tracking-wider">Analysis</div>
                            <p className="text-xs text-gray-500">Identify areas for improvement and bottlenecks.</p>
                        </div>
                        <div className="bg-[#b9d5c6]/20 p-6 rounded-2xl text-center">
                            <div className="font-bold text-[#0e5863] mb-2 text-sm uppercase tracking-wider">Invest</div>
                            <p className="text-xs text-gray-500">Select technologies that align with goals.</p>
                        </div>
                        <div className="bg-[#b9d5c6]/20 p-6 rounded-2xl text-center">
                            <div className="font-bold text-[#0e5863] mb-2 text-sm uppercase tracking-wider">Upskill</div>
                            <p className="text-xs text-gray-500">Equip employees with necessary digital skills.</p>
                        </div>
                        <div className="bg-[#e8e4db]/20 p-6 rounded-2xl text-center">
                            <div className="font-bold text-[#0e5863] mb-2 text-sm uppercase tracking-wider">Innovate</div>
                            <p className="text-xs text-gray-500">Foster an environment of experimentation.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-[#0e5863] text-white p-10 rounded-3xl text-center">
                    <h4 className="text-2xl font-bold mb-4">A Paradigm Shift</h4>
                    <p className="max-w-2xl mx-auto opacity-90 mb-8">
                        Industry 4.0 is not just a technological revolution; it's a paradigm shift. By embracing this transformation, businesses can unlock a world of possibilities.
                    </p>
                    <button className="bg-white text-[#0e5863] px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                        Explore Our Solutions
                    </button>
                </section>
            </div>
        </BlogLayout>
    );
}
