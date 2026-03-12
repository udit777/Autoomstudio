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
            { threshold: 0.12 }
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
            style={{ opacity: 0, transform: 'translateY(32px)', transition: 'opacity 0.7s ease, transform 0.7s ease', ...style }}
        >
            {children}
        </div>
    );
}

export function AiInteractionInfoPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div className="min-h-screen font-sans pt-[57px] overflow-x-hidden">
            <ServicePopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

            {/* ══ 1. HERO SECTION ══ */}
            <section className="relative pt-24 pb-16 flex flex-col items-center justify-center text-center bg-[#151319]">
                {/* Background image overlay of tech helmet/robot */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#151319] to-transparent"></div>

                <FadeSection className="relative z-10 container mx-auto px-6 max-w-5xl text-white">
                    <h1 className="text-3xl md:text-[42px] font-bold mb-3 tracking-tight text-white drop-shadow-md">AI Driven Customer Interaction Service</h1>
                    <h2 className="text-[13px] md:text-sm font-bold mb-6 text-white tracking-widest uppercase drop-shadow">Unlocking the Future of Customer Interaction with AI Excellence</h2>
                </FadeSection>
            </section>

            {/* ══ 2. OUR SERVICES (BASIC) ══ */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <h2 className="text-center text-black text-2xl font-normal mb-2">Our Services</h2>
                    <p className="text-center text-gray-500 text-[10px] mb-8 uppercase tracking-widest">Basic Services</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card 1 */}
                        <FadeSection className="bg-white border text-center p-3 rounded-lg shadow-sm">
                            <div className="h-[180px] w-full overflow-hidden mb-4 rounded-md">
                                <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop" alt="Automated Responses" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="font-bold text-black text-xs mb-3">Automated Responses</h3>
                            <p className="text-gray-500 text-[9px] leading-relaxed mx-auto max-w-[95%]">Elevate your responsiveness with AI-driven chatbots and automated email systems. Instantly address customer queries, providing real-time solutions 24/7.</p>
                        </FadeSection>

                        {/* Card 2 */}
                        <FadeSection className="bg-white border text-center p-3 rounded-lg shadow-sm">
                            <div className="h-[180px] w-full overflow-hidden mb-4 rounded-md bg-gray-50">
                                <img src="https://img.freepik.com/free-vector/shopping-online-isometric-concept_1284-36070.jpg?w=800" alt="Personalized Recommendations" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="font-bold text-black text-xs mb-3">Personalized Recommendations</h3>
                            <p className="text-gray-500 text-[9px] leading-relaxed mx-auto max-w-[95%]">Tailor your customer's journey with personalized product and service suggestions based on their unique preferences and behavior.</p>
                        </FadeSection>

                        {/* Card 3 */}
                        <FadeSection className="bg-white border text-center p-3 rounded-lg shadow-sm">
                            <div className="h-[180px] w-full overflow-hidden mb-4 rounded-md bg-gray-50">
                                <img src="https://img.freepik.com/free-vector/scheduling-agenda-business-concept_107791-380.jpg?w=800" alt="Appointment Scheduling" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="font-bold text-black text-xs mb-3">Appointment Scheduling</h3>
                            <p className="text-gray-500 text-[9px] leading-relaxed mx-auto max-w-[95%]">Simplify appointment management with intelligent schedules powered by AI, ensuring a seamless booking experience.</p>
                        </FadeSection>

                        {/* Card 4 */}
                        <FadeSection className="bg-white border text-center p-3 rounded-lg shadow-sm">
                            <div className="h-[180px] w-full overflow-hidden mb-4 rounded-md bg-[#eaf3f9]">
                                <img src="https://img.freepik.com/free-vector/data-concept-illustration_114360-843.jpg?w=800" alt="Information Retrieval" className="w-full h-full object-contain mix-blend-multiply" />
                            </div>
                            <h3 className="font-bold text-black text-xs mb-3">Information Retrieval</h3>
                            <p className="text-gray-500 text-[9px] leading-relaxed mx-auto max-w-[95%]">Access information effortlessly with our AI-driven knowledge base integration. Find what you need, when you need it.</p>
                        </FadeSection>
                    </div>
                </div>
            </section>

            {/* ══ 3. OUR SERVICES (ADVANCED) ══ */}
            <section className="py-8 bg-white pb-16">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <p className="text-center text-gray-500 text-[10px] mb-8 uppercase tracking-widest">Advanced Services</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Predictive Analytics */}
                        <FadeSection className="bg-white border text-center p-3 rounded-lg shadow-sm group cursor-pointer">
                            <h3 className="font-bold text-black text-xs mb-3 mt-1">Predictive Analytics</h3>
                            <div className="relative h-[180px] w-full overflow-hidden border rounded-md bg-[#f9fafb] flex items-center justify-center p-2">
                                <img src="/images/ai_predictive.png" alt="Predictive Analytics" className="w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0" />
                                <div className="absolute inset-0 bg-[#e47a2e] flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-[11px] leading-relaxed font-medium">
                                        Stay ahead of customer needs by leveraging predictive analytics and historical data to anticipate and fulfill their expectations.
                                    </p>
                                </div>
                            </div>
                        </FadeSection>

                        {/* NLP */}
                        <FadeSection className="bg-white border text-center p-3 rounded-lg shadow-sm group cursor-pointer">
                            <h3 className="font-bold text-black text-xs mb-3 mt-1">Natural Language Processing (NLP)</h3>
                            <div className="relative h-[180px] w-full overflow-hidden border rounded-md bg-[#0a1841] flex items-center justify-center">
                                <img src="/images/ai_nlp.png" alt="NLP" className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" />
                                <div className="absolute inset-0 bg-[#e47a2e] flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-[11px] leading-relaxed font-medium">
                                        Experience next-level communication with chatbots that understand and respond to complex user queries naturally.
                                    </p>
                                </div>
                            </div>
                        </FadeSection>

                        {/* Voice Assistants */}
                        <FadeSection className="bg-white border text-center p-3 rounded-lg shadow-sm group cursor-pointer">
                            <h3 className="font-bold text-black text-xs mb-3 mt-1">Voice Assistants</h3>
                            <div className="relative h-[180px] w-full overflow-hidden border rounded-md bg-white flex items-center justify-center p-2">
                                <img src="/images/ai_voice.png" alt="Voice Assistants" className="w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0" />
                                <div className="absolute inset-0 bg-[#e47a2e] flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-[11px] leading-relaxed font-medium">
                                        Engage with our systems effortlessly using voice commands, providing a hands-free and intuitive user experience.
                                    </p>
                                </div>
                            </div>
                        </FadeSection>

                        {/* Sentiment Analysis */}
                        <FadeSection className="bg-white border text-center p-3 rounded-lg shadow-sm group cursor-pointer">
                            <h3 className="font-bold text-black text-xs mb-3 mt-1">Sentiment Analysis</h3>
                            <div className="relative h-[180px] w-full overflow-hidden border rounded-md flex items-center justify-center bg-[#dbf5f0]">
                                <img src="/images/ai_sentiment.png" alt="Sentiment Analysis" className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" />
                                <div className="absolute inset-0 bg-[#e47a2e] flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-[11px] leading-relaxed font-medium">
                                        Monitor and understand customer sentiment to enhance overall satisfaction and tailor your offerings accordingly.
                                    </p>
                                </div>
                            </div>
                        </FadeSection>
                    </div>
                </div>
            </section>

            {/* ══ 4. EMERGENCY SERVICES ══ */}
            <section className="relative pt-12 pb-16 bg-[#1a1c22]">
                {/* A light purple solid block stretching out at the bottom behind the images */}
                <div className="absolute bottom-0 left-0 w-full h-[100px] bg-[#f9eefa]"></div>

                <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
                    <p className="text-center text-gray-400 text-[10px] mb-8 uppercase tracking-widest">Emergency Services</p>

                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Automated Emergency Response */}
                        <FadeSection className="flex-1 relative rounded-md overflow-hidden bg-black shadow-xl group border border-white/10 h-[280px]">
                            <img src="/images/ai_emergency.png" alt="Automated Emergency Response" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity group-hover:opacity-40" />
                            <div className="relative h-full flex items-center p-8 bg-gradient-to-r from-black/80 to-transparent">
                                <div>
                                    <h3 className="text-[#a5b4fc] font-bold text-sm mb-3">Automated Emergency Response</h3>
                                    <p className="text-white text-[10px] leading-relaxed max-w-sm">In critical situations, receive immediate assistance through our AI-driven emergency hotlines, ensuring swift and effective responses.</p>
                                </div>
                            </div>
                        </FadeSection>

                        {/* Health Monitoring */}
                        <FadeSection className="flex-1 relative rounded-md overflow-hidden bg-black shadow-xl group border border-white/10 h-[280px]">
                            <img src="/images/ai_health.png" alt="Health Monitoring" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity group-hover:opacity-40" />
                            <div className="relative h-full flex items-center p-8 bg-gradient-to-r from-black/80 to-transparent">
                                <div>
                                    <h3 className="text-[#a5b4fc] font-bold text-sm mb-3">Health Monitoring</h3>
                                    <p className="text-white text-[10px] leading-relaxed max-w-sm">Leverage AI for real-time health data analysis, receiving emergency alerts and enhancing user safety.</p>
                                </div>
                            </div>
                        </FadeSection>
                    </div>
                </div>
            </section>

            {/* ══ 5. EXPLORE MORE STRIPE ══ */}
            <section className="py-4 bg-[#80768b]">
                <div className="container mx-auto px-6 flex items-center justify-center gap-4">
                    <span className="text-white font-medium text-xs">Learn more about our Services</span>
                    <button onClick={() => setIsPopupOpen(true)} className="bg-[#f0a944] hover:bg-[#d89639] text-white font-bold px-4 py-1.5 rounded text-[10px] transition-colors shadow">
                        Explore More
                    </button>
                </div>
            </section>

            {/* ══ 6. OUR COMMITMENT ══ */}
            <section className="relative py-12 bg-[#2c2c2c] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMmMyYzJjIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjM2EzYTNhIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] border-b border-black">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <h2 className="text-center text-white text-[10px] uppercase font-normal tracking-widest mb-8">Our Commitment</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                        {/* Box 1 */}
                        <FadeSection className="bg-[#999999] p-6 rounded-md flex flex-col items-center justify-center text-center outline outline-1 outline-white/20">
                            <h3 className="text-black font-bold text-[11px] mb-4">Data Privacy and Security</h3>
                            <div className="w-[180px] h-[180px] mb-4 rounded-3xl overflow-hidden shadow-lg border border-white/20">
                                <img src="/images/ai_privacy.png" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-black/80 text-[9px] leading-relaxed mx-auto max-w-[95%]">Rest easy knowing that your data is our top priority. We adhere to the highest standards to ensure the privacy and security of your information.</p>
                        </FadeSection>

                        {/* Box 2 */}
                        <FadeSection className="bg-[#999999] p-6 rounded-md flex flex-col items-center justify-center text-center outline outline-1 outline-white/20">
                            <h3 className="text-black font-bold text-[11px] mb-4">Transparency</h3>
                            <div className="w-[180px] h-[180px] mb-4 rounded-[40px] overflow-hidden shadow-lg bg-white border border-white/20">
                                <img src="/images/ai_transparency.png" className="w-full h-full object-contain p-2" />
                            </div>
                            <p className="text-black/80 text-[9px] leading-relaxed mx-auto max-w-[95%]">We believe in clear and honest interactions. Know when you're engaging with AI, and trust in the transparency of our services.</p>
                        </FadeSection>

                        {/* Box 3 */}
                        <FadeSection className="bg-[#999999] p-6 rounded-md flex flex-col items-center justify-center text-center outline outline-1 outline-white/20">
                            <h3 className="text-black font-bold text-[11px] mb-4">Ethical Use of AI</h3>
                            <div className="w-[180px] h-[180px] mb-4 rounded-3xl overflow-hidden shadow-lg border border-white/20 bg-black">
                                <img src="/images/ai_ethical.png" className="w-full h-full object-cover opacity-90" />
                            </div>
                            <p className="text-black/80 text-[9px] leading-relaxed mx-auto max-w-[95%]">We uphold ethical standards in the development and deployment of AI solutions, ensuring responsible and fair practices.</p>
                        </FadeSection>

                        {/* Box 4 */}
                        <FadeSection className="bg-[#999999] p-6 rounded-md flex flex-col items-center justify-center text-center outline outline-1 outline-white/20">
                            <h3 className="text-black font-bold text-[11px] mb-4">Consent and Control</h3>
                            <div className="w-[180px] h-[180px] mb-4 rounded-[40px] overflow-hidden shadow-lg bg-white border border-white/20">
                                <img src="/images/ai_consent.png" className="w-full h-full object-contain p-4" />
                            </div>
                            <p className="text-black/80 text-[9px] leading-relaxed mx-auto max-w-[95%]">Your consent matters. We communicate clearly and obtain your approval before using any of your data.</p>
                        </FadeSection>
                    </div>
                </div>
            </section>

            {/* ══ 7. HOW WE WORK ══ */}
            <section className="relative py-12 bg-[#2c2c2c] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMmMyYzJjIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjM2EzYTNhIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')]">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <h2 className="text-center text-white text-[12px] uppercase font-normal tracking-widest mb-10">How We Work</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {/* Block 1 */}
                        <FadeSection className="relative h-[250px] overflow-hidden w-full flex items-end justify-center pb-4 shadow-xl border border-white/10 group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity" />
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <h3 className="relative z-10 text-white font-bold text-2xl tracking-wide group-hover:opacity-0 transition-opacity duration-300">Consultation</h3>
                            <div className="absolute inset-0 bg-[#e47a2e] flex flex-col items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                <p className="text-white text-center text-sm md:text-base font-medium leading-relaxed drop-shadow-sm">
                                    Schedule a consultation with our experts. We'll assess your needs and identify the most suitable AI-driven solutions for your business.
                                </p>
                            </div>
                        </FadeSection>

                        {/* Block 2 */}
                        <div className="flex flex-col gap-6 h-[250px]">
                            <FadeSection className="relative flex-1 overflow-hidden w-full flex items-center justify-center shadow-xl border border-white/10 group cursor-pointer">
                                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:opacity-70 transition-opacity" />
                                <div className="absolute inset-0 bg-black/40"></div>
                                <h3 className="relative z-10 text-white font-bold text-xl tracking-wide group-hover:opacity-0 transition-opacity duration-300">Data Collection</h3>
                                <div className="absolute inset-0 bg-[#e47a2e] flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                    <p className="text-white text-center text-xs md:text-sm font-medium leading-relaxed drop-shadow-sm">
                                        Your data is valuable. We collect relevant information with privacy in mind, adhering to all regulations and standards.
                                    </p>
                                </div>
                            </FadeSection>
                            <FadeSection className="relative flex-1 overflow-hidden w-full flex items-center justify-center shadow-xl border border-white/10 group cursor-pointer">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity group-hover:opacity-50 transition-opacity" />
                                <div className="absolute inset-0 bg-black/50"></div>
                                <h3 className="relative z-10 text-white font-bold text-xl tracking-wide group-hover:opacity-0 transition-opacity duration-300">Model Development</h3>
                                <div className="absolute inset-0 bg-[#e47a2e] flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                    <p className="text-white text-center text-xs md:text-sm font-medium leading-relaxed drop-shadow-sm">
                                        Our expert team develops robust AI models tailored to your specific requirements, ensuring optimal performance.
                                    </p>
                                </div>
                            </FadeSection>
                        </div>

                        {/* Block 3 */}
                        <FadeSection className="relative h-[180px] overflow-hidden w-full flex items-center justify-center shadow-xl border border-white/10 group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity" />
                            <div className="absolute inset-0 bg-black/50"></div>
                            <h3 className="relative z-10 text-[#f0a944] font-bold text-2xl tracking-wide group-hover:opacity-0 transition-opacity duration-300">Integration</h3>
                            <div className="absolute inset-0 bg-[#e47a2e] flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                <p className="text-white text-center text-sm font-medium leading-relaxed drop-shadow-sm">
                                    Seamlessly integrate our AI services into your existing customer interaction channels, minimizing disruption and maximizing efficiency.
                                </p>
                            </div>
                        </FadeSection>

                        {/* Block 4 */}
                        <FadeSection className="relative h-[180px] overflow-hidden w-full flex items-center justify-center shadow-xl border border-white/10 group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity group-hover:opacity-70 transition-opacity" />
                            <div className="absolute inset-0 bg-black/40"></div>
                            <h3 className="relative z-10 text-white font-bold text-xl tracking-wide group-hover:opacity-0 transition-opacity duration-300">Testing and Iteration</h3>
                            <div className="absolute inset-0 bg-[#e47a2e] flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                <p className="text-white text-center text-sm font-medium leading-relaxed drop-shadow-sm">
                                    Rigorous testing ensures optimal performance. We continuously iterate based on user feedback to enhance the user experience.
                                </p>
                            </div>
                        </FadeSection>

                        {/* Block 5 */}
                        <FadeSection className="relative h-[180px] overflow-hidden w-full flex items-end justify-center pb-4 shadow-xl border border-white/10 group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity" />
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <h3 className="relative z-10 text-white font-bold text-xl tracking-wide group-hover:opacity-0 transition-opacity duration-300">Training and Support</h3>
                            <div className="absolute inset-0 bg-[#e47a2e] flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                <p className="text-white text-center text-sm font-medium leading-relaxed drop-shadow-sm">
                                    Empower your team with the knowledge and skills to collaborate effectively with our AI systems through comprehensive training and support.
                                </p>
                            </div>
                        </FadeSection>

                        {/* Block 6 */}
                        <FadeSection className="relative h-[180px] overflow-hidden w-full flex items-end justify-end pr-8 pb-4 shadow-xl border border-white/10 group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity" />
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <h3 className="relative z-10 text-white font-bold text-xl tracking-wide group-hover:opacity-0 transition-opacity duration-300">Monitoring and Maintenance</h3>
                            <div className="absolute inset-0 bg-[#e47a2e] flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                <p className="text-white text-center text-sm font-medium leading-relaxed drop-shadow-sm">
                                    Ongoing monitoring ensures smooth operation, with any issues promptly addressed to guarantee uninterrupted service.
                                </p>
                            </div>
                        </FadeSection>
                    </div>
                </div>
            </section>

            {/* ══ 8. BOTTOM EXPLORE MORE STRIPE ══ */}
            <section className="py-4 bg-[#141209]">
                <div className="container mx-auto px-6 flex items-center justify-center gap-4">
                    <span className="text-white font-medium text-[11px]">Learn more about our Services</span>
                    <button onClick={() => setIsPopupOpen(true)} className="bg-[#f0a944] hover:bg-[#d89639] text-white font-bold px-4 py-1.5 rounded text-[10px] transition-colors shadow">
                        Explore More
                    </button>
                </div>
            </section>

            {/* ══ 9. READY TO COLLABORATE CTA ══ */}
            <section className="bg-black pt-16 pb-0 flex flex-col items-center">
                <div className="max-w-2xl text-center px-6 mb-16">
                    <p className="text-white text-[13px] leading-relaxed mb-6">
                        Ready to redefine your customer engagement through AI innovation? Contact us today for a personalized consultation. Join us on the journey to unlock the future of customer interaction.
                    </p>
                    <button onClick={() => setIsPopupOpen(true)} className="bg-[#f0a944] hover:bg-[#d89639] text-white font-bold px-8 py-2 rounded text-xs transition-colors shadow">
                        Contact Us
                    </button>
                </div>

                {/* Final Green Bar */}
                <div className="w-full bg-gradient-to-r from-[#219e75] to-[#d7ec55] py-8 text-center">
                    <FadeSection>
                        <h2 className="text-sm font-bold text-white mb-4 drop-shadow-sm">
                            Ready to collaborate?
                        </h2>
                        <button onClick={() => setIsPopupOpen(true)}
                            className="inline-block border border-white text-white bg-transparent font-medium px-6 py-1.5 rounded-sm hover:bg-white hover:text-[#219e75] transition-colors text-[10px]">
                            Request a Demo
                        </button>
                    </FadeSection>
                </div>
            </section>

        </div>
    );
}

