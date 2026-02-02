import { useState, useEffect } from 'react';
import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { User, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        client: "TechCorp India",
        role: "CTO",
        content: "Autoom Studio transformed our legacy systems. We saw a 40% increase in operational efficiency within 3 months.",
        metrics: "40% Efficiency Gain",
        industry: "Enterprise"
    },
    {
        id: 2,
        client: "RetailFlow Solutions",
        role: "Operations Head",
        content: "The BPA solutions provided were game-changing. Manual errors dropped to near zero.",
        metrics: "99.9% Accuracy",
        industry: "Retail"
    },
    {
        id: 3,
        client: "SecureFirst",
        role: "CISO",
        content: "Their cybersecurity monitoring gives us peace of mind. Truly professional and proactive team.",
        metrics: "24/7 Monitoring",
        industry: "Security"
    }
];

export function SuccessStories() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Section className="bg-muted/30">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-heading mb-4">Client Success Stories</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">See how we've helped businesses across India unleash their potential through automation.</p>
            </div>

            <div className="max-w-4xl mx-auto relative h-[300px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="absolute w-full"
                    >
                        <Card className="bg-card border-none shadow-xl">
                            <CardContent className="p-8 md:p-12 flex flex-col items-center text-center">
                                <div className="bg-primary/10 p-3 rounded-full mb-6 text-primary">
                                    <Quote className="w-8 h-8" />
                                </div>
                                <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                                    "{testimonials[current].content}"
                                </blockquote>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                                        <User className="text-gray-500" />
                                    </div>
                                    <div className="text-left">
                                        <div className="font-bold">{testimonials[current].client}</div>
                                        <div className="text-sm text-muted-foreground">{testimonials[current].role} • {testimonials[current].industry}</div>
                                    </div>
                                </div>

                                <div className="mt-8 px-4 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold">
                                    Result: {testimonials[current].metrics}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`w-3 h-3 rounded-full transition-colors ${idx === current ? 'bg-primary' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </Section>
    )
}
