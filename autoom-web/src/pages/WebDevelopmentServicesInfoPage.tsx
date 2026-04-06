import React, { useState, useRef, useEffect } from 'react';
import { ServicePopupForm } from '../components/ui/ServicePopupForm';
import { PlusCircle, MinusCircle } from 'lucide-react';

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

/* ─── Black Card for Core Services ─── */
function CoreServiceCard({ img, title, minH = 200 }: { img?: string; title: string; minH?: number }) {
    return (
        <FadeSection className="relative overflow-hidden group cursor-pointer rounded-2xl bg-[#111] shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-800" style={{ minHeight: minH }}>
            <div className="flex flex-col h-full relative z-10 p-2 pb-0">
                {img && (
                    <div className="w-full flex-1 overflow-hidden rounded-xl relative">
                        <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80" />
                    </div>
                )}
                <div className="p-4 flex items-center justify-center bg-[#111]">
                    <p className="text-white font-bold text-center text-sm tracking-wide">{title}</p>
                </div>
            </div>
        </FadeSection>
    );
}

/* ─── Web Dev FAQ Accordion ─── */
function WebFaqItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
    return (
        <div className="mb-2">
            <button 
                onClick={onClick}
                className={`w-full flex items-center justify-between px-6 py-4 text-left transition-colors duration-300 font-semibold text-sm ${isOpen ? 'bg-[#0b4b4b] text-white border-l-4 border-[#e47a2e]' : 'bg-[#0f4646] text-white hover:bg-[#0b4b4b]'}`}
            >
                <span>{question}</span>
                {isOpen ? <MinusCircle size={20} className="text-[#e47a2e] flex-shrink-0" /> : <PlusCircle size={20} className="text-[#e47a2e] flex-shrink-0" />}
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 bg-[#072a2a] ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-5 text-white/80 text-sm leading-relaxed border-l-4 border-transparent">
                    {answer}
                </div>
            </div>
        </div>
    )
}

export function WebDevelopmentServicesInfoPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState(0);

    const toggleFaq = (index: number) => {
        if (openFaqIndex === index) {
            setOpenFaqIndex(null);
        } else {
            setOpenFaqIndex(index);
        }
    };

    const workSteps = [
        {
            title: "Initial Consultation",
            text: "We kick off the process with a comprehensive consultation to understand your unique goals, preferences, and requirements. This involves discussions on your brand identity, target audience, and the specific functionalities you envision for your website.",
            img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Development & Implementation",
            text: "Our team begins bringing your vision to life, coding the frontend and backend architectures while ensuring optimal responsiveness and performance across all platforms.",
            img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Testing & Quality Assurance",
            text: "We rigorously test every component, hunting for bugs and resolving friction points to guarantee a smooth, flawless user experience before launch.",
            img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Client Review & Feedback",
            text: "We present the staging site for your review. Your feedback is meticulously implemented to ensure the final product perfectly aligns with your expectations.",
            img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Ongoing Support & Maintenance",
            text: "Post-launch, we provide continuous monitoring, security updates, and performance optimizations to keep your website running at peak efficiency.",
            img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop"
        }
    ];

    const faqs = [
        { q: "Q: What sets Autoom Studio apart from other web development service providers?", a: "We blend innovative design with robust engineering, ensuring your website is both visually stunning and technically flawless, all while keeping your specific business goals front and center." },
        { q: "Q: How do you ensure that my website is accessible on different devices?", a: "We use mobile-first responsive design methodologies to guarantee your site automatically adapts to screens of any size, from smartphones to large desktop monitors." },
        { q: "Q: Can I easily update and manage content on my website without technical expertise?", a: "Yes, we integrate user-friendly Content Management Systems (CMS) like WordPress or custom admin panels so you can manage your content with zero coding required." },
        { q: "Q: What security measures do you implement to protect my website and user data?", a: "We utilize SSL encryptions, secure authentications, regular vulnerability scans, and strict data compliance practices to secure your digital assets." },
        { q: "Q: How do you ensure my website ranks well on search engines?", a: "We build SEO-optimized architectures, ensure fast load times, and follow current best practices for metadata, structure, and accessibility from day one." },
        { q: "Q: Can you integrate my website with third-party services and applications?", a: "Absolutely. We routinely integrate CRMs, payment gateways, marketing tools, and custom APIs seamlessly into your web platform." },
        { q: "Q: How do you handle website performance and speed optimization?", a: "We optimize images, minify code, leverage browser caching, and use CDNs to drastically reduce page load times and improve performance scores." },
        { q: "Q: What steps do you take to ensure the scalability of the website as my business grows?", a: "Our architectures utilize flexible database designs and scalable cloud hosting configurations, allowing painless expansion as traffic and data requirements increase." },
        { q: "Q: Do you provide ongoing support and maintenance for websites?", a: "Yes, we offer comprehensive post-launch SLA packages covering routine updates, security patches, and on-call technical support." },
        { q: "Q: How can I get started with Autoom Studio's web development services?", a: "Simply reach out by clicking the 'Request a Demo' button, and our team will schedule an initial consultation to map out your digital journey." }
    ];

    return (
        <div className="min-h-screen font-sans pt-[57px] bg-[#fbf9f6] overflow-x-hidden">
            <ServicePopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

            {/* ══ HERO ══ */}
            <section className="relative overflow-hidden bg-[#0c0d10]" style={{ minHeight: 320 }}>
                {/* Dark background mechanics graphic placeholder */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
                
                <div className="relative z-10 container mx-auto px-6 max-w-[1300px] py-20 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 text-white">
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-5 text-white">Web Development Services</h1>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl font-light">
                            Empower your business with Autoom Studio's professional web development services, combining creativity and technical expertise to deliver exceptional digital experiences.
                        </p>
                    </div>

                    <div className="flex-shrink-0 w-[300px] lg:w-[450px]">
                        {/* Placeholder for the vector graphic shown in screenshot */}
                        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop" alt="Web Development" className="w-full object-contain rounded-xl opacity-80 mix-blend-screen" />
                    </div>
                </div>
            </section>

            {/* ══ OUR CORE SERVICES ══ */}
            <section className="py-16 bg-[#faf8f5]">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <h2 className="text-black text-3xl font-bold text-center mb-10">Our Core Services:</h2>

                    {/* Group 1: 1 large left, 2 right */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="md:col-span-2">
                            <CoreServiceCard minH={360} img="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop" title="Responsive Design" />
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex-1"><CoreServiceCard img="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop" title="Scripting Languages" /></div>
                            <div className="flex-1"><CoreServiceCard img="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop" title="Scalability" /></div>
                        </div>
                    </div>

                    {/* Explore stripe centered */}
                    <div className="flex items-center justify-center gap-4 py-4 my-2 z-20 relative">
                        <span className="text-black text-sm font-semibold">Learn more about our Services</span>
                        <button onClick={() => setIsPopupOpen(true)} className="bg-[#e47a2e] hover:bg-[#d06825] shadow-lg text-white text-xs font-bold px-8 py-2.5 rounded transition-transform hover:scale-105">Explore More</button>
                    </div>

                    {/* Group 2: 3 cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <CoreServiceCard minH={250} img="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" title="Cross-Browser Compatibility" />
                        <CoreServiceCard minH={250} img="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop" title="Security" />
                        <CoreServiceCard minH={250} img="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" title="Content Management System" />
                    </div>

                    {/* Group 3: 1 large left, 2 right */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="md:col-span-2">
                            <CoreServiceCard minH={360} img="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" title="Performance Optimization" />
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex-1"><CoreServiceCard img="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=600&auto=format&fit=crop" title="Search Engine Optimization" /></div>
                            <div className="flex-1"><CoreServiceCard img="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop" title="Scalable Architecture" /></div>
                        </div>
                    </div>

                    {/* Explore stripe centered */}
                    <div className="flex items-center justify-center gap-4 py-4 my-2 z-20 relative">
                        <span className="text-black text-sm font-semibold">Learn more about our Services</span>
                        <button onClick={() => setIsPopupOpen(true)} className="bg-[#e47a2e] hover:bg-[#d06825] shadow-lg text-white text-xs font-bold px-8 py-2.5 rounded transition-transform hover:scale-105">Explore More</button>
                    </div>

                    {/* Group 4: 3 cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <CoreServiceCard minH={250} img="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop" title="Accessibility" />
                        <CoreServiceCard minH={250} img="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&auto=format&fit=crop" title="Mobile App Integration" />
                        <CoreServiceCard minH={250} img="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" title="Testing and Quality Assurance" />
                    </div>
                </div>
            </section>

            {/* ══ HOW WE WORK ══ */}
            <section className="py-16 relative bg-[#825325]">
                {/* Triangular pattern overlay approx */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=2000&auto=format&fit=crop')] mix-blend-luminosity bg-cover" />
                
                <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
                    <h2 className="text-white text-3xl font-bold mb-8">How We Work</h2>

                    <div className="flex flex-col lg:flex-row gap-0 rounded-xl overflow-hidden shadow-2xl">
                        {/* Tabs Bar */}
                        <div className="lg:w-[350px] flex flex-col bg-[#e47a2e]/10">
                            {workSteps.map((step, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveTab(idx)}
                                    className={`py-6 px-6 font-semibold text-sm transition-colors text-center w-full border-b border-white/5 ${
                                        activeTab === idx 
                                        ? 'bg-[#5fd481] text-white shadow-md' 
                                        : 'bg-[#eab354] hover:bg-[#d9a349] text-white/90'
                                    }`}
                                >
                                    {step.title}
                                </button>
                            ))}
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 bg-[#0a0a0a] min-h-[400px] p-10 flex flex-col items-center justify-center relative overflow-hidden">
                            <div className="absolute right-0 bottom-0 top-0 opacity-10 w-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none" />
                            
                            <img src={workSteps[activeTab].img} alt={workSteps[activeTab].title} className="w-[300px] md:w-[400px] h-[220px] object-cover rounded shadow-2xl mb-8 border-2 border-white/10" />
                            
                            <p className="text-white/90 text-center text-sm md:text-base leading-relaxed max-w-3xl mb-8">
                                {workSteps[activeTab].text}
                            </p>

                            <button onClick={() => setIsPopupOpen(true)} className="bg-[#e47a2e] hover:bg-[#d06825] text-white text-xs font-bold px-8 py-2.5 rounded transition-transform hover:scale-105 shadow-xl">
                                Know More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ FAQ SECTION ══ */}
            <section className="bg-[#0b1a20] py-16">
                <div className="container mx-auto px-6 max-w-[1200px]">
                    <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-10">Web development services FAQ</h2>
                    
                    <div className="flex flex-col">
                        {faqs.map((faq, idx) => (
                            <WebFaqItem 
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

            {/* ══ WHY CHOOSE US ══ */}
            <section className="bg-[#d29b38] py-14">
                <div className="container mx-auto px-6 max-w-[1200px]">
                    <h2 className="text-black text-2xl font-bold mb-6">Why Choose Autoom Studio?</h2>
                    
                    <ul className="space-y-3 text-black/90 text-sm md:text-base leading-relaxed">
                        <li><span className="font-bold">Proven Experience:</span> We have many years of successful experience in web development.</li>
                        <li><span className="font-bold">Client-Centric Approach:</span> Your vision is our top priority; we work closely with you for tailored solutions.</li>
                        <li><span className="font-bold">Affordable Solutions:</span> Quality web development that fits your budget without compromising quality.</li>
                        <li><span className="font-bold">Innovative Growth Solutions:</span> Craft innovative and scalable solutions to contribute to your business growth.</li>
                        <li><span className="font-bold">Comprehensive Services:</span> Full suite of web development services covering design, security, optimization, and more.</li>
                        <li><span className="font-bold">Reliable Support and Maintenance:</span> Ongoing support to keep your digital assets secure, up-to-date, and performing optimally.</li>
                    </ul>
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
