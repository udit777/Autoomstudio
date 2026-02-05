import { Section } from '@/components/ui/Section';
import { Facebook, Globe, Laptop, Target, Palette, Component, Pencil, Code2, Users, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

// Custom card for Team Members based on the new design (Role Top -> Image -> Name -> Icons)
const TeamMemberCard = ({ name, role, image, isCEO = false }: { name: string; role: string; image: string; isCEO?: boolean }) => (
    <div className={`flex flex-col items-center ${isCEO ? 'mb-16' : ''}`}>
        {/* Role at the top */}
        <div className="mb-3 text-white font-medium text-lg tracking-wide">{role}</div>

        {/* Image Card */}
        <div className={`${isCEO ? 'w-56 h-64' : 'w-48 h-56'} bg-blue-50/20 rounded-xl overflow-hidden shadow-lg mb-4 border-2 border-white/20 relative group`}>
            <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>

        {/* Name */}
        <div className="text-white font-bold text-base mb-3 tracking-wide">{name}</div>

        {/* Social Icons */}
        <div className="flex gap-3">
            <div className="border border-white/60 rounded-full p-1.5 cursor-pointer hover:bg-white hover:text-orange-600 text-white transition-colors">
                <Facebook className="w-3.5 h-3.5" />
            </div>
            <div className="border border-white/60 rounded-full p-1.5 cursor-pointer hover:bg-white hover:text-orange-600 text-white transition-colors">
                {/* Using X icon logic or Twitter as fallback */}
                <Twitter className="w-3.5 h-3.5" />
            </div>
            <div className="border border-white/60 rounded-full p-1.5 cursor-pointer hover:bg-white hover:text-orange-600 text-white transition-colors">
                <Linkedin className="w-3.5 h-3.5" />
            </div>
            <div className="border border-white/60 rounded-full p-1.5 cursor-pointer hover:bg-white hover:text-orange-600 text-white transition-colors">
                <Youtube className="w-3.5 h-3.5" />
            </div>
        </div>
    </div>
);

export function AboutPage() {
    return (
        <div className="min-h-screen bg-white pt-[57px] font-sans">
            {/* Header Banner */}
            <div className="bg-[#0e5863] py-8 text-center relative z-10">
                <h1 className="text-xl font-medium text-white tracking-wide border-b-2 border-white inline-block pb-1">About Us</h1>
            </div>

            {/* Hero Section with Illustration */}
            <div className="relative bg-white pt-10 pb-0 overflow-hidden">
                <div className="container mx-auto px-4 relative flex justify-center items-end min-h-[400px]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-50/50 -z-10"></div>
                    <div className="flex items-end justify-center gap-10">
                        <img
                            src="https://cdni.iconscout.com/illustration/premium/thumb/business-team-planning-illustration-download-in-svg-png-gif-file-formats--strategy-management-project-plan-pack-people-illustrations-4620029.png"
                            alt="Building the Future"
                            className="h-[350px] w-auto object-contain z-0"
                        />
                    </div>
                    {/* Yellow Overlay Card */}
                    <div className="absolute left-4 md:left-20 top-20 md:top-1/2 bg-[#EAB308] p-8 max-w-md rounded-sm shadow-lg z-20 text-white">
                        <h2 className="text-lg font-bold mb-4">Building the future</h2>
                        <p className="text-xs leading-relaxed opacity-90">
                            Building the future is about dreaming big, setting clear goals, learning continuously, embracing change, and working with others. It's a journey of taking calculated risks, staying resilient, and making ethical choices while keeping an eye on sustainability. As you progress, inspire others, celebrate successes, and always be ready to adapt and evolve. It's a process of creating a better tomorrow, one step at a time, one choice at a time.
                        </p>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <Section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8">
                        {/* Row 1 */}
                        <div className="flex flex-col items-center text-center relative group md:border-r border-dashed border-gray-300 last:border-r-0 md:px-4">
                            <div className="mb-4"><Facebook className="w-8 h-8 text-[#EAB308]" /></div>
                            <h3 className="text-gray-500 text-sm font-medium mb-4">Social Media</h3>
                            <p className="text-gray-400 text-[10px] max-w-xs leading-relaxed">"We specialize in delivering comprehensive social media services, catering to your unique needs and goals to enhance your online presence and engagement."</p>
                        </div>
                        <div className="flex flex-col items-center text-center relative group md:border-r border-dashed border-gray-300 md:px-4">
                            <div className="mb-4"><Globe className="w-8 h-8 text-[#EAB308]" /></div>
                            <h3 className="text-gray-500 text-sm font-medium mb-4">Brand Identity</h3>
                            <p className="text-gray-400 text-[10px] max-w-xs leading-relaxed">"Brand identity shapes perceptions, fostering recognition, trust, and customer loyalty strategically."</p>
                        </div>
                        <div className="flex flex-col items-center text-center relative group md:px-4">
                            <div className="mb-4"><Laptop className="w-8 h-8 text-[#EAB308]" /></div>
                            <h3 className="text-gray-500 text-sm font-medium mb-4">Web Development</h3>
                            <p className="text-gray-400 text-[10px] max-w-xs leading-relaxed">"Web development creates functional, user-friendly websites using coding and design."</p>
                        </div>

                        {/* Divider */}
                        <div className="col-span-full hidden md:block border-b border-dashed border-gray-300 w-full my-4"></div>

                        {/* Row 2 */}
                        <div className="flex flex-col items-center text-center relative group md:border-r border-dashed border-gray-300 md:px-4">
                            <div className="mb-4"><Target className="w-8 h-8 text-[#EAB308]" /></div>
                            <h3 className="text-gray-500 text-sm font-medium mb-4">Business strategy</h3>
                            <p className="text-gray-400 text-[10px] max-w-xs leading-relaxed">"Business strategy plans goals to achieve success in a competitive environment."</p>
                        </div>
                        <div className="flex flex-col items-center text-center relative group md:border-r border-dashed border-gray-300 md:px-4">
                            <div className="mb-4"><Pencil className="w-8 h-8 text-[#EAB308]" /></div>
                            <h3 className="text-gray-500 text-sm font-medium mb-4">Web Design</h3>
                            <p className="text-gray-400 text-[10px] max-w-xs leading-relaxed">"Web design crafts visually appealing, intuitive websites for optimal user experience."</p>
                        </div>
                        <div className="flex flex-col items-center text-center relative group md:px-4">
                            <div className="mb-4"><Component className="w-8 h-8 text-[#EAB308]" /></div>
                            <h3 className="text-gray-500 text-sm font-medium mb-4">UI/UX</h3>
                            <p className="text-gray-400 text-[10px] max-w-xs leading-relaxed">"UI Research enhances design by understanding user needs and behaviors deeply."</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Team Section */}
            <div className="py-20" style={{ backgroundColor: '#E67E22' }}>
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-white text-sm mb-2 opacity-90">Meet Our Team</h2>
                        <p className="text-white text-xs italic opacity-80">"skilled professionals working together to achieve success."</p>
                    </div>

                    {/* CEO */}
                    <div className="flex justify-center mb-16">
                        <TeamMemberCard
                            name="Dilip Kumar Sahoo"
                            role="CEO"
                            image="https://Plus.unsplash.com/premium_photo-1661331671850-2565499276e0?q=80&w=2670&auto=format&fit=crop" // Professional CEO like image
                            isCEO={true}
                        />
                    </div>

                    {/* Team Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
                        <TeamMemberCard
                            name="Aditya Kumar Sahoo"
                            role="Team Leader"
                            image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop"
                        />
                        <TeamMemberCard
                            name="Smruti Ranjan Behera"
                            role="Web Developer"
                            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop"
                        />
                        <TeamMemberCard
                            name="Biswajeet Mohanty"
                            role="Web Developer"
                            image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop"
                        />
                        <TeamMemberCard
                            name="Biswajit Behera"
                            role="Web Developer"
                            image="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2574&auto=format&fit=crop"
                        />
                        <TeamMemberCard
                            name="Chinmay Kumar Nayak"
                            role="Web Developer"
                            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop"
                        />
                        <TeamMemberCard
                            name="Udit Narayan"
                            role="Web Developer"
                            image="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop"
                        />
                    </div>
                </div>
            </div>

            {/* Career Section */}
            <div className="py-20 overflow-hidden relative" style={{ backgroundColor: '#F5B041' }}>
                {/* Background Circles/Effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -left-20 top-10 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl"></div>
                    <div className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full bg-white/10 blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16">
                        {/* Left Side: Text */}
                        <div className="flex-1 text-white text-center lg:text-left">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Want to be a part of our <br className="hidden md:block" /> team?</h2>
                            <p className="text-sm opacity-90 leading-7 max-w-xl mx-auto lg:mx-0">
                                Autoom Studio invites you to be part of our dynamic and innovative crew. As a creative hub in the IT industry, we're seeking passionate and skilled individuals who are ready to push the boundaries of innovation. Join us in shaping the future of technology and explore exciting opportunities for professional growth and creativity at Autoom Studio.
                            </p>
                        </div>

                        {/* Right Side: Form */}
                        <div className="flex-1 w-full lg:max-w-xl">
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-white text-sm font-semibold mb-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Name"
                                        className="w-full px-4 py-3 rounded bg-[#FDF2E9] border-none focus:ring-2 focus:ring-[#0e5863] text-gray-700 placeholder-gray-400 text-sm"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-white text-sm font-semibold mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Email"
                                        className="w-full px-4 py-3 rounded bg-[#FDF2E9] border-none focus:ring-2 focus:ring-[#0e5863] text-gray-700 placeholder-gray-400 text-sm"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-white text-sm font-semibold mb-1" htmlFor="contact">Contact Number <span className="text-red-600">*</span></label>
                                    <input
                                        type="tel"
                                        id="contact"
                                        placeholder="Contact Number"
                                        className="w-full px-4 py-3 rounded bg-[#FDF2E9] border-none focus:ring-2 focus:ring-[#0e5863] text-gray-700 placeholder-gray-400 text-sm"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-white text-sm font-semibold mb-1" htmlFor="skills">Skills <span className="text-red-600">*</span></label>
                                    <textarea
                                        id="skills"
                                        placeholder="Mention your skills"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded bg-[#FDF2E9] border-none focus:ring-2 focus:ring-[#0e5863] text-gray-700 placeholder-gray-400 text-sm resize-none"
                                        required
                                    ></textarea>
                                </div>
                                <div>
                                    <label className="block text-white text-sm font-semibold mb-1" htmlFor="cv">Upload CV <span className="text-red-600">*</span></label>
                                    <div className="flex bg-white rounded overflow-hidden">
                                        <label className="px-4 py-2 bg-gray-200 text-gray-700 text-sm cursor-pointer hover:bg-gray-300 transition-colors">
                                            Choose File
                                            <input type="file" className="hidden" />
                                        </label>
                                        <div className="px-4 py-2 text-sm text-gray-500 bg-white flex-grow">
                                            No file chosen
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <button type="submit" className="w-full bg-[#0e5863] hover:bg-[#083d46] text-white font-bold py-3 rounded transition-colors uppercase tracking-wide">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
