import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Link } from 'react-router-dom';

const allBlogPosts = [
    // Page 1
    {
        id: 1,
        title: 'AI Social Media Manager',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '/blog/ai-social-media-manager'
    },
    {
        id: 2,
        title: 'AI Enable CRM Agent',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 3,
        title: 'AI Lead Generation Agent',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 4,
        title: 'AI Email Assistant',
        image: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 5,
        title: 'AI Research Assistant',
        image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2074&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 6,
        title: 'AI Voice Calling Agent',
        image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 7,
        title: 'Data Analyst AI Agent',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 8,
        title: 'Customer Support AI Agent',
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 9,
        title: 'Industry 4.0: Transforming Businesses for a Brighter Future',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 10,
        title: 'Industry 4.0 Revolution',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 11,
        title: 'Industry 4.0',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 12,
        title: 'IT Helpdesk and Support Info',
        image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    // Page 2
    {
        id: 13,
        title: 'Legacy System Modernization Info',
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 14,
        title: 'Data Center Management - Info',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 15,
        title: 'IT Project Management Description Info',
        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 16,
        title: 'IT Infrastructure Management-Info',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 17,
        title: 'Open Source Software Customization Info',
        image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 18,
        title: 'Web & Social Analytics-Info',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 19,
        title: 'AI-driven Customer Interaction Description Info',
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 20,
        title: 'Social Media Publishing info',
        image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1974&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 21,
        title: 'Social Media Management info',
        image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 22,
        title: 'E-Commerce Solution Info',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1974&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 23,
        title: 'Social Media Optimization-Info',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 24,
        title: 'Analytics and Reporting Description Info',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    // Page 3
    {
        id: 25,
        title: 'Pay-Per-Click Info',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2036&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 26,
        title: 'Software Testing and Quality Assurance Info',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 27,
        title: 'SEARCH ENGINE OPTIMIZATION(SEO)-Info',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 28,
        title: 'Social Media Content Creation Description Info',
        image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1974&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 29,
        title: 'Social Media Advertising-Info',
        image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 30,
        title: 'DevOps Services Description Info',
        image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 31,
        title: 'Content Management Systems (CMS) Development Description Info',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 32,
        title: 'Mobile App Development-Info',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 33,
        title: 'Cybersecurity Description Info',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 34,
        title: 'Digital Marketing Services Info',
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 35,
        title: 'Web Development Services Info',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 36,
        title: 'Custom Software Development-Info',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    // Page 4
    {
        id: 37,
        title: 'Data Backup And Recovery Description Info',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 38,
        title: 'UI & UX Design-info',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 39,
        title: 'Custom Bot Development Info',
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 40,
        title: 'Sales Process Automation Info',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 41,
        title: 'Repetitive task Automation info',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 42,
        title: 'Automation Tool Development info',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    },
    {
        id: 43,
        title: 'Domain & Hosting Solutions-Info',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
        avatar: 'https://ui-avatars.com/api/?name=User&background=random',
        link: '#'
    }
];

const BlogCard = ({ post }: { post: typeof allBlogPosts[0] }) => (
    <div className="bg-white rounded-md shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] overflow-hidden flex flex-col hover:shadow-[0_4px_15px_-3px_rgba(6,81,237,0.4)] transition-shadow">
        <div className="relative h-48 w-full">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />

            {/* INFORMATIVE Badge */}
            <div className="absolute top-3 right-3 bg-black/50 text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-sm shadow-sm tracking-wider">
                INFORMATIVE
            </div>
        </div>

        <div className="px-5 pt-0 pb-5 relative flex-1 flex flex-col border border-t-0 border-gray-100">
            {/* Avatar overlapping image */}
            <div className="absolute -top-7 left-5 w-14 h-14 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-sm">
                <img src={post.avatar} alt="Author" className="w-full h-full object-cover grayscale opacity-80" />
            </div>

            <div className="mt-10 mb-6 flex-1">
                <h3 className="text-gray-700 font-medium text-[15px] leading-tight mb-2">
                    {post.title}
                </h3>
            </div>

            <div className="mt-auto">
                <Link to={post.link} className="inline-flex items-center text-[10px] uppercase font-bold text-gray-500 hover:text-[#EAB308] transition-colors tracking-widest gap-1 group">
                    READ MORE
                    <span className="font-normal text-xs leading-none">»</span>
                </Link>
            </div>
        </div>
    </div>
);

export function BlogPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 12;
    const totalPages = Math.ceil(allBlogPosts.length / postsPerPage);

    // Pagination logic
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = allBlogPosts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Optional: Scroll to top on page change
    };

    return (
        <div className="min-h-screen bg-white pt-[57px] font-sans">
            {/* Header Banner */}
            <div className="bg-[#0e5863] py-14 relative z-10">
                <div className="container mx-auto px-4 relative flex items-center justify-center">
                    <h1 className="text-sm font-medium text-white tracking-widest uppercase">Blog</h1>
                </div>
            </div>

            {/* Blog Grid Section */}
            <Section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentPosts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>

                    {/* Functional Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center mt-12 gap-3 text-sm text-gray-500">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                                <button
                                    key={number}
                                    onClick={() => paginate(number)}
                                    className={`px-1 cursor-pointer transition-colors ${currentPage === number
                                        ? 'font-bold text-gray-900 border-b-2 border-gray-900'
                                        : 'hover:text-gray-900'
                                        }`}
                                >
                                    {number}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </Section>
        </div>
    );
}
