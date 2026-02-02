import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SubService {
    title: string;
    gradient: string;
}

interface ServiceSectionProps {
    title: string;
    description: string;
    subServices: SubService[];
    imageSrc: string;
    imageAlt: string;
    reversed?: boolean;
}

export function ServiceSection({
    title,
    description,
    subServices,
    imageSrc,
    imageAlt,
    reversed = false,
}: ServiceSectionProps) {
    return (
        <section className="py-20 bg-[#FFF8E1] overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 flex items-center justify-center gap-2 text-[#004D40]">
                        {title}
                        <span className="text-2xl opacity-50">❖</span>
                    </h2>
                </div>

                <div className={`flex flex-col lg:flex-row gap-12 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>

                    {/* Content Side */}
                    <div className="flex-1 space-y-8">
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {description}
                        </p>

                        <div>
                            <h3 className="text-xl font-bold font-heading mb-6 flex items-center gap-2 text-[#004D40]">
                                Our Services <span className="text-lg opacity-50">❖</span>
                            </h3>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {subServices.map((sub, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        className={cn(
                                            "aspect-square rounded-xl p-4 flex flex-col justify-end text-white relative overflow-hidden shadow-lg cursor-pointer",
                                            sub.gradient
                                        )}
                                    >
                                        <span className="font-semibold text-sm leading-tight z-10">{sub.title}</span>

                                        {/* Decorative overlay */}
                                        <div className="absolute inset-0 bg-black/10 z-0" />
                                        <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white/20 rounded-full blur-xl" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="flex-1 w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2"
                        >
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                className="w-full h-auto rounded-xl object-cover"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
