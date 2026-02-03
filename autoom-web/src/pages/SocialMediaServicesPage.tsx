import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

// Mock data for the social media services tabs
const socialServices = [
    {
        id: 'management',
        title: 'Social Media Management',
        content: {
            title: 'Social Media Management',
            points: [
                'We’re your timekeepers, ensuring posts hit the right times. Think of us as planners mapping out when and what to share on your social channels.',
                'Our aim is to strategize content delivery, ensuring your audience receives engaging and valuable posts regularly.',
                'We’re the communicators, actively engaging with your audience. From responding to comments and messages to sparking conversations, we’re there to build connections.',
                'Our goal is to create a friendly, interactive space, where your audience feels heard and valued.',
                'We’re the caretakers, ensuring your online presence stays lively and active. This means keeping your profiles updated, maintaining a regular posting schedule, and ensuring your brand message remains consistent.',
                'Our focus is on keeping your brand visible and engaging, so your audience doesn’t miss out on anything important.'
            ],
            learnMore: '/social-media-management-info',
            accessLink: '/social-media-management'
        }
    },
    {
        id: 'publishing',
        title: 'Social Media Publishing',
        content: {
            title: 'Social Media Publishing',
            points: [
                'We’re time wizards, knowing the perfect moments to share content. By studying audience behavior and platform analytics, we determine the ideal times when your audience is most active and engaged.',
                'Our goal is to ensure your posts reach the maximum number of eyeballs, increasing the chances of interaction and engagement.',
                'We’re content architects, crafting posts tailored to each platform’s nuances. Whether it’s a compelling image on Instagram, a thought-provoking tweet, or an informative video on YouTube, we customize content to fit each channel.',
                'Our aim is to consistently deliver content that your audience loves, ensuring they eagerly anticipate your posts. Our focus is on delivering content that resonates with your audience on every platform, maximizing impact and engagement.',
                'We’re audience experts, understanding what content types your audience prefers. By analyzing trends and feedback, we identify the content that generates the most interest and interaction.'
            ],
            learnMore: '/social-media-publishing-info',
            accessLink: '/social-media-publishing'
        }
    },
    {
        id: 'content-creation',
        title: 'Social Media Content Creation',
        content: {
            title: 'Social Media Content Creation',
            points: [
                'We’re detectives, diving deep to understand your audience’s preferences, interests, and behaviors. By knowing what they like, we tailor content that grabs their attention.',
                'We’re storytellers, using words, visuals, and videos to showcase your brand’s personality and values. Every post reflects your brand identity, reinforcing its essence.',
                'We’re visual artists, creating stunning visuals that captivate the scrolling eye. Whether it’s eye-catching graphics, captivating images, or engaging videos, we aim for content that stops the scroll.',
                'We’re emotion curators, crafting content that evokes feelings, whether it’s joy, curiosity, or inspiration. Emotional resonance strengthens the bond between your audience and your brand.',
                'We’re perfectionists, ensuring every piece of content maintains a high standard. Consistency in quality and style across posts reinforces your brand’s credibility and reliability.',
                'We’re conversation starters, encouraging dialogue and interaction through our content. Engaging posts prompt likes, comments, and shares, fostering a vibrant online community.'
            ],
            learnMore: '/social-media-content-creation-description-info',
            accessLink: '/social-media-content-creation'
        }
    },
    {
        id: 'analytics',
        title: 'Analytics and Reporting',
        content: {
            title: 'Analytics and Reporting',
            points: [
                'We’re data gatherers, collecting information on various metrics like engagement (likes, comments, shares), reach (how many people see your content), and conversion rates (actions taken, like purchases or sign-ups).',
                'We’re analysts, turning raw data into meaningful insights. By dissecting the numbers, we uncover trends, patterns, and areas of success or improvement.',
                'We’re strategists, using these insights to fine-tune your social media approach. If a particular type of post gets more engagement, we’ll do more of that. If a certain time sees higher reach, we’ll adjust our posting schedule.',
                'We’re evaluators, measuring the success of our strategies. Did a campaign lead to increased engagement or conversions? Did changing post types impact reach? These metrics guide future decisions.',
                'We’re advocates for progress, constantly learning and evolving. By regularly analyzing performance, we ensure our strategies adapt to trends and audience behavior.'
            ],
            learnMore: '/analytics-and-reporting-description-info',
            accessLink: '/analytics-and-reporting'
        }
    },
    {
        id: 'ai-interaction',
        title: 'AI-driven Customer Interaction',
        content: {
            title: 'AI-driven Customer Interaction',
            points: [
                'Leveraging advanced AI technology, we enhance customer interactions on your social platforms. This involves personalized responses, intelligent chat interactions, and a seamless customer experience tailored to individual preferences.',
                'We’re problem solvers, enabling AI to handle complex conversations. It understands context, learns from interactions, and offers intelligent responses, mimicking human-like conversations.',
                'We’re experience architects, ensuring smooth interactions. From initial queries to problem-solving, the AI provides a seamless journey, making it easy and convenient for customers to engage with your brand.',
                'We’re adaptability gurus, customizing interactions based on individual preferences. Whether it’s recommending products or providing assistance, the AI understands and adjusts to each customer’s preferences.',
                'We’re always available, 24/7. The AI doesn’t need breaks; it’s there round-the-clock to assist customers, ensuring prompt responses and support.'
            ],
            learnMore: '/ai-driven-customer-interaction-description-info',
            accessLink: '/al-driven-customer-interaction'
        }
    }
];

