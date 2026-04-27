import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Facebook, 
    Twitter, 
    Linkedin, 
    Instagram, 
    Mail, 
    Calendar, 
    User, 
    ArrowRight, 
    ChevronRight,
    MessageSquare
} from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { cn } from "@/lib/utils";

interface BlogPost {
    id: number;
    title: string;
    category: string;
    tag: string;
    date: string;
    excerpt: string;
    image: string;
    link: string;
}

interface BlogLayoutProps {
    title: string;
    author: string;
    date: string;
    featuredImage: string;
    category: string;
    description?: string;
    heroStyle?: React.CSSProperties;
    heroClassName?: string;
    children: React.ReactNode;
    relatedPosts?: BlogPost[];
    topArticles?: BlogPost[];
    categories?: { name: string; count: number }[];
}

export function BlogLayout({
    title,
    author,
    date,
    featuredImage,
    category,
    description,
    heroStyle,
    heroClassName,
    children,
    relatedPosts = [],
    topArticles = [],
    categories = []
}: BlogLayoutProps) {
    return (
        <div className="min-h-screen bg-[#fcfdfc] font-sans pt-[57px]">
            {/* Blog Header / Hero */}
            <header 
                className={cn(
                    "py-8 md:py-10 relative overflow-hidden",
                    heroClassName || "bg-white border-b border-gray-100"
                )}
                style={heroStyle}
            >
                {/* Optional Decorative Elements (like in previous versions) */}
                {heroStyle && (
                    <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                        backgroundImage: 'radial-gradient(ellipse at 50% -20%, rgba(255,255,255,0.4) 0%, transparent 70%)'
                    }}></div>
                )}

                <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
                    <div className={cn(
                        "inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase mb-3 rounded-full",
                        heroStyle ? "bg-white/20 text-white" : "bg-[#0e5863]/10 text-[#0e5863]"
                    )}>
                        {category}
                    </div>
                    <h1 className={cn(
                        "text-3xl md:text-5xl font-bold mb-3 leading-tight max-w-4xl mx-auto",
                        heroStyle ? "text-white" : "text-gray-900"
                    )}>
                        {title}
                    </h1>

                    {description && (
                        <p className={cn(
                            "text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-6 font-medium",
                            heroStyle ? "text-white/90" : "text-gray-600"
                        )}>
                            {description}
                        </p>
                    )}

                    <div className={cn(
                        "flex items-center justify-center gap-6 text-sm font-medium",
                        heroStyle ? "text-white/80" : "text-gray-500"
                    )}>
                        <div className="flex items-center gap-2">
                            <div className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center text-white",
                                heroStyle ? "bg-white/20" : "bg-[#0e5863]"
                            )}>
                                <User size={16} />
                            </div>
                            <span>By {author}</span>
                        </div>
                        <div className={cn(
                            "w-px h-4",
                            heroStyle ? "bg-white/30" : "bg-gray-300"
                        )}></div>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} className={heroStyle ? "text-white/80" : "text-[#0e5863]"} />
                            <span>Last Updated: {date}</span>
                        </div>
                    </div>
                </div>
            </header>

            <Section className="py-12 md:py-20">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16 relative">
                        
                        {/* Social Share - Left Side (Sticky) */}
                        <div className="hidden xl:block absolute -left-20 top-0 h-full">
                            <div className="sticky top-32 flex flex-col gap-4">
                                <button className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#0e5863] hover:border-[#0e5863] transition-all">
                                    <Facebook size={18} />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#0e5863] hover:border-[#0e5863] transition-all">
                                    <Twitter size={18} />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#0e5863] hover:border-[#0e5863] transition-all">
                                    <Linkedin size={18} />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#0e5863] hover:border-[#0e5863] transition-all">
                                    <Mail size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Main Content Column */}
                        <div className="flex-1 max-w-4xl">
                            {/* Featured Banner */}
                            <div className="rounded-xl overflow-hidden mb-12 shadow-xl shadow-gray-200/50">
                                <img 
                                    src={featuredImage} 
                                    alt={title} 
                                    className="w-full h-auto object-cover max-h-[500px]"
                                />
                            </div>

                            {/* Blog Content */}
                            <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
                                {children}
                            </article>

                            {/* Text Break / Separator */}
                            <div className="my-16 flex items-center justify-center">
                                <div className="h-px w-full bg-gray-100"></div>
                                <div className="px-4 text-gray-300">
                                    <div className="flex gap-1">
                                        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                                    </div>
                                </div>
                                <div className="h-px w-full bg-gray-100"></div>
                            </div>

                            {/* Irresistible Offer / CTA */}
                            <div className="bg-[#0e5863] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden mb-16">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                                    <div className="flex-1 text-center md:text-left">
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Transform Your Business with Agentic AI</h3>
                                        <p className="text-white/80 text-lg">Experience the future of automation with our bespoke AI solutions tailored for your enterprise.</p>
                                    </div>
                                    <Link 
                                        to="/contact" 
                                        className="bg-white text-[#0e5863] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all flex items-center gap-2 whitespace-nowrap"
                                    >
                                        GET STARTED NOW <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </div>

                            {/* Author Box */}
                            <div className="bg-gray-50 rounded-2xl p-8 mb-16 border border-gray-100 flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
                                <div className="w-24 h-24 rounded-full bg-[#0e5863] flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                                    <User size={48} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">About {author}</h4>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        A technology enthusiast and AI specialist at AutoomStudio, dedicated to exploring how autonomous agents are reshaping the digital landscape and driving business innovation.
                                    </p>
                                    <div className="flex gap-4 justify-center md:justify-start">
                                        <a href="#" className="text-gray-400 hover:text-[#0e5863] transition-colors"><Twitter size={18} /></a>
                                        <a href="#" className="text-gray-400 hover:text-[#0e5863] transition-colors"><Linkedin size={18} /></a>
                                        <a href="#" className="text-gray-400 hover:text-[#0e5863] transition-colors"><Instagram size={18} /></a>
                                    </div>
                                </div>
                            </div>

                            {/* Related Posts */}
                            <div className="mb-16">
                                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                    Related Posts
                                    <div className="h-px flex-1 bg-gray-100"></div>
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {relatedPosts.length > 0 ? relatedPosts.map(post => (
                                        <Link key={post.id} to={post.link} className="group">
                                            <div className="rounded-xl overflow-hidden mb-4 aspect-[4/3]">
                                                <img 
                                                    src={post.image} 
                                                    alt={post.title} 
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                            <h4 className="font-bold text-gray-900 leading-snug group-hover:text-[#0e5863] transition-colors line-clamp-2">
                                                {post.title}
                                            </h4>
                                        </Link>
                                    )) : (
                                        <p className="text-gray-400 italic">No related posts yet.</p>
                                    )}
                                </div>
                            </div>

                            {/* Comments Section */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                    Comments
                                    <div className="h-px flex-1 bg-gray-100"></div>
                                </h3>
                                <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center">
                                    <MessageSquare size={48} className="text-gray-200 mx-auto mb-4" />
                                    <p className="text-gray-500 mb-6">Be the first to share your thoughts on this article!</p>
                                    <button className="text-[#0e5863] font-bold hover:underline">Post a Comment</button>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Column */}
                        <aside className="w-full lg:w-[380px] flex-shrink-0 space-y-10 lg:sticky lg:top-32 lg:self-start">
                            
                            {/* Say Hello! Widget */}
                            <div className="bg-[#f0f9f8] border border-[#d1e9e6] rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-[#0e5863] mb-4">SAY HELLO!</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Interested in learning more about how AutoomStudio can help your business? We'd love to hear from you.
                                </p>
                                <Link 
                                    to="/contact" 
                                    className="inline-flex items-center gap-2 text-[#0e5863] font-bold group"
                                >
                                    Get in touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Email Subscriptions */}
                            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Mail size={20} className="text-[#0e5863]" />
                                    EMAIL SUBSCRIPTIONS
                                </h3>
                                <p className="text-gray-500 text-sm mb-6">Get the latest insights delivered straight to your inbox.</p>
                                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                                    <input 
                                        type="email" 
                                        placeholder="E-MAIL ADDRESS" 
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0e5863]/20"
                                    />
                                    <button className="w-full bg-[#f9a01b] hover:bg-[#e89410] text-white font-bold py-3 rounded-lg transition-colors tracking-widest text-xs">
                                        SUBSCRIBE
                                    </button>
                                </form>
                            </div>

                            {/* Social Media Links */}
                            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                                <h3 className="text-lg font-bold text-gray-900 mb-6">SOCIAL MEDIA LINKS</h3>
                                <div className="flex gap-3">
                                    <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#0e5863] hover:text-white transition-all"><Facebook size={18} /></a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#0e5863] hover:text-white transition-all"><Twitter size={18} /></a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#0e5863] hover:text-white transition-all"><Linkedin size={18} /></a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#0e5863] hover:text-white transition-all"><Instagram size={18} /></a>
                                </div>
                            </div>

                            {/* Top Articles */}
                            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                                <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-tight">Top Articles</h3>
                                <div className="space-y-6">
                                    {topArticles.map((article, idx) => (
                                        <Link key={article.id} to={article.link} className="flex gap-4 group">
                                            <div className="text-2xl font-black text-gray-100 group-hover:text-[#0e5863]/20 transition-colors leading-none">
                                                {(idx + 1).toString().padStart(2, '0')}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm text-gray-900 group-hover:text-[#0e5863] transition-colors line-clamp-2 leading-snug mb-1">
                                                    {article.title}
                                                </h4>
                                                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">{article.date}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Blog Categories */}
                            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                                <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-tight">Blog Categories</h3>
                                <div className="space-y-2">
                                    {categories.map((cat) => (
                                        <Link 
                                            key={cat.name} 
                                            to="/blog" 
                                            className="flex items-center justify-between group py-2"
                                        >
                                            <span className="text-sm font-medium text-gray-600 group-hover:text-[#0e5863] transition-colors flex items-center gap-2">
                                                <ChevronRight size={14} className="text-[#0e5863]" />
                                                {cat.name}
                                            </span>
                                            <span className="text-xs bg-gray-50 px-2 py-1 rounded-md text-gray-400 group-hover:bg-[#0e5863]/10 group-hover:text-[#0e5863] transition-all">
                                                {cat.count}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Banner */}
                            <div className="rounded-2xl overflow-hidden relative group cursor-pointer aspect-[3/4]">
                                <img 
                                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                                    alt="CTA Banner" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0e5863] via-transparent to-transparent opacity-90"></div>
                                <div className="absolute bottom-0 left-0 p-8 text-white">
                                    <h4 className="text-2xl font-bold mb-3">Build Your AI Agent Today</h4>
                                    <p className="text-white/80 text-sm mb-6">Scale your business operations with intelligent automation.</p>
                                    <Link 
                                        to="/contact" 
                                        className="inline-flex items-center gap-2 bg-white text-[#0e5863] px-6 py-3 rounded-xl font-bold text-sm shadow-lg"
                                    >
                                        Contact Us <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>

                        </aside>
                    </div>
                </div>
            </Section>
        </div>
    );
}
