import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';


const services = [
    {
        id: 'ai-workspace',
        title: 'AI Workspace',
        icon: ArrowUpRight, // Placeholder
        colSpan: 1,
    },
    {
        id: 'process-automation',
        title: 'Process Automation',
        icon: ArrowUpRight, // Placeholder
        colSpan: 1,
    },
    {
        id: 'social-media',
        title: 'Social Media',
        icon: ArrowUpRight, // Placeholder
        colSpan: 1,
    },
    {
        id: 'software-development',
        title: 'Software Development',
        icon: ArrowUpRight, // Placeholder
        colSpan: 1,
    }
];

export function SpecialServices() {
    return (
        <section className="bg-[#FFE5B4] py-16">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-4xl font-bold font-heading text-center mb-12 text-[#004D40]">
                    Special Services
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative h-48 rounded-xl overflow-hidden group cursor-pointer shadow-lg"
                        >
                            {/* Geometric Background */}
                            <div className="absolute inset-0 bg-[#00695C]"
                                style={{
                                    backgroundImage: `linear-gradient(30deg, #004D40 12%, transparent 12.5%, transparent 87%, #004D40 87.5%, #004D40),
                     linear-gradient(150deg, #004D40 12%, transparent 12.5%, transparent 87%, #004D40 87.5%, #004D40),
                     linear-gradient(30deg, #004D40 12%, transparent 12.5%, transparent 87%, #004D40 87.5%, #004D40),
                     linear-gradient(150deg, #004D40 12%, transparent 12.5%, transparent 87%, #004D40 87.5%, #004D40),
                     linear-gradient(60deg, #00897B 25%, transparent 25.5%, transparent 75%, #00897B 75%, #00897B),
                     linear-gradient(60deg, #00897B 25%, transparent 25.5%, transparent 75%, #00897B 75%, #00897B)`,
                                    backgroundSize: '80px 140px',
                                    backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px',
                                    opacity: 0.8
                                }}
                            />

                            {/* Content */}
                            <div className="absolute inset-0 flex items-center justify-center p-6 z-10 transition-transform duration-300 group-hover:scale-105">
                                <div className="flex items-center gap-2">
                                    <span className="text-white text-xl font-bold font-heading tracking-wide">
                                        {service.title}
                                    </span>
                                    <div className="bg-white/20 p-1 rounded-sm rotate-45">
                                        <ArrowUpRight className="text-white w-4 h-4 -rotate-45" />
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
