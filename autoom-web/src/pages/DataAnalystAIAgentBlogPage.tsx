import { Section } from '@/components/ui/Section';

export function DataAnalystAIAgentBlogPage() {
    return (
        <div className="min-h-screen bg-white font-sans pt-[57px]">
            {/* Hero Section */}
            <div className="bg-[#5b806d] text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(ellipse at 50% -20%, rgba(255,255,255,0.2) 0%, transparent 60%)'
                }}></div>

                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h1 className="text-2xl md:text-3xl font-bold mb-6 mx-auto max-w-3xl leading-snug">
                        The Future of Data Analysis:<br />
                        AutoomStudio's<br />
                        Autonomous Data Analyst Agent
                    </h1>
                    <p className="text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-light tracking-wide text-gray-50">
                        Businesses today need to turn raw data into useful insights quickly to stay ahead of the competition. AutoomStudio's Data Analyst AI Agent helps with this. It uses our powerful AuSoMe Manager AI Language Model (LLM) to automate the whole analytics process. This smart Autonomous Agent helps you get the most out of your data with less effort.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <Section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">

                    {/* Blog Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 pb-4 inline-block">
                            Data Analyst AI Agent
                        </h2>
                    </div>

                    {/* First Image Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="text-center group">
                            <div className="block h-48 md:h-40 rounded-sm overflow-hidden mb-3">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Ausomemgr AI Agent 1.0" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <p className="text-sm text-gray-600 font-medium">Ausomemgr AI Agent 1.0</p>
                        </div>
                        <div className="text-center group">
                            <div className="block h-48 md:h-40 rounded-sm overflow-hidden mb-3">
                                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" alt="Ausomemgr AI Agent 2.0" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <p className="text-sm text-gray-600 font-medium">Ausomemgr AI Agent 2.0</p>
                        </div>
                        <div className="text-center group">
                            <div className="block h-48 md:h-40 rounded-sm overflow-hidden mb-3">
                                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" alt="Ausomemgr AI Agent 3.0" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <p className="text-sm text-gray-600 font-medium">Ausomemgr AI Agent 3.0</p>
                        </div>
                    </div>

                    {/* Text Blocks */}
                    <div className="space-y-8 text-gray-700 leading-relaxed text-base font-medium mx-auto max-w-4xl">

                        <div className="text-center mb-10">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Your 24/7 AI Powered Virtual Agent</h3>
                            <p className="text-gray-600 text-left mb-4">
                                Imagine having a brilliant data analyst who works around the clock, never takes vacation, and delivers consistent, high-quality insights tailored to your business needs. Our Autonomous Agent does exactly that—and more, functioning as a truly Intelligent Agent in your data ecosystem.
                            </p>
                            <p className="text-gray-600 text-left">
                                "We were spending days preparing reports that now take minutes," shares one of our clients. "The time and resources we've saved have allowed us to focus on implementing the insights rather than just gathering them."
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Effortless Data Preparation with AI Automation</h3>
                            <p className="text-gray-600 mb-4">
                                Data preparation typically consumes up to 80% of an analyst's time. Our AI Agent transforms this tedious process with advanced AI Automation:
                            </p>
                            <ul className="space-y-4 list-none p-0">
                                <li>
                                    <strong className="text-gray-900">Seamless multi-source integration:</strong> <span className="text-gray-600">Connect to virtually any data source—databases, spreadsheets, cloud storage, or APIs—with just a few clicks.</span>
                                </li>
                                <li>
                                    <strong className="text-gray-900">Automated cleaning and preparation:</strong> <span className="text-gray-600">The Agentic system automatically handles missing values, outliers, and inconsistencies while standardizing formats across your datasets.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Insights at Your Fingertips Through Artificial Agency</h3>
                            <p className="text-gray-600 mb-4">
                                Discovering meaningful patterns has never been easier with our Agentic technology:
                            </p>
                            <ul className="space-y-4 list-none p-0">
                                <li>
                                    <strong className="text-gray-900">Automated insights discovery:</strong> <span className="text-gray-600">The AI Powered Agent intelligently identifies trends, anomalies, and correlations without manual intervention.</span>
                                </li>
                                <li>
                                    <strong className="text-gray-900">Interactive visualizations:</strong> <span className="text-gray-600">Explore your data through dynamic, intuitive charts and graphs that bring numbers to life.</span>
                                </li>
                                <li>
                                    <strong className="text-gray-900">Using natural language for queries:</strong> <span className="text-gray-600">Just pose inquiries in straightforward English, such as "Which products performed best for us last quarter?" and receive instant answers from our Language Model.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Title for next image section */}
                        <div className="text-center pt-8 pb-4">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">Predict the Future, Plan with Confidence</h3>
                        </div>

                        {/* Second Image Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="block h-48 md:h-40 rounded-sm overflow-hidden group">
                                <img src="https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop" alt="Predict 1" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="block h-48 md:h-40 rounded-sm overflow-hidden group">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Predict 2" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="block h-48 md:h-40 rounded-sm overflow-hidden group">
                                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" alt="Predict 3" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-600 mb-4">
                                Stay ahead of market trends with:
                            </p>
                            <ul className="space-y-4 list-none p-0">
                                <li>
                                    <strong className="text-gray-900">Advanced predictive modeling:</strong> <span className="text-gray-600">Forecast outcomes with sophisticated models that improve over time.</span>
                                </li>
                                <li>
                                    <strong className="text-gray-900">Time series analysis:</strong> <span className="text-gray-600">Identify seasonal patterns and long-term trends to inform strategic planning.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-6">Share Knowledge, Drive Action:</h3>
                            <p className="text-gray-600 mb-4">
                                Transform insights into organization-wide action:
                            </p>
                            <ul className="space-y-4 list-none p-0">
                                <li>
                                    <strong className="text-gray-900">Customizable dashboards:</strong> <span className="text-gray-600">Create stunning, interactive dashboards tailored to different stakeholders' needs.</span>
                                </li>
                                <li>
                                    <strong className="text-gray-900">Automated reporting:</strong> <span className="text-gray-600">Schedule and distribute professional reports that highlight key findings.</span>
                                </li>
                                <li>
                                    <strong className="text-gray-900">Real-time alerts:</strong> <span className="text-gray-600">Receive notifications when important metrics change, enabling quick responses to emerging opportunities or challenges.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-6">Enterprise-Ready Security:</h3>
                            <p className="text-gray-600 mb-4">
                                Your data security is our priority:
                            </p>
                            <ul className="space-y-4 list-none p-0">
                                <li>
                                    <strong className="text-gray-900">End-to-end encryption:</strong> <span className="text-gray-600">Protect sensitive information throughout the analysis process.</span>
                                </li>
                                <li>
                                    <strong className="text-gray-900">Compliance-friendly:</strong> <span className="text-gray-600">Meet regulatory requirements with comprehensive audit trails and access controls.</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-6">Tailored to Your Industry:</h3>
                            <p className="text-gray-600 mb-4">
                                Whether you're in retail, healthcare, finance, or manufacturing, our industry-specific templates and KPI tracking provide immediate value, with analytics tailored to the metrics that matter most in your field.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 mt-6">Experience the Difference</h3>
                            <p className="text-gray-600 mb-4">
                                Our Data Analyst AI Agent doesn't just save you time and resources—it transforms how your entire organization approaches decision-making. Teams become more agile, insights more accessible, and your data investments finally deliver their full potential.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Ready to revolutionize your data analysis? Visit Ausomemger today to explore how our Data Analyst AI Agent can empower your business with effortless, actionable insights that drive growth and innovation.
                            </p>
                        </div>

                    </div>
                </div>
            </Section>
        </div>
    );
}
