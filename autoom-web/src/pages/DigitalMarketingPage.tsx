import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import socialAdsBg from '@/assets/social_ads_bg.jpg';
import seoBg from '@/assets/seo_bg.jpg';
import smoBg from '@/assets/smo_bg.jpg';

const marketingServices = [
    {
        id: 'ppc',
        title: 'Pay-per-Click (PPC) Advertising',
        content: {
            title: 'Pay-per-Click (PPC) Advertising',
            description: (
                <ul className="list-none space-y-2">
                    <li>Craft laser-focused PPC campaigns from goal-setting to platform selection.</li>
                    <li>Act as campaign architects, building a solid foundation for success.</li>
                    <li>Use cutting-edge tools to uncover hidden gems for targeted website traffic.</li>
                    <li>Write irresistible ad copy that grabs attention and compels clicks.</li>
                    <li>Craft persuasive spells as wordsmiths with superpowers.</li>
                    <li>Track every click, conversion, and metric like a hawk.</li>
                    <li>Provide clear, actionable reports to reveal what's working and what needs tweaking.</li>
                    <li>Act as data detectives, uncovering insights that fuel campaign evolution.</li>
                    <li>Bring back potential customers with targeted ads reminding them of your awesomeness.</li>
                    <li>Act as memory joggers, gently nudging users back into the sales funnel.</li>
                    <li>Conquer platforms like Facebook, Instagram, and Twitter.</li>
                    <li>Craft engaging social media ads to build brand awareness and drive website traffic.</li>
                    <li>Act as social media superheroes, spreading your message like wildfire.</li>
                </ul>
            ),
            learnMoreText: 'Learn more about Pay-per-Click (PPC) Advertising...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2000&auto=format&fit=crop'
        }
    },
    {
        id: 'digital-marketing',
        title: 'Digital Marketing Services',
        content: {
            title: 'Digital Marketing Services',
            description: (
                <ul className="list-none space-y-2 text-sm sm:text-base">
                    <li>Crafting high-performing websites to captivate audiences and enhance user experience.</li>
                    <li>Boosting online visibility and rankings for easy discovery by potential customers.</li>
                    <li>Creating engaging content strategies to establish brand authority and storytelling.</li>
                    <li>Implementing strategic campaigns to connect with the target audience across platforms.</li>
                    <li>Executing personalized campaigns that nurture leads and foster customer loyalty.</li>
                    <li>Leveraging data to make informed decisions and optimize digital marketing efforts.</li>
                    <li>Tailoring strategies for mobile users, ensuring brand accessibility and engagement.</li>
                    <li>Building and maintaining a positive online image for credibility and trust.</li>
                    <li>Streamlining marketing processes, saving time, and increasing efficiency.</li>
                    <li>Creating captivating visuals to engage audiences and increase brand awareness.</li>
                </ul>
            ),
            learnMoreText: 'Learn more about Digital Marketing Services...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
        }
    },
    {
        id: 'social-ads',
        title: 'Social Media Advertising',
        content: {
            title: 'Social Media Advertising',
            description: (
                <ul className="list-none space-y-2 text-sm sm:text-base">
                    <li>Tailored ad campaigns for diverse social media platforms, ensuring each ad aligns with the platform's style and resonates with its audience.</li>
                    <li>Innovative ad concepts that capture attention and spark interest, creating compelling content to make your brand stand out.</li>
                    <li>Pinpointing the right audience through in-depth analysis of demographics, interests, and behaviors, ensuring your ads reach the most relevant viewers.</li>
                    <li>Active monitoring and optimization of live campaigns for enhanced performance, adapting strategies based on real-time results.</li>
                    <li>Reconnecting with potential customers who previously showed interest, gently nudging them to revisit and take the desired action.</li>
                    <li>Offering consultation and training to collaboratively plan an effective advertising strategy. Additionally, guidance and training available for those wanting to manage their social media ads independently.</li>
                </ul>
            ),
            learnMoreText: 'Learn more about Social Media Advertising...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: socialAdsBg
        }
    },
    {
        id: 'seo',
        title: 'Search Engine Optimization(SEO)',
        content: {
            title: 'Search Engine Optimization(SEO)',
            description: (
                <ul className="list-none space-y-2 text-sm sm:text-base">
                    <li>Identify words and phrases used by potential customers in online searches.</li>
                    <li>Optimize each webpage for search engines, providing a clear and user-friendly structure.</li>
                    <li>Enhance website popularity and trustworthiness across the internet through external validations.</li>
                    <li>Ensure website functionality, speed, mobile-friendliness, and easy interpretation by search engines.</li>
                    <li>Develop content that resonates with the audience and aligns with search engine algorithms.</li>
                    <li>Improve visibility in local searches, particularly beneficial for connecting with nearby customers.</li>
                    <li>Conduct comprehensive health checks on the website, addressing issues that hinder performance.</li>
                    <li>Study competitors to understand successful strategies and implement improvements.</li>
                    <li>Monitor search result positions and provide insights for ongoing enhancements.</li>
                    <li>Employ structured data to help search engines comprehend content more accurately.</li>
                    <li>Adjust content to cater to voice-activated devices, recognizing the shift in search behavior.</li>
                    <li>Tailor strategies specifically for online stores, ensuring products are easily discoverable by customers.</li>
                </ul>
            ),
            learnMoreText: 'Learn more about Search Engine Optimization(SEO)...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: seoBg
        }
    },
    {
        id: 'smo',
        title: 'Social Media Optimization (SMO)',
        content: {
            title: 'Social Media Optimization (SMO)',
            description: (
                <ul className="list-none space-y-2 text-sm sm:text-base">
                    <li>Tailoring social media profiles to reflect brand identity and attract audiences effectively.</li>
                    <li>Crafting engaging content for each platform to drive audience interaction and interest.</li>
                    <li>Proactive engagement with the audience to encourage discussions and responsiveness to inquiries/comments.</li>
                    <li>Connecting with influencers, related brands, and groups to cultivate a robust brand community.</li>
                    <li>Implementing strategic hashtags to enhance content discoverability and reach.</li>
                    <li>Creating targeted campaigns to maximize brand visibility and conversions.</li>
                    <li>Analyzing social media performance to continuously optimize strategies.</li>
                    <li>Utilizing monitoring tools to track mentions and sentiment, enabling proactive responses.</li>
                    <li>Collaborating with influencers and industry figures to expand brand credibility and reach.</li>
                    <li>Designing a comprehensive roadmap tailored to the brand's goals, audience, content, and ongoing optimization.</li>
                </ul>
            ),
            learnMoreText: 'Learn more about Social Media Optimization (SMO)...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: smoBg
        }
    },
    {
        id: 'analytics',
        title: 'Web & Social Analytics',
        content: {
            title: 'Web & Social Analytics',
            description: (
                <ul className="list-none space-y-2 text-sm sm:text-base">
                    <li><strong>Google Analytics:</strong> Tracks website visitors, behavior, and aids in site optimization.</li>
                    <li><strong>Adobe Analytics:</strong> Provides comprehensive insights into website performance and audience behavior.</li>
                    <li><strong>Social Media Monitoring Tools:</strong> Monitor, analyze, and engage with audiences across platforms.</li>
                    <li><strong>Shopify Analytics, WooCommerce Analytics:</strong> Tracks sales, customer behavior, and product insights in e-commerce settings.</li>
                    <li><strong>Google Analytics E-commerce Tracking:</strong> Enhances standard analytics with e-commerce-specific data.</li>
                    <li><strong>Brandwatch, Talkwalker:</strong> Analyzes public sentiment around brands or products through social media and online content.</li>
                    <li><strong>Chartbeat, Google Analytics Real-Time:</strong> Monitors website performance in real-time for immediate adjustments.</li>
                    <li><strong>Optimizely, VWO:</strong> Tests and optimizes website elements to maximize conversions and engagement.</li>
                    <li><strong>Similar Web, Alexa:</strong> Provides insights into competitors' strategies, demographics, and website traffic for refining one's own approach.</li>
                </ul>
            ),
            learnMoreText: 'Learn more about Web & Social Analytics...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
        }
    }
];

