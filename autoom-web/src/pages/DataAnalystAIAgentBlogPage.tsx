import { BlogLayout } from '@/components/layout/BlogLayout';
import { allBlogPosts, blogCategories } from '@/data/blogData';

export function DataAnalystAIAgentBlogPage() {
    // Find current post info from data
    const currentPost = allBlogPosts.find(p => p.link === '/blog/data-analyst-ai-agent') || allBlogPosts[6];
    
    // Get related posts
    const relatedPosts = allBlogPosts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3);
        
    // Get top articles
    const topArticles = allBlogPosts.slice(0, 5);

    return (
        <BlogLayout
            title="The Future of Data Analysis: AutoomStudio's Autonomous Data Analyst Agent"
            author="AutoomStudio Team"
            date="MAR 2, 2025"
            featuredImage={currentPost.image}
            category={currentPost.category}
            description="Businesses today need to turn raw data into useful insights quickly to stay ahead of the competition. AutoomStudio's Data Analyst AI Agent helps with this."
            heroStyle={{ background: 'linear-gradient(135deg, #0e5863 0%, #0a434b 100%)' }}
            relatedPosts={relatedPosts}
            topArticles={topArticles}
            categories={blogCategories}
        >
            <div className="space-y-12">
                <section className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Your 24/7 AI Powered Virtual Agent</h2>
                    <p>
                        Imagine having a brilliant data analyst who works around the clock, never takes vacation, and delivers consistent, high-quality insights tailored to your business needs. Our Autonomous Agent does exactly that—and more, functioning as a truly Intelligent Agent in your data ecosystem.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                    <div className="group">
                        <div className="aspect-video rounded-xl overflow-hidden mb-3 shadow-md border border-gray-100">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Data Integration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <p className="text-center text-sm font-bold text-gray-600">Multi-Source Sync</p>
                    </div>
                    <div className="group">
                        <div className="aspect-video rounded-xl overflow-hidden mb-3 shadow-md border border-gray-100">
                            <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" alt="Data Insights" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <p className="text-center text-sm font-bold text-gray-600">Instant Insights</p>
                    </div>
                    <div className="group">
                        <div className="aspect-video rounded-xl overflow-hidden mb-3 shadow-md border border-gray-100">
                            <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" alt="Predictive Analysis" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <p className="text-center text-sm font-bold text-gray-600">Future Forecasting</p>
                    </div>
                </div>

                <section className="space-y-8">
                    <h3 className="text-2xl font-bold text-gray-900">Effortless Data Preparation</h3>
                    <p>
                        Data preparation typically consumes up to 80% of an analyst's time. Our AI Agent transforms this tedious process with advanced AI Automation:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                            <h4 className="font-bold text-[#0e5863] mb-2">Multi-Source Integration</h4>
                            <p className="text-sm text-gray-600">Connect to databases, spreadsheets, cloud storage, or APIs with just a few clicks.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                            <h4 className="font-bold text-[#0e5863] mb-2">Automated Cleaning</h4>
                            <p className="text-sm text-gray-600">Handles missing values, outliers, and inconsistencies while standardizing formats.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-[#0e5863]/5 p-10 rounded-3xl border border-[#0e5863]/10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Predict the Future with Confidence</h3>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#0e5863] text-white flex items-center justify-center font-bold flex-shrink-0">P</div>
                            <div>
                                <h4 className="font-bold text-gray-900">Advanced Predictive Modeling</h4>
                                <p className="text-gray-600 text-sm">Forecast outcomes with sophisticated models that improve over time as more data is processed.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#0e5863] text-white flex items-center justify-center font-bold flex-shrink-0">T</div>
                            <div>
                                <h4 className="font-bold text-gray-900">Time Series Analysis</h4>
                                <p className="text-gray-600 text-sm">Identify seasonal patterns and long-term trends to inform strategic planning and inventory management.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-12 border-t border-gray-100 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience the Difference</h3>
                    <p className="max-w-2xl mx-auto text-gray-600 mb-10">
                        Our Data Analyst AI Agent doesn't just save you time and resources—it transforms how your entire organization approaches decision-making.
                    </p>
                    <button className="bg-[#0e5863] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#0c4a54] transition-all shadow-lg">
                        START ANALYZING NOW
                    </button>
                </section>
            </div>
        </BlogLayout>
    );
}
