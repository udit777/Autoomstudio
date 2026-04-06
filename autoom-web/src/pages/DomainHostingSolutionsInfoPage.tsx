import React, { useState, useEffect, useRef } from 'react';
import { ServicePopupForm } from '../components/ui/ServicePopupForm';

/* ─── fade-in on scroll hook ─── */
function useFadeIn() {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; } },
            { threshold: 0.08 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return ref;
}

function FadeSection({ children, className = '', style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
    const ref = useFadeIn();
    return (
        <div ref={ref} className={className}
            style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.65s ease, transform 0.65s ease', ...style }}>
            {children}
        </div>
    );
}

/* ─── Section heading (white, underlined) ─── */
function SectionHeading({ title }: { title: string }) {
    return (
        <div className="text-center mb-6">
            <h2 className="text-white text-3xl font-bold">{title}</h2>
        </div>
    );
}

/* ─── Dark image card helper ─── */
function DarkCard({ bg, title, desc, minH = 160 }: { bg: string; title: string; desc?: string; minH?: number }) {
    return (
        <FadeSection className="relative overflow-hidden group cursor-pointer border border-white/10" style={{ minHeight: minH }}>
            <img src={bg} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity transition-opacity group-hover:opacity-40 duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
            <div className="relative z-10 p-5 flex flex-col justify-end h-full" style={{ minHeight: minH }}>
                <p className="text-white font-semibold mb-2 flex items-center justify-center text-center">{title}</p>
                {desc && <p className="text-white/80 text-[11px] leading-relaxed text-center">{desc}</p>}
            </div>
        </FadeSection>
    );
}

export function DomainHostingSolutionsInfoPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Scalability');
    
    const tabs = [
        { id: 'Scalability', title: 'Scalability', content: 'Our solutions are built to expand alongside your business, ensuring they can easily adjust as your needs change. Think of it like having tools that can be reshaped and modified to match how your business grows. No matter how your needs shift, these solutions are ready to stay in sync and work well for you.' },
        { id: 'Reliability', title: 'Reliability', content: 'We guarantee 99.9% uptime for your domains and hosting services. Our robust infrastructure is designed to keep your online presence active around the clock, providing uninterrupted service to your customers.' },
        { id: 'Expertise', title: 'Expertise', content: 'Our team consists of industry veterans who understand the intricacies of domain management and hosting architecture. We apply best practices to ensure optimal performance.' },
        { id: 'Customization', title: 'Customization', content: 'Every business is unique, and so are your hosting needs. We offer flexible configurations allowing you to mold the environment identically to your specific operational requirements.' },
        { id: 'Integration', title: 'Integration', content: 'Our hosting environments smoothly integrate with third-party tools, content management systems, and other essential business applications, streamlining your workflows.' },
    ];

    return (
        <div className="min-h-screen font-sans pt-[57px] bg-black overflow-x-hidden">
            <ServicePopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

            {/* ══ HERO ══ */}
            <section className="relative overflow-hidden bg-[#0f1117] border-b border-white/5" style={{ minHeight: 300 }}>
                <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop)' }} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 max-w-[1400px] py-20 flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1 text-white pr-10">
                        <h1 className="text-2xl md:text-3xl font-light tracking-wide mb-6 text-white/90">Domain & Hosting Solutions</h1>
                        <p className="text-gray-300 text-sm leading-8 max-w-2xl font-light">
                            "Domain is your web address, like a home address for your site. Hosting is like renting space to store your website's files, making it accessible online. Together, they bring your website to life!"
                        </p>
                    </div>
                    {/* Hero Img */}
                    <div className="flex-shrink-0 w-80 h-48">
                        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" alt="Domain & Hosting" className="w-full h-full object-cover rounded-[20px] opacity-80 mix-blend-screen shadow-xl shadow-blue-500/10 border border-white/10" />
                    </div>
                </div>
            </section>

            {/* ══ DARK SECTIONS WRAPPER ══ */}
            <div className="py-14 bg-black">
                <div className="container mx-auto px-6 max-w-[1400px] space-y-10">
                    <SectionHeading title="Our Services" />

                    {/* Row 1: Domain Name Reg, Web Hosting */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <DarkCard minH={220} bg="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=900&auto=format&fit=crop" title="Domain Name Registration" desc="Secure your unique online identity effortlessly. Find and register the perfect domain name that resonates with your brand and captures your audience's attention. Our streamlined process ensures swift registration and hassle-free management." />
                        <DarkCard minH={220} bg="https://images.unsplash.com/photo-1558494949-ef526b01201b?q=80&w=900&auto=format&fit=crop" title="Web Hosting" desc="Experience reliable and scalable hosting solutions that guarantee optimal performance. From shared hosting ideal for starters to powerful dedicated servers for advanced needs, our hosting services are backed by 24/7 support and maximum uptime." />
                    </div>

                    {/* Row 2: Email Hosting, Website Builders, SSL Certificates */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <DarkCard minH={200} bg="https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?q=80&w=800&auto=format&fit=crop" title="Email Hosting" desc="Professional communication starts with personalized email hosting. Match your domain with professional email services that enhance your brand identity and streamline communication within your organization." />
                        <DarkCard minH={200} bg="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" title="Website Builders" desc="Create stunning websites without the need for extensive coding knowledge. Our intuitive website builders offer drag-and-drop functionality and customizable templates, empowering you to build your online presence with ease." />
                        <DarkCard minH={200} bg="https://images.unsplash.com/photo-1510511459019-5d01a742ce35?q=80&w=800&auto=format&fit=crop" title="SSL Certificates" desc="Gain your visitors' trust with robust security measures. Our SSL certificates encrypt data transmission, ensuring a secure connection between your website and your users, fostering confidence and credibility." />
                    </div>

                    {/* Explore stripe */}
                    <div className="flex items-center justify-center gap-4 py-4 rounded my-8">
                        <span className="text-white/90 text-sm font-semibold">Learn more about our Services</span>
                        <button onClick={() => setIsPopupOpen(true)} className="bg-[#e47a2e] hover:bg-[#d06825] text-white text-xs font-bold px-6 py-2.5 rounded transition-colors">Explore More</button>
                    </div>

                    {/* Row 3: Backup Services, Domain Transfer */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <DarkCard minH={220} bg="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=900&auto=format&fit=crop" title="Backup Services" desc="Protect your valuable data with automated backup solutions. Safeguard against unforeseen events or data loss, ensuring continuity and peace of mind for your business operations." />
                        <DarkCard minH={220} bg="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop" title="Domain Transfer and Management" desc="Effortlessly manage your domains and streamline transfers between registrars. Our management tools offer convenience and control over your domain settings and configurations." />
                    </div>

                    {/* Row 4: Server Management, E-commerce, Technical Support */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <DarkCard minH={200} bg="https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?q=80&w=800&auto=format&fit=crop" title="Server Management" desc="For advanced users and businesses, our server management services provide dedicated or virtual private servers with customizable configurations, offering greater control and performance optimization." />
                        <DarkCard minH={200} bg="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop" title="E-commerce Solutions" desc="Power your online store with specialized tools tailored for e-commerce. From seamless shopping carts to secure payment gateways, elevate your online business with our e-commerce solutions." />
                        <DarkCard minH={200} bg="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" title="Technical Support" desc="Our dedicated support team is available round the clock to assist you with any queries, technical issues, or guidance required throughout your journey with us." />
                    </div>
                </div>
            </div>

            {/* Additional Information Component (from UI screenshot) */}
            <section className="bg-[#2d2d2d] py-14 relative" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <div className="text-center mb-8">
                        <h2 className="text-white text-3xl font-bold">Additional Information</h2>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Tabs */}
                        <div className="w-full md:w-1/3 flex flex-col gap-3">
                            {tabs.map((tab) => (
                                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`py-4 px-6 rounded-[20px] font-semibold text-sm transition-colors text-center ${activeTab === tab.id ? 'bg-[#5fd481] text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                                    {tab.title}
                                </button>
                            ))}
                        </div>
                        {/* Content Box */}
                        <div className="w-full md:w-2/3 bg-[#0a151b] rounded-xl p-8 flex flex-col justify-center border border-white/5 relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-[#e47a2e]/5 rounded-bl-[100px]" />
                            {tabs.map((tab) => (
                                activeTab === tab.id && (
                                    <div key={tab.id} className="animate-in fade-in duration-500 relative z-10 flex flex-col items-center justify-center min-h-[160px]">
                                        <h3 className="text-[#e47a2e] text-lg font-bold mb-4">{tab.title}</h3>
                                        <p className="text-white/80 text-sm leading-relaxed mb-6 text-center max-w-2xl">
                                            {tab.content}
                                        </p>
                                        <button onClick={() => setIsPopupOpen(true)} className="bg-[#e47a2e] hover:bg-[#d06825] text-white text-[12px] font-bold px-6 py-2 rounded transition-colors">
                                            Explore More
                                        </button>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ Get Started Today! ══ */}
            <section className="bg-black py-12">
                <div className="container mx-auto px-6 max-w-[1200px] text-center">
                    <p className="text-white text-lg mb-4 tracking-wide font-light">Get Started Today!</p>
                    <p className="text-gray-300 text-sm leading-relaxed font-light">
                        Embark on your digital journey with confidence. Partner with Autoom Studio for unparalleled Domain & Hosting Solutions that empower your online success.<br />
                        Contact us now to explore how our services can elevate your online presence and propel your business forward.
                    </p>
                </div>
            </section>

            {/* ══ CTA gradient ══ */}
            <section className="py-14 bg-gradient-to-r from-[#1cb38a] to-[#d6eb56]">
                <div className="container mx-auto px-6 flex flex-col items-center gap-5">
                    <p className="text-white font-bold text-xl drop-shadow-md">Ready to collaborate?</p>
                    <button onClick={() => setIsPopupOpen(true)}
                        className="bg-transparent border-2 border-white text-white font-bold px-10 py-3 rounded hover:bg-white hover:text-[#1cb38a] transition-all shadow-lg text-sm">
                        Request a Demo
                    </button>
                </div>
            </section>
        </div>
    );
}
