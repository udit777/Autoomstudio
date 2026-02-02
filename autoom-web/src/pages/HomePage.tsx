import { HomeHero } from '@/components/layout/HomeHero';
import { SuccessStories } from '@/components/layout/SuccessStories';
import { SpecialServices } from '@/components/layout/SpecialServices';
import { ServiceSection } from '@/components/layout/ServiceSection';
import { WhyWorkWithUs } from '@/components/layout/WhyWorkWithUs';
import { ReadyToCollaborate } from '@/components/layout/ReadyToCollaborate';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, MessageCircle, MessageSquare } from 'lucide-react';

// Image Imports
import aiWorkspaceImg from '@/assets/ai-workspace.png';
import itInfraImg from '@/assets/it-infrastructure.png';
import softwareDevImg from '@/assets/software-development.png';
import socialMediaImg from '@/assets/social-media-office.png';

export function HomePage() {
    return (
        <>
            <HomeHero />

            <SpecialServices />

            {/* AI Workspace */}
            <ServiceSection
                title="AI Workspace"
                description="AuSomeMgr.com is your ultimate AI workspace, offering a full suite of intelligent agents designed to streamline and supercharge your professional tasks. Repeated activities and workflows for daily operations like research on the web, communication with customers, data analysis, task assignments, managing your social media presence, handling emails, creating and organizing documents, managing contacts, voice calling, and AI-assisted interviews—AuSomeMgr.com has a custom AI agent available for it."
                subServices={[
                    { title: "AI Social Media Agent", gradient: "bg-gradient-to-br from-purple-500 to-pink-600" },
                    { title: "AI Email Assistant Agent", gradient: "bg-gradient-to-br from-pink-500 to-rose-600" },
                    { title: "AI Enable CRM Agent", gradient: "bg-gradient-to-br from-rose-500 to-red-600" },
                    { title: "AI Voice Calling Agent", gradient: "bg-gradient-to-br from-fuchsia-500 to-purple-600" },
                ]}
                imageSrc={aiWorkspaceImg}
                imageAlt="AI Workspace Illustration"
                reversed={false}
            />

            {/* Social Media Services */}
            <ServiceSection
                title="Social Media Services"
                description="Elevate your brand's social media presence with Autoom Studio. Our comprehensive suite of services ensures timely and engaging posts that resonate with your audience. We serve as your dedicated social media managers, meticulously planning and executing content strategies."
                subServices={[
                    { title: "Social Media Management", gradient: "bg-gradient-to-br from-indigo-500 to-purple-600" },
                    { title: "Social Media Publishing", gradient: "bg-gradient-to-br from-purple-500 to-pink-600" },
                    { title: "Social Media Content Creation", gradient: "bg-gradient-to-br from-pink-500 to-rose-600" },
                    { title: "Analytics and Reporting", gradient: "bg-gradient-to-br from-rose-500 to-orange-600" },
                ]}
                imageSrc={socialMediaImg}
                imageAlt="Social Media Services Illustration"
                reversed={true}
            />

            {/* Process Automation Services */}
            <ServiceSection
                title="Process Automation Services"
                description="Enhance efficiency with Autoom Studio: The Best IT Automation Services near you. We streamline repetitive tasks, optimize workflows, and integrate solutions seamlessly. Redirect valuable time and resources to core functions with our automation, supported by scalable strategies for sustained excellence."
                subServices={[
                    { title: "Automation Tool Development", gradient: "bg-gradient-to-br from-teal-400 to-emerald-600" },
                    { title: "Repetitive Task Automation", gradient: "bg-gradient-to-br from-emerald-400 to-green-600" },
                    { title: "Sales Process Automation", gradient: "bg-gradient-to-br from-green-400 to-teal-600" },
                    { title: "Custom Bot Development", gradient: "bg-gradient-to-br from-teal-500 to-cyan-600" },
                ]}
                imageSrc={itInfraImg} // Placeholder
                imageAlt="Process Automation Illustration"
                reversed={false}
            />

            {/* IT Infrastructure Services */}
            <ServiceSection
                title="IT Infrastructure Services"
                description="Optimize your business with Autoom Studio's IT Infrastructure Management Services, ensuring peak performance from network monitoring to end-user support. Our Data Center Management guarantees data integrity and security, while Domain & Hosting Services offer hassle-free solutions for a robust online presence."
                subServices={[
                    { title: "IT Infrastructure Management", gradient: "bg-gradient-to-br from-orange-400 to-amber-600" },
                    { title: "Data Center Management", gradient: "bg-gradient-to-br from-amber-400 to-orange-600" },
                    { title: "Domain And Hosting Solution", gradient: "bg-gradient-to-br from-orange-500 to-red-600" },
                    { title: "Legacy System Modernization", gradient: "bg-gradient-to-br from-red-500 to-orange-600" },
                ]}
                imageSrc={itInfraImg}
                imageAlt="IT Infrastructure Illustration"
                reversed={true}
            />

            {/* Software Development Services */}
            <ServiceSection
                title="Software Development Services"
                description="Autoom Studio offers comprehensive software development services, including custom software, web and mobile app development, enterprise solutions, cloud-based solutions, integration, QA/testing, and ongoing support. Their expertise spans the entire development lifecycle, delivering innovative, high-quality solutions tailored to clients' needs."
                subServices={[
                    { title: "Web Development", gradient: "bg-gradient-to-br from-green-400 to-emerald-600" },
                    { title: "UI/UX Design Service", gradient: "bg-gradient-to-br from-emerald-400 to-teal-600" },
                    { title: "Custom Software Development", gradient: "bg-gradient-to-br from-teal-400 to-cyan-600" },
                    { title: "Mobile App Development", gradient: "bg-gradient-to-br from-cyan-400 to-blue-600" },
                ]}
                imageSrc={softwareDevImg}
                imageAlt="Software Development Illustration"
                reversed={false}
            />

            <SuccessStories />

            <WhyWorkWithUs />

            <ReadyToCollaborate />

            {/* Fixed Social Sidebar */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1">
                <a href="#" className="bg-[#3b5998] p-3 text-white hover:w-14 w-12 transition-all flex justify-center"><Facebook className="w-6 h-6" /></a>
                <a href="#" className="bg-black p-3 text-white hover:w-14 w-12 transition-all flex justify-center"><Twitter className="w-6 h-6" /></a>
                <a href="#" className="bg-[#0077b5] p-3 text-white hover:w-14 w-12 transition-all flex justify-center"><Linkedin className="w-6 h-6" /></a>
                <a href="#" className="bg-[#E1306C] p-3 text-white hover:w-14 w-12 transition-all flex justify-center"><Instagram className="w-6 h-6" /></a>
                <a href="#" className="bg-[#FF0000] p-3 text-white hover:w-14 w-12 transition-all flex justify-center"><Youtube className="w-6 h-6" /></a>
            </div>

            {/* Fixed Chat/Whatsapp Buttons (Bottom Right) */}
            <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-4">
                <a href="#" className="bg-[#25D366] p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform"><MessageCircle className="w-8 h-8" /></a>
                <a href="#" className="bg-[#8B5CF6] p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform"><MessageSquare className="w-8 h-8" /></a>
            </div>
        </>
    );
}