export function DigitalMarketingPage() {
    const [activeTab, setActiveTab] = useState(marketingServices[0].id);
    const activeService = marketingServices.find(s => s.id === activeTab) || marketingServices[0];

    return (
        <div className="bg-white min-h-screen relative">
            {/* Social Media Sidebar - Fixed Right */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1">
                <a href="#" className="bg-[#3b5998] p-2 text-white hover:w-12 w-10 transition-all duration-300 flex items-center justify-center overflow-hidden">
                    <Facebook size={20} />
                </a>
                <a href="#" className="bg-[#000000] p-2 text-white hover:w-12 w-10 transition-all duration-300 flex items-center justify-center overflow-hidden">
                    <Twitter size={20} />
                </a>
                <a href="#" className="bg-[#0077b5] p-2 text-white hover:w-12 w-10 transition-all duration-300 flex items-center justify-center overflow-hidden">
                    <Linkedin size={20} />
                </a>
                <a href="#" className="bg-[#d62976] p-2 text-white hover:w-12 w-10 transition-all duration-300 flex items-center justify-center overflow-hidden">
                    <Instagram size={20} />
                </a>
                <a href="#" className="bg-[#ff0000] p-2 text-white hover:w-12 w-10 transition-all duration-300 flex items-center justify-center overflow-hidden">
                    <Youtube size={20} />
                </a>
            </div>

            {/* Hero Section */}
            <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#facc15] mb-4 drop-shadow-lg font-serif">
                        Digital Marketing and Analytics
                    </h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto py-16 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {/* Left Column: Navigation Tabs */}
                    <div className="lg:col-span-1 flex flex-col gap-4 h-full">
                        {marketingServices.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveTab(service.id)}
                                className={cn(
                                    "w-full text-center px-6 py-4 rounded font-bold text-sm lg:text-base transition-all duration-200 flex-1 flex items-center justify-center",
                                    activeTab === service.id
                                        ? "bg-[#65d36e] text-white" // Green Active
                                        : "bg-[#ebb446] text-white hover:opacity-90" // Orange Inactive
                                )}
                            >
                                {service.title}
                            </button>
                        ))}
                    </div>

                    {/* Right Column: Active Service Content */}
                    <div className="lg:col-span-2 h-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="relative rounded-xl overflow-hidden min-h-[400px] h-full text-white p-8 md:p-12 flex flex-col justify-center"
                            >
                                {/* Background Image with Overlay */}
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={activeService.content.image}
                                        alt={activeService.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/70"></div>
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h2 className="text-3xl font-bold mb-4 text-white">{activeService.content.title}</h2>

                                    <div className="text-gray-200 mb-6 leading-relaxed">
                                        {activeService.content.description}
                                    </div>

                                    <a
                                        href={activeService.content.learnMoreLink}
                                        className="text-[#facc15] font-bold hover:underline mb-8 block text-sm"
                                    >
                                        {activeService.content.learnMoreText}
                                    </a>

                                    <div className="flex justify-center mt-6">
                                        <Button className="bg-[#facc15] hover:bg-[#eab308] text-black font-bold px-8 py-2 rounded-full">
                                            Access Our Solutions
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
