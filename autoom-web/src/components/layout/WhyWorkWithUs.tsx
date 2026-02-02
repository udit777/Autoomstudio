import { Section } from '@/components/ui/Section';
import { Clock, Rocket, Coins, TrendingUp } from 'lucide-react';

export function WhyWorkWithUs() {
    const benefits = [
        {
            icon: Clock,
            title: "Free Up Your Time",
            description: "Stop wasting hours on repetitive tasks and manual processes. Autoom Studio lets you automate the mundane, freeing your time and energy to focus on what truly matters: growing your business."
        },
        {
            icon: Rocket,
            title: "Boost Your Efficiency",
            description: "Imagine getting twice as much done in half the time! With automated workflows, you'll see a dramatic increase in efficiency across your entire operation. Say goodbye to errors and delays, and hello to smooth, seamless processes."
        },
        {
            icon: Coins,
            title: "Save Money, See Results",
            description: "Automating manual tasks isn't just about saving time, it's about saving money. Reduce your workforce overhead, eliminate costly errors, and optimize your resource allocation. See a tangible return on your investment as your business starts running like a well-oiled machine."
        },
        {
            icon: TrendingUp,
            title: "Gain A Competitive Edge",
            description: "In today's fast-paced world, efficiency is key to success. By embracing automation, you'll gain a significant edge over your competitors who are still bogged down in manual processes. Stay ahead of the curve and position your business for future growth."
        }
    ];

    return (
        <Section className="bg-black text-white py-10">
            <div>
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 font-heading text-white">Why Work With Us</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="text-center flex flex-col items-center border-2 border-white rounded-sm p-6 h-full transition-transform duration-300 hover:scale-105">
                            <div className="bg-white rounded-xl p-3 mb-4 shadow-lg inline-flex items-center justify-center">
                                <benefit.icon className="w-6 h-6 text-black" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                            <p className="text-white text-xs leading-relaxed opacity-90">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
