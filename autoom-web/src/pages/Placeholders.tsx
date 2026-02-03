import { Section } from '@/components/ui/Section';

export function AboutPage() {
    return (
        <div className="pt-20">
            <Section className="bg-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-6">About Us</h1>
                    <p className="text-lg text-gray-600">Learn more about our mission and vision.</p>
                </div>
            </Section>
        </div>
    );
}

export function ContactPage() {
    return (
        <div className="pt-20">
            <Section className="bg-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
                    <p className="text-lg text-gray-600">Get in touch with our team.</p>
                </div>
            </Section>
        </div>
    );
}

export function BlogPage() {
    return (
        <div className="pt-20">
            <Section className="bg-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-6">Blog</h1>
                    <p className="text-lg text-gray-600">Read our latest updates and insights.</p>
                </div>
            </Section>
        </div>
    );
}

export function PortfolioPage() {
    return (
        <div className="pt-20">
            <Section className="bg-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-6">Portfolio</h1>
                    <p className="text-lg text-gray-600">Check out our past work and case studies.</p>
                </div>
            </Section>
        </div>
    );
}

export function CareerPage() {
    return (
        <div className="pt-20">
            <Section className="bg-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-6">Careers</h1>
                    <p className="text-lg text-gray-600">Join our team of innovators.</p>
                </div>
            </Section>
        </div>
    );
}
