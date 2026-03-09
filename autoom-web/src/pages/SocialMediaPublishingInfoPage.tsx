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

/* ─── Generic Post Card UI for the Hero ─── */
function PostCard({ imgUrl, className = '' }: { imgUrl: string; className?: string }) {
    return (
        <div className={`bg-white rounded-xl shadow-xl w-64 md:w-72 overflow-hidden flex-shrink-0 border border-gray-100 ${className}`}>
            <div className="p-3 flex items-center gap-3 border-b border-gray-50">
                <div className="w-8 h-8 rounded-full bg-pink-100 border-2 border-pink-500 flex-shrink-0"></div>
                <div className="space-y-1.5 flex-1">
                    <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-1.5 bg-gray-100 rounded w-1/4"></div>
                </div>
            </div>
            <div className="h-44 md:h-48 w-full bg-gray-200 overflow-hidden relative">
                <img src={imgUrl} alt="Post image" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="p-3 space-y-2">
                <div className="flex gap-4 mb-2">
                    <div className="w-4 h-4 rounded bg-gray-200"></div>
                    <div className="w-4 h-4 rounded bg-gray-200"></div>
                    <div className="w-4 h-4 rounded bg-gray-200"></div>
                </div>
                <div className="h-1.5 bg-gray-200 rounded w-full"></div>
                <div className="h-1.5 bg-gray-200 rounded w-5/6"></div>
            </div>
        </div>
    );
}

/* ─── Simple Polaroid UI for the Dark Section ─── */
function PolaroidCard({ imgUrl, className = '' }: { imgUrl: string; className?: string }) {
    return (
        <div className={`bg-white p-3 md:p-4 pb-12 shadow-2xl rounded-sm transform ${className} w-64 md:w-72 flex-shrink-0`}>
            <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full border border-pink-400"></div>
                <div className="h-1.5 w-16 bg-gray-200 rounded"></div>
            </div>
            <div className="h-40 w-full bg-gray-100 overflow-hidden">
                <img src={imgUrl} alt="Polaroid" className="w-full h-full object-cover" />
            </div>
        </div>
    );
}

