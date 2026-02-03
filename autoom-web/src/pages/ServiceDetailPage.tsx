import { Link, useLocation } from 'react-router-dom';
import { services } from '@/data/services';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export function ServiceDetailPage() {
    const { pathname } = useLocation();

    // Recursive function to find service by path
    const findServiceByPath = (items: any[], path: string): any => {
        for (const item of items) {
            if (item.path === path) return item;
            if (item.subServices) {
                const found = findServiceByPath(item.subServices, path);
                if (found) return found;
            }
        }
        return null;
    };

    const service = findServiceByPath(services, pathname);

    if (!service) {
        return (
            <Section>
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
                    <Link to="/services">
                        <Button>Back to Services</Button>
                    </Link>
                </div>
            </Section>
        );
    }

    const Icon = service.icon;

    return (
        <>
            <div className="bg-muted/30 py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <Link to="/services" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
                    </Link>

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className={`p-4 rounded-xl ${service.bgColor} ${service.color}`}>
                            <Icon className="w-12 h-12" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">{service.title}</h1>
                            <p className="text-xl text-muted-foreground max-w-3xl">{service.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Overview</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Detailed description for <strong>{service.title}</strong> will be populated here.
                                Typically this includes process, methodology, and specific deliverables.
                                Refering to PRD, this section would contain 500-800 words of content.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                        <span>Benefit point {i} related to {service.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-card border rounded-xl p-6 shadow-sm sticky top-24">
                            <h3 className="text-xl font-bold mb-4">Ready to Start?</h3>
                            <p className="text-sm text-muted-foreground mb-6">
                                Get a custom quote for your {service.title} needs today.
                            </p>
                            <Link to="/contact">
                                <Button className="w-full mb-3">Request Quote</Button>
                            </Link>
                            <Link to="/contact">
                                <Button variant="outline" className="w-full">Schedule Demo</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
