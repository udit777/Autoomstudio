import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Feature {
    title: string;
    description: string;
    keyFeatures: string[];
    howWeWork: string;
}

interface WhyChooseItem {
    title: string;
    description: string;
}

interface ServiceInfoPageProps {
    data: {
        title: string;
        introTitle: string;
        intro: string;
        features: Feature[];
        whyChooseUs: WhyChooseItem[];
    };
}

export function ServiceInfoPage({ data }: ServiceInfoPageProps) {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-[#050511]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050511] to-transparent"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl tracking-tight">
                        {data.title}
                    </h1>
                </div>
            </div>

            {/* Intro Section */}
            <Section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">{data.introTitle}</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">{data.intro}</p>
                </div>
            </Section>

            {/* Features Section */}
            <Section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="space-y-20">
                        {data.features.map((feature, idx) => (
                            <div key={idx} className="flex flex-col lg:flex-row gap-12 items-start">
                                <div className="lg:w-1/3">
                                    <div className="bg-[#111] text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-9xl leading-none select-none">
                                            {idx + 1}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 relative z-10">{feature.title}</h3>
                                        <p className="text-gray-300 relative z-10">{feature.description}</p>
                                    </div>
                                </div>
                                <div className="lg:w-2/3 space-y-6">
                                    <div>
                                        <h4 className="text-xl font-bold text-[#EAB308] mb-3 flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5" /> Key Features
                                        </h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {feature.keyFeatures.map((kf, kIdx) => (
                                                <li key={kIdx} className="flex items-start gap-2 text-gray-700 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                                                    <ChevronRight className="w-4 h-4 text-[#EAB308] mt-1 shrink-0" />
                                                    <span className="text-sm">{kf}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-[#fffbeb] p-6 rounded-lg border border-[#fef3c7]">
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">How We Work:</h4>
                                        <p className="text-gray-700">{feature.howWeWork}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Why Choose Us */}
            <Section className="py-16 bg-[#111111] text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Us?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {data.whyChooseUs.map((item, idx) => (
                            <div key={idx} className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 hover:border-[#EAB308] transition-colors">
                                <h3 className="text-xl font-bold text-[#EAB308] mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section className="py-20 bg-[#EAB308]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Ready to Get Started?</h2>
                    <p className="text-black/80 text-xl mb-8 max-w-2xl mx-auto">
                        Contact us to discuss your goals, explore personalized solutions, and embark on a journey to maximize your social media impact.
                    </p>
                    <Link to="/contact">
                        <Button className="bg-black text-white hover:bg-gray-800 px-10 py-6 text-lg rounded-full font-bold">
                            Contact Us Today
                        </Button>
                    </Link>
                </div>
            </Section>
        </div>
    );
}
