import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import softwareTestingBg from '@/assets/software_testing_bg.jpg';
import ecommerceBg from '@/assets/ecommerce_bg.jpg';

const softwareServices = [
    {
        id: 'web-development',
        title: 'Web Development',
        content: {
            title: 'Web Development',
            description: (
                <>
                    <p className="mb-4">
                        <strong>Tailored Solutions:</strong> Our web development services are customized to meet your specific business needs. We collaborate closely with you to understand your goals and deliver a website that aligns perfectly with your brand and objectives.
                    </p>
                    <p className="mb-4">
                        <strong>Responsive Design:</strong> Ensuring a seamless user experience across devices is our priority. We create responsive websites that adapt to various screen sizes, providing a consistent and user-friendly interface on desktops, tablets, and mobile devices.
                    </p>
                    <p className="mb-4">
                        <strong>Scalability:</strong> As your business grows, so should your website. We build scalable solutions that can easily accommodate increasing traffic and evolving requirements, ensuring your online presence remains robust and efficient.
                    </p>
                    <p className="mb-4">
                        <strong>SEO Optimization:</strong> We integrate search engine optimization (SEO) best practices into our web development process. This means your website is not just visually appealing but also optimized for search engines, improving its visibility and ranking on search result pages.
                    </p>
                    <p className="mb-4">
                        <strong>Security First:</strong> Security is paramount in today's digital landscape. Our web development team implements industry-leading security measures, safeguarding your website and user data from potential threats, giving you peace of mind.
                    </p>
                </>
            ),
            learnMoreText: 'Learn more about Web Development...',
            learnMoreLink: '/web-development-services-info',
            accessLink: '/contact',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop'
        }
    },
    {
        id: 'ui-ux-design',
        title: 'UI/UX Design',
        content: {
            title: 'UI/UX Design',
            description: (
                <>
                    <p className="mb-4">
                        <strong>User-Centric Approach:</strong> Our UI/UX design services prioritize the end-user. We employ a user-centric approach to create interfaces that are not only aesthetically pleasing but also intuitive, ensuring a positive and engaging experience for your audience.
                    </p>
                    <p className="mb-4">
                        <strong>Wireframing and Prototyping:</strong> Before finalizing the design, we create wireframes and prototypes to visualize the user journey. This allows us to iterate and refine the design based on feedback, ensuring the final product meets your expectations.
                    </p>
                    <p className="mb-4">
                        <strong>Consistency Across Platforms:</strong> Whether it's a website or a mobile app, we maintain design consistency across different platforms. This ensures a seamless transition for users moving between various devices and platforms.
                    </p>
                    <p className="mb-4">
                        <strong>Accessibility and Inclusivity:</strong> Our designs prioritize accessibility and inclusivity, making your applications usable by a diverse audience. We adhere to accessibility standards to ensure that everyone, regardless of ability, can interact with your digital products.
                    </p>
                    <p className="mb-4">
                        <strong>Continuous Improvement:</strong> Design is an iterative process. We believe in continuous improvement and refinement based on user feedback, analytics, and evolving design trends, ensuring your UI/UX remains contemporary and effective.
                    </p>
                </>
            ),
            learnMoreText: 'Learn more about UI/UX Design...',
            learnMoreLink: '/ui-ux-design-services-info',
            accessLink: '/contact',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop'
        }
    },
    {
        id: 'custom-software',
        title: 'Custom Software Development',
        content: {
            title: 'Custom Software Development',
            description: (
                <>
                    <p className="mb-4">
                        <strong>Requirements Analysis:</strong> We begin by thoroughly understanding your business requirements. This analysis forms the foundation for developing a custom software solution that addresses your specific needs.
                    </p>
                    <p className="mb-4">
                        <strong>Agile Development Methodology:</strong> Our development process follows agile methodologies, allowing for flexibility and adaptability throughout the project. This ensures that your software can evolve in tandem with your business.
                    </p>
                    <p className="mb-4">
                        <strong>Integration Capabilities:</strong> We design custom software with integration in mind. Whether it's connecting with existing systems or third-party applications, our solutions seamlessly integrate into your ecosystem, enhancing overall operational efficiency.
                    </p>
                    <p className="mb-4">
                        <strong>User Training and Support:</strong> The launch of the software is not the end of our engagement. We provide comprehensive user training and ongoing support to ensure your team is well-equipped to use and maximize the benefits of the custom software.
                    </p>
                    <p className="mb-4">
                        <strong>Scalable and Future-Ready:</strong> Anticipating future needs, we build software solutions that are scalable and adaptable. This future-ready approach ensures that your custom software remains relevant and effective as your business evolves.
                    </p>
                </>
            ),
            learnMoreText: 'Learn more about Custom Software Development...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2000&auto=format&fit=crop'
        }
    },
    {
        id: 'open-source',
        title: 'Open Source Software Customization',
        content: {
            title: 'Open Source Software Customization',
            description: (
                <>
                    <p className="mb-4">
                        <strong>Open Source Expertise:</strong> Our team has extensive experience working with open-source software. We customize and optimize these solutions to align with your business processes, harnessing the power of community-driven software.
                    </p>
                    <p className="mb-4">
                        <strong>Cost-Effective Solutions:</strong> Leveraging open-source software allows for cost savings, as you benefit from the robust foundation created by the open-source community. Our customization services ensure that the software meets your specific requirements.
                    </p>
                    <p className="mb-4">
                        <strong>Community Support:</strong> With open-source solutions, you not only get the software but also access to a vast community of developers. We ensure that your customized solution remains compatible with updates and is well-supported by the community.
                    </p>
                    <p className="mb-4">
                        <strong>Flexibility and Customization:</strong> Open-source software provides a flexible base, and we take advantage of this by tailoring the software to suit your unique needs. Our customization services ensure that the software aligns seamlessly with your workflows.
                    </p>
                    <p className="mb-4">
                        <strong>Security Compliance:</strong> While customizing open-source software, we prioritize security compliance. We implement measures to secure the software and ensure that your data and operations remain protected.
                    </p>
                </>
            ),
            learnMoreText: 'Learn more about Open Source Customization...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=2000&auto=format&fit=crop'
        }
    },
    {
        id: 'mobile-app',
        title: 'Mobile App Development',
        content: {
            title: 'Mobile App Development',
            description: (
                <>
                    <p className="mb-4">
                        <strong>Platform Diversity:</strong> Our mobile app development services cover a broad spectrum of platforms, including iOS and Android. We create native or cross-platform apps, ensuring that your business reaches users across different devices.
                    </p>
                    <p className="mb-4">
                        <strong>User-Centric Design:</strong> Just like our UI/UX design services, mobile app development follows a user-centric approach. We design apps that are not only visually appealing but also intuitive and easy to navigate, enhancing the overall user experience.
                    </p>
                    <p className="mb-4">
                        <strong>Performance Optimization:</strong> Mobile apps need to be fast and responsive. We optimize the performance of your mobile apps, ensuring smooth functionality and quick load times to keep users engaged.
                    </p>
                    <p className="mb-4">
                        <strong>Integration with Device Features:</strong> To enhance user experience, we integrate your mobile apps with device features such as cameras, GPS, and sensors. This allows for innovative and feature-rich applications that leverage the capabilities of modern smartphones.
                    </p>
                    <p className="mb-4">
                        <strong>App Store Compliance:</strong> Our mobile app development process includes adherence to App Store guidelines and policies. We ensure that your app meets the necessary criteria for a successful launch on platforms like the Apple App Store and Google Play.
                    </p>
                </>
            ),
            learnMoreText: 'Learn more about Mobile App Development...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop'
        }
    },
    {
        id: 'software-testing',
        title: 'Software Testing and Quality Assurance',
        content: {
            title: 'Software Testing and Quality Assurance',
            description: (
                <>
                    <p className="mb-4">
                        <strong>Functional Testing:</strong> We conduct rigorous testing of each feature and functionality in your software to ensure that it operates precisely as intended. This involves thorough examination of the system's behavior, input, and output to verify that it meets the specified requirements.
                    </p>
                    <p className="mb-4">
                        <strong>Non-Functional Testing:</strong> Our non-functional testing focuses on aspects beyond mere functionality. We assess and guarantee the usability, performance, security, and compatibility of your software, ensuring a seamless user experience across different platforms.
                    </p>
                    <p className="mb-4">
                        <strong>Automation Testing:</strong> We harness the power of intelligent automation to expedite your testing processes. By automating repetitive and time-consuming tasks, we accelerate testing cycles, enhance accuracy, and allow your resources to focus on more strategic and innovative aspects of your software development.
                    </p>
                    <p className="mb-4">
                        <strong>Mobile App Testing:</strong> Specializing in both native and hybrid mobile apps, we conduct comprehensive testing to ensure flawless performance across various devices. Our goal is to provide your users with a consistent and reliable experience, regardless of the device they are using.
                    </p>
                    <p className="mb-4">
                        <strong>API Testing:</strong> We ensure seamless integration and data integrity by thoroughly testing the Application Programming Interfaces (APIs) of your software. This guarantees that different components of your application can communicate effectively and that data is transferred accurately between them.
                    </p>
                    <p className="mb-4">
                        <strong>Security Audits:</strong> Our security audits are designed to identify and mitigate potential vulnerabilities in your software. By conducting thorough assessments, we protect both your software and the sensitive data of your users, ensuring a secure and trustworthy environment.
                    </p>
                </>
            ),
            learnMoreText: 'Learn more about Software Testing and Quality Assurance...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: softwareTestingBg
        }
    },
    {
        id: 'ecommerce',
        title: 'E-commerce Solutions',
        content: {
            title: 'E-commerce Solutions',
            description: (
                <>
                    <p className="mb-4">
                        <strong>User-Friendly Online Stores:</strong> Our e-commerce solutions prioritize creating user-friendly and visually appealing online stores. We design interfaces that facilitate easy navigation, product discovery, and a seamless checkout process.
                    </p>
                    <p className="mb-4">
                        <strong>Secure Transactions:</strong> Security is paramount in e-commerce. We implement robust security measures to ensure that transactions on your online store are secure and that customer data is protected from potential threats.
                    </p>
                    <p className="mb-4">
                        <strong>Inventory Management:</strong> Efficient inventory management is crucial for e-commerce success. Our solutions include features for inventory tracking, order management, and automated alerts to keep your online store running smoothly.
                    </p>
                    <p className="mb-4">
                        <strong>Payment Gateway Integration:</strong> We integrate popular and secure payment gateways to facilitate smooth and secure transactions. This ensures that your customers have a variety of payment options and can trust the security of their financial information.
                    </p>
                    <p className="mb-4">
                        <strong>Scalability for Growth:</strong> As your business grows, your e-commerce platform should grow with it. Our solutions are scalable, allowing your online store to handle increased traffic, a growing product catalog, and evolving business needs.
                    </p>
                </>
            ),
            learnMoreText: 'Learn more about E-Commerce Solutions...',
            learnMoreLink: '#',
            accessLink: '/contact',
            image: ecommerceBg
        }
    }
];

