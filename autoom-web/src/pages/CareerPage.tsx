import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { MapPin, LayoutGrid } from 'lucide-react';

const JobCard = ({ title, location, responsibilities }: { title: string; location: string; responsibilities: string }) => (
    <div className="bg-[#FAF3E0] rounded-lg p-6 border border-gray-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
        <h3 className="text-gray-800 font-medium text-lg mb-4">{title}</h3>

        <div className="flex items-center justify-between text-xs text-gray-600 font-semibold mb-4">
            <div className="flex items-center gap-1">
                <LayoutGrid className="w-3 h-3" />
                <span>Autoom Studio</span>
            </div>
            <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{location}</span>
            </div>
        </div>

        <div className="mb-2">
            <h4 className="text-gray-800 font-bold text-xs mb-1">Responsibilities</h4>
            <p className="text-gray-500 text-[10px] leading-relaxed line-clamp-4">
                {responsibilities}
            </p>
        </div>

        <div className="mt-auto pt-4 text-center">
            <button className="bg-[#4D4D4D] hover:bg-[#333333] text-white text-[10px] font-bold py-2 px-6 rounded uppercase tracking-wider transition-colors">
                View and Apply
            </button>
        </div>
    </div>
);

export function CareerPage() {
    const jobs = [
        {
            title: "Social Media Manager",
            location: "Bhubaneswar",
            responsibilities: "Autoom Studio, a dynamic technology company specialized in IT services and digital marketing, is seeking a Social Media Manager to enhance brand visibility and engagement. As a Social Media Manager, you will play a crucial role in creating and implementing social media strategies across various platforms to drive..."
        },
        {
            title: "Senior Python Developer",
            location: "Bhubaneswar",
            responsibilities: "As a Senior Python Developer at Autoom Studio, you will play a key role in developing Python-based applications and solutions to meet client requirements. Collaborating with our team, you will design, implement, and test software solutions, integrating front-end development with back-end Python code for web applications. Your ..."
        },
        {
            title: "Full Stack Developer",
            location: "Bhubaneswar",
            responsibilities: "Autoom Studio is a technology company that specializes in IT services, digital marketing, social media solutions, IT infrastructure services, IT helpdesk, and communication support services. Our mission is to empower businesses with cutting-edge automation solutions tailored to their unique needs."
        },
        {
            title: "Creative Content Writer",
            location: "Bhubaneswar",
            responsibilities: "Autoom Studio is a technology company that offers services in information technology, digital marketing, social media solutions, IT infrastructure, IT helpdesk, and communication support. Our mission is to provide cutting-edge automation solutions to empower businesses and help them succeed in today's competitive market."
        }
    ];

    return (
        <div className="min-h-screen bg-white pt-[57px] font-sans">
            {/* Header Banner NOT NEEDED based on design, it flows directly into Hero content */}

            {/* Hero Section */}
            <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://autoomstudio.com/wp-content/uploads/2024/06/11236198_11370-scaled.jpg')" }}>
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg font-serif">
                        Careers
                    </h1>
                    <p className="text-white text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                        Join our team and help build the future.
                    </p>
                </div>
            </div>

            {/* Current Job Openings Section */}
            <Section className="py-20 bg-[#FDF2E9]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-gray-600 text-sm font-medium">Current Job Openings</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {jobs.map((job, index) => (
                            <JobCard key={index} {...job} />
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}
