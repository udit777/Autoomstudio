import React, { useState, useRef, useEffect } from 'react';
import { ServicePopupForm } from '../components/ui/ServicePopupForm';
import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

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

function SectionHeading({ title }: { title: string }) {
    return (
        <div className="text-center mb-8">
            <h2 className="text-white text-3xl font-bold">{title}</h2>
        </div>
    );
}

/* ─── Teal Service Card ─── */
function TealCard({ img, title, minH = 200 }: { img?: string; title: string; minH?: number }) {
    return (
        <FadeSection className="relative overflow-hidden group cursor-pointer border border-[#1cb38a]/30 rounded-xl bg-[#0d8768] hover:bg-[#0f9f7a] transition-all duration-300 shadow-lg" style={{ minHeight: minH }}>
            {/* Inner background wave or pattern placeholder */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
            
            <div className="flex flex-col h-full relative z-10">
                {img && (
                    <div className="w-full h-3/5 overflow-hidden">
                        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                )}
                <div className="flex-1 p-4 flex items-center justify-center">
                    <p className="text-white font-bold text-center text-[13px] tracking-wide">{title}</p>
                </div>
            </div>
        </FadeSection>
    );
}

/* ─── FAQ Accordion ─── */
function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
    return (
        <div className="mb-3">
            <button 
                onClick={onClick}
                className={`w-full flex items-center justify-between px-6 py-3 rounded-lg text-left transition-colors duration-300 font-semibold text-sm ${isOpen ? 'bg-[#d26c22] text-white border-2 border-[#e47a2e]' : 'bg-[#e47a2e] text-white hover:bg-[#d26c22]'}`}
            >
                <span>{question}</span>
                {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-white/80 text-sm leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    )
}

export function LegacySystemModernizationInfoPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        if (openFaqIndex === index) {
            setOpenFaqIndex(null);
        } else {
            setOpenFaqIndex(index);
        }
    };

    const faqs = [
        { q: "Q: Why should we modernize our legacy systems?", a: "Modernizing legacy systems improves efficiency, reduces maintenance costs, mitigates security risks, and better supports scalable business growth." },
        { q: "Q: How disruptive is the modernization process?", a: "We employ phased, parallel, or microservices-based approaches to ensure zero or minimal disruption during the transition." },
        { q: "Q: What are the benefits of moving to the cloud?", a: "Cloud migration offers enhanced scalability, flexible computing resources, disaster recovery solutions, and overall cost reduction." },
        { q: "Q: Will our data be secure during and after modernization?", a: "Absolutely. We implement stringent encryption, compliance checks, and secure pipelines to ensure your data's integrity at all times." },
        { q: "Q: How will the modernization impact existing workflows?", a: "Modernization streamlines and automates workflows, reducing manual bottlenecks while retaining core business logic." },
        { q: "Q: What is the expected timeline for the modernization project?", a: "Timelines vary based on complexity, but a typical phased rollout ranges from a few months to a year." },
        { q: "Q: Can we retain our existing software and integrate it with modern solutions?", a: "Yes, through API bridges and microservices, we can build hybrid environments that integrate old software with new ecosystems." },
        { q: "Q: How do you ensure minimal disruption to daily operations?", a: "We utilize rigorous testing, staging environments, and blue-green deployments to keep operations running smoothly without downtime." },
        { q: "Q: What ongoing support and maintenance do you provide post-modernization?", a: "We offer comprehensive SLA-backed 24/7 support, continuous monitoring, and optimization patches." },
        { q: "Q: How can we measure the success of the modernization effort?", a: "Success is measured through KPI tracking, processing speed improvements, reduced support tickets, and direct ROI metrics." },
    ];

    const benefits = [
        { title: "Proven Expertise", desc: "Benefit from years of experience crafting architectures across diverse industries." },
        { title: "Business-Driven Solutions", desc: "Aligning technology with your business goals for sustainable growth." },
        { title: "Scalability and Security", desc: "Ensure systems that scale seamlessly and prioritize robust security measures." },
        { title: "Cost-Effective Optimization", desc: "Strive for efficiency without compromising performance for optimal cost savings." },
        { title: "Technology Agnostic", desc: "Selecting the best-fit technologies for flexibility and adaptability." },
        { title: "Collaborative Approach", desc: "Work closely with stakeholders for transparent, inclusive, and effective solutions." },
        { title: "Continuous Improvement", desc: "Designing architectures adaptable to emerging technologies for future proofing." },
    ];

    return (
        <div className="min-h-screen font-sans pt-[57px] bg-[#1a1c1d] overflow-x-hidden">
            <ServicePopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

            {/* ══ HERO ══ */}
            <section className="relative overflow-hidden bg-[#0a110e]" style={{ minHeight: 320 }}>
                {/* Custom dark green polygon pattern as background placeholder */}
                <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a110e]/90 via-[#0a110e]/70 to-[#0a110e]/40" />
                
                <div className="relative z-10 container mx-auto px-6 max-w-[1400px] py-16 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 text-white">
                        <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-3 text-white/90">Legacy System Modernization Services</h1>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-xl font-light mb-6">
                            Our <span className="font-bold">Legacy System Modernization Catalog</span> outlines our comprehensive suite of services designed to <span className="font-bold">unlock the full potential</span> of your IT infrastructure.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium">
                            <div className="flex items-center gap-2"><CheckCircle2 className="text-[#e47a2e]" size={18} /> Business Alignment</div>
                            <div className="flex items-center gap-2"><CheckCircle2 className="text-[#e47a2e]" size={18} /> Scalability Focus</div>
                            <div className="flex items-center gap-2"><CheckCircle2 className="text-[#e47a2e]" size={18} /> Security Compliance</div>
                            <div className="flex items-center gap-2"><CheckCircle2 className="text-[#e47a2e]" size={18} /> User-Centric Design</div>
                        </div>
                    </div>

                    <div className="flex-shrink-0 w-80 lg:w-[450px]">
                        <img src="https://images.unsplash.com/photo-1531297172867-4f51fb86ea52?q=80&w=600&auto=format&fit=crop" alt="Computers Evolution" className="w-full rounded-2xl shadow-2xl border-4 border-white object-cover" />
                    </div>
                </div>
            </section>

            {/* ══ OUR SERVICES (Teal grid) ══ */}
            <div className="py-14 bg-[#1e2022] bg-[length:30px_30px]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)' }}>
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <SectionHeading title="Our Services" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                        <div className="md:col-span-2">
                            <TealCard minH={320} img="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=900&auto=format&fit=crop" title="Cloud Migration & Architecture" />
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="flex-1"><TealCard img="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop" title="Application Modernization" /></div>
                            <div className="flex-1"><TealCard img="https://images.unsplash.com/photo-1558494949-ef526b01201b?q=80&w=500&auto=format&fit=crop" title="Data Integration and Modernization" /></div>
                        </div>
                    </div>

                    {/* Explore stripe */}
                    <div className="flex items-center justify-center gap-4 py-2 my-2 z-20 relative">
                        <button onClick={() => setIsPopupOpen(true)} className="bg-[#e47a2e] hover:bg-[#d06825] shadow-lg text-white text-xs font-bold px-8 py-2.5 rounded transition-transform hover:scale-105">Explore More</button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <TealCard minH={240} img="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop" title="API Integration" />
                        <TealCard minH={240} img="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=600&auto=format&fit=crop" title="Security and Compliance" />
                        <TealCard minH={240} img="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" title="Performance Optimization" />
                    </div>
                </div>
            </div>

            {/* ══ WHY CHOOSE US ══ */}
            <section className="bg-[#0b241e] relative overflow-hidden py-16">
                {/* Curved background shape approx */}
                <div className="absolute top-0 right-0 w-3/4 h-full bg-[#18392f] rounded-l-full mix-blend-screen opacity-50 block md:hidden pointer-events-none" />
                <div className="absolute top-0 right-0 w-3/4 h-full bg-[#204938] rounded-l-[1200px] block pointer-events-none" />

                <div className="relative z-10 container mx-auto px-6 max-w-[1400px]">
                    <SectionHeading title="Why Choose Us?" />

                    <div className="flex flex-col md:flex-row items-center gap-12 mt-10">
                        <div className="flex-shrink-0 w-full md:w-[400px]">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" alt="Team" className="w-full rounded-lg shadow-xl" />
                        </div>
                        <div className="flex-1 space-y-4 text-white text-sm">
                            {benefits.map((b) => (
                                <p key={b.title} className="leading-snug">
                                    <span className="font-bold">{b.title}:</span> <span className="text-white/80">{b.desc}</span>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ FAQ SECTION ══ */}
            <section className="bg-[#0b241e] py-16 border-t border-white/5 relative">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop')] block mix-blend-color-dodge pointer-events-none" />
                
                <div className="relative z-10 container mx-auto px-6 max-w-[1200px]">
                    <SectionHeading title="Frequently Asked Questions" />
                    
                    <div className="max-w-4xl mx-auto flex flex-col gap-2 mt-8">
                        {faqs.map((faq, idx) => (
                            <FAQItem 
                                key={idx} 
                                question={faq.q} 
                                answer={faq.a} 
                                isOpen={openFaqIndex === idx} 
                                onClick={() => toggleFaq(idx)} 
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ Get Started Today! ══ */}
            <section className="bg-black py-12">
                <div className="container mx-auto px-6 max-w-[1200px] text-center">
                    <p className="text-white text-lg mb-4 tracking-wide font-light">Get Started Today!</p>
                    <p className="text-gray-300 text-sm leading-relaxed font-light">
                        Embark on your digital journey with confidence. Partner with Autoom Studio for unparalleled Legacy System Modernization Solutions that empower your online success.<br />
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
