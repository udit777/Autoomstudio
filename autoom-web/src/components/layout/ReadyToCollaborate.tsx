import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export function ReadyToCollaborate() {
    return (
        <Section className="bg-gradient-to-r from-emerald-500 to-lime-300 py-6">
            <div className="flex flex-col items-center text-center">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 font-heading">
                    Ready to collaborate?
                </h2>
                <Link to="/contact">
                    <Button
                        variant="outline"
                        size="lg"
                        className="bg-transparent text-white border-white hover:bg-white hover:text-emerald-600 font-semibold px-8 py-4 text-base rounded-sm"
                    >
                        Request a Demo
                    </Button>
                </Link>
            </div>
        </Section>
    );
}
