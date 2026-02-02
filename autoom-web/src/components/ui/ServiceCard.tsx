import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/Card';

interface ServiceCardProps {
    service: {
        id: string;
        title: string;
        description: string;
        icon: any;
        color: string;
        bgColor: string;
        path: string;
    };
}

export function ServiceCard({ service }: ServiceCardProps) {
    const Icon = service.icon;

    return (
        <Link to={service.path} className="group block h-full">
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-transparent hover:border-primary/20 overflow-hidden relative">
                <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity bg-primary")} />
                <CardContent className="p-6 flex flex-col h-full">
                    <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110", service.bgColor, service.color)}>
                        <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6 flex-grow">{service.description}</p>

                    <div className="flex items-center text-sm font-medium text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
