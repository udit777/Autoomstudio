import { Section } from '@/components/ui/Section';

export function Industry40RevolutionBlogPage() {
    return (
        <div className="min-h-screen bg-white font-sans pt-[57px]">
            {/* Hero Section */}
            <div className="bg-[#5b806d] text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(ellipse at 50% -20%, rgba(255,255,255,0.2) 0%, transparent 60%)'
                }}></div>

                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h1 className="text-xl md:text-2xl font-bold mb-6 mx-auto max-w-3xl leading-snug">
                        Unraveling the Tapestry of Progress: From Industry 1.0 to Industry 4.0
                    </h1>
                    <p className="text-sm md:text-base leading-relaxed max-w-4xl mx-auto font-light tracking-wide text-gray-50">
                        In the symphony of progress, each industrial revolution has played a distinct note. Now, at the doorstep of Industry 4.0, a melange of digital innovations is poised to redefine not just how we manufacture but how we perceive industry itself. This blog unravels the intricate threads of this journey, exploring pivotal moments and multifaceted impacts that have brought us to the precipice of this technological revolution.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <Section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">

                    <div className="text-center mb-10">
                        <h2 className="text-lg md:text-xl font-bold text-gray-900">
                            The Industrial Revolution Phases:
                        </h2>
                    </div>

                    {/* First Image Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="text-center group">
                            <div className="block h-40 md:h-32 rounded-sm overflow-hidden mb-3">
                                <img src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop" alt="Industry 1.0" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 filter grayscale" />
                            </div>
                            <p className="text-sm text-gray-500 font-medium">Industry 1.0</p>
                        </div>
                        <div className="text-center group">
                            <div className="block h-40 md:h-32 rounded-sm overflow-hidden mb-3">
                                <img src="https://images.unsplash.com/photo-1518985287714-d1f56a5966a3?q=80&w=2070&auto=format&fit=crop" alt="Industry 2.0" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 filter grayscale" />
                            </div>
                            <p className="text-sm text-gray-500 font-medium">Industry 2.0</p>
                        </div>
                        <div className="text-center group">
                            <div className="block h-40 md:h-32 rounded-sm overflow-hidden mb-3">
                                <img src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2069&auto=format&fit=crop" alt="Industry 3.0" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 filter grayscale" />
                            </div>
                            <p className="text-sm text-gray-500 font-medium">Industry 3.0</p>
                        </div>
                    </div>

                    <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-<15px> font-light mx-auto max-w-4xl mb-16">
                        <div>
                            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">1. Industry 1.0: Mechanical Production (Late 18th Century)</h3>
                            <p className="text-gray-500 mb-2">Steam and Spindles: The Genesis of Mechanized Production</p>
                            <p className="text-gray-600">The birth of industrialization witnessed the rise of steam power and mechanization, laying the foundation for the transition from manual craftsmanship to mechanized processes. Water and steam-driven machines heralded a shift in production capabilities, allowing for increased output and efficiency.</p>
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">2. Industry 2.0: Mass Production (Early 20th Century)</h3>
                            <p className="text-gray-500 mb-2">Assembly Lines and Electrification: The Symphony of Mass Production</p>
                            <p className="text-gray-600">Henry Ford's assembly line and electrification marked an era of standardization and efficiency, enabling industries to meet global demands on an unprecedented scale. The introduction of electrical power transformed factories into dynamic hubs of production, with the rhythmic hum of machinery driving economic growth.</p>
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">3. Industry 3.0: Automation (Late 20th Century)</h3>
                            <p className="text-gray-500 mb-2">Digital Frontiers: Automation and the Rise of Computers</p>
                            <p className="text-gray-600">The late 20th century ushered in an age of automation, where computers and electronics transformed manufacturing processes, paving the way for the digital era. The integration of computers and automated systems brought about unprecedented precision, allowing for the optimization of industrial processes and the birth of computer-controlled manufacturing.</p>
                        </div>
                    </div>

                    <div className="text-center mb-10 pt-4">
                        <h2 className="text-lg md:text-xl font-bold text-gray-900">
                            The Path to Industry 4.0:
                        </h2>
                    </div>

                    {/* Second Image Row (4 images) */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        <div className="block h-32 md:h-28 rounded-sm overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" alt="Path 1" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="block h-32 md:h-28 rounded-sm overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Path 2" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="block h-32 md:h-28 rounded-sm overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" alt="Path 3" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="block h-32 md:h-28 rounded-sm overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" alt="Path 4" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                        </div>
                    </div>

                    <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-<15px> font-light mx-auto max-w-4xl mb-16">
                        <div>
                            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">1. Digitalization and Connectivity</h3>
                            <p className="text-gray-500 mb-2">Wired for Progress: Digitization as the Catalyst</p>
                            <p className="text-gray-600">The journey to Industry 4.0 began with the digitization of information and processes, intertwining industries in a web of connectivity facilitated by computers and the internet. Digitalization became the catalyst for a paradigm shift, where data became the lifeblood of operations, laying the groundwork for a connected and intelligent future.</p>
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">2. Big Data and Analytics</h3>
                            <p className="text-gray-500 mb-2">Data Alchemy: Turning Information into Insight</p>
                            <p className="text-gray-600">Big Data analytics emerged as the compass navigating industries through the sea of information, providing invaluable insights for decision-making and process optimization. The ability to process and analyze vast amounts of data became a cornerstone of Industry 4.0, enabling businesses to derive actionable insights and make informed strategic decisions.</p>
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">3. Internet of Things (IoT)</h3>
                            <p className="text-gray-500 mb-2">Smart Machines, Intelligent Factories: The Rise of IoT</p>
                            <p className="text-gray-600">The Internet of Things transformed inert machinery into intelligent entities, creating a living ecosystem where machines sensed and responded to changes in their environment. IoT became the connective tissue, enabling real-time data acquisition, monitoring, and control. Smart sensors embedded in machines and products formed an intricate network, fostering a responsive and adaptive manufacturing environment.</p>
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">4. Artificial Intelligence (AI) and Machine Learning (ML)</h3>
                            <p className="text-gray-500 mb-2">Learning Machines: AI and ML in the Driver's Seat</p>
                            <p className="text-gray-600">Artificial Intelligence and Machine Learning became the brains behind Industry 4.0, enabling machines not only to process data but to learn from it, optimizing decision-making processes. Advanced algorithms allowed systems to recognize patterns, make predictions, and continuously improve, creating a dynamic and self-optimizing industrial landscape.</p>
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">5. Cyber-Physical Systems (CPS)</h3>
                            <p className="text-gray-500 mb-2">Beyond Digital: The Integration of Physical and Virtual</p>
                            <p className="text-gray-600">The convergence of the physical and digital domains marked the dawn of Cyber-Physical Systems, orchestrating a seamless coordination of physical processes and computational capabilities. CPS became the bridge between the tangible world of machinery and the virtual realm of digital information, blurring the lines between the physical and digital domains.</p>
                        </div>
                    </div>

                    <div className="text-center mb-10 pt-4">
                        <h2 className="text-lg md:text-xl font-bold text-gray-900">
                            The Impact of Industry 4.0:
                        </h2>
                    </div>

                    <div className="space-y-8 text-gray-700 leading-relaxed text-sm md:text-<15px> font-light mx-auto max-w-4xl">
                        <div>
                            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">1. Increased Efficiency and Productivity</h3>
                            <p className="text-gray-500 mb-2">Efficiency Unleashed: Automation, Analytics, and Real-time Monitoring</p>
                            <p className="text-gray-600">Industry 4.0 is synonymous with efficiency, with automated processes, real-time monitoring, and predictive analytics driving productivity to new heights. Automation and robotics optimize routine tasks, while analytics provide insights for continuous improvement, reducing downtime and enhancing overall operational efficiency.</p>
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">2. Customization and Flexibility</h3>
                            <p className="text-gray-500 mb-2">Crafting the Future: Mass Customization at Scale</p>
                            <p className="text-gray-600">Mass customization becomes the norm as Industry 4.0 enables highly personalized products through adaptive production systems and real-time analytics. Digital twin simulations and flexible manufacturing processes empower industries to tailor products to individual customer needs, fostering a new era of customization on a mass scale.</p>
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">3. Predictive Maintenance</h3>
                            <p className="text-gray-500 mb-2">Predicting the Unpredictable: The Crystal Ball of Industry 4.0</p>
                            <p className="text-gray-600">Predictive maintenance, powered by IoT sensors and AI algorithms, transforms maintenance into a proactive, data-driven endeavor, minimizing downtime and reducing costs. Machines equipped with sensors continuously monitor their health, allowing for timely interventions and preventing unexpected failures, ultimately extending the lifespan of equipment.</p>
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">4. Workforce Transformation</h3>
                            <p className="text-gray-500 mb-2">Humans and Machines in Harmony: Redefining Roles</p>
                            <p className="text-gray-600">As machines take on routine tasks, the human workforce undergoes a transformation, shifting towards skilled roles and fostering a symbiotic relationship with intelligent systems. Upskilling becomes imperative as human workers collaborate with machines in areas such as data analysis, system optimization, and complex decision-making, marking a paradigm shift in the nature of work.</p>
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">5. Global Connectivity</h3>
                            <p className="text-gray-500 mb-2">From Local to Global: The Interconnected Web of Industry 4.0</p>
                            <p className="text-gray-600">Industry 4.0 transcends borders, fostering collaboration and integration across global supply chains through digital platforms, cloud computing, and interconnected ecosystems. Real-time communication and information exchange enable seamless coordination among stakeholders, promoting innovation and efficiency on a global scale.</p>
                        </div>

                        <div className="pt-6">
                            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">Conclusion:</h3>
                            <p className="text-gray-500 mb-2">Architects of a New Dawn: Embracing Industry 4.0</p>
                            <p className="text-gray-600">As we stand at the crossroads of history and progress, the journey to Industry 4.0 is not merely a technological evolution but a paradigm shift in how we conceive and conduct industry. Embracing Industry 4.0 is not just a choice; it is an imperative that opens the door to a future where efficiency, customization, and sustainability converge in a harmonious dance of progress. As pioneers of this revolution, we are not just witnessing change; we are the architects of a new industrial dawn, shaping a future where technology serves humanity and propels us towards collective progress.</p>
                        </div>
                    </div>

                </div>
            </Section>
        </div>
    );
}
