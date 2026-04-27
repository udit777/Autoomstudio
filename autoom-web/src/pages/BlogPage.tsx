import { useState } from 'react';
import { Link } from 'react-router-dom';

import { allBlogPosts } from '@/data/blogData';


type Category = { name: string; image: string; match: (p: BlogPost) => boolean };

const categories: Category[] = [
    {
        name: 'AI Agents',
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=400&auto=format&fit=crop',
        // All AI-related blog posts
        match: (p) =>
            ['AI AGENTS', 'AI', 'CRM', 'SALES', 'PRODUCTIVITY', 'RESEARCH', 'COMMUNICATION', 'SUPPORT'].includes(p.category) ||
            p.title.toLowerCase().includes('ai ') ||
            p.title.toLowerCase().startsWith('ai')
    },
    {
        name: 'Automation',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop',
        match: (p) => p.category === 'AUTOMATION'
    },
    {
        name: 'Industry 4.0',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400&auto=format&fit=crop',
        match: (p) => p.category === 'INDUSTRY 4.0'
    },
    {
        name: 'IT Services',
        image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=400&auto=format&fit=crop',
        match: (p) => ['IT SERVICES', 'INFRASTRUCTURE', 'PROJECT MGMT', 'SOFTWARE'].includes(p.category)
    },
    {
        name: 'Marketing',
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=400&auto=format&fit=crop',
        match: (p) => ['MARKETING', 'SOCIAL MEDIA', 'ANALYTICS', 'DESIGN'].includes(p.category)
    },
];

const instagramImages = [
    'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=300&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=300&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=300&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=300&auto=format&fit=crop',
];

type BlogPost = typeof allBlogPosts[0];

const BlogCard = ({ post }: { post: BlogPost }) => (
    <div className="flex flex-col group cursor-pointer">
        <div className="relative overflow-hidden mb-4 rounded-sm">
            <Link to={post.link}>
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </Link>
        </div>
        <div className="flex flex-col flex-1">
            <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-2">
                {post.category}
                <span className="mx-1 text-gray-300">·</span>
                {post.tag}
                <span className="mx-1 text-gray-300">·</span>
                {post.date}
            </p>
            <Link to={post.link} className="group/title">
                <h3 className="text-gray-900 font-bold text-[15px] leading-snug mb-3 group-hover/title:text-[#0e5863] transition-colors">
                    {post.title}
                </h3>
            </Link>
            <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-3 flex-1">
                {post.excerpt}
            </p>
        </div>
    </div>
);

