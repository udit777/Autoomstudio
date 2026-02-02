import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParticleBackground } from '@/components/ui/ParticleBackground';

export function HomeHero() {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <section ref={ref} className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#050511] pt-20 pb-10">

            {/* Background Glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#8B5CF6]/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#D946EF]/20 rounded-full blur-[120px]" />
            <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px]" />

            <ParticleBackground />

            {/* Content */}
            <div className="container relative z-10 px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center max-w-5xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-white mb-6 leading-tight">
                        Welcome to <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            Autoom Studio
                        </span>
                    </h1>

                    <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-4">
                        Your Trusted Partner for Industry 4.0 with "Business Process and IT Automation Services."
                    </p>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="mb-12"
                    >
                        <div className="text-5xl md:text-8xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-[#D946EF] via-[#8B5CF6] to-[#06B6D4] pb-2">
                            We Manage.
                        </div>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Link to="/contact">
                            <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D946EF] to-[#8B5CF6] rounded-full text-white font-semibold text-lg hover:shadow-[0_0_30px_rgba(217,70,239,0.5)] transition-all duration-300">
                                Book a demo call
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </motion.div>

                </motion.div>
            </div>

        </section>
    );
}
