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

const MENU_ITEMS = [
    { id: 'consultation', label: 'Client Consultation', bg: 'bg-[#6fdc81]' },
    { id: 'data', label: 'Data Collection and Integration', bg: 'bg-[#d8a11b]' },
    { id: 'analysis', label: 'Analysis and Insights', bg: 'bg-[#d8a11b]' },
    { id: 'report', label: 'Report Generation', bg: 'bg-[#d8a11b]' },
    { id: 'strategy', label: 'Strategy Refinement', bg: 'bg-[#d8a11b]' },
    { id: 'monitoring', label: 'Continuous Monitoring', bg: 'bg-[#d8a11b]' },
    { id: 'training', label: 'Training and Education', bg: 'bg-[#d8a11b]' },
];

export function AnalyticsReportingInfoPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [activeProcessId, setActiveProcessId] = useState('consultation');

    return (
        <div className="min-h-screen font-sans pt-[57px] overflow-x-hidden">
            <ServicePopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

            {/* ══ 1. HERO SECTION ══ */}
            <section className="relative pt-24 pb-16 flex flex-col items-center justify-center text-center bg-[#151319]">
                {/* Background image overlay of charts */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#151319] to-transparent"></div>

                <FadeSection className="relative z-10 container mx-auto px-6 max-w-5xl text-white">
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-3 tracking-tight text-white">Analytics and Reporting Services</h1>
                    <h2 className="text-lg md:text-[22px] font-bold mb-6 text-white">Elevate Your Social Media Strategy with Data-Driven Insights</h2>
                    <p className="text-[12px] md:text-[13px] text-gray-300 leading-relaxed max-w-4xl mx-auto">
                        Welcome to Autoom Studio, where data meets strategy, and social media success is a guarantee. Our Social Media Analytics and Reporting services are designed to empower businesses and individuals with the insights needed to make informed decisions and achieve remarkable results in the dynamic world of social media.
                    </p>
                </FadeSection>
            </section>

            {/* ══ 2. BASIC ANALYTICS ══ */}
            <section className="relative py-12 bg-[#2c2c2c] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMmMyYzJjIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjM2EzYTNhIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] border-b border-[#3f3f3f]">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <h2 className="text-center text-white text-xl md:text-2xl font-normal mb-8">Basic Analytics</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                        {/* Card 1 */}
                        <div className="relative group rounded container border border-[#b2e557]/40 shadow-[0_0_15px_rgba(178,229,87,0.15)] overflow-hidden bg-[#1f2115]">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay" />
                            <div className="relative p-6 text-center z-10 flex flex-col items-center justify-center min-h-[160px]">
                                <h3 className="text-white font-bold text-sm mb-3">Data Collection</h3>
                                <p className="text-gray-300 text-[11px] leading-relaxed">Harness the power of data by consolidating information from all major social media platforms. Our comprehensive approach ensures that no valuable insights slip through the cracks, providing you with a 360-degree view of your online presence.</p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="relative group rounded container border border-[#d8a11b]/40 shadow-[0_0_15px_rgba(216,161,27,0.15)] overflow-hidden bg-[#241a10]">
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay" />
                            <div className="relative p-6 text-center z-10 flex flex-col items-center justify-center min-h-[160px]">
                                <h3 className="text-white font-bold text-sm mb-3">Competitor Analysis</h3>
                                <p className="text-gray-300 text-[11px] leading-relaxed">Benchmark your performance against industry leaders. Our in-depth competitor analysis provides strategic insights, enabling you to stay ahead of trends and maintain a competitive edge in your market.</p>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="relative group rounded container border border-[#f05a5d]/40 shadow-[0_0_15px_rgba(240,90,93,0.15)] overflow-hidden bg-[#1b151e]">
                            <img src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay" />
                            <div className="relative p-6 text-center z-10 flex flex-col items-center justify-center min-h-[160px]">
                                <h3 className="text-white font-bold text-sm mb-3">Basic Reporting</h3>
                                <p className="text-gray-300 text-[11px] leading-relaxed">Stay in the loop with regular reports that highlight key metrics and performance indicators. Our actionable insights pave the way for continuous improvement, helping you refine your social media strategy for optimal results.</p>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="relative group rounded container border border-[#9caede]/40 shadow-[0_0_15px_rgba(156,174,222,0.15)] overflow-hidden bg-[#111721]">
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay" />
                            <div className="relative p-6 text-center z-10 flex flex-col items-center justify-center min-h-[160px]">
                                <h3 className="text-white font-bold text-sm mb-3">Audience Insights</h3>
                                <p className="text-gray-300 text-[11px] leading-relaxed">Tailor your content strategy to resonate with your audience. Our demographic analysis ensures you understand your audience on a deeper level, allowing you to create targeted and engaging content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 3. ADVANCED ANALYTICS ══ */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <h2 className="text-center text-gray-800 text-xl md:text-2xl font-normal mb-10">Advanced Analytics</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Custom Dashboards */}
                        <FadeSection className="bg-white border text-center p-4 rounded shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-[200px] w-full overflow-hidden mb-5 border rounded-sm flex items-center justify-center bg-gray-50 p-2">
                                <img src="/images/aa_custom_dashboard.png" alt="Custom Dashboards" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="font-bold text-gray-800 text-sm mb-3">Custom Dashboards</h3>
                            <p className="text-gray-500 text-[11px] leading-relaxed">Navigate the social media landscape with ease through our custom dashboards. Real-time monitoring puts the power of data at your fingertips, and advanced visualizations make complex data easily understandable.</p>
                        </FadeSection>

                        {/* Sentiment Analysis */}
                        <FadeSection className="bg-white border text-center p-4 rounded shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-[200px] w-full overflow-hidden mb-5 border rounded-sm flex items-center justify-center bg-[#fdfafb] p-2">
                                <img src="/images/aa_sentiment_analysis.png" alt="Sentiment Analysis" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="font-bold text-gray-800 text-sm mb-3">Sentiment Analysis</h3>
                            <p className="text-gray-500 text-[11px] leading-relaxed">Understand the sentiment behind every mention. Our sentiment analysis tools help you gauge the mood of your audience, allowing you to fine-tune your messaging and enhance brand perception.</p>
                        </FadeSection>

                        {/* Content Performance Analysis */}
                        <FadeSection className="bg-white border text-center p-4 rounded shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-[200px] w-full overflow-hidden mb-5 border rounded-sm flex items-center justify-center bg-[#f2f8fa] p-2">
                                <img src="/images/aa_content_performance.png" alt="Content Performance Analysis" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="font-bold text-gray-800 text-sm mb-3">Content Performance Analysis</h3>
                            <p className="text-gray-500 text-[11px] leading-relaxed">Refine your content strategy based on performance analysis. Our tools provide insights into what works and what doesn't, ensuring your content resonates with your audience and drives engagement.</p>
                        </FadeSection>

                        {/* Conversion Tracking */}
                        <FadeSection className="bg-white border text-center p-4 rounded shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-[200px] w-full overflow-hidden mb-5 border rounded-sm flex items-center justify-center bg-gray-50 p-2">
                                <img src="/images/aa_conversion_tracking.png" alt="Conversion Tracking" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="font-bold text-gray-800 text-sm mb-3">Conversion Tracking</h3>
                            <p className="text-gray-500 text-[11px] leading-relaxed">Maximize the impact of your campaigns by attributing conversions to specific social media efforts. Our conversion tracking tools help you optimize campaigns for maximum return on investment.</p>
                        </FadeSection>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <div className="bg-gray-400 rounded overflow-hidden flex items-center">
                            <span className="text-white font-medium px-6 py-2">Learn more about our Services</span>
                            <button onClick={() => setIsPopupOpen(true)} className="bg-[#f0a944] hover:bg-[#d89639] text-white font-medium px-4 py-2 text-sm transition-colors">
                                Explore More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 4. EMERGENCY SERVICES ══ */}
            <section className="relative py-12 bg-[#2c2c2c] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMmMyYzJjIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjM2EzYTNhIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')]">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <h2 className="text-center text-white text-xl md:text-2xl font-normal mb-8">Emergency Services</h2>

                    <div className="flex flex-col md:flex-row gap-6 items-stretch justify-center relative z-10 w-full">
                        {/* Crisis Management Image Area */}
                        <div className="md:w-[40%] text-center flex flex-col">
                            <div className="relative rounded border border-[#6eaab0] overflow-hidden bg-[#1c2c31] h-full min-h-[220px] shadow-[0_0_15px_rgba(110,170,176,0.15)] md:ml-12">
                                <img src="/images/aa_crisis_management.png" className="absolute inset-0 w-full h-full object-contain p-4 opacity-50" />
                                <div className="relative p-6 h-full flex flex-col justify-center items-center z-10">
                                    <h3 className="text-[#6eaab0] font-bold text-sm mb-3">Crisis Management</h3>
                                    <p className="text-white text-[11px] leading-relaxed max-w-sm font-medium">Be prepared for any scenario with our proactive crisis management services. We monitor social media for potential crises, allowing for swift responses and effective damage control.</p>
                                </div>
                            </div>
                        </div>

                        {/* Stacked Cards */}
                        <div className="md:w-[50%] flex flex-col gap-4">
                            <div className="relative rounded border border-[#528f9d]/50 overflow-hidden bg-[#0c242c] p-6 text-center shadow-[0_0_15px_rgba(82,143,157,0.15)]">
                                <h3 className="text-[#528f9d] font-bold text-sm mb-2">Real-time Alerts</h3>
                                <p className="text-white text-[11px] leading-relaxed max-w-lg mx-auto">Stay ahead of emerging issues with our real-time alerts. Be informed instantly when unusual activity is detected, enabling you to react promptly and mitigate potential risks.</p>
                            </div>

                            <div className="relative rounded border border-[#2b395b]/50 overflow-hidden bg-[#0a162b] p-6 text-center shadow-[0_0_15px_rgba(43,57,91,0.15)] flex-1">
                                <h3 className="text-[#536ea1] font-bold text-sm mb-2">Incident Reporting</h3>
                                <p className="text-white text-[11px] leading-relaxed max-w-lg mx-auto">Navigate social media incidents with confidence. Our incident reporting protocols and seamless collaboration with PR teams ensure a coordinated and effective response.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 5. OUR PROCESS ══ */}
            <section className="py-12 bg-[#ffe8e6]">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <h2 className="text-center text-gray-800 text-xl md:text-2xl font-normal mb-8">Our Process</h2>

                    <div className="flex flex-col md:flex-row gap-6 items-stretch">
                        {/* Interactive Left Menu */}
                        <div className="md:w-1/3 flex flex-col gap-2">
                            {MENU_ITEMS.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveProcessId(item.id)}
                                    className={`py-3 px-6 text-[13px] font-bold transition-colors border shadow border-black/10 text-center ${item.id === activeProcessId ? 'bg-[#6fdc81] text-white' : 'bg-[#e4a836] hover:bg-[#c28f2c] text-white'}`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        {/* Huge Right Image Block */}
                        <div className="md:w-2/3 flex flex-col">
                            <FadeSection key={activeProcessId} className="relative flex-1 w-full rounded shadow-lg overflow-hidden flex flex-col items-center justify-center p-12 text-center bg-[#243340]">
                                {/* We only have the generic consultation image for the mockup right now */}
                                <img src="/images/aa_client_consultation.png" alt="Consultation" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />

                                <div className="relative z-10 max-w-md bg-black/30 p-8 rounded backdrop-blur-sm border border-white/10">
                                    <h3 className="text-white font-bold text-lg mb-3">
                                        {MENU_ITEMS.find(m => m.id === activeProcessId)?.label}
                                    </h3>
                                    <p className="text-white/90 text-sm mb-6 leading-relaxed">
                                        {activeProcessId === 'consultation'
                                            ? "Understanding your goals and KPIs is our first step. We want to know what success looks like for you."
                                            : "Our analytical frameworks dive deep into this specific area of your operations to identify bottlenecks and unlock hidden acceleration potential."}
                                    </p>
                                    <button onClick={() => setIsPopupOpen(true)} className="bg-[#e4a836] hover:bg-[#c28f2c] text-white font-bold px-6 py-2 rounded text-xs transition-colors shadow">
                                        Explore More
                                    </button>
                                </div>
                            </FadeSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 6. OUR POLICIES ══ */}
            <section className="relative py-12 bg-[#2c2c2c] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMmMyYzJjIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjM2EzYTNhIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] border-b border-black">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <h2 className="text-center text-white text-xl md:text-2xl font-normal mb-8">Our Policies</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                        {/* Policy 1 */}
                        <div className="relative rounded border border-white/30 overflow-hidden bg-[#1f2115]">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay" />
                            <div className="relative p-6 text-center z-10 flex flex-col items-center justify-center min-h-[160px]">
                                <h3 className="text-white font-bold text-[15px] mb-3">Data Privacy</h3>
                                <p className="text-gray-300 text-[11px] leading-relaxed">Maximize the impact of your campaigns by attributing conversions to specific social media efforts. Our conversion tracking tools help you optimize campaigns for maximum return on investment.</p>
                            </div>
                        </div>
                        {/* Policy 2 */}
                        <div className="relative rounded border border-white/30 overflow-hidden bg-[#241a10]">
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay" />
                            <div className="relative p-6 text-center z-10 flex flex-col items-center justify-center min-h-[160px]">
                                <h3 className="text-white font-bold text-[15px] mb-3">Content Moderation</h3>
                                <p className="text-gray-300 text-[11px] leading-relaxed">Maximize the impact of your campaigns by attributing conversions to specific social media efforts. Our conversion tracking tools help you optimize campaigns for maximum return on investment.</p>
                            </div>
                        </div>
                        {/* Policy 3 */}
                        <div className="relative rounded border border-white/30 overflow-hidden bg-[#1b151e]">
                            <img src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay" />
                            <div className="relative p-6 text-center z-10 flex flex-col items-center justify-center min-h-[160px]">
                                <h3 className="text-white font-bold text-[15px] mb-3">Reporting Standards</h3>
                                <p className="text-gray-300 text-[11px] leading-relaxed">Transparency is key. Our reporting standards guarantee accuracy and build trust by clearly outlining our methodologies and ensuring consistent and reliable reporting.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 7. WHY CHOOSE US ══ */}
            <section className="relative py-20 bg-[#121212] overflow-hidden">
                <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none overflow-hidden">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/light-bulb-4545585-3775191.png" className="w-[800px] object-cover scale-150 mix-blend-screen" />
                </div>

                <FadeSection className="relative z-10 container mx-auto px-6 max-w-5xl text-center">
                    <h2 className="text-white text-2xl md:text-3xl font-extrabold mb-8 drop-shadow-lg tracking-wide">Why Choose Us?</h2>

                    <div className="text-left text-gray-300 text-[13px] leading-relaxed space-y-2 mb-12 max-w-4xl mx-auto backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-white/5">
                        <p><strong className="text-white">Experience:</strong> With years of proven expertise, we bring a wealth of experience to the table. We've seen the evolution of social media and have adapted our strategies to stay ahead.</p>
                        <p><strong className="text-white">Innovation:</strong> Stay on the cutting edge with our commitment to innovation. We embrace the latest tools and methodologies to ensure your strategies are always ahead of the curve.</p>
                        <p><strong className="text-white">Results:</strong> Drive tangible success with strategies rooted in data. Our results-oriented approach means your goals become our goals, and we work tirelessly to achieve them.</p>
                        <p><strong className="text-white">Partnership:</strong> Your success is our success. We believe in true collaboration, working closely with you as a partner on your social media journey.</p>
                    </div>

                    <div className="text-center pt-8 border-t border-white/10">
                        <h4 className="text-white font-bold text-[15px] mb-2">Get Started Today!</h4>
                        <p className="text-gray-400 text-xs mb-6 max-w-xl mx-auto">Ready to unlock the full potential of your social media presence? Contact us today and let's embark on a journey of data-driven success together.</p>
                        <button onClick={() => setIsPopupOpen(true)} className="bg-white hover:bg-gray-100 text-black font-bold px-8 py-2.5 rounded text-sm transition-colors shadow">
                            Contact Us
                        </button>
                    </div>
                </FadeSection>
            </section>

            {/* ══ 8. READY TO COLLABORATE CTA ══ */}
            <section className="py-16 bg-gradient-to-r from-[#219e75] to-[#d7ec55]">
                <div className="container mx-auto px-6 text-center">
                    <FadeSection>
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-6 tracking-wide drop-shadow-sm">
                            Ready to collaborate?
                        </h2>
                        <button onClick={() => setIsPopupOpen(true)}
                            className="inline-block border border-white text-white font-medium px-8 py-2.5 rounded hover:bg-white hover:text-[#219e75] transition-colors text-sm">
                            Request a Demo
                        </button>
                    </FadeSection>
                </div>
            </section>
        </div>
    );
}

