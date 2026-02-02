import { Section } from '@/components/ui/Section';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { services } from '@/data/services';

export function ServicesPage() {
    return (
        <Section>
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Our Services</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Explore our comprehensive range of automation and IT solutions designed to propel your business forward.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </Section>
    );
}
