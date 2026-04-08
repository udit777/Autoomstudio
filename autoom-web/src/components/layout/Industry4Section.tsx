
export function Industry4Section() {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden bg-white">
            {/* Background gradient orb */}
            <div className="absolute top-1/2 left-0 w-[600px] lg:w-[1000px] h-[600px] lg:h-[1000px] bg-gradient-to-br from-amber-200/40 to-orange-100/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row">
                    
                    {/* Left Column */}
                    <div className="lg:w-1/2 py-12 lg:pr-16 flex flex-col justify-center">
                        <div className="w-16 h-[2px] bg-[#4B8B9B] mb-8"></div>
                        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold font-heading text-[#004D40] leading-[1.1] mb-12 tracking-tight">
                            Autoom Studio: Driving Industry 4.0 Innovation with Seamless Automation Solutions
                        </h2>
                        <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-light">
                            Autoom Studio pioneers Industry 4.0 excellence, delivering innovative business automation solutions crafted by a dynamic team of technologists and industry experts, ensuring seamless integration and continuous optimization for heightened efficiency and success.
                        </p>
                    </div>

                    {/* Right Column: 2x2 Grid */}
                    <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 lg:border-l border-[#004D40]/20">
                        {/* Box 1 */}
                        <div className="p-8 md:p-10 border-b md:border-r border-[#004D40]/20 flex flex-col justify-start">
                            <h3 className="text-2xl font-bold text-[#004D40] mb-6 font-heading">Our Vision</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                At Autoom Studio, we envisage a future where businesses seamlessly integrate Industry 4.0 technologies to unlock unparalleled efficiency, innovation, and growth. Our vision is to be the dynamic force propelling organizations towards digital excellence, navigating the complexities of the modern business landscape with agility and precision.
                            </p>
                        </div>
                        
                        {/* Box 2 */}
                        <div className="p-8 md:p-10 border-b border-[#004D40]/20 flex flex-col justify-start">
                            <h3 className="text-2xl font-bold text-[#004D40] mb-6 font-heading">Our Mission</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Embark on a transformative journey with Autoom Studio. Our mission is to redefine the business landscape by delivering cutting-edge automation solutions. We empower businesses to streamline processes, boost productivity, and achieve sustainable success. More than just a technology provider, we're your strategic partner in navigating the digital era with confidence.
                            </p>
                        </div>

                        {/* Box 3 */}
                        <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#004D40]/20 flex flex-col justify-start">
                            <h3 className="text-2xl font-bold text-[#004D40] mb-6 font-heading">Our Process</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Autoom Studio's process begins with a comprehensive analysis of your business needs, followed by the crafting of tailored solutions leveraging Industry 4.0 principles. Our tech-savvy team ensures a seamless integration, minimizing disruption to your operations. Continuous optimization keeps you at the forefront of industry advancements, driving efficiency and success.
                            </p>
                        </div>

                        {/* Box 4 */}
                        <div className="p-8 md:p-10 flex flex-col justify-start">
                            <h3 className="text-2xl font-bold text-[#004D40] mb-6 font-heading">Our Team</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Autoom Studio thrives on the expertise of a dynamic team. Led by seasoned industry professionals, our cutting-edge technologists and client success specialists collaborate passionately to craft innovative business automation solutions. With 24/7 support, our dedicated team ensures the seamless operation of your processes, fostering success at every step.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
