import { BlogLayout } from '@/components/layout/BlogLayout';
import { allBlogPosts, blogCategories } from '@/data/blogData';

export function Industry40RevolutionBlogPage() {
    // Find current post info from data
    const currentPost = allBlogPosts.find(p => p.link === '/blog/industry-4-0-revolution') || allBlogPosts[9];
    
    // Get related posts
    const relatedPosts = allBlogPosts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3);
        
    // Get top articles
    const topArticles = allBlogPosts.slice(0, 5);

    return (
        <BlogLayout
            title="Unraveling the Tapestry of Progress: From Industry 1.0 to Industry 4.0"
            author="AutoomStudio Team"
            date="MAR 2, 2025"
            featuredImage={currentPost.image}
            category={currentPost.category}
            description="In the symphony of progress, each industrial revolution has played a distinct note. Now, at the doorstep of Industry 4.0, a melange of digital innovations is poised to redefine industry itself."
            heroStyle={{ background: 'linear-gradient(135deg, #5b806d 0%, #4a6b5a 100%)' }}
            relatedPosts={relatedPosts}
            topArticles={topArticles}
            categories={blogCategories}
        >
            <div className="space-y-12">
                <section className="space-y-10 mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 text-center">Historical Phases</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-32 rounded-xl overflow-hidden mb-4">
                                <img src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop" alt="Industry 1.0" className="w-full h-full object-cover grayscale" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">1.0: Mechanical</h4>
                            <p className="text-xs text-gray-500 mb-2">Late 18th Century</p>
                            <p className="text-sm text-gray-600 leading-relaxed">The birth of industrialization via steam power and mechanization, transitioning from manual craft to machines.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-32 rounded-xl overflow-hidden mb-4">
                                <img src="https://images.unsplash.com/photo-1518985287714-d1f56a5966a3?q=80&w=2070&auto=format&fit=crop" alt="Industry 2.0" className="w-full h-full object-cover grayscale" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">2.0: Mass Production</h4>
                            <p className="text-xs text-gray-500 mb-2">Early 20th Century</p>
                            <p className="text-sm text-gray-600 leading-relaxed">Henry Ford's assembly lines and electrification enabled standardization and massive scale.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-32 rounded-xl overflow-hidden mb-4">
                                <img src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2069&auto=format&fit=crop" alt="Industry 3.0" className="w-full h-full object-cover grayscale" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">3.0: Automation</h4>
                            <p className="text-xs text-gray-500 mb-2">Late 20th Century</p>
                            <p className="text-sm text-gray-600 leading-relaxed">Computers and electronics transformed manufacturing with precision and optimization.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">The Path to Industry 4.0</h3>
                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <div className="font-black text-4xl text-gray-200">01</div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">Digitalization & Connectivity</h4>
                                <p className="text-gray-600">The journey began with the digitization of information, intertwining industries in a web of connectivity facilitated by computers and the internet.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="font-black text-4xl text-gray-200">02</div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">Big Data & Analytics</h4>
                                <p className="text-gray-600">Alchemizing information into insight. The ability to process vast amounts of data became a cornerstone of the new era.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="font-black text-4xl text-gray-200">03</div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">Internet of Things (IoT)</h4>
                                <p className="text-gray-600">Smart machines and intelligent factories. IoT became the connective tissue for real-time monitoring and control.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-12 border-t border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Conclusion</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        As we stand at the crossroads of history and progress, the journey to Industry 4.0 is not merely a technological evolution but a paradigm shift in how we conceive and conduct industry.
                    </p>
                    <p className="text-gray-700 leading-relaxed font-bold">
                        Embracing Industry 4.0 is not just a choice; it is an imperative that opens the door to a future where efficiency, customization, and sustainability converge in a harmonious dance of progress.
                    </p>
                </section>
            </div>
        </BlogLayout>
    );
}
