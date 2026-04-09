import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ServicePopupForm } from '../components/ui/ServicePopupForm';
import socialManagementHero from '@/assets/social_management_hero.jpg';

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

/* ─── Social icons SVGs ─── */
const SocialIcons = {
    facebook: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
    ),
    instagram: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
    ),
    twitter: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    ),
    linkedin: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    ),
    youtube: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
    ),
    pinterest: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
        </svg>
    ),
};

function FloatingIcon({ icon, color, style }: { icon: React.ReactNode; color: string; style: React.CSSProperties }) {
    return (
        <div
            className="absolute rounded-2xl shadow-2xl flex items-center justify-center animate-bounce"
            style={{ width: 48, height: 48, background: color, padding: 10, animationDuration: '3s', ...style }}
        >
            <div className="text-white w-full h-full">{icon}</div>
        </div>
    );
}

function FadeSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    const ref = useFadeIn();
    return (
        <div
            ref={ref}
            className={className}
            style={{ opacity: 0, transform: 'translateY(32px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
        >
            {children}
        </div>
    );
}


export function SocialMediaManagementInfoPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white font-sans pt-[57px] overflow-x-hidden">
            <ServicePopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

            {/* ══ 1. HERO ══ */}
            <section className="relative min-h-[580px] flex items-center overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
                <div className="absolute inset-0">
                    <img src={socialManagementHero}
                        alt="hero" className="w-full h-full object-cover opacity-20" />
                    <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10 container mx-auto px-6 max-w-7xl py-20 flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 max-w-xl" style={{ animation: 'fadeInLeft 0.8s ease forwards' }}>
                        <span className="inline-block bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 border border-orange-500/30">
                            Social Media Services
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
                            Social Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">Management</span>
                        </h1>
                        <p className="text-lg text-orange-300 font-semibold mb-4">Upgrade your social media management with us</p>
                        <p className="text-gray-300 text-[15px] leading-relaxed mb-8">
                            Transform your social media presence with strategic management. Engage your audience and achieve business goals effortlessly.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact" className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-300 text-white font-bold px-8 py-3.5 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30 text-sm">
                                Get Started →
                            </Link>
                            <Link to="/social-media-services" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-3.5 rounded-xl transition-all text-sm backdrop-blur-sm">
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 relative flex items-center justify-center min-h-[340px] w-full max-w-md">
                        <div className="w-72 h-72 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop"
                                alt="Dashboard" className="w-60 h-60 object-cover rounded-2xl opacity-70" />
                        </div>
                        <FloatingIcon icon={SocialIcons.facebook} color="#1877F2" style={{ top: '8%', left: '0%', animationDuration: '3.2s', animationDelay: '0s' }} />
                        <FloatingIcon icon={SocialIcons.instagram} color="#E1306C" style={{ top: '2%', right: '10%', animationDuration: '2.8s', animationDelay: '0.4s' }} />
                        <FloatingIcon icon={SocialIcons.twitter} color="#000000" style={{ bottom: '25%', left: '2%', animationDuration: '3.6s', animationDelay: '0.2s' }} />
                        <FloatingIcon icon={SocialIcons.linkedin} color="#0077B5" style={{ top: '42%', right: '0%', animationDuration: '3s', animationDelay: '0.6s' }} />
                        <FloatingIcon icon={SocialIcons.youtube} color="#FF0000" style={{ bottom: '8%', right: '14%', animationDuration: '2.6s', animationDelay: '0.3s' }} />
                    </div>
                </div>
            </section>

            {/* ══ 2. KEY FEATURES — asymmetric layout ══ */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <FadeSection className="text-center mb-8">
                        <h2 className="text-sm font-bold text-gray-600 uppercase tracking-widest">Our Key Features:</h2>
                    </FadeSection>

                    {/* Left big + Right two stacked — same height via flex */}
                    <FadeSection className="flex flex-col md:flex-row gap-3 md:h-[440px]">

                        {/* LEFT – Unified Social Hub */}
                        <div className="group relative rounded-xl overflow-hidden md:w-1/2 h-80 md:h-full shadow-lg cursor-pointer flex-shrink-0">
                            <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=900&auto=format&fit=crop"
                                alt="Unified Social Hub"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"></div>
                            <div className="absolute inset-0 bg-[#e47b25] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Default: bottom label */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-200">
                                <h3 className="text-white font-bold text-xl text-center">Unified Social Hub</h3>
                            </div>

                            {/* Hover content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                                <p className="text-white text-[15px] leading-relaxed mb-6">
                                    Simplify social media management with our user-friendly dashboard. Easily oversee all platforms, monitor online visibility, and stay organized effortlessly. Streamline workload, track your digital footprint, and optimize online presence from one intuitive interface. Boost efficiency and effectiveness with our comprehensive solution.
                                </p>
                                <button onClick={() => setIsPopupOpen(true)}
                                    className="bg-[#005e70] hover:bg-[#004a59] text-white font-semibold px-8 py-2.5 rounded text-sm transition-colors">
                                    Get Started
                                </button>
                            </div>
                        </div>

                        {/* RIGHT – two stacked cards */}
                        <div className="flex flex-col gap-3 flex-1">
                            {/* Smart Scheduling */}
                            <div className="group relative rounded-xl overflow-hidden flex-1 min-h-[160px] shadow-lg cursor-pointer">
                                <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=900&auto=format&fit=crop"
                                    alt="Smart Scheduling"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                <div className="absolute inset-0 bg-[#e47b25] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                {/* Default label */}
                                <div className="absolute bottom-0 left-0 right-0 p-5 group-hover:opacity-0 transition-opacity duration-200">
                                    <h3 className="text-white font-bold text-base text-center">Smart Scheduling</h3>
                                </div>
                                {/* Hover content */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                                    <p className="text-white text-[13px] leading-relaxed mb-4">
                                        Effortlessly schedule social media posts across platforms. Strategize content calendar for optimal audience engagement. Simplify social media planning for effective outreach.
                                    </p>
                                    <button onClick={() => setIsPopupOpen(true)} className="bg-[#005e70] hover:bg-[#004a59] text-white font-semibold px-6 py-2 rounded text-sm transition-colors">
                                        Get Started
                                    </button>
                                </div>
                            </div>

                            {/* Complete Data Analysis */}
                            <div className="group relative rounded-xl overflow-hidden flex-1 min-h-[160px] shadow-lg cursor-pointer">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop"
                                    alt="Complete Data Analysis"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                <div className="absolute inset-0 bg-[#e47b25] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                {/* Default label */}
                                <div className="absolute bottom-0 left-0 right-0 p-5 group-hover:opacity-0 transition-opacity duration-200">
                                    <h3 className="text-white font-bold text-base text-center">Complete Data Analysis</h3>
                                </div>
                                {/* Hover content */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                                    <p className="text-white text-[13px] leading-relaxed mb-4">
                                        Analyze data, monitor metrics, evaluate campaigns. Optimize strategy with actionable social media insights. Drive informed decisions, enhance performance through valuable analytics.
                                    </p>
                                    <button onClick={() => setIsPopupOpen(true)} className="bg-[#005e70] hover:bg-[#004a59] text-white font-semibold px-6 py-2 rounded text-sm transition-colors">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </FadeSection>
                </div>
            </section>

            {/* ══ 3. LEARN MORE CTA ══ */}
            <section className="relative py-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-[#302b63] to-indigo-900"></div>
                <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(249,115,22,0.5) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(139,92,246,0.5) 0%, transparent 50%)' }}>
                </div>
                <FadeSection className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6 px-4">
                    <p className="text-gray-200 text-sm tracking-wide">Learn more about our services</p>
                    <Link to="/social-media-services"
                        className="inline-block bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-300 text-white font-bold px-8 py-3 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30 text-sm tracking-wide">
                        Explore More
                    </Link>
                </FadeSection>
            </section>

            {/* ══ 4. ADDITIONAL FEATURES ══ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <FadeSection className="text-center mb-12">
                        <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">More Capabilities</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">Everything You Need</h2>
                    </FadeSection>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {/* 1. Monitoring Social Channels */}
                        <FadeSection>
                            <div className="group relative rounded-xl overflow-hidden h-60 shadow-md cursor-pointer">
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop"
                                    alt="Monitoring Social Channels"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-transparent transition-all duration-300"></div>
                                <div className="absolute inset-0 bg-[#e47b25] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Default state: label at bottom */}
                                <div className="absolute inset-0 flex flex-col justify-end p-5 group-hover:opacity-0 transition-opacity duration-200">
                                    <h3 className="text-white font-extrabold text-sm mb-1 text-center">Monitoring Social Channels</h3>
                                </div>

                                {/* Hover state: paragraph + button */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                                    <p className="text-white text-[12px] leading-relaxed mb-4">
                                        Stay updated, listen for brand mentions, use audience insights, respond strategically for effective brand management and communication. Enhance brand visibility and engagement.
                                    </p>
                                    <button onClick={() => setIsPopupOpen(true)} className="bg-[#005e70] hover:bg-[#004a59] text-white font-semibold px-6 py-2 rounded text-xs transition-colors">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </FadeSection>

                        {/* 2. Content Creation Support */}
                        <FadeSection>
                            <div className="group relative rounded-xl overflow-hidden h-60 shadow-md cursor-pointer" style={{ transitionDelay: '100ms' }}>
                                <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=900&auto=format&fit=crop"
                                    alt="Content Creation Support"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-transparent transition-all duration-300"></div>
                                <div className="absolute inset-0 bg-[#e47b25] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Default state: label at bottom */}
                                <div className="absolute inset-0 flex flex-col justify-end p-5 group-hover:opacity-0 transition-opacity duration-200">
                                    <h3 className="text-white font-extrabold text-sm mb-1 text-center">Content Creation Support</h3>
                                </div>

                                {/* Hover state: paragraph + button */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                                    <p className="text-white text-[12px] leading-relaxed mb-4">
                                        Explore a variety of templates, images, and creative concepts to craft engaging content that effortlessly connects with your audience. Unlock the power of captivating ideas for seamless resonance with your viewers.
                                    </p>
                                    <button onClick={() => setIsPopupOpen(true)} className="bg-[#005e70] hover:bg-[#004a59] text-white font-semibold px-6 py-2 rounded text-xs transition-colors">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </FadeSection>

                        {/* 3. Collective Center */}
                        <FadeSection>
                            <div className="group relative rounded-xl overflow-hidden h-60 shadow-md cursor-pointer" style={{ transitionDelay: '200ms' }}>
                                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=900&auto=format&fit=crop"
                                    alt="Collective Center"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-transparent transition-all duration-300"></div>
                                <div className="absolute inset-0 bg-[#e47b25] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Default state: label at bottom */}
                                <div className="absolute inset-0 flex flex-col justify-end p-5 group-hover:opacity-0 transition-opacity duration-200">
                                    <h3 className="text-white font-extrabold text-sm mb-1 text-center">Collective Center</h3>
                                </div>

                                {/* Hover state: paragraph + button */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                                    <p className="text-white text-[12px] leading-relaxed mb-4">
                                        Collaborate effectively by defining roles, monitoring efforts, and aligning social media strategies across all team members for optimal success. Streamline workflows and boost productivity with seamless teamwork.
                                    </p>
                                    <button onClick={() => setIsPopupOpen(true)} className="bg-[#46869c] hover:bg-[#346a7d] text-white font-semibold px-6 py-2 rounded text-xs transition-colors">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </FadeSection>
                    </div>
                </div>
            </section>

            {/* ══ 5. WHY AUTOOM STUDIO ══ */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 max-w-[1400px] flex flex-col gap-6">

                    {/* Block 1 */}
                    <FadeSection>
                        <div className="bg-[#dfa03b] rounded-xl flex flex-col md:flex-row items-center p-10 md:p-14 gap-10 shadow-sm">
                            <div className="flex-1 text-white md:pr-10">
                                <p className="font-bold text-sm mb-3">Why Autoom Studio?</p>
                                <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight">Experience a <br className="hidden md:block" />significant evolution in <br className="hidden md:block" />social media <br className="hidden md:block" />marketing.</h2>
                                <p className="text-white/90 text-sm leading-relaxed max-w-md">
                                    Experts in Social Media Management, navigating the dynamic online world with years of hands-on experience.
                                </p>
                            </div>
                            <div className="flex-1 flex justify-center md:justify-end">
                                <div className="bg-[#f5f8ff] rounded-2xl p-6 w-full max-w-md shadow-inner flex items-center justify-center min-h-[260px] relative overflow-hidden">
                                    <img src="/images/market_evolution.png" alt="Marketing Evolution" className="absolute inset-0 w-full h-full object-cover opacity-90" />
                                </div>
                            </div>
                        </div>
                    </FadeSection>

                    {/* Block 2 */}
                    <FadeSection>
                        <div className="bg-[#dfa03b] rounded-xl flex flex-col-reverse md:flex-row items-center p-10 md:p-14 gap-10 shadow-sm">
                            <div className="flex-1 flex justify-center md:justify-start">
                                <div className="bg-[#8397fa] rounded-2xl p-6 w-full max-w-md shadow-inner flex items-center justify-center min-h-[320px] relative overflow-hidden border-4 border-[#8397fa]">
                                    <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop" alt="Optimal User Experience" className="absolute inset-0 w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="flex-1 text-white md:pl-10">
                                <h2 className="text-2xl md:text-3xl font-semibold mb-8 leading-tight max-w-sm">Designing for an optimal user experience.</h2>
                                <div className="space-y-6">
                                    <div className="flex gap-4 items-start">
                                        <svg className="w-[18px] h-[18px] mt-0.5 flex-shrink-0 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p className="text-sm text-white/90">Analytics available for Instagram, Facebook, Twitter, YouTube, LinkedIn, and Pinterest.</p>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <svg className="w-[18px] h-[18px] mt-0.5 flex-shrink-0 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p className="text-sm text-white/90">Choose a plan matching your goals. Our solution scales with your growing needs.</p>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <svg className="w-[18px] h-[18px] mt-0.5 flex-shrink-0 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p className="text-sm text-white/90">Always here for you, 24/7 support. Any questions or issues, we're ready to assist.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeSection>

                    {/* Block 3 */}
                    <FadeSection>
                        <div className="bg-[#dfa03b] rounded-xl flex flex-col md:flex-row items-center p-10 md:p-14 gap-10 shadow-sm">
                            <div className="flex-1 text-white md:pr-10">
                                <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-tight">Trusted collaborations <br className="hidden md:block" /> and integrations with <br className="hidden md:block" /> leading platforms.</h2>
                                <p className="text-white/90 text-[13px] leading-relaxed max-w-sm">
                                    Autoom Studio builds strong partnerships and integrations, helping you connect with customers across platforms effortlessly.
                                </p>
                            </div>
                            <div className="flex-1 flex justify-center md:justify-end">
                                <div className="bg-[#e7e1fe] rounded-2xl p-6 w-full max-w-md shadow-inner flex items-center justify-center min-h-[260px] relative overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" alt="Trusted Collaborations" className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-multiply" />
                                </div>
                            </div>
                        </div>
                    </FadeSection>

                    {/* Block 4 */}
                    <FadeSection>
                        <div className="bg-[#dfa03b] rounded-xl flex flex-col md:flex-row items-center p-10 md:p-14 gap-10 shadow-sm">
                            <div className="flex-1 text-white md:pr-10">
                                <h2 className="text-2xl md:text-[22px] font-semibold mb-6 leading-tight max-w-sm">Large-scale social media solutions for businesses.</h2>
                                <p className="text-white/90 text-[13px] leading-relaxed max-w-sm">
                                    Looking for a platform your team will enjoy using? Choose Autoom Studio. Explore how it can positively influence your entire business, covering insights, competition, customer service, and analytics.
                                </p>
                            </div>
                            <div className="flex-1 flex justify-center md:justify-end">
                                <div className="bg-white rounded-2xl w-full max-w-sm shadow-inner flex flex-col items-center justify-center min-h-[260px] relative overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=800&auto=format&fit=crop" alt="Large scale solutions" className="absolute inset-0 w-full h-full object-cover opacity-90" />
                                </div>
                            </div>
                        </div>
                    </FadeSection>

                </div>
            </section>

            {/* ══ 6. INTEGRATIONS ══ */}
            <section className="py-14 bg-white overflow-hidden">
                <FadeSection className="container mx-auto px-6 max-w-4xl text-center mb-10">
                    <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Integrations</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-3">Platforms We Manage</h2>
                </FadeSection>
                <div className="relative">
                    <div className="flex gap-8 items-center" style={{ animation: 'slideLogos 18s linear infinite', width: 'max-content' }}>
                        {[
                            { name: 'Instagram', icon: SocialIcons.instagram, color: 'from-pink-500 to-purple-600' },
                            { name: 'Facebook', icon: SocialIcons.facebook, color: 'from-blue-600 to-blue-700' },
                            { name: 'Twitter/X', icon: SocialIcons.twitter, color: 'from-gray-800 to-black' },
                            { name: 'LinkedIn', icon: SocialIcons.linkedin, color: 'from-blue-500 to-blue-600' },
                            { name: 'YouTube', icon: SocialIcons.youtube, color: 'from-red-500 to-red-600' },
                            { name: 'Pinterest', icon: SocialIcons.pinterest, color: 'from-red-600 to-pink-600' },
                            { name: 'Instagram', icon: SocialIcons.instagram, color: 'from-pink-500 to-purple-600' },
                            { name: 'Facebook', icon: SocialIcons.facebook, color: 'from-blue-600 to-blue-700' },
                            { name: 'Twitter/X', icon: SocialIcons.twitter, color: 'from-gray-800 to-black' },
                            { name: 'LinkedIn', icon: SocialIcons.linkedin, color: 'from-blue-500 to-blue-600' },
                            { name: 'YouTube', icon: SocialIcons.youtube, color: 'from-red-500 to-red-600' },
                            { name: 'Pinterest', icon: SocialIcons.pinterest, color: 'from-red-600 to-pink-600' },
                        ].map((p, i) => (
                            <div key={i} className="flex flex-col items-center gap-3 group cursor-pointer flex-shrink-0">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${p.color} p-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                                    <div className="text-white w-full h-full">{p.icon}</div>
                                </div>
                                <span className="text-xs font-semibold text-gray-500">{p.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ 7. BUSINESS SOLUTIONS ══ */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]"></div>
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(249,115,22,0.15) 0%, transparent 60%)' }}></div>
                <FadeSection className="relative z-10 container mx-auto px-6 max-w-5xl text-center">
                    <span className="inline-block bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 border border-orange-500/30">Enterprise Ready</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                        Large-scale Social Media Solutions{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">for Businesses</span>
                    </h2>
                    <p className="text-gray-300 text-[15px] max-w-3xl mx-auto leading-relaxed mb-10">
                        Helping businesses improve engagement, insights, customer support, and marketing automation. From startups to Fortune 500s, our platform scales with your ambitions.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
                        {[
                            { value: '500+', label: 'Clients Worldwide' },
                            { value: '10M+', label: 'Posts Published' },
                            { value: '98%', label: 'Retention Rate' },
                            { value: '24/7', label: 'Support Available' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <div className="text-3xl font-extrabold text-orange-400 mb-1">{stat.value}</div>
                                <div className="text-gray-400 text-xs">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                    <Link to="/contact"
                        className="inline-block bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-300 text-white font-bold px-10 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30 text-sm tracking-wide">
                        Start Your Free Consultation →
                    </Link>
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
            <style>{`
                @keyframes fadeInLeft { from { opacity:0; transform:translateX(-30px); } to { opacity:1; transform:translateX(0); } }
                @keyframes slideLogos { from { transform:translateX(0); } to { transform:translateX(-50%); } }
            `}</style>
        </div>
    );
}
