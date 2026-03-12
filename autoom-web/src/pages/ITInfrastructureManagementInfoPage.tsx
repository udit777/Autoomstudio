import React, { useState, useEffect, useRef } from 'react';
import { ServicePopupForm } from '../components/ui/ServicePopupForm';

/* ─── tiny hook: fade-in on scroll ─── */
function useFadeIn() {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; } },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return ref;
}

function FadeSection({ children, className = '', style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
    const ref = useFadeIn();
    return (
        <div
            ref={ref}
            className={className}
            style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity 0.6s ease, transform 0.6s ease', ...style }}
        >
            {children}
        </div>
    );
}

const CORE_SERVICES = [
    {
        title: 'Network Management',
        desc: 'Achieve seamless connectivity and optimal performance through our expert network management services. We design, implement, and maintain networks with a focus on efficiency and security.',
        bg: 'https://images.unsplash.com/photo-1558494949-ef526b01201b?q=80&w=1200&auto=format&fit=crop',
        large: true,
    },
    {
        title: 'Server Management',
        desc: 'Maximize server efficiency and minimize downtime with our proactive server management solutions. Our team ensures your servers operate at peak performance, adapting to the evolving.',
        bg: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?q=80&w=900&auto=format&fit=crop',
    },
    {
        title: 'Data Storage Management',
        desc: 'Safeguard your critical data with our robust storage management services. From scalable solutions to data backup strategies, we protect your information assets with utmost diligence.',
        bg: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=900&auto=format&fit=crop',
    },
];

const CORE_SERVICES_ROW2 = [
    {
        title: 'Security Management',
        desc: 'Fortify your digital fortress with our cutting-edge security management services. From threat detection to incident response, we employ the latest technologies to keep your data secure.',
        bg: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    },
    {
        title: 'Cloud Services Management',
        desc: 'Embrace the future of computing with our expert cloud services management. We guide you through seamless cloud adoption, ensuring optimal utilization and cost-effectiveness.',
        bg: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop',
    },
    {
        title: 'End User Computing',
        desc: 'Elevate user experience and productivity with our end-user computing solutions. We create secure and efficient digital workspaces tailored to your organization\'s unique requirements.',
        bg: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=800&auto=format&fit=crop',
    },
];

const ADDITIONAL_SERVICES = [
    {
        title: 'Performance Optimization Services',
        bg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    },
    {
        title: 'AI and Machine Learning Integration',
        bg: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=800&auto=format&fit=crop',
    },
    {
        title: 'Mobile Device Management (MDM)',
        bg: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
    },
    {
        title: 'Collaboration and Communication Solutions',
        bg: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop',
    },
];

const EXTRA_SERVICES_ROW2 = [
    {
        title: 'IT Service Desk',
        desc: 'Experience unparalleled support through our IT service desk. Our dedicated team is ready 24/7 to address your queries and concerns, ensuring minimal disruption to your operations.',
        bg: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop',
    },
    {
        title: 'IT Infrastructure Monitoring',
        desc: 'Stay ahead of potential issues with our proactive infrastructure monitoring services. Real-time insights empower you to optimize performance and prevent downtime.',
        bg: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=900&auto=format&fit=crop',
    },
    {
        title: 'Disaster Recovery and Business Continuity',
        desc: 'Prepare for the unexpected with our robust disaster recovery and business continuity solutions. Minimize downtime and protect your business from unforeseen disruptions.',
        bg: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=900&auto=format&fit=crop',
    },
    {
        title: 'IT Governance and Compliance',
        desc: 'Navigate the complex landscape of IT governance and compliance effortlessly. Our services ensure that your IT practices align with industry standards and regulations.',
        bg: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=900&auto=format&fit=crop',
    },
];

const FAQS = [
    { q: 'WHAT IS IT MANAGEMENT ?', a: 'IT management involves overseeing an organization\'s IT systems, infrastructure, and assets to ensure they operate efficiently and align with business objectives.' },
    { q: 'ARE IT MANAGEMENT SERVICES DIFFERENT FROM BREAK/FIX SERVICES ?', a: 'Yes. IT management services are proactive—monitoring, maintaining, and optimizing your systems continuously—whereas break/fix is reactive, addressing issues only after they occur.' },
    { q: 'WHAT IS THE DIFFERENCE BETWEEN MANAGING IT IN-HOUSE VS. OUTSOURCED ?', a: 'In-house IT gives you direct control but requires significant investment. Outsourced IT management provides expert support and cost-efficiency by leveraging specialized teams.' },
    { q: 'HOW DO I KNOW IF OUTSOURCING IT MANAGEMENT IS FOR ME ?', a: "If you're spending too much time managing IT rather than your core business, or if downtime is a recurring issue, outsourcing IT management can be a smart and efficient choice." },
    { q: 'HOW MUCH DOES IT MANAGEMENT COST ?', a: 'Costs vary based on the size of your organization and the services needed. We offer flexible plans tailored to your specific requirements and budget.' },
    { q: 'CAN OUTSOURCING IT MANAGEMENT SAVE ME MONEY ?', a: 'Absolutely. By avoiding the cost of a full in-house IT team, reducing downtime, and benefiting from economies of scale, most businesses save significantly by outsourcing.' },
    { q: 'HOW DO I CHOOSE A MANAGED IT PROVIDER ?', a: 'Look for experience, breadth of services, responsiveness, and client testimonials. Autoom Studio offers all of these along with transparent pricing and dedicated support.' },
];

function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div
            className="border-b border-white/20 cursor-pointer"
            onClick={() => setOpen(!open)}
        >
            <div className="flex items-center justify-between py-3 px-4">
                <span className="text-white text-[11px] font-semibold tracking-wide">{q}</span>
                <span className={`text-[#e47a2e] text-lg font-bold transition-transform duration-300 ${open ? 'rotate-45' : 'rotate-0'}`}>✕</span>
            </div>
            {open && (
                <div className="px-4 pb-3">
                    <p className="text-white/80 text-[11px] leading-relaxed">{a}</p>
                </div>
            )}
        </div>
    );
}

export function ITInfrastructureManagementInfoPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsPopupOpen(true);
    };

    return (
        <div className="min-h-screen font-sans pt-[57px] overflow-x-hidden">
            <ServicePopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

            {/* ══ 1. HERO SECTION ══ */}
            <section className="relative overflow-hidden bg-[#0f1117]" style={{ minHeight: '320px' }}>
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558494949-ef526b01201b?q=80&w=2000&auto=format&fit=crop)', opacity: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f1117] via-[#0f1117]/80 to-transparent" />

                <div className="relative z-10 container mx-auto px-6 max-w-[1400px] py-16 flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1 text-white">
                        <p className="text-[#e47a2e] text-xs font-semibold uppercase tracking-widest mb-3">IT Infrastructure Management</p>
                        <h1 className="text-2xl md:text-3xl font-bold leading-snug mb-4 text-white">
                            IT Infrastructure Management Services
                        </h1>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
                            IT Infrastructure Management Service ensures smooth, secure digital operations. It oversees networks, servers, and data storage. This service optimizes user experiences, offers support, and maintains systems for efficiency. It's like having digital caretakers, ensuring a company's seamless and safe digital functioning.
                        </p>
                    </div>
                    <div className="flex-shrink-0 w-60 h-52 relative flex items-center justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop"
                            alt="IT Infrastructure"
                            className="w-full h-full object-cover rounded-xl opacity-70 mix-blend-screen"
                        />
                    </div>
                </div>
            </section>

            {/* ══ 2. OUR CORE SERVICES ══ */}
            <section className="bg-[#1a1a1a] py-14">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <h2 className="text-center text-white text-2xl font-bold mb-10">Our Core Services</h2>

                    {/* Row 1: 2 columns — large image left, 2 stacked right */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {/* Large card left */}
                        <FadeSection className="relative overflow-hidden group cursor-pointer" style={{ minHeight: '280px' }}>
                            <img src={CORE_SERVICES[0].bg} alt={CORE_SERVICES[0].title} className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity transition-opacity group-hover:opacity-30" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                            <div className="relative z-10 p-6 flex flex-col justify-end h-full" style={{ minHeight: '280px' }}>
                                <p className="text-[#e47a2e] text-[10px] uppercase font-semibold tracking-widest mb-1">{CORE_SERVICES[0].title}</p>
                                <p className="text-white/80 text-[11px] leading-relaxed">{CORE_SERVICES[0].desc}</p>
                            </div>
                        </FadeSection>

                        {/* Two stacked right */}
                        <div className="flex flex-col gap-4">
                            {CORE_SERVICES.slice(1).map((s) => (
                                <FadeSection key={s.title} className="relative overflow-hidden group cursor-pointer flex-1" style={{ minHeight: '130px' }}>
                                    <img src={s.bg} alt={s.title} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity transition-opacity group-hover:opacity-25" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                                    <div className="relative z-10 p-5 flex flex-col justify-end h-full" style={{ minHeight: '130px' }}>
                                        <p className="text-[#e47a2e] text-[10px] uppercase font-semibold tracking-widest mb-1">{s.title}</p>
                                        <p className="text-white/70 text-[10px] leading-relaxed">{s.desc}</p>
                                    </div>
                                </FadeSection>
                            ))}
                        </div>
                    </div>

                    {/* Learn more stripe */}
                    <div className="flex items-center justify-center gap-4 my-4 py-2 bg-[#141414] rounded">
                        <span className="text-white/70 text-[11px]">Learn more about our Services</span>
                        <button onClick={() => setIsPopupOpen(true)} className="bg-[#e47a2e] hover:bg-[#d06825] text-white text-[10px] font-bold px-4 py-1.5 rounded transition-colors">Explore More</button>
                    </div>

                    {/* Row 2: 3 even columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        {CORE_SERVICES_ROW2.map((s) => (
                            <FadeSection key={s.title} className="relative overflow-hidden group cursor-pointer" style={{ minHeight: '180px' }}>
                                <img src={s.bg} alt={s.title} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity transition-opacity group-hover:opacity-25" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                                <div className="relative z-10 p-5 flex flex-col justify-end h-full" style={{ minHeight: '180px' }}>
                                    <p className="text-[#e47a2e] text-[10px] uppercase font-semibold tracking-widest mb-1">{s.title}</p>
                                    <p className="text-white/70 text-[10px] leading-relaxed">{s.desc}</p>
                                </div>
                            </FadeSection>
                        ))}
                    </div>

                    {/* Learn more stripe 2 */}
                    <div className="flex items-center justify-center gap-4 my-4 py-2 bg-[#141414] rounded">
                        <span className="text-white/70 text-[11px]">Learn more about our Services</span>
                        <button onClick={() => setIsPopupOpen(true)} className="bg-[#e47a2e] hover:bg-[#d06825] text-white text-[10px] font-bold px-4 py-1.5 rounded transition-colors">Explore More</button>
                    </div>

                    {/* Row 3: IT Service Desk, IT Infra Monitor, DR, IT Governance */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        {EXTRA_SERVICES_ROW2.map((s) => (
                            <FadeSection key={s.title} className="relative overflow-hidden group cursor-pointer" style={{ minHeight: '160px' }}>
                                <img src={s.bg} alt={s.title} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity transition-opacity group-hover:opacity-25" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                                <div className="relative z-10 p-5 flex flex-col justify-end h-full" style={{ minHeight: '160px' }}>
                                    <p className="text-[#e47a2e] text-[10px] uppercase font-semibold tracking-widest mb-1">{s.title}</p>
                                    <p className="text-white/70 text-[10px] leading-relaxed">{s.desc}</p>
                                </div>
                            </FadeSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 3. ADDITIONAL SERVICES ══ */}
            <section className="bg-white py-12">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <h2 className="text-center text-black text-xl font-bold mb-8">Additional Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {ADDITIONAL_SERVICES.map((s) => (
                            <FadeSection key={s.title} className="relative overflow-hidden group cursor-pointer rounded-md shadow" style={{ minHeight: '160px' }}>
                                <img src={s.bg} alt={s.title} className="absolute inset-0 w-full h-full object-cover transition-opacity group-hover:opacity-70" />
                                <div className="absolute inset-0 bg-black/50" />
                                <div className="relative z-10 p-4 flex items-end h-full" style={{ minHeight: '160px' }}>
                                    <p className="text-white font-bold text-sm leading-snug">{s.title}</p>
                                </div>
                            </FadeSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 4. CONTACT FORM + WHY AUTOOM STUDIO ══ */}
            <section className="bg-gray-50 py-14">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left: Form */}
                        <FadeSection>
                            <p className="text-xs text-gray-400 mb-4">* indicates required fields</p>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                                    className="border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#e47a2e]"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                                    className="border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#e47a2e]"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    className="border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#e47a2e]"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    className="border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#e47a2e]"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#e47a2e] hover:bg-[#d06825] text-white font-bold py-2.5 rounded text-sm transition-colors mt-1"
                                >
                                    Submit
                                </button>
                            </form>
                        </FadeSection>

                        {/* Right: Why Autoom Studio */}
                        <FadeSection>
                            <h3 className="font-bold text-lg text-gray-800 mb-4">Why Autoom Studio?</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                <span className="font-semibold text-gray-800">Innovation:</span> We integrate intelligence and design for forward-thinking solutions.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                <span className="font-semibold text-gray-800">Customized Approach:</span> Tailored services to meet the unique needs of your business.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                <span className="font-semibold text-gray-800">Reliability:</span> Round-the-clock support and proactive management of your IT infrastructure.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Elevate your business with Autoom Studio. Partner with us for unparalleled IT Infrastructure Management Services. Contact us today to embark on a journey of digital excellence.
                            </p>
                        </FadeSection>
                    </div>
                </div>
            </section>

            {/* ══ 5. FAQS ══ */}
            <section className="py-10 bg-white">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <div className="bg-[#e47a2e] rounded-t-lg px-6 py-3">
                        <h2 className="text-white font-bold text-base">IT Management FAQs</h2>
                    </div>
                    <div className="bg-[#0a4a6e] rounded-b-lg">
                        {FAQS.map((faq) => (
                            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 6. CTA ══ */}
            <section className="py-10 bg-gradient-to-r from-[#a8d08d] via-[#fffde7] to-[#a8d08d]">
                <div className="container mx-auto px-6 flex flex-col items-center gap-4">
                    <p className="text-gray-800 font-semibold text-sm">Ready to collaborate?</p>
                    <button
                        onClick={() => setIsPopupOpen(true)}
                        className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold px-8 py-2 rounded-full text-sm transition-colors shadow"
                    >
                        Request a Demo
                    </button>
                </div>
            </section>
        </div>
    );
}