export function SoftwareDevelopmentPage() {
    const [activeTab, setActiveTab] = useState(softwareServices[0].id);
    const activeService = softwareServices.find(s => s.id === activeTab) || softwareServices[0];

    return (
        <div className="bg-white min-h-screen relative">
            {/* Social Media Sidebar - Fixed Right */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1">
                <a href="#" className="bg-[#3b5998] p-2 text-white hover:w-12 w-10 transition-all duration-300 flex items-center justify-center overflow-hidden">
                    <Facebook size={20} />
                </a>
                <a href="#" className="bg-[#000000] p-2 text-white hover:w-12 w-10 transition-all duration-300 flex items-center justify-center overflow-hidden">
                    <Twitter size={20} />
                </a>
                <a href="#" className="bg-[#0077b5] p-2 text-white hover:w-12 w-10 transition-all duration-300 flex items-center justify-center overflow-hidden">
                    <Linkedin size={20} />
                </a>
                <a href="#" className="bg-[#d62976] p-2 text-white hover:w-12 w-10 transition-all duration-300 flex items-center justify-center overflow-hidden">
                    <Instagram size={20} />
                </a>
                <a href="#" className="bg-[#ff0000] p-2 text-white hover:w-12 w-10 transition-all duration-300 flex items-center justify-center overflow-hidden">
                    <Youtube size={20} />
                </a>
            </div>

            {/* Hero Section */}
            <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#facc15] mb-4 drop-shadow-lg font-serif">
                        Software Development Services
                    </h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto py-16 px-4">
                <h2 className="text-center text-xl font-bold text-[#f59e0b] mb-8">Our Speciality</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {/* Left Column: Navigation Tabs */}
                    <div className="lg:col-span-1 flex flex-col gap-4 h-full">
                        {softwareServices.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveTab(service.id)}
                                className={cn(
                                    "w-full text-center px-6 py-4 rounded font-bold text-sm lg:text-base transition-all duration-200 flex-1 flex items-center justify-center",
                                    activeTab === service.id
                                        ? "bg-[#65d36e] text-white" // Green Active
                                        : "bg-[#ebb446] text-white hover:opacity-90" // Orange Inactive
                                )}
                            >
                                {service.title}
                            </button>
                        ))}
                    </div>

                    {/* Right Column: Active Service Content */}
                    <div className="lg:col-span-2 h-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="relative rounded-xl overflow-hidden min-h-[400px] h-full text-white p-8 md:p-12 flex flex-col justify-center"
                            >
                                {/* Background Image with Overlay */}
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={activeService.content.image}
                                        alt={activeService.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/70"></div>
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h2 className="text-3xl font-bold mb-4 text-white">{activeService.content.title}</h2>

                                    <div className="text-gray-200 mb-2 leading-relaxed">
                                        {activeService.content.description}
                                    </div>

                                    <a
                                        href={activeService.content.learnMoreLink}
                                        className="text-[#facc15] font-bold hover:underline mb-8 block text-sm"
                                    >
                                        {activeService.content.learnMoreText}
                                    </a>

                                    <div className="flex justify-center mt-6">
                                        <Button className="bg-[#facc15] hover:bg-[#eab308] text-black font-bold px-8 py-2 rounded-full">
                                            Access Our Solutions
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
