import React, { useState, useRef, useEffect } from 'react';
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

/* ─── Box Card for UI UX Services ─── */
function OrangeBorderCard({ img, title, subtitle, desc, minH = 300 }: { img?: string; title: string; subtitle?: string; desc?: string; minH?: number }) {
    return (
        <FadeSection className="relative overflow-hidden group border-2 border-orange-500/80 bg-[#1c1c1c] transition-all hover:border-orange-400" style={{ minHeight: minH }}>
            <div className="flex flex-col h-full relative z-10">
                {img && (
                    <div className="w-full relative bg-black flex items-center justify-center overflow-hidden" style={{ height: '70%' }}>
                        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                )}
                <div className="p-4 flex flex-col justify-center bg-[#1c1c1c] text-center" style={{ height: '30%' }}>
                    <p className="text-[#e47a2e] font-bold text-sm md:text-base mb-1 tracking-wide">{title}</p>
                    {subtitle && <p className="text-white text-xs md:text-sm font-semibold">{subtitle}</p>}
                    {desc && <p className="text-gray-400 text-[10px] md:text-xs mt-1 leading-snug">{desc}</p>}
                </div>
            </div>
        </FadeSection>
    );
}

export function UIUXDesignServicesInfoPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div className="min-h-screen font-sans pt-[57px] bg-[#111] overflow-x-hidden">
            <ServicePopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

            {/* ══ HERO ══ */}
            <section className="relative overflow-hidden bg-[#0A1128] border-b border-white/5 py-16">
                {/* Background visual element placeholder */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop')] block mix-blend-color-dodge bg-center bg-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] to-transparent" />
                
                <div className="relative z-10 container mx-auto px-6 max-w-[1200px] text-center flex flex-col items-center gap-4">
                    <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-[#e47a2e]">UI/UX Design</h1>
                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-4xl">
                        UI/UX Design collaborate to craft digital products that are visually appealing and user-friendly. UI focuses on aesthetics and layout, while UX ensures intuitive interactions and experiences. Together, they create designs that delight users, combining beauty with functionality for seamless and enjoyable experiences.
                    </p>
                </div>
            </section>

            {/* ══ HOW WE WORK ══ */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6 max-w-[1200px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col justify-center">
                            <h2 className="text-black text-xl font-bold mb-8text-center md:text-left">How we Work</h2>
                            <div className="space-y-4 text-sm mt-6">
                                <p className="leading-relaxed">
                                    <span className="text-[#e47a2e] font-bold">Focus on Users:</span><span className="text-black/80 ml-1">Understanding user needs allows us to create captivating experiences that resonate with your audience.</span>
                                </p>
                                <p className="leading-relaxed">
                                    <span className="text-[#e47a2e] font-bold">Close Collaboration:</span><span className="text-black/80 ml-1">Combining your insights with our design expertise results in innovative and effective solutions.</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex-shrink-0">
                            <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop" alt="Working Together" className="w-full rounded-2xl shadow-2xl border-4 border-gray-100 object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ OUR SERVICES ══ */}
            <div className="py-14 bg-[#1b1c1c] bg-[length:40px_40px]" style={{ backgroundImage: 'linear-gradient(rgba(255,165,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,165,0,0.03) 1px, transparent 1px)' }}>
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <div className="flex items-center justify-center gap-4 mb-10">
                        <div className="h-[1px] bg-white/20 flex-1" />
                        <h2 className="text-white text-2xl font-bold px-4">Our Services</h2>
                        <div className="h-[1px] bg-white/20 flex-1" />
                    </div>

                    {/* Row 1: 2 large cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <OrangeBorderCard 
                            img="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop" 
                            title="UI Design" 
                            subtitle="Crafting Visual Appeal"
                            desc="We create visually stunning interfaces that reflect your brand identity and captivate users. Tool Expertise: Adobe XD, Figma, Sketch"
                        />
                        <OrangeBorderCard 
                            img="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1000&auto=format&fit=crop" 
                            title="UX Research" 
                            subtitle="Understanding User Needs"
                            desc="Thorough research to understand your audience, ensuring our designs align perfectly with user expectations. Tools & Techniques: User interviews, surveys, usability testing"
                        />
                    </div>

                    {/* Row 2: 3 cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <OrangeBorderCard 
                            minH={220}
                            img="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop" 
                            title="Prototyping" 
                            desc="Bringing ideas to life with interactive models for testing before building. Tools: InVision, Proto.io, Framer"
                        />
                        <OrangeBorderCard 
                            minH={220}
                            img="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop" 
                            title="Usability Testing" 
                            desc="Ensuring user-friendliness through rigorous testing. Techniques: A/B testing, heatmaps, user flow analysis"
                        />
                        <OrangeBorderCard 
                            minH={220}
                            img="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" 
                            title="Service Delivery Interface" 
                            desc="Creating user-friendly dashboards and interfaces for efficient services. Tools: Asana, Trello, Jira"
                        />
                    </div>

                    {/* Row 3: 2 large cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <OrangeBorderCard 
                            img="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1000&auto=format&fit=crop" 
                            title="Payment Collection UX" 
                            desc="Designing secure and user-friendly payment interfaces. Tools: Stripe, PayPal, Square"
                        />
                        <OrangeBorderCard 
                            img="https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1000&auto=format&fit=crop" 
                            title="Feedback Capture Systems" 
                            desc="Gathering actionable insights through user-friendly feedback systems. Tools: SurveyMonkey, Typeform, Google Forms"
                        />
                    </div>

                    {/* Explore stripe centered */}
                    <div className="flex items-center justify-center gap-4 py-4 my-2 z-20 relative">
                        <span className="text-white text-sm font-semibold">Learn more about our Services</span>
                        <button onClick={() => setIsPopupOpen(true)} className="bg-[#e47a2e] hover:bg-[#d06825] shadow-lg text-white text-xs font-bold px-8 py-2.5 rounded transition-transform hover:scale-105">Explore More</button>
                    </div>
                </div>
            </div>

            {/* ══ ADDITIONAL SERVICES ══ */}
            <section className="bg-white">
                <div className="bg-white py-4 text-center">
                    <h2 className="text-2xl font-bold text-black border-b-2 border-black inline-block pb-1 px-4">Additional Services</h2>
                </div>
                <div className="bg-[#0f1112] py-14 px-6 relative overflow-hidden text-xs md:text-sm text-gray-300 space-y-4">
                    {/* Dark gradient blur covering text */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop')] bg-cover mix-blend-screen pointer-events-none" />
                    
                    <div className="container mx-auto max-w-[1200px] relative z-10 space-y-3">
                        <p><span className="text-[#10b981] font-bold">Responsive Design:</span> We prioritize creating designs that function smoothly and appear visually appealing across phones, tablets, and computers. Through responsive design, our websites and apps adapt seamlessly to different screen sizes, ensuring a consistent user experience. We employ flexible layouts, scalable images, and intuitive navigation to enhance usability. Thorough testing across various devices ensures any issues are resolved, guaranteeing that our products are accessible and visually pleasing to all users, regardless of their device.</p>
                        <p><span className="text-[#10b981] font-bold">User Persona Development:</span> Imagine creating detailed descriptions of different types of people who might use your website or app. We figure out who they are, what they like, and how they might use what we make. This helps us design things that they'll love using.</p>
                        <p><span className="text-[#10b981] font-bold">UI/UX Audits:</span> We take a really close look at what you already have—your website or app. Then, we identify what's working really well and what could be improved. It's like a check-up for your digital stuff to make it better.</p>
                        <p><span className="text-[#10b981] font-bold">Brand Integration:</span> We make sure that the things we create for you match perfectly with your brand—your logo, colors, and style. So everything feels consistent and recognizable to your audience.</p>
                        <p><span className="text-[#10b981] font-bold">Accessibility Design:</span> We want everyone to be able to use what we make. So we design in a way that makes it easy for people with disabilities to navigate and understand, like using bigger text for those who have trouble seeing small writing.</p>
                        <p><span className="text-[#10b981] font-bold">Collaboration and Consultation:</span> We work closely with you and your team. We talk, share ideas, and make decisions together to create something awesome. It's like having a design partner by your side.</p>
                        <p><span className="text-[#10b981] font-bold">Training Workshops:</span> We teach you and your team how to do some of the design stuff yourselves. We share tips and tricks so you can keep making great things even after we're done working together.</p>
                        <p><span className="text-[#10b981] font-bold">Security:</span> "We promise to keep your information safe. Our team takes extra steps to make sure everything is secure and error-free. We follow the best security rules to keep your online and mobile apps safe. Our designers use special ways to make sure there are no worries about security."</p>
                        <p><span className="text-[#10b981] font-bold">24/7 Support:</span> "Our team of engineers is here for you, even after we finish making things. We're always around to help you out and answer any questions you have, whether it's during the work or even after everything is done."</p>
                    </div>
                </div>
            </section>

            {/* ══ LETS CREATE TOGETHER FORM ══ */}
            <section className="relative py-20 bg-black min-h-[400px]">
                {/* Background Image Setup */}
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop" alt="Team Work" className="w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
                </div>

                <div className="relative z-10 container mx-auto px-6 max-w-[1000px] text-center">
                    <h2 className="text-white text-3xl font-bold mb-3 tracking-wide">Let's Create Together!</h2>
                    <p className="text-white/80 text-sm mb-10">Ready to enhance your digital presence? Contact us to explore how our UI and UX design services can elevate your brand and delight your users.</p>
                    
                    <form className="max-w-4xl mx-auto flex flex-col gap-4 text-left">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Your Full Name*" className="bg-white/20 border border-white/30 rounded px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:border-white w-full text-sm backdrop-blur-sm" />
                            <input type="email" placeholder="Your Email*" className="bg-white/20 border border-white/30 rounded px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:border-white w-full text-sm backdrop-blur-sm" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <input type="text" placeholder="Contact No*" className="bg-white/20 border border-white/30 rounded px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:border-white w-full text-sm backdrop-blur-sm" />
                            <input type="text" placeholder="WhatsApp" className="bg-white/20 border border-white/30 rounded px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:border-white w-full text-sm backdrop-blur-sm" />
                            <input type="text" placeholder="Skype" className="bg-white/20 border border-white/30 rounded px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:border-white w-full text-sm backdrop-blur-sm" />
                        </div>
                        <input type="text" placeholder="Your Address / Location" className="bg-white/20 border border-white/30 rounded px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:border-white w-full text-sm backdrop-blur-sm" />
                        <textarea placeholder="Your Message*" rows={4} className="bg-white/20 border border-white/30 rounded px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:border-white w-full text-sm backdrop-blur-sm resize-none"></textarea>
                        
                        <div className="flex justify-end mt-2">
                            <button type="button" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-2.5 rounded shadow-lg transition-transform hover:scale-105 text-sm">
                                Send
                            </button>
                        </div>
                    </form>
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