export function BlogPage() {
    const [visibleCount, setVisibleCount] = useState(6);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const filtered = allBlogPosts.filter(p => {
        if (activeCategory) {
            const cat = categories.find(c => c.name === activeCategory);
            return cat ? cat.match(p) : true;
        }
        if (searchQuery.trim()) {
            return (
                p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.category.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        return true;
    });

    const visiblePosts = filtered.slice(0, visibleCount);
    const hasMore = visibleCount < filtered.length;

    const topPosts = allBlogPosts.slice(0, 5);

    const handleCategoryClick = (name: string) => {
        setActiveCategory(prev => prev === name ? null : name);
        setSearchQuery('');
        setVisibleCount(6);
    };

    const handleSearch = (q: string) => {
        setSearchQuery(q);
        setActiveCategory(null);
        setVisibleCount(6);
    };

    return (
        <div className="min-h-screen bg-white font-sans pt-[57px]">
            {/* Hero Banner */}
            <div className="relative h-72 md:h-80 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920&auto=format&fit=crop"
                    alt="Blog Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Blog</h1>
                    <p className="text-white/80 max-w-xl text-sm md:text-base leading-relaxed">
                        Insights, updates and deep dives into AI, automation, industry 4.0 and the technologies shaping the future of business.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 max-w-6xl py-14">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* ── Left Sidebar (sticky) ── */}
                    <aside className="w-full lg:w-72 flex-shrink-0 space-y-10 lg:sticky lg:top-[57px] lg:self-start lg:max-h-[calc(100vh-57px)] lg:overflow-y-auto lg:pr-2">

                        {/* Search */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={e => handleSearch(e.target.value)}
                                className="w-full border border-gray-200 rounded-sm px-4 py-2.5 pr-10 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#0e5863] transition-colors"
                            />
                            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        {/* Categories */}
                        <div>
                            <h3 className="text-base font-bold text-gray-900 mb-4">Categories</h3>
                            <div className="space-y-2">
                                {/* All posts button */}
                                <button
                                    onClick={() => { setActiveCategory(null); setSearchQuery(''); setVisibleCount(6); }}
                                    className={`relative w-full h-12 rounded-sm overflow-hidden group cursor-pointer flex items-center justify-center border-2 transition-colors ${activeCategory === null && !searchQuery
                                            ? 'border-[#0e5863] bg-[#0e5863]'
                                            : 'border-gray-200 bg-gray-50 hover:border-[#0e5863]'
                                        }`}
                                >
                                    <span className={`font-semibold text-sm tracking-wide ${activeCategory === null && !searchQuery ? 'text-white' : 'text-gray-700'
                                        }`}>All Posts</span>
                                </button>
                                {categories.map((cat) => {
                                    const isActive = activeCategory === cat.name;
                                    return (
                                        <button
                                            key={cat.name}
                                            onClick={() => handleCategoryClick(cat.name)}
                                            className={`relative w-full h-12 rounded-sm overflow-hidden group cursor-pointer border-2 transition-colors ${isActive ? 'border-[#0e5863] ring-2 ring-[#0e5863]' : 'border-transparent'
                                                }`}
                                        >
                                            <img
                                                src={cat.image}
                                                alt={cat.name}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <div className={`absolute inset-0 transition-colors ${isActive ? 'bg-[#0e5863]/70' : 'bg-black/50 group-hover:bg-black/40'
                                                }`}></div>
                                            <span className="relative text-white font-semibold text-sm tracking-wide z-10">{cat.name}</span>
                                            {isActive && (
                                                <span className="absolute top-1.5 right-1.5 bg-white rounded-full w-4 h-4 flex items-center justify-center z-10">
                                                    <svg className="w-2.5 h-2.5 text-[#0e5863]" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Top Posts */}
                        <div>
                            <h3 className="text-base font-bold text-gray-900 mb-4">Top Posts</h3>
                            <ol className="space-y-4">
                                {topPosts.map((post, idx) => (
                                    <li key={post.id} className="flex gap-3 items-start">
                                        <span className="text-xl font-extrabold text-gray-200 leading-none w-5 flex-shrink-0 mt-0.5">{idx + 1}</span>
                                        <div>
                                            <Link to={post.link} className="text-[13px] font-bold text-gray-800 hover:text-[#0e5863] leading-snug transition-colors line-clamp-2 block">
                                                {post.title}
                                            </Link>
                                            <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">
                                                {post.category} · {post.date}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* Instagram Grid */}
                        <div>
                            <h3 className="text-base font-bold text-gray-900 mb-4">Instagram</h3>
                            <div className="grid grid-cols-3 gap-1.5">
                                {instagramImages.map((src, idx) => (
                                    <div key={idx} className="aspect-square overflow-hidden rounded-sm group cursor-pointer">
                                        <img
                                            src={src}
                                            alt={`Instagram ${idx + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* ── Main Blog Grid ── */}
                    <main className="flex-1 min-w-0">
                        {/* Active filter label */}
                        {(activeCategory || searchQuery) && (
                            <div className="flex items-center gap-2 mb-6">
                                <span className="text-sm text-gray-500">
                                    {activeCategory ? `Showing: ${activeCategory}` : `Results for: "${searchQuery}"`}
                                </span>
                                <span className="text-xs bg-[#0e5863] text-white rounded-full px-2 py-0.5">{filtered.length}</span>
                                <button
                                    onClick={() => { setActiveCategory(null); setSearchQuery(''); setVisibleCount(6); }}
                                    className="ml-1 text-xs text-gray-400 hover:text-gray-700 underline"
                                >Clear</button>
                            </div>
                        )}
                        {visiblePosts.length === 0 ? (
                            <div className="flex items-center justify-center h-40 text-gray-400 text-sm">
                                No posts found.
                            </div>
                        ) : (
                            <>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
                                    {visiblePosts.map(post => (
                                        <BlogCard key={post.id} post={post} />
                                    ))}
                                </div>

                                {hasMore && (
                                    <div className="flex justify-center mt-12">
                                        <button
                                            onClick={() => setVisibleCount(c => c + 6)}
                                            className="bg-[#2255e8] hover:bg-[#1a44cc] text-white px-8 py-3 text-sm font-semibold tracking-wide transition-colors rounded-sm"
                                        >
                                            Load More
                                        </button>
                                    </div>
                                )}
                            </>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}