/* ─── Zigzag Feature Row ─── */
function FeatureRow({ align, label, labelColor, title, desc, imgUrl }: { align: 'left' | 'right', label: string, labelColor: string, title: string, desc: string, imgUrl: string }) {
    const textContent = (
        <div className={`flex-1 ${align === 'right' ? 'md:pr-10' : 'md:pl-10'} space-y-2`}>
            <p className={`${labelColor} font-bold text-xs tracking-wider uppercase`}>{label}</p>
            <h3 className="text-[17px] md:text-lg font-bold text-gray-900">{title}</h3>
            <p className="text-gray-500 text-[13px] leading-relaxed max-w-sm">{desc}</p>
        </div>
    );

    const imageContent = (
        <div className="flex-1 flex justify-center items-center relative min-h-[240px]">
            <img src={imgUrl} alt={title} className="max-h-60 object-contain w-full drop-shadow-md" />
        </div>
    );

    return (
        <FadeSection className={`flex flex-col ${align === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}>
            {textContent}
            {imageContent}
        </FadeSection>
    );
}


export function SocialMediaPublishingInfoPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#faf8f7] font-sans pt-[57px] overflow-x-hidden">
            <ServicePopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

            {/* ══ 1. HERO & TEXT ══ */}
            <section className="relative pt-24 pb-32 flex flex-col items-center justify-center overflow-hidden bg-[#736349]">
                {/* Background image overlay */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
                <div className="absolute inset-0 bg-[#3a3022]/80 mix-blend-multiply"></div>

                <FadeSection className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
                    <h1 className="text-3xl md:text-[40px] font-semibold text-white mb-6">Social Media Publishing</h1>
                    <p className="text-[#f7a048] italic text-sm md:text-base mb-3 max-w-3xl mx-auto leading-relaxed">
                        Access endless scheduling, insightful monitoring, and tailored reports for comprehensive social media performance analysis using Autoom Studio.
                    </p>
                    <p className="text-white text-sm md:text-[15px] leading-relaxed">
                        Unlock the potential of social platforms with Autoom Studio's Social Media Publishing innovative content creation, strategic scheduling, and audience engagement tactics.
                    </p>
                </FadeSection>
            </section>

            {/* ══ 2. FLOATING ICONS & POST CARDS ══ */}
            <section className="relative bg-[#faf8f7] pb-32">
                {/* Icons strip just below the hero overlap */}
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-14 pt-10 px-6 max-w-6xl mx-auto -mt-4 relative z-20">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="IG" className="w-10 h-10 object-contain hover:scale-110 transition-transform" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-10 h-10 object-contain hover:scale-110 transition-transform -mt-6" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg" alt="X" className="w-8 h-8 object-contain hover:scale-110 transition-transform" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg" alt="Chrome" className="w-10 h-10 object-contain hover:scale-110 transition-transform -mt-4" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="FB" className="w-10 h-10 object-contain hover:scale-110 transition-transform mt-6" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" className="w-10 h-10 object-contain hover:scale-110 transition-transform -mt-8" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YT" className="w-12 h-12 object-contain hover:scale-110 transition-transform mt-4" />
                </div>

                {/* Overlapping Posts */}
                <div className="container mx-auto px-4 mt-16 relative z-10">
                    <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-8">
                        <PostCard
                            imgUrl="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop"
                            className="md:translate-y-4 shadow-sm hover:shadow-2xl transition-shadow"
                        />
                        <PostCard
                            imgUrl="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop"
                            className="md:translate-y-16 shadow-lg hover:shadow-2xl transition-shadow"
                        />
                        <PostCard
                            imgUrl="/images/smp_post_3.png"
                            className="md:translate-y-8 shadow-xl hover:shadow-2xl transition-shadow"
                        />
                        <PostCard
                            imgUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                            className="md:translate-y-24 shadow-2xl hover:shadow-2xl transition-shadow"
                        />
                    </div>
                </div>
            </section>

            {/* ══ 3. ZIGZAG FEATURES ══ */}
            <section className="py-24 bg-[#faf8f7]">
                <div className="container mx-auto px-6 max-w-4xl flex flex-col gap-24">
                    <FeatureRow
                        align="left"
                        label="SCHEDULE"
                        labelColor="text-[#d8682e]"
                        title="Time-saving flexible scheduling."
                        desc="Get organized and schedule your social media posts ahead of time to make sure you always have interesting content online."
                        imgUrl="/images/smp_feat_schedule.png"
                    />
                    <FeatureRow
                        align="right"
                        label="MONITOR"
                        labelColor="text-[#209c68]"
                        title="Multi-Platform Integration"
                        desc="Easily handle all your social media accounts in one place for smooth and efficient management."
                        imgUrl="/images/smp_feat_monitor.png"
                    />
                    <FeatureRow
                        align="left"
                        label="CALENDAR"
                        labelColor="text-[#d8682e]"
                        title="Content Deployment Calendar"
                        desc="Keep everything in order with our easy-to-use calendar. See and plan your social media strategy without any hassle."
                        imgUrl="/images/smp_feat_calendar.png"
                    />
                    <FeatureRow
                        align="right"
                        label="ANALYTICS"
                        labelColor="text-[#646fd1]"
                        title="Quantitative Analysis and Reporting"
                        desc="Understand how well your social media is doing with our detailed analytics. See what works best and make your strategy even better."
                        imgUrl="/images/smp_feat_analytics.png"
                    />
                </div>
            </section>

            {/* ══ 4. CTA STRIPE ══ */}
            <section className="py-12 bg-[#faf8f7]">
                <FadeSection className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <span className="text-gray-900 font-semibold text-[15px]">Learn more about our Services</span>
                    <Link to="/services" className="bg-[#f0a944] hover:bg-[#d89639] text-white font-medium px-8 py-2.5 rounded shadow-sm text-[13px] transition-colors">
                        Explore More
                    </Link>
                </FadeSection>
            </section>

            {/* ══ 5. DARK SECTION & POLAROIDS ══ */}
            <section className="relative pt-20 bg-[#1a252f]">
                <div className="container mx-auto px-6 max-w-4xl relative z-10 pb-20">
                    <FadeSection className="mb-14 px-4 md:px-0">
                        <h3 className="text-[#f7a048] italic font-bold text-lg md:text-xl mb-2">Who We Serve</h3>
                        <p className="text-[13px] text-white/90 mb-8 leading-relaxed max-w-2xl">
                            Autoom Studio is your go-to solution for starting an online business. Our user-friendly platform is designed for everyone, making it easy for you to shine online effortlessly.
                        </p>

                        <h3 className="text-[#f7a048] italic font-bold text-lg md:text-xl mb-4">Why Choose Autoom Studio</h3>
                        <div className="space-y-2 text-[13px] text-white/90 max-w-3xl pl-4 md:pl-8">
                            <p><strong className="text-white">Experience:</strong> Benefit from our extensive industry knowledge.</p>
                            <p><strong className="text-white">Simplicity:</strong> Our platform is designed for easy navigation and quick adoption.</p>
                            <p><strong className="text-white">Innovation:</strong> Stay ahead with cutting-edge features and tools.</p>
                            <p><strong className="text-white">Support:</strong> Our dedicated team is always ready to assist you on your social media journey.</p>
                        </div>
                    </FadeSection>
                </div>

                {/* Three overlapping polaroid image cards outside of the restricted container */}
                <div className="w-full relative h-[180px] z-20">
                    <div className="absolute left-0 right-0 -top-12 flex flex-col md:flex-row justify-center items-center md:items-start gap-8 z-20">
                        <PolaroidCard
                            imgUrl="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=800&auto=format&fit=crop"
                            className="md:-rotate-3 md:translate-y-8 shadow-xl"
                        />
                        <PolaroidCard
                            imgUrl="/images/smp_polaroid_2.png"
                            className="scale-105 shadow-2xl z-30"
                        />
                        <PolaroidCard
                            imgUrl="/images/smp_polaroid_3.png"
                            className="md:rotate-3 md:translate-y-4 shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* ══ 6. BOTTOM BANNER ══ */}
            <section className="pt-24 pb-20 bg-white relative">
                <div className="container mx-auto px-6 max-w-5xl flex items-start gap-6 relative z-10">
                    <div className="hidden md:block absolute left-4 lg:-left-20 top-0">
                        {/* Optional Back Tab decoration */}
                        <Link to="/services" className="bg-[#f0a944] hover:bg-[#d89639] text-white text-xs font-bold py-2 px-5 rounded shadow transition-colors">
                            Back
                        </Link>
                    </div>

                    <FadeSection className="flex-1 md:pl-24">
                        <h2 className="text-2xl md:text-[26px] font-extrabold text-black mb-1.5 tracking-tight">Autoom Studio: Ideal for Agencies</h2>
                        <p className="text-gray-900 text-sm md:text-[15px] font-medium mb-3">Elevate your social media with Autoom Studio. Join us now!</p>
                        <p className="text-gray-600 text-[13px] leading-relaxed max-w-3xl">
                            Simplify social media for your clients with our agency platform. Create a branded dashboard and effortlessly involve your clients in the process.
                        </p>
                    </FadeSection>
                </div>
            </section>

            {/* ══ 7. READY TO COLLABORATE CTA ══ */}
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

