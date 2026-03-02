import { Section } from '@/components/ui/Section';

export function Industry40OverviewBlogPage() {
    return (
        <div className="min-h-screen bg-[#fcf8f2] font-sans pt-[57px]">
            {/* Hero Section */}
            <div className="bg-[#0052cc] text-white py-24 px-4 relative overflow-hidden" style={{
                background: 'linear-gradient(135deg, #0052cc 0%, #003d99 100%)'
            }}>
                <div className="absolute inset-x-0 bottom-0 h-16 bg-[#fcf8f2]" style={{
                    clipPath: 'ellipse(60% 100% at 50% 100%)'
                }}></div>
                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10 pb-8">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4 mx-auto leading-snug tracking-wide">
                        Welcome to Autoom Studio: A Glimpse Into India's Industry 4.0 Future.
                    </h1>
                    <p className="text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium text-blue-50">
                        India stands at the precipice of a transformative era, driven by the burgeoning tides of Industry 4.0. This next industrial revolution, characterized by the coalescence of cutting-edge technologies like artificial intelligence (AI), Internet of Things (IoT), big data, and robotics, promises to reshape the landscape of Indian industry, propelling it towards a future brimming with exciting possibilities.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <Section className="py-16 pb-24 bg-[#fcf8f2]">
                <div className="container mx-auto px-4">

                    {/* What is Industry 4.0? */}
                    <div className="flex flex-col md:flex-row gap-8 items-start max-w-5xl mx-auto mb-16 bg-[#fcf8f2] rounded-lg p-6 md:p-8 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)]">
                        <div className="flex-1">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                                What is Industry 4.0?
                            </h2>
                            <p className="text-gray-700 text-[15px] leading-relaxed">
                                Industry 4.0, also known as the fourth industrial revolution, represents the convergence of digital technologies with traditional manufacturing and industrial processes. It encompasses a range of innovations, including the Internet of Things (IoT), artificial intelligence (AI), big data analytics, robotics, and additive manufacturing. These technologies are driving a paradigm shift in how businesses operate, enabling greater efficiency, flexibility, and customization.
                            </p>
                        </div>
                        <div className="w-full md:w-[350px] flex-shrink-0">
                            <div className="bg-[#e6f0ff] p-4 rounded-lg overflow-hidden h-48 md:h-auto flex items-center justify-center">
                                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" alt="Industry 4.0 Automation" className="w-full h-full object-contain filter drop-shadow-md mix-blend-multiply opacity-80" />
                            </div>
                        </div>
                    </div>

                    <div className="max-w-5xl mx-auto space-y-16 text-gray-800 text-[15px] leading-relaxed">

                        {/* Evolving Technologies */}
                        <div>
                            <h2 className="text-[#e28e46] text-xl md:text-2xl font-light mb-4">
                                Evolving Technologies: Paving the Way for Industry 4.0 Journey
                            </h2>
                            <p className="font-bold underline mb-4 italic text-gray-900">
                                Several key technologies are paving the path for India's successful adoption of Industry 4.0
                            </p>

                            <div className="space-y-3 pl-1">
                                <p>
                                    <strong className="text-gray-900 font-bold">Artificial Intelligence (AI):</strong> AI is poised to revolutionize decision-making processes, optimize production lines, and foster the development of intelligent machines capable of complex tasks. This empowers Indian industries to enhance efficiency, personalize products, and cater to niche markets.
                                </p>
                                <p>
                                    <strong className="text-gray-900 font-bold">Internet of Things (IoT):</strong> By enabling seamless communication between machines and devices, the IoT fosters real-time data collection and analysis. This empowers Indian manufacturers to gain valuable insights into operations, predict potential issues, and implement proactive maintenance strategies.
                                </p>
                                <p>
                                    <strong className="text-gray-900 font-bold">Big Data Analytics:</strong> The ability to harness the power of vast datasets is crucial for Industry 4.0. Advanced analytics empower Indian businesses to identify trends, optimize resource allocation, and make data-driven decisions that fuel innovation and growth.
                                </p>
                                <p>
                                    <strong className="text-gray-900 font-bold">Robotics and Automation:</strong> The integration of robots and automation into production lines is transforming the manufacturing landscape. This not only enhances productivity and precision but also frees up human resources for higher-value tasks, fostering a future where humans and machines collaborate seamlessly.
                                </p>
                                <p>
                                    <strong className="text-gray-900 font-bold">Digital Twins:</strong> Dive into the world of digital twins and how they're transforming product development and lifecycle management by creating virtual replicas of physical assets for simulation, analysis, and optimization. Digital twins enable companies to test and refine products in a virtual environment, reducing time-to-market and minimizing costly errors and iterations.
                                </p>
                            </div>
                        </div>

                        {/* Embracing the Future */}
                        <div>
                            <h2 className="text-[#e28e46] text-xl md:text-2xl font-light mb-4">
                                Embracing the Future: Opportunities and Challenges
                            </h2>
                            <p className="font-bold underline mb-4 italic text-gray-900">
                                While Industry 4.0 presents India with immense opportunities for economic growth, job creation, and global competitiveness, challenges remain. These include:
                            </p>

                            <div className="space-y-3 pl-1">
                                <p>
                                    <strong className="text-gray-900 font-bold">Bridging the Skill Gap:</strong> Upskilling and reskilling the workforce is crucial to ensure a smooth transition into the Industry 4.0 era. Investing in education and training programs that equip individuals with the necessary skills to navigate this new industrial landscape is paramount.
                                </p>
                                <p>
                                    <strong className="text-gray-900 font-bold">Cybersecurity Concerns:</strong> The increased reliance on interconnected systems necessitates robust cybersecurity measures to safeguard sensitive data and infrastructure from potential threats.
                                </p>
                                <p>
                                    <strong className="text-gray-900 font-bold">Ensuring Equitable Access:</strong> The benefits of Industry 4.0 must be accessible to all stakeholders, including small and medium-sized enterprises (SMEs). Government initiatives and collaborative efforts can play a vital role in bridging the digital divide and ensuring inclusive growth
                                </p>
                            </div>
                        </div>

                        {/* Conclusion */}
                        <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100 mt-16">
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-gray-900 mb-3 block">Conclusion: A Collective Endeavor</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    India's successful journey into Industry 4.0 requires a collective effort from government, industry leaders, educational institutions, and individuals. By embracing innovation, investing in critical infrastructure, and fostering a collaborative environment, India can harness the immense potential of Industry 4.0 to secure its position as a global leader in the new industrial age.
                                </p>
                            </div>
                            <div className="w-full md:w-[280px] h-48 md:h-auto rounded-md overflow-hidden flex-shrink-0">
                                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" alt="Collective Endeavor" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Final Note */}
                        <div className="pt-8">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Ready to learn more?</h3>
                            <p className="mb-4">
                                This blog post is just a glimpse into the exciting world of Industry 4.0. Stay tuned for future posts where we'll delve deeper into specific technologies, explore real-world applications, and discuss the ongoing challenges and opportunities of this transformative era.
                            </p>

                            <h3 className="text-lg font-bold text-gray-900 mb-2">Stay Connected</h3>
                            <p className="mb-6">
                                Be sure to subscribe to our blog to stay updated on the latest trends, insights, and case studies in Industry 4.0. Whether you're a business leader, technologist, or enthusiast, there's something here for everyone as we journey together into the future of industry.
                            </p>

                            <p className="text-gray-600 mb-1">Thank you for joining us on this exciting adventure!</p>
                            <p className="text-gray-600 font-medium">Autoom Studio OPC Pvt Ltd</p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
