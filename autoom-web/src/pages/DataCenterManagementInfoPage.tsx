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
            <h2 className="text-white text-xl md:text-2xl font-semibold">{title}</h2>
            <div className="mt-2 mx-auto w-full border-b border-white/20" />
        </div>
    );
}

/* ─── Dark image card helper ─── */
function DarkCard({ bg, title, desc, minH = 160 }: { bg: string; title: string; desc?: string; minH?: number }) {
    return (
        <FadeSection className="relative overflow-hidden group cursor-pointer" style={{ minHeight: minH }}>
            <img src={bg} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity transition-opacity group-hover:opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
            <div className="relative z-10 p-4 flex flex-col justify-end h-full" style={{ minHeight: minH }}>
                <p className="text-[#e47a2e] text-[10px] uppercase font-semibold tracking-widest mb-1">{title}</p>
                {desc && <p className="text-white/75 text-[10px] leading-relaxed">{desc}</p>}
            </div>
        </FadeSection>
    );
}

export function DataCenterManagementInfoPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsPopupOpen(true);
    };

    return (
        <div className="min-h-screen font-sans pt-[57px] overflow-x-hidden">
            <ServicePopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

            {/* ══ HERO ══ */}
            <section className="relative overflow-hidden bg-[#0f1117]" style={{ minHeight: 300 }}>
                <div className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2000&auto=format&fit=crop)' }} />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f1117] via-[#0f1117]/80 to-transparent" />
                <div className="relative z-10 container mx-auto px-6 max-w-[1400px] py-16 flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1 text-white">
                        <p className="text-[#e47a2e] text-xs font-semibold uppercase tracking-widest mb-3">Data Center Management</p>
                        <h1 className="text-2xl md:text-3xl font-bold leading-snug mb-4 text-white">Data Center Management Services</h1>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
                            Our Data Center Management Services provide comprehensive solutions to ensure the efficiency, security, and reliability of your data center operations. From infrastructure management to disaster recovery, we handle every aspect of your data center environment so you can focus on growing your business.
                        </p>
                    </div>
                    <div className="flex-shrink-0 w-60 h-52">
                        <img src="https://images.unsplash.com/photo-1558494949-ef526b01201b?q=80&w=600&auto=format&fit=crop"
                            alt="Data Center" className="w-full h-full object-cover rounded-xl opacity-70 mix-blend-screen" />
                    </div>
                </div>
            </section>

            {/* ══ DARK SECTIONS WRAPPER ══ */}
            <div className="bg-[#1a1a1a] py-14">
                <div className="container mx-auto px-6 max-w-[1400px] space-y-10">

                    {/* ── Data Management ── */}
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Large left */}
                            <DarkCard minH={240}
                                bg="https://images.unsplash.com/photo-1558494950-81c5b3d8f3ba?q=80&w=1200&auto=format&fit=crop"
                                title="Data Backup and Recovery"
                                desc="Protect your critical data with automated backup solutions and rapid recovery systems to minimise downtime in any disaster scenario." />
                            {/* Two stacked right */}
                            <div className="flex flex-col gap-4">
                                <DarkCard minH={112}
                                    bg="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=900&auto=format&fit=crop"
                                    title="Data Security"
                                    desc="Implement robust security protocols and encryption to safeguard your data against unauthorised access and cyber threats." />
                                <DarkCard minH={112}
                                    bg="https://images.unsplash.com/photo-1562577308-9e66f0c65ce5?q=80&w=900&auto=format&fit=crop"
                                    title="Data Migration"
                                    desc="Seamlessly transfer data between systems, platforms, or data centers with minimal disruption and maximum accuracy." />
                            </div>
                        </div>
                    </div>

                    {/* Explore stripe */}
                    <div className="flex items-center justify-center gap-4 py-2 bg-[#141414] rounded">
                        <span className="text-white/70 text-[11px]">Learn more about our Services</span>
                        <button onClick={() => setIsPopupOpen(true)} className="bg-[#e47a2e] hover:bg-[#d06825] text-white text-[10px] font-bold px-4 py-1.5 rounded transition-colors">Explore More</button>
                    </div>

                    {/* ── Facility Management ── */}
                    <div>
                        <SectionHeading title="Facility Management" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <DarkCard minH={180}
                                bg="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
                                title="Power Management"
                                desc="Optimize power usage and ensure uninterrupted supply with advanced UPS systems and energy-efficient solutions." />
                            <DarkCard minH={180}
                                bg="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=800&auto=format&fit=crop"
                                title="Cooling Management"
                                desc="Maintain optimal temperatures and prevent overheating with intelligent cooling systems tailored for high-density data centers." />
                            <DarkCard minH={180}
                                bg="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop"
                                title="Physical Security"
                                desc="Protect your infrastructure with multi-layered physical security including biometric access control and 24/7 surveillance." />
                        </div>
                    </div>

                    {/* ── Server Virtualization ── */}
                    <div>
                        <SectionHeading title="Server Virtualization and Consolidation" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <DarkCard minH={200}
                                bg="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=900&auto=format&fit=crop"
                                title="Virtualization Management"
                                desc="Supervise virtual (not physical) servers to make the best use of resources and improve flexibility." />
                            <DarkCard minH={200}
                                bg="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=900&auto=format&fit=crop"
                                title="Server Consolidation"
                                desc="Combine several physical servers into fewer, more powerful ones to save space and energy." />
                        </div>
                    </div>

                    {/* ── Monitoring and Reporting ── */}
                    <div>
                        <SectionHeading title="Monitoring and Reporting" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <DarkCard minH={200}
                                bg="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop"
                                title="Performance Monitoring"
                                desc="Track and analyse the performance of all data center components in real time to optimise efficiency and pre-empt failures." />
                            <div className="flex flex-col gap-4">
                                <DarkCard minH={94}
                                    bg="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop"
                                    title="Incident Monitoring"
                                    desc="Detect and respond to incidents rapidly with automated alerting and escalation workflows." />
                                <DarkCard minH={94}
                                    bg="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
                                    title="Reporting and Analysis"
                                    desc="Generate detailed capacity and performance reports to support strategic decision-making." />
                            </div>
                        </div>
                    </div>

                    {/* ── Automation & Compliance ── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Automation and Orchestration */}
                        <div>
                            <h3 className="text-white text-sm font-semibold text-center mb-3 border-b border-white/20 pb-2">Automation and Orchestration</h3>
                            <div className="grid grid-cols-2 gap-3">
                                <DarkCard minH={130}
                                    bg="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop"
                                    title="Automation"
                                    desc="Use automatic processes to make repetitive tasks quicker and more efficient." />
                                <DarkCard minH={130}
                                    bg="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop"
                                    title="Orchestration"
                                    desc="Coordinate different automatic processes to work seamlessly together." />
                            </div>
                        </div>
                        {/* Compliance and Risk Management */}
                        <div>
                            <h3 className="text-white text-sm font-semibold text-center mb-3 border-b border-white/20 pb-2">Compliance and Risk Management</h3>
                            <div className="grid grid-cols-2 gap-3">
                                <DarkCard minH={130}
                                    bg="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop"
                                    title="Compliance Monitoring"
                                    desc="Make sure the data center follows all the rules and standards of the industry." />
                                <DarkCard minH={130}
                                    bg="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop"
                                    title="Risk Management"
                                    desc="Identify and lessen potential problems for the data center, including security issues and compliance concerns." />
                            </div>
                        </div>
                    </div>

                    {/* ── Cloud Integration & Documentation ── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Cloud Integration */}
                        <div>
                            <h3 className="text-white text-sm font-semibold text-center mb-3 border-b border-white/20 pb-2">Cloud Integration</h3>
                            <div className="grid grid-cols-2 gap-3">
                                <DarkCard minH={130}
                                    bg="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop"
                                    title="Hybrid Cloud Management"
                                    desc="Combine and manage resources in both physical data centers and cloud environments." />
                                <DarkCard minH={130}
                                    bg="https://images.unsplash.com/photo-1562577308-9e66f0c65ce5?q=80&w=600&auto=format&fit=crop"
                                    title="Cloud Migration"
                                    desc="Plan and move data and tools to cloud platforms." />
                            </div>
                        </div>
                        {/* Documentation and Knowledge Management */}
                        <div>
                            <h3 className="text-white text-sm font-semibold text-center mb-3 border-b border-white/20 pb-2">Documentation and Knowledge Management</h3>
                            <div className="grid grid-cols-2 gap-3">
                                <DarkCard minH={130}
                                    bg="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop"
                                    title="Documentation"
                                    desc="Keep detailed records of how the data center is set up, its processes, and its procedures." />
                                <DarkCard minH={130}
                                    bg="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop"
                                    title="Knowledge Management"
                                    desc="Make sure that everyone working in the data center has the information and skills they need to do their jobs well." />
                            </div>
                        </div>
                    </div>

                    {/* Explore stripe 2 */}
                    <div className="flex items-center justify-center gap-4 py-2 bg-[#141414] rounded">
                        <span className="text-white/70 text-[11px]">Learn more about our Services</span>
                        <button onClick={() => setIsPopupOpen(true)} className="bg-[#e47a2e] hover:bg-[#d06825] text-white text-[10px] font-bold px-4 py-1.5 rounded transition-colors">Explore More</button>
                    </div>
                </div>
            </div>

            {/* ══ ADDITIONAL SERVICES ══ */}
            <section className="bg-[#1a1a1a] py-6 border-t border-white/10">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <p className="text-center text-white/50 text-[10px] uppercase tracking-widest mb-4">Additional Services</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            {
                                title: 'Disaster Recovery Planning',
                                desc: 'Safeguard your business against unforeseen events with our robust disaster recovery planning services.',
                                bg: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=600&auto=format&fit=crop',
                            },
                            {
                                title: 'Security Audits and Enhancements',
                                desc: 'Identify vulnerabilities and fortify your defenses through comprehensive security audits and enhancements.',
                                bg: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop',
                            },
                            {
                                title: '24/7 Technical Support',
                                desc: 'Rest easy knowing our expert team is available round-the-clock to address any issues and provide technical support.',
                                bg: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=600&auto=format&fit=crop',
                            },
                        ].map((s) => (
                            <FadeSection key={s.title} className="relative overflow-hidden group cursor-pointer border border-white/15 rounded" style={{ minHeight: 130 }}>
                                <img src={s.bg} alt={s.title} className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity" />
                                <div className="absolute inset-0 bg-black/50" />
                                <div className="relative z-10 p-5 flex flex-col justify-center h-full" style={{ minHeight: 130 }}>
                                    <p className="text-white font-bold text-[11px] mb-2">{s.title}</p>
                                    <p className="text-white/70 text-[10px] leading-relaxed">{s.desc}</p>
                                </div>
                            </FadeSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ WHY AUTOOM STUDIO ══ */}
            <section className="bg-[#1a1a1a] py-10">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-white font-bold text-base mb-5">Why Choose Autoom Studio</h2>
                            <ul className="space-y-3 text-sm leading-relaxed">
                                <li><span className="text-[#e47a2e] font-semibold">Proven Expertise:</span> <span className="text-white/80">With over two decades of experience, we bring unparalleled knowledge to optimize your data center operations.</span></li>
                                <li><span className="text-[#e47a2e] font-semibold">Tailored Solutions:</span> <span className="text-white/80">Our services are customized to meet the unique needs of your business, ensuring maximum efficiency and value.</span></li>
                                <li><span className="text-[#e47a2e] font-semibold">Cutting-edge Technology:</span> <span className="text-white/80">Stay ahead of the curve with our commitment to adopting and implementing the latest technological advancements.</span></li>
                                <li><span className="text-[#e47a2e] font-semibold">Reliable Support:</span> <span className="text-white/80">Our dedicated support team is ready to assist you 24/7, ensuring minimal downtime and maximum peace of mind.</span></li>
                            </ul>
                            <p className="text-white/60 text-xs mt-5 leading-relaxed">
                                Elevate your business with Autoom Studio – Your Trusted Partner in Data Center Management Services. Contact us today to embark on a journey of seamless, secure, and scalable digital infrastructure.
                            </p>
                        </div>
                        <div className="hidden md:block">
                            <img src="https://images.unsplash.com/photo-1521791055366-0d553872952f?q=80&w=800&auto=format&fit=crop"
                                alt="Team" className="w-full h-[260px] object-cover rounded-xl opacity-60 mix-blend-screen" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ FORM (optional lead-gen) ══ */}
            <section className="bg-gray-50 py-14">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <FadeSection>
                            <p className="text-xs text-gray-400 mb-4">* indicates required fields</p>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                                {['First Name', 'Last Name', 'Email', 'Phone Number'].map((placeholder, i) => (
                                    <input key={placeholder} type={i === 2 ? 'email' : i === 3 ? 'tel' : 'text'}
                                        placeholder={placeholder}
                                        value={i === 0 ? formData.firstName : i === 1 ? formData.lastName : i === 2 ? formData.email : formData.phone}
                                        onChange={e => {
                                            const val = e.target.value;
                                            setFormData(prev => i === 0 ? { ...prev, firstName: val } : i === 1 ? { ...prev, lastName: val } : i === 2 ? { ...prev, email: val } : { ...prev, phone: val });
                                        }}
                                        className="border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#e47a2e]" />
                                ))}
                                <button type="submit" className="bg-[#e47a2e] hover:bg-[#d06825] text-white font-bold py-2.5 rounded text-sm transition-colors mt-1">Submit</button>
                            </form>
                        </FadeSection>
                        <FadeSection>
                            <h3 className="font-bold text-lg text-gray-800 mb-4">Why Autoom Studio?</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3"><span className="font-semibold text-gray-800">Innovation:</span> We integrate intelligence and design for forward-thinking solutions.</p>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3"><span className="font-semibold text-gray-800">Customized Approach:</span> Tailored services to meet the unique needs of your business.</p>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3"><span className="font-semibold text-gray-800">Reliability:</span> Round-the-clock support and proactive management of your data center infrastructure.</p>
                            <p className="text-gray-600 text-sm leading-relaxed">Elevate your business with Autoom Studio. Partner with us for unparalleled Data Center Management Services. Contact us today to embark on a journey of digital excellence.</p>
                        </FadeSection>
                    </div>
                </div>
            </section>

            {/* ══ CTA ══ */}
            <section className="py-10 bg-gradient-to-r from-[#a8d08d] via-[#fffde7] to-[#a8d08d]">
                <div className="container mx-auto px-6 flex flex-col items-center gap-4">
                    <p className="text-gray-800 font-semibold text-sm">Ready to collaborate?</p>
                    <button onClick={() => setIsPopupOpen(true)}
                        className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold px-8 py-2 rounded-full text-sm transition-colors shadow">
                        Request a Demo
                    </button>
                </div>
            </section>
        </div>
    );
}
