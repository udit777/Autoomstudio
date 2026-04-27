import { BlogLayout } from '@/components/layout/BlogLayout';
import { allBlogPosts, blogCategories } from '@/data/blogData';

export function Industry40OverviewBlogPage() {
    // Find current post info from data
    const currentPost = allBlogPosts.find(p => p.link === '/blog/industry-4-0') || allBlogPosts[10];
    
    // Get related posts
    const relatedPosts = allBlogPosts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3);
        
    // Get top articles
    const topArticles = allBlogPosts.slice(0, 5);

    return (
        <BlogLayout
            title="Welcome to Autoom Studio: A Glimpse Into India's Industry 4.0 Future"
            author="AutoomStudio Team"
            date="MAR 2, 2025"
            featuredImage={currentPost.image}
            category={currentPost.category}
            description="India stands at the precipice of a transformative era, driven by the burgeoning tides of Industry 4.0. This next industrial revolution promises to reshape the landscape of Indian industry, propelling it towards a future brimming with exciting possibilities."
            heroStyle={{ background: 'linear-gradient(135deg, #0052cc 0%, #003d99 100%)' }}
            relatedPosts={relatedPosts}
            topArticles={topArticles}
            categories={blogCategories}
        >
            <div className="space-y-12">
                <section className="flex flex-col md:flex-row gap-8 items-start bg-blue-50 p-8 rounded-3xl border border-blue-100 mt-12">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">What is Industry 4.0?</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Also known as the fourth industrial revolution, it represents the convergence of digital technologies with traditional manufacturing. It encompasses a range of innovations that enable greater efficiency, flexibility, and customization.
                        </p>
                    </div>
                    <div className="w-full md:w-64 aspect-square rounded-2xl overflow-hidden shadow-md">
                        <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" alt="Automation" className="w-full h-full object-cover" />
                    </div>
                </section>

                <section className="space-y-8">
                    <h3 className="text-2xl font-bold text-[#e28e46]">Evolving Technologies</h3>
                    <div className="space-y-6">
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                            <h4 className="font-bold text-gray-900 mb-2">Artificial Intelligence (AI)</h4>
                            <p className="text-sm text-gray-600">Poised to revolutionize decision-making processes, optimize production lines, and foster the development of intelligent machines.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                            <h4 className="font-bold text-gray-900 mb-2">Internet of Things (IoT)</h4>
                            <p className="text-sm text-gray-600">Enabling seamless communication between machines, fostering real-time data collection and proactive maintenance.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                            <h4 className="font-bold text-gray-900 mb-2">Digital Twins</h4>
                            <p className="text-sm text-gray-600">Creating virtual replicas of physical assets for simulation, reducing time-to-market and minimizing costly errors.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-900 text-white p-10 rounded-3xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-6">Opportunities & Challenges</h3>
                        <ul className="space-y-4 opacity-90">
                            <li className="flex gap-3 items-start text-sm">
                                <span className="text-orange-400 font-bold">•</span>
                                <span>Bridging the Skill Gap through upskilling and reskilling.</span>
                            </li>
                            <li className="flex gap-3 items-start text-sm">
                                <span className="text-orange-400 font-bold">•</span>
                                <span>Robust Cybersecurity for interconnected systems.</span>
                            </li>
                            <li className="flex gap-3 items-start text-sm">
                                <span className="text-orange-400 font-bold">•</span>
                                <span>Ensuring Equitable Access for SMEs.</span>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="text-center pt-12 border-t border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">A Collective Endeavor</h3>
                    <p className="max-w-2xl mx-auto text-gray-600 mb-10">
                        India's successful journey into Industry 4.0 requires a collective effort from government, industry leaders, and individuals.
                    </p>
                    <p className="font-bold text-[#0052cc]">Autoom Studio OPC Pvt Ltd</p>
                </section>
            </div>
        </BlogLayout>
    );
}
