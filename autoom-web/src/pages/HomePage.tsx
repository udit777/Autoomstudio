import { HomeHero } from '@/components/layout/HomeHero';
import { SuccessStories } from '@/components/layout/SuccessStories';
import { SpecialServices } from '@/components/layout/SpecialServices';
import { ServiceSection } from '@/components/layout/ServiceSection';
import { WhyWorkWithUs } from '@/components/layout/WhyWorkWithUs';
import { ReadyToCollaborate } from '@/components/layout/ReadyToCollaborate';
import { Industry4Section } from '@/components/layout/Industry4Section';


// Image Imports
import aiWorkspaceImg from '@/assets/ai-workspace.png';
import itInfraImg from '@/assets/it-infrastructure.png';
import softwareDevImg from '@/assets/software-development.png';
import socialMediaImg from '@/assets/social-media-office.png';
import cyberSecurityImg from '@/assets/cyber-security.png';
import communicationImg from '@/assets/communication.png';
import supportImg from '@/assets/support.png';

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

            {/* Digital Marketing and Analytics */}
            <ServiceSection
                title="Digital Marketing and Analytics"
                description="Revolutionize your online presence with Autoom Studio: 'The Best IT Automation Services near you.' Grow with Our Digital Marketing and Analytics expertise. As PPC campaign architects, we excel in laser-focused strategies, strategic bidding, and compelling ad copy. Our meticulous approach ensures optimal budget utilization and seamless user journeys, with detailed tracking and actionable reports."
                subServices={[
                    { title: "Pay-Per-Click (PPC) Advertising", gradient: "bg-gradient-to-br from-orange-500 to-red-600" },
                    { title: "Digital Marketing Services", gradient: "bg-gradient-to-br from-red-500 to-pink-600" },
                    { title: "Social Media Advertising", gradient: "bg-gradient-to-br from-pink-500 to-purple-600" },
                    { title: "Social Media Optimization", gradient: "bg-gradient-to-br from-purple-500 to-violet-600" },
                    { title: "Web and Social Analytics", gradient: "bg-gradient-to-br from-violet-500 to-indigo-600" },
                    { title: "Search Engine Optimization (SEO)", gradient: "bg-gradient-to-br from-indigo-500 to-blue-600" },
                ]}
                imageSrc={socialMediaImg}
                imageAlt="Digital Marketing and Analytics"
                reversed={true}
            />

            {/* Security and Compliances */}
            <ServiceSection
                title="Security and Compliances"
                description="Elevate your organization's security with Autoom Studio: 'The Best IT Automation Services near you.' With our cybersecurity services, We identify and eliminate vulnerabilities, safeguard network endpoints, and monitor infrastructure against cyber threats."
                subServices={[
                    { title: "Cyber Security Services", gradient: "bg-gradient-to-br from-cyan-700 to-teal-900" },
                    { title: "Data Backup and Recovery", gradient: "bg-gradient-to-br from-teal-700 to-cyan-900" },
                ]}
                imageSrc={cyberSecurityImg}
                imageAlt="Security and Compliances"
                reversed={false}
            />

            {/* Communication & Collaboration */}
            <ServiceSection
                title="Communication & Collaboration"
                description="Elevate collaboration with Autoom Studio: The Best IT Automation Services near you. Take Advantage of our IT Project Management, custom CMS development, and DevOps services. We optimize resource allocation, mitigate risks, and ensure seamless communication. From tailored CMS experiences to robust disaster recovery, we provide 24/7 support, fostering reliability and innovation in a concise package."
                subServices={[
                    { title: "IT Project Management", gradient: "bg-gradient-to-br from-emerald-600 to-teal-800" },
                    { title: "Content Management System (CMS) Development", gradient: "bg-gradient-to-br from-teal-600 to-emerald-800" },
                    { title: "DevOps Service", gradient: "bg-gradient-to-br from-cyan-600 to-teal-800" },
                ]}
                imageSrc={communicationImg}
                imageAlt="Communication & Collaboration"
                reversed={true}
            />

            {/* Support and Maintenance */}
            <ServiceSection
                title="Support and Maintenance"
                description="Elevate your digital experience with Autoom Studio's reliable Support and Maintenance, serving both businesses and individuals. Our comprehensive solutions encompass technical troubleshooting, password resets, installation and configuration guidance, and swift security incident response."
                subServices={[
                    { title: "IT Helpdesk and Support", gradient: "bg-gradient-to-br from-indigo-400 to-blue-600" },
                ]}
                imageSrc={supportImg}
                imageAlt="Support and Maintenance"
                reversed={false}
            />

            <Industry4Section />

            <SuccessStories />

            <WhyWorkWithUs />

            <ReadyToCollaborate />


        </>
    );
}
