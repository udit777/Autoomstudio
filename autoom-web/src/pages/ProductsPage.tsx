import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import rxIcon from '@/assets/products/ai_prescription_saathi.png';
import ausomeIcon from '@/assets/products/ausomemgr.png';

export function ProductsPage() {
    return (
        <div className="bg-[#050511] min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
                {/* Background Glows */}
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#8B5CF6]/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#D946EF]/20 rounded-full blur-[120px]" />

                <ParticleBackground />

                <div className="container relative z-10 px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight text-white mb-6 leading-tight">
                            Digital Product <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] to-[#8B5CF6]">
                                & App Showcase
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
                            Innovative solutions for modern businesses
                        </p>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
                            AutoomStudio's Products
                        </h2>

                        <Button
                            className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-6 rounded-lg text-lg font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                        >
                            Get Started
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Products Grid */}
            <Section className="bg-white py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">

                    {/* Card 1: AI Prescription Saathi */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9] to-[#3B82F6] opacity-90" />
                        <div className="relative p-10 flex flex-col items-center text-center h-[500px] justify-center">

                            <div className="mb-8 transform group-hover:scale-110 transition-transform duration-300">
                                <img src={rxIcon} alt="AI Prescription Saathi" className="w-32 h-32 object-contain drop-shadow-2xl rounded-2xl" />
                            </div>

                            <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-md">
                                AI Prescription
                            </h3>
                            <h3 className="text-3xl font-bold text-white mb-12 drop-shadow-md">
                                Saathi
                            </h3>

                            <Link to="/products/ai-prescription-saathi" className="w-full max-w-sm">
                                <Button
                                    className="bg-[#3B82F6] border-2 border-white hover:bg-white hover:text-[#3B82F6] text-white px-6 py-6 rounded-lg font-semibold w-full transition-colors duration-300"
                                >
                                    Visit AI Prescription Saathi Website <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Card 2: AuSoMeMgr */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300"
                    >
                        {/* Background Image Container */}
                        <div className="absolute inset-0">
                            <img src={ausomeIcon} alt="AuSoMeMgr Background" className="w-full h-full object-cover opacity-100 transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        </div>

                        <div className="relative p-10 flex flex-col items-center text-center h-[500px] justify-center">

                            {/* Spacer to push content down or center it */}
                            <div className="flex-grow flex items-center justify-center">
                                <h3 className="text-4xl font-bold text-white mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] tracking-wide">
                                    AuSoMeMgr
                                </h3>
                            </div>

                            <Button
                                className="bg-[#0f4c75] border border-[#3282b8] hover:bg-[#3282b8] text-white px-6 py-6 rounded-lg font-semibold w-full max-w-sm transition-colors duration-300 backdrop-blur-sm bg-opacity-90"
                            >
                                Visit AuSoMeMgr Website <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </motion.div>

                </div>
            </Section>
        </div>
    );
}
