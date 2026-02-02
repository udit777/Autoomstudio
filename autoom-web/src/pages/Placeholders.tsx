import { Section } from '@/components/ui/Section';

export function AboutPage() {
    return (
        <Section>
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p>Company story, mission, and team will go here.</p>
        </Section>
    );
}

export function PortfolioPage() {
    return (
        <Section>
            <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
            <p>Case studies and success stories will be displayed here.</p>
        </Section>
    );
}

export function BlogPage() {
    return (
        <Section>
            <h1 className="text-4xl font-bold mb-4">Resources & Blog</h1>
            <p>Articles, guides, and insights.</p>
        </Section>
    );
}

export function ContactPage() {
    return (
        <Section>
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p>Contact form and location details.</p>
        </Section>
    );
}
