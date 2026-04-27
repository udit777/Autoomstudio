import { BlogLayout } from '@/components/layout/BlogLayout';
import { allBlogPosts, blogCategories } from '@/data/blogData';

export function AIEmailAssistantBlogPage() {
    // Find current post info from data
    const currentPost = allBlogPosts.find(p => p.link === '/blog/ai-email-assistant') || allBlogPosts[3];
    
    // Get related posts
    const relatedPosts = allBlogPosts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3);
        
    // Get top articles
    const topArticles = allBlogPosts.slice(0, 5);

    return (
        <BlogLayout
            title="The Future of Email Management: AuSoMe Manager's Intelligent Agent Technology"
            author="AutoomStudio Team"
            date="MAR 2, 2025"
            featuredImage={currentPost.image}
            category={currentPost.category}
            description="Many professionals spend about 3.1 hours each day just managing emails—that adds up to almost 16 weeks every year. What if you could get that time back?"
            heroStyle={{ background: 'linear-gradient(135deg, #618c7a 0%, #4d6f61 100%)' }}
            relatedPosts={relatedPosts}
            topArticles={topArticles}
            categories={blogCategories}
        >
            <div className="space-y-12">
                <section className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Introducing AutoomStudio's AuSoMe Manager</h2>
                    <p>
                        At AutoomStudio, we've created AuSoMe Manager with one goal: to automate any task with ease. Our flagship AI-powered solution leverages advanced Language Models (LLMs) and AI Intelligence to learn your preferences, adapt to your work style, and handle repetitive tasks through intelligent automation.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                    <div className="group">
                        <div className="aspect-video rounded-xl overflow-hidden mb-3 shadow-md border border-gray-100">
                            <img src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop" alt="Smart Inbox" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <p className="text-center text-sm font-bold text-gray-600">Smart Sorting</p>
                    </div>
                    <div className="group">
                        <div className="aspect-video rounded-xl overflow-hidden mb-3 shadow-md border border-gray-100">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Draft Generation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <p className="text-center text-sm font-bold text-gray-600">Perfect Drafts</p>
                    </div>
                    <div className="group">
                        <div className="aspect-video rounded-xl overflow-hidden mb-3 shadow-md border border-gray-100">
                            <img src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop" alt="Meeting Coordination" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <p className="text-center text-sm font-bold text-gray-600">Auto Scheduling</p>
                    </div>
                </div>

                <section className="space-y-8">
                    <h3 className="text-2xl font-bold text-gray-900">How the Email Assistant AI Agent Works</h3>
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <p className="text-gray-600 italic mb-4">
                            "I've reclaimed nearly 10 hours weekly since implementing AuSoMe Manager. My response quality has improved, I never miss important messages, and my stress levels have plummeted."
                        </p>
                        <div className="font-bold text-gray-900">— Sarah, Marketing Director</div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-[#618c7a]/5 rounded-2xl border border-[#618c7a]/10">
                            <h4 className="font-bold text-[#618c7a] mb-2">Smart Inbox Management</h4>
                            <p className="text-sm text-gray-600">Automatically categorizes emails by urgency, sender relationships, and content type.</p>
                        </div>
                        <div className="p-6 bg-[#618c7a]/5 rounded-2xl border border-[#618c7a]/10">
                            <h4 className="font-bold text-[#618c7a] mb-2">Context-Aware Replies</h4>
                            <p className="text-sm text-gray-600">Suggests personalized responses based on your unique communication history and relationship.</p>
                        </div>
                        <div className="p-6 bg-[#618c7a]/5 rounded-2xl border border-[#618c7a]/10">
                            <h4 className="font-bold text-[#618c7a] mb-2">Task Extraction</h4>
                            <p className="text-sm text-gray-600">Pulls action items from emails and adds them directly to your task management system.</p>
                        </div>
                        <div className="p-6 bg-[#618c7a]/5 rounded-2xl border border-[#618c7a]/10">
                            <h4 className="font-bold text-[#618c7a] mb-2">Deadline Tracking</h4>
                            <p className="text-sm text-gray-600">Proactively reminds you of approaching deadlines mentioned in emails, ensuring nothing is missed.</p>
                        </div>
                    </div>
                </section>

                <section className="pt-12 border-t border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">The Future of Email Is Here</h3>
                    <p className="text-gray-600 mb-8">
                        The data is clear: professionals using AI-powered email management report 37% higher productivity and 42% lower stress levels related to digital communications.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-[#618c7a] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#4d6f61] transition-all flex-1">
                            Request a Demo
                        </button>
                        <button className="bg-white text-[#618c7a] border-2 border-[#618c7a] px-8 py-4 rounded-xl font-bold hover:bg-[#618c7a]/5 transition-all flex-1">
                            Learn More
                        </button>
                    </div>
                </section>
            </div>
        </BlogLayout>
    );
}
