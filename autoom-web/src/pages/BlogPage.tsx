import { useState } from 'react';
import { Link } from 'react-router-dom';

const allBlogPosts = [
    {
        id: 1,
        title: 'AI Social Media Manager',
        category: 'AI AGENTS',
        tag: 'AUTOMATION',
        date: 'MAR 2, 2025',
        excerpt: 'Unlock social media success with AutoomStudio\'s AI-powered automation tools that help you manage and grow your presence.',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop',
        link: '/blog/ai-social-media-manager'
    },
    {
        id: 2,
        title: 'AI Enable CRM Agent',
        category: 'CRM',
        tag: 'AI',
        date: 'MAR 2, 2025',
        excerpt: 'Transform customer relationship management with intelligent AI agents that learn, adapt and automate your CRM workflows.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
        link: '/blog/ai-enable-crm-agent'
    },
    {
        id: 3,
        title: 'AI Lead Generation Agent',
        category: 'SALES',
        tag: 'AI AGENTS',
        date: 'MAR 2, 2025',
        excerpt: 'Supercharge your sales pipeline with AI-driven lead generation that identifies and qualifies prospects automatically.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
        link: '/blog/ai-lead-generation-agent'
    },
    {
        id: 4,
        title: 'AI Email Assistant',
        category: 'PRODUCTIVITY',
        tag: 'AI',
        date: 'MAR 2, 2025',
        excerpt: 'Craft perfect emails instantly with an AI assistant that understands intent, tone and context for every message.',
        image: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop',
        link: '/blog/ai-email-assistant'
    },
    {
        id: 5,
        title: 'AI Research Assistant',
        category: 'RESEARCH',
        tag: 'AI',
        date: 'MAR 2, 2025',
        excerpt: 'Accelerate research workflows with an AI assistant that aggregates, synthesizes and summarizes complex information.',
        image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2074&auto=format&fit=crop',
        link: '/blog/ai-research-assistant'
    },
    {
        id: 6,
        title: 'AI Voice Calling Agent',
        category: 'COMMUNICATION',
        tag: 'AI AGENTS',
        date: 'MAR 2, 2025',
        excerpt: 'Automate voice interactions with intelligent AI agents that handle calls, schedule follow ups and gather insights.',
        image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop',
        link: '/blog/ai-voice-calling-agent'
    },
    {
        id: 7,
        title: 'Data Analyst AI Agent',
        category: 'ANALYTICS',
        tag: 'AI',
        date: 'MAR 2, 2025',
        excerpt: 'Let AI analyze your data, generate insights and produce actionable reports automatically in real time.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
        link: '/blog/data-analyst-ai-agent'
    },
    {
        id: 8,
        title: 'Customer Support AI Agent',
        category: 'SUPPORT',
        tag: 'AI AGENTS',
        date: 'MAR 2, 2025',
        excerpt: 'Deliver 24/7 personalized customer support with agentic AI that understands context and resolves issues fast.',
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop',
        link: '/blog/customer-support-ai-agent'
    },
    {
        id: 9,
        title: 'Industry 4.0: Transforming Businesses for a Brighter Future',
        category: 'INDUSTRY 4.0',
        tag: 'TECHNOLOGY',
        date: 'MAR 2, 2025',
        excerpt: 'Explore how Industry 4.0 technologies are reshaping businesses and unlocking new dimensions of efficiency.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
        link: '/blog/industry-4-0-transforming'
    },
    {
        id: 10,
        title: 'Industry 4.0 Revolution',
        category: 'INDUSTRY 4.0',
        tag: 'TECHNOLOGY',
        date: 'MAR 2, 2025',
        excerpt: 'From steam power to digital intelligence — unravel the tapestry of progress across industrial revolutions.',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
        link: '/blog/industry-4-0-revolution'
    },
    {
        id: 11,
        title: 'Industry 4.0',
        category: 'INDUSTRY 4.0',
        tag: 'INDIA',
        date: 'MAR 2, 2025',
        excerpt: 'A glimpse into India\'s Industry 4.0 future — opportunities, challenges, and the path to a brighter industrial age.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
        link: '/blog/industry-4-0'
    },
    {
        id: 12,
        title: 'IT Helpdesk and Support Info',
        category: 'IT SERVICES',
        tag: 'SUPPORT',
        date: 'MAR 2, 2025',
        excerpt: 'Discover how modern IT helpdesk solutions streamline operations and deliver faster, smarter employee support.',
        image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 13,
        title: 'Legacy System Modernization Info',
        category: 'IT SERVICES',
        tag: 'MODERNIZATION',
        date: 'MAR 2, 2025',
        excerpt: 'Learn how modernizing legacy systems can future-proof your business and unlock performance at scale.',
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 14,
        title: 'Data Center Management - Info',
        category: 'INFRASTRUCTURE',
        tag: 'IT',
        date: 'MAR 2, 2025',
        excerpt: 'Optimize your data center operations with best-in-class management strategies and modern monitoring tools.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 15,
        title: 'IT Project Management Description Info',
        category: 'PROJECT MGMT',
        tag: 'IT',
        date: 'MAR 2, 2025',
        excerpt: 'Effective IT project management ensures on-time delivery through structured planning, agile execution and risk control.',
        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 16,
        title: 'IT Infrastructure Management-Info',
        category: 'INFRASTRUCTURE',
        tag: 'IT',
        date: 'MAR 2, 2025',
        excerpt: 'Reliable IT infrastructure management keeps your business running smoothly with maximum uptime and scalable capacity.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 17,
        title: 'Open Source Software Customization Info',
        category: 'SOFTWARE',
        tag: 'OPEN SOURCE',
        date: 'MAR 2, 2025',
        excerpt: 'Leverage the power of open source with tailored customization that fits your unique business workflows.',
        image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 18,
        title: 'Web & Social Analytics-Info',
        category: 'ANALYTICS',
        tag: 'DIGITAL',
        date: 'MAR 2, 2025',
        excerpt: 'Harnessing web and social analytics empowers brands to make data-driven decisions and measure campaign impact.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 19,
        title: 'AI-driven Customer Interaction Description Info',
        category: 'AI',
        tag: 'CUSTOMER EXP',
        date: 'MAR 2, 2025',
        excerpt: 'AI-driven customer interactions transform touchpoints into meaningful, personalized engagement across channels.',
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 20,
        title: 'Social Media Publishing info',
        category: 'SOCIAL MEDIA',
        tag: 'PUBLISHING',
        date: 'MAR 2, 2025',
        excerpt: 'Streamline content publishing schedules across social platforms for consistent, strategic brand communication.',
        image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1974&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 21,
        title: 'Social Media Management info',
        category: 'SOCIAL MEDIA',
        tag: 'MANAGEMENT',
        date: 'MAR 2, 2025',
        excerpt: 'Effectively manage all social channels with a unified strategy delivering engagement, reach and follower growth.',
        image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 22,
        title: 'E-Commerce Solution Info',
        category: 'E-COMMERCE',
        tag: 'DIGITAL',
        date: 'MAR 2, 2025',
        excerpt: 'Build a powerful e-commerce platform that drives conversions, improves UX and scales with your business growth.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1974&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 23,
        title: 'Social Media Optimization-Info',
        category: 'SOCIAL MEDIA',
        tag: 'SEO',
        date: 'MAR 2, 2025',
        excerpt: 'Optimize your social media presence to boost discoverability, increase engagement and enhance your brand voice.',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 24,
        title: 'Analytics and Reporting Description Info',
        category: 'ANALYTICS',
        tag: 'REPORTING',
        date: 'MAR 2, 2025',
        excerpt: 'Comprehensive analytics and clear reporting empower stakeholders with real-time visibility into key business metrics.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 25,
        title: 'Pay-Per-Click Info',
        category: 'MARKETING',
        tag: 'PPC',
        date: 'MAR 2, 2025',
        excerpt: 'Drive targeted traffic and achieve maximum ROI with expertly crafted pay-per-click advertising campaigns.',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2036&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 26,
        title: 'Software Testing and Quality Assurance Info',
        category: 'SOFTWARE',
        tag: 'QA',
        date: 'MAR 2, 2025',
        excerpt: 'Ensure software quality with rigorous testing methodologies that catch bugs early and guarantee reliable releases.',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 27,
        title: 'SEARCH ENGINE OPTIMIZATION(SEO)-Info',
        category: 'MARKETING',
        tag: 'SEO',
        date: 'MAR 2, 2025',
        excerpt: 'Rank higher on search engines with proven SEO strategies that drive organic traffic and build domain authority.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 28,
        title: 'Social Media Content Creation Description Info',
        category: 'SOCIAL MEDIA',
        tag: 'CONTENT',
        date: 'MAR 2, 2025',
        excerpt: 'Create compelling, on-brand social media content that resonates with your audience and drives real engagement.',
        image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1974&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 29,
        title: 'Social Media Advertising-Info',
        category: 'SOCIAL MEDIA',
        tag: 'ADVERTISING',
        date: 'MAR 2, 2025',
        excerpt: 'Maximize reach and conversions with precision-targeted social media advertising campaigns built for results.',
        image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 30,
        title: 'DevOps Services Description Info',
        category: 'SOFTWARE',
        tag: 'DEVOPS',
        date: 'MAR 2, 2025',
        excerpt: 'Accelerate software delivery with end-to-end DevOps services that bridge development and operational efficiency.',
        image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 31,
        title: 'Content Management Systems (CMS) Development Description Info',
        category: 'SOFTWARE',
        tag: 'CMS',
        date: 'MAR 2, 2025',
        excerpt: 'Build powerful and flexible CMS solutions that give content teams full control without technical barriers.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 32,
        title: 'Mobile App Development-Info',
        category: 'SOFTWARE',
        tag: 'MOBILE',
        date: 'MAR 2, 2025',
        excerpt: 'Create feature-rich mobile apps that deliver seamless user experiences across iOS and Android platforms.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 33,
        title: 'Cybersecurity Description Info',
        category: 'SECURITY',
        tag: 'CYBER',
        date: 'MAR 2, 2025',
        excerpt: 'Protect your digital assets with robust cybersecurity solutions that detect, prevent and respond to modern threats.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 34,
        title: 'Digital Marketing Services Info',
        category: 'MARKETING',
        tag: 'DIGITAL',
        date: 'MAR 2, 2025',
        excerpt: 'Drive measurable growth with integrated digital marketing services spanning SEO, PPC, social and content.',
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 35,
        title: 'Web Development Services Info',
        category: 'SOFTWARE',
        tag: 'WEB DEV',
        date: 'MAR 2, 2025',
        excerpt: 'Build fast, responsive and scalable web solutions that reflect your brand and deliver outstanding user experience.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 36,
        title: 'Custom Software Development-Info',
        category: 'SOFTWARE',
        tag: 'CUSTOM DEV',
        date: 'MAR 2, 2025',
        excerpt: 'Get tailor-made software built to your exact specifications, driving efficiency and competitive advantage.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 37,
        title: 'Data Backup And Recovery Description Info',
        category: 'SECURITY',
        tag: 'DATA',
        date: 'MAR 2, 2025',
        excerpt: 'Protect business continuity with robust data backup and recovery strategies that ensure zero data loss.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 38,
        title: 'UI & UX Design-info',
        category: 'DESIGN',
        tag: 'UX',
        date: 'MAR 2, 2025',
        excerpt: 'Craft intuitive interfaces and user experiences that delight users and drive higher engagement and retention.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 39,
        title: 'Custom Bot Development Info',
        category: 'AI',
        tag: 'BOTS',
        date: 'MAR 2, 2025',
        excerpt: 'Build intelligent bots that automate repetitive workflows, handle inquiries and integrate with your existing tools.',
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 40,
        title: 'Sales Process Automation Info',
        category: 'AUTOMATION',
        tag: 'SALES',
        date: 'MAR 2, 2025',
        excerpt: 'Automate repetitive sales tasks to free your team and close more deals with data-driven, intelligent pipelines.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 41,
        title: 'Repetitive task Automation info',
        category: 'AUTOMATION',
        tag: 'PRODUCTIVITY',
        date: 'MAR 2, 2025',
        excerpt: 'Eliminate manual inefficiencies by automating repetitive tasks and redirecting human effort to higher-value work.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 42,
        title: 'Automation Tool Development info',
        category: 'AUTOMATION',
        tag: 'TOOLS',
        date: 'MAR 2, 2025',
        excerpt: 'Develop custom automation tools that seamlessly integrate with your workflow and drive measurable productivity gains.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
        link: '#'
    },
    {
        id: 43,
        title: 'Domain & Hosting Solutions-Info',
        category: 'INFRASTRUCTURE',
        tag: 'HOSTING',
        date: 'MAR 2, 2025',
        excerpt: 'Secure, fast and reliable domain and hosting solutions that keep your digital presence always online.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
        link: '#'
    }
];

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