export function SocialMediaServicesPage() {
    const [activeTab, setActiveTab] = useState(socialServices[0].id);

    const activeService = socialServices.find(s => s.id === activeTab) || socialServices[0];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[#050511]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050511] to-transparent"></div>

                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl tracking-tight">
                        Social Media <span className="text-gray-400">Services</span>
                    </h1>
                </div>
            </div>

            {/* Content Section */}
            <Section className="py-20 bg-[#111111]"> {/* Dark background for the section */}
                <div className="container mx-auto">
                    {/* Grid Background Pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                        backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }}></div>

                    <div className="flex flex-col lg:flex-row gap-8 relative z-10 items-stretch">
                        {/* Left Column: Tabs */}
                        <div className="lg:w-1/4 flex flex-col gap-4">
                            {socialServices.map((service) => (
                                <button
                                    key={service.id}
                                    onClick={() => setActiveTab(service.id)}
                                    className={cn(
                                        "w-full text-center px-6 py-6 rounded-lg font-bold text-sm lg:text-base transition-all duration-300 transform shadow-md border-2 flex-1 flex items-center justify-center",
                                        activeTab === service.id
                                            ? "bg-[#4ade80] text-white border-[#4ade80] shadow-[0_0_15px_rgba(74,222,128,0.5)] scale-105" // Green Active
                                            : "bg-[#facc15] text-white border-[#facc15] hover:bg-[#eab308] hover:border-[#eab308]" // Orange Inactive
                                    )}
                                >
                                    {service.title}
                                </button>
                            ))}
                        </div>

                        {/* Right Column: Content */}
                        <div className="lg:w-3/4 flex">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-[#0f172a]/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-10 text-white w-full flex flex-col justify-between min-h-[500px]"
                                >
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">{activeService.content.title}</h3>

                                        <div className="space-y-4 text-gray-200 leading-relaxed text-lg">
                                            {activeService.content.points.map((point, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <span className="text-xl leading-none mt-1">➤</span> {/* Using Arrow Bullet as per image */}
                                                    <span>{point}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-6">
                                            <span className="text-[#facc15] font-semibold block mb-2 cursor-default">
                                                Learn more about {activeService.content.title}...
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-8 flex justify-center">
                                        <Button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold px-10 py-4 rounded-md text-lg">
                                            Access Our Solutions
                                        </Button>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
