import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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

const TAB_DATA = [
    {
        id: 'multimedia',
        label: 'Multimedia Creation',
        title: 'Multimedia Creation',
        desc: 'Elevate your content with high-quality videos and infographics, fostering a dynamic and visually captivating online presence for enhanced audience connection.',
        imgUrl: '/images/smcc_multimedia.png'
    },
    {
        id: 'influencer',
        label: 'Influencer Partnerships',
        title: 'Influencer Partnerships',
        desc: 'Collaborate with prominent voices in your industry. Expand your reach and build trust through strategic influencer marketing campaigns.',
        imgUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'advertising',
        label: 'Advertising Campaigns',
        title: 'Advertising Campaigns',
        desc: 'Drive targeted results with precision ad campaigns. Optimize your spend and maximize ROI through data-driven placements.',
        imgUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 'account',
        label: 'Account Management',
        title: 'Account Management',
        desc: 'Comprehensive oversight of all your social channels. Ensure consistent brand voice, timely responses, and continuous engagement.',
        imgUrl: 'https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=800&auto=format&fit=crop'
    }
];

export function SocialMediaContentCreationInfoPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(TAB_DATA[0].id);

    const currentTabData = TAB_DATA.find(t => t.id === activeTab) || TAB_DATA[0];

    return (
        <div className="min-h-screen font-sans pt-[57px] overflow-x-hidden">
            <ServicePopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

            {/* ══ 1. HERO SECTION ══ */}
            <section className="relative pt-24 pb-16 flex flex-col items-center justify-center text-center bg-[#2b1f1c]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
                <FadeSection className="relative z-10 container mx-auto px-6 max-w-5xl text-white">
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-2 tracking-tight">Social Media Content Creation</h1>
                    <h2 className="text-lg md:text-2xl font-bold mb-6">Transforming Ideas Into Engaging <span className="text-[#f76c33]">Content</span></h2>
                    <p className="text-[13px] md:text-sm text-gray-300 leading-relaxed max-w-4xl mx-auto">
                        Unlock Your Brand's Potential. Elevate Your Online Presence with Expert Social Media Content Creation. Discover Tailored Strategies, Engaging Visuals, and Compelling Copywriting to Captivate Your Audience. Let Us Craft Your Digital Identity and Propel Your Brand to New Heights!
                    </p>
                </FadeSection>
            </section>

            {/* ══ 2. OUR BASIC SERVICES ══ */}
            <section className="relative py-12 bg-[#2c2c2c] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMmMyYzJjIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjM2EzYTNhIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')]">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <h2 className="text-center text-white text-2xl md:text-[26px] font-bold mb-10">Our Basic Services</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card 1 */}
                        <div className="relative group rounded container border border-white/40 overflow-hidden bg-[#1f1a18]">
                            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
                            <div className="relative p-6 text-center z-10 flex flex-col items-center justify-center min-h-[160px]">
                                <h3 className="text-white font-bold text-sm mb-3 drop-shadow-md">Social Media Content Strategy</h3>
                                <p className="text-gray-300 text-[11px] leading-relaxed drop-shadow-md">Develop a customized plan aligning brand goals with audience preferences, ensuring a comprehensive and effective social media strategy for sustained growth.</p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="relative group rounded container border border-white/40 overflow-hidden bg-[#1f1a18]">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
                            <div className="relative p-6 text-center z-10 flex flex-col items-center justify-center min-h-[160px]">
                                <h3 className="text-white font-bold text-sm mb-3 drop-shadow-md">Social Media Content Creation</h3>
                                <p className="text-gray-300 text-[11px] leading-relaxed drop-shadow-md">Craft compelling text, images, and basic graphics to communicate brand stories and messages effectively, engaging your audience across platforms.</p>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="relative group rounded container border border-white/40 overflow-hidden bg-[#1f1a18]">
                            <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
                            <div className="relative p-6 text-center z-10 flex flex-col items-center justify-center min-h-[160px]">
                                <h3 className="text-white font-bold text-sm mb-3 drop-shadow-md">Social Media Content Posting Schedule</h3>
                                <p className="text-gray-300 text-[11px] leading-relaxed drop-shadow-md">Strategically plan and schedule posts to optimize visibility and engagement, ensuring your content reaches the right audience at the right times.</p>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="relative group rounded container border border-white/40 overflow-hidden bg-[#1f1a18]">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
                            <div className="relative p-6 text-center z-10 flex flex-col items-center justify-center min-h-[160px]">
                                <h3 className="text-white font-bold text-sm mb-3 drop-shadow-md">Social Media Content Analytics</h3>
                                <p className="text-gray-300 text-[11px] leading-relaxed drop-shadow-md">Implement basic performance tracking, offering insights into audience interactions and content effectiveness, facilitating data-driven refinements for ongoing improvement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ 3. TABBED CONTENT AREA ══ */}
            <section className="relative py-16 bg-[#0a1f33] border-t border-b border-[#0a1f33]/50">
                {/* Tech pattern overlaid */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/circuit-board.png')` }}></div>

                <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {TAB_DATA.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-2.5 text-xs font-bold transition-colors border ${activeTab === tab.id
                                        ? 'bg-[#7ae582] text-white border-[#7ae582]'
                                        : 'bg-white text-gray-700 border-white hover:bg-gray-100'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Active Tab Content Card */}
                    <FadeSection key={activeTab}>
                        <div className="bg-[#afd4fa] rounded overflow-hidden flex flex-col md:flex-row shadow-2xl max-w-4xl mx-auto min-h-[300px]">
                            {/* Text Side */}
                            <div className="p-10 md:w-1/2 flex flex-col justify-center">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">{currentTabData.title}</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">{currentTabData.desc}</p>
                            </div>
                            {/* Image Side */}
                            <div className="md:w-1/2 bg-white flex items-center justify-center">
                                <img src={currentTabData.imgUrl} alt={currentTabData.title} className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </FadeSection>
                </div>
            </section>

            {/* ══ 4. EXPLORE MORE STRIPE ══ */}
            <section className="py-6 bg-[#081523] border-t border-[#040b12]">
                <div className="container mx-auto px-6 flex items-center justify-center gap-4">
                    <span className="text-white font-medium text-[15px]">Learn more about our Services</span>
                    <button onClick={() => setIsPopupOpen(true)} className="bg-[#f0a944] hover:bg-[#d89639] text-white font-bold px-6 py-1.5 rounded text-xs transition-colors">
                        Explore More
                    </button>
                </div>
            </section>

            {/* ══ 5. EMERGENCY SERVICES ══ */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <h2 className="text-center text-gray-900 text-2xl md:text-[28px] font-bold mb-10">Emergency Services</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <FadeSection className="bg-white border text-center p-3 rounded shadow-sm">
                            <div className="h-[280px] w-full overflow-hidden mb-4 rounded-sm">
                                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop" alt="Crisis Management" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="font-bold text-gray-800 text-sm mb-2">Crisis Management</h3>
                            <p className="text-gray-500 text-[10px] leading-relaxed mx-auto max-w-[90%]">Develop swift response and recovery strategies, safeguarding brand reputation during crises through proactive communication and strategic crisis management.</p>
                        </FadeSection>

                        <FadeSection className="bg-white border text-center p-3 rounded shadow-sm">
                            <div className="h-[280px] w-full overflow-hidden mb-4 rounded-sm">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" alt="Rapid Content Deployment" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="font-bold text-gray-800 text-sm mb-2">Rapid Content Deployment</h3>
                            <p className="text-gray-500 text-[10px] leading-relaxed mx-auto max-w-[90%]">Provide timely solutions for urgent events, ensuring agile and relevant content deployment to maintain brand relevance in fast-paced situations.</p>
                        </FadeSection>

                        <FadeSection className="bg-white border text-center p-3 rounded shadow-sm">
                            <div className="h-[280px] w-full overflow-hidden mb-4 rounded-sm">
                                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" alt="24/7 Monitoring" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="font-bold text-gray-800 text-sm mb-2">24/7 Monitoring</h3>
                            <p className="text-gray-500 text-[10px] leading-relaxed mx-auto max-w-[90%]">Vigilantly monitor social media channels around the clock, engaging with your audience in real time during critical situations, and promptly addressing emerging issues to maintain brand integrity.</p>
                        </FadeSection>
                    </div>
                </div>
            </section>

            {/* ══ 6. OUR WORK PROCESS ══ */}
            <section className="py-16 bg-[#faefdf]">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <h2 className="text-center text-gray-900 text-2xl md:text-[28px] font-bold mb-10">Our Work Process</h2>

                    {/* Masonry-like grid container */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        {/* Large left item */}
                        <FadeSection className="relative rounded overflow-hidden shadow-lg min-h-[400px] flex items-center justify-center text-center p-8 group">
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors"></div>
                            <div className="relative z-10">
                                <h3 className="text-white text-xl font-bold mb-3">Social Media Content Creation Strategy Development</h3>
                                <p className="text-white/80 text-xs">Collaborate on tailored strategies, including content calendar planning for effective execution.</p>
                            </div>
                        </FadeSection>

                        {/* Right column of two stacked items */}
                        <div className="flex flex-col gap-6">
                            <FadeSection className="relative rounded overflow-hidden shadow-lg flex-1 min-h-[190px] flex items-center justify-center text-center p-6 group">
                                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors"></div>
                                <div className="relative z-10">
                                    <h3 className="text-white text-lg font-bold mb-2">Content Creation</h3>
                                    <p className="text-white/80 text-[11px]">Conduct detailed consultations and social media audits for a comprehensive understanding.</p>
                                </div>
                            </FadeSection>

                            <FadeSection className="relative rounded overflow-hidden shadow-lg flex-1 min-h-[190px] flex items-center justify-center text-center p-6 group">
                                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors"></div>
                                <div className="relative z-10">
                                    <h3 className="text-white text-lg font-bold mb-2">Strategy Deployment</h3>
                                    <p className="text-white/80 text-[11px]">Offer regular updates and quick turnarounds, ensuring client involvement and emergency service responsiveness.</p>
                                </div>
                            </FadeSection>
                        </div>
                    </div>

                    {/* Bottom row of two side-by-side items */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FadeSection className="relative rounded overflow-hidden shadow-lg min-h-[220px] flex items-center justify-center text-center p-6 group">
                            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/80 group-hover:bg-black/70 transition-colors"></div>
                            <div className="relative z-10">
                                <h3 className="text-white text-lg font-bold mb-2">Client Communication</h3>
                                <p className="text-white/80 text-[11px] max-w-sm mx-auto">Ensure regular updates, strategy adjustments, and clear communication channels for emergencies.</p>
                            </div>
                        </FadeSection>
                        <FadeSection className="relative rounded overflow-hidden shadow-lg min-h-[220px] flex items-center justify-center text-center p-6 group">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/80 group-hover:bg-black/70 transition-colors"></div>
                            <div className="relative z-10">
                                <h3 className="text-white text-lg font-bold mb-2">Monitoring and Analytics</h3>
                                <p className="text-white/80 text-[11px] max-w-sm mx-auto">Provide continuous channel monitoring, monthly reports, and real-time adjustments for optimal performance.</p>
                            </div>
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

            {/* ══ 7. CUSTOMER SATISFACTION ══ */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-[1200px]">
                    <h2 className="text-center text-gray-900 text-2xl font-bold mb-10">Customer Satisfaction</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Box 1 */}
                        <FadeSection className="border rounded shadow-sm overflow-hidden flex flex-col p-3">
                            <img src="https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=400&auto=format&fit=crop" alt="Regular Reporting" className="w-full h-32 object-cover rounded shadow-sm mb-4" />
                            <h3 className="text-center text-[13px] font-bold text-gray-800 mb-2">Regular Reporting</h3>
                            <p className="text-[10px] text-gray-500 leading-relaxed">Deliver transparent KPI reports for performance evaluation.</p>
                        </FadeSection>
                        {/* Box 2 */}
                        <FadeSection className="border rounded shadow-sm overflow-hidden flex flex-col p-3">
                            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400&auto=format&fit=crop" alt="Client Education" className="w-full h-32 object-cover rounded shadow-sm mb-4" />
                            <h3 className="text-center text-[13px] font-bold text-gray-800 mb-2">Client Education</h3>
                            <p className="text-[10px] text-gray-500 leading-relaxed">Conduct workshops and provide resources for ongoing client awareness.</p>
                        </FadeSection>
                        {/* Box 3 */}
                        <FadeSection className="border rounded shadow-sm overflow-hidden flex flex-col p-3">
                            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=400&auto=format&fit=crop" alt="Feedback Loops" className="w-full h-32 object-cover rounded shadow-sm mb-4" />
                            <h3 className="text-center text-[13px] font-bold text-gray-800 mb-2">Feedback Loops</h3>
                            <p className="text-[10px] text-gray-500 leading-relaxed">Facilitate regular improvement sessions based on client input.</p>
                        </FadeSection>
                        {/* Box 4 */}
                        <FadeSection className="border rounded shadow-sm overflow-hidden flex flex-col p-3">
                            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=400&auto=format&fit=crop" alt="Customization" className="w-full h-32 object-cover rounded shadow-sm mb-4" />
                            <h3 className="text-center text-[13px] font-bold text-gray-800 mb-2">Customization</h3>
                            <p className="text-[10px] text-gray-500 leading-relaxed">Tailor services based on evolving client needs, ensuring responsiveness and clear communication channels.</p>
                        </FadeSection>
                    </div>
                </div>
            </section>

            {/* ══ 8. OUR POLICIES ══ */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <h2 className="text-center text-gray-900 text-2xl font-bold mb-10">Our Policies</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Policy 1 */}
                        <FadeSection className="flex flex-col text-center">
                            <div className="h-48 rounded overflow-hidden mb-4 bg-white flex items-center justify-center">
                                <img src="/images/smcc_confidential.png" alt="Confidentiality" className="w-auto h-full max-h-48 object-contain" />
                            </div>
                            <h3 className="text-[14px] font-bold text-[#355b8e] mb-1">Confidentiality</h3>
                            <p className="text-[10px] text-gray-400">Adhere strictly to client confidentiality.</p>
                        </FadeSection>
                        {/* Policy 2 */}
                        <FadeSection className="flex flex-col text-center">
                            <div className="h-48 rounded-xl overflow-hidden mb-4 shadow-md">
                                <img src="/images/smcc_copyright.png" alt="Content Ownership" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-[14px] font-bold text-[#355b8e] mb-1">Content Ownership</h3>
                            <p className="text-[10px] text-gray-400">Clarify content ownership rights.</p>
                        </FadeSection>
                        {/* Policy 3 */}
                        <FadeSection className="flex flex-col text-center">
                            <div className="h-48 rounded-xl overflow-hidden mb-4 shadow-md">
                                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=600&auto=format&fit=crop" alt="Contracts" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-[14px] font-bold text-[#355b8e] mb-1">Contracts</h3>
                            <p className="text-[10px] text-gray-400">Define service terms, timelines, and costs clearly.</p>
                        </FadeSection>
                        {/* Policy 4 */}
                        <FadeSection className="flex flex-col text-center">
                            <div className="h-48 rounded-xl overflow-hidden mb-4 shadow-md bg-[#298f98]">
                                <img src="/images/smcc_revision.png" alt="Revision Policy" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-[14px] font-bold text-[#355b8e] mb-1">Revision Policy</h3>
                            <p className="text-[10px] text-gray-400">Establish transparent revision processes and limits.</p>
                        </FadeSection>
                    </div>
                </div>
            </section>

        </div>
    );
}

