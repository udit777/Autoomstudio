import { Link } from 'react-router-dom';
import { Section } from '@/components/ui/Section';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const sections = [
    {
        title: "BLOG",
        icon: "https://images.unsplash.com/photo-1499750310159-52f0f837ce85?q=80&w=2073&auto=format&fit=crop",
        link: "/blog",
        desc: "Read our latest updates"
    },
    {
        title: "About Us",
        icon: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
        link: "/about",
        desc: "Meet the team"
    },
    {
        title: "Career",
        icon: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
        link: "/careers",
        desc: "Join our journey"
    }
];

export function MorePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="bg-[#004d4f] h-[40vh] min-h-[300px] flex items-center justify-center relative overflow-hidden">
                <div className="text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-normal text-white tracking-wide">More</h1>
                </div>
                {/* Social Sidebar (Fixed on right like in screenshot) */}
                <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-0 bg-transparent">
                    <a href="#" className="bg-[#3b5998] p-2 text-white hover:opacity-90 transition-opacity"><Facebook className="w-5 h-5" /></a>
                    <a href="#" className="bg-[#000000] p-2 text-white hover:opacity-90 transition-opacity"><Twitter className="w-5 h-5" /></a>
                    <a href="#" className="bg-[#0077b5] p-2 text-white hover:opacity-90 transition-opacity"><Linkedin className="w-5 h-5" /></a>
                    <a href="#" className="bg-[#E1306C] p-2 text-white hover:opacity-90 transition-opacity"><Instagram className="w-5 h-5" /></a>
                    <a href="#" className="bg-[#FF0000] p-2 text-white hover:opacity-90 transition-opacity"><Youtube className="w-5 h-5" /></a>
                </div>
            </div>

            {/* Content Section */}
            <Section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 max-w-5xl mx-auto">
                        {sections.map((item, idx) => (
                            <Link to={item.link} key={idx} className="group flex flex-col items-center">
                                {/* Square Container */}
                                <div className="w-64 h-64 bg-[#e6f4f1] rounded-none shadow-sm flex items-center justify-center p-8 transition-transform transform group-hover:-translate-y-2 duration-300 relative overflow-hidden">
                                    {/* This mimics the layout in the screenshot: Dark teal icon background or just the image */}
                                    {/* For now using the unsplash image, but filtering it to look 'graphic' */}
                                    <img src={item.icon} alt={item.title} className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500 mix-blend-multiply opacity-80" />

                                    {/* Overlay Circle/Graphic if needed */}
                                    <div className="absolute inset-0 bg-[#004d4f] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                </div>
                                <h3 className="mt-6 text-2xl font-bold text-[#004d4f] uppercase tracking-wider">{item.title}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}
