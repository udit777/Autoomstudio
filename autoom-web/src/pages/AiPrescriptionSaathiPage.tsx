import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Play } from 'lucide-react';
import rxIcon from '@/assets/products/ai_prescription_saathi.png'; // Reusing the icon we have

export function AiPrescriptionSaathiPage() {
    return (
        <div className="bg-white min-h-screen pt-20">
            {/* Header Section */}
            <div className="bg-[#004d4f] py-4 text-center">
                <h1 className="text-white text-lg font-medium">AI Prescription Saathi</h1>
            </div>

            {/* Main Content Area */}
            <Section className="py-12">
                <div className="max-w-6xl mx-auto space-y-12">

                    {/* Introduction */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#004d4f] mb-6">
                            Meet AI Prescription Saathi: Your Smart, Secure Prescription Assistant
                        </h2>
                        <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                            <p>
                                We've all been there—squinting at a doctor's half-cursive prescription, holding it up to the light, turning it sideways, or even asking the pharmacist to decode the scribbles. Trying to make sense of medication names that sound like tongue-twisters, figuring out exact dosages, or remembering whether the pill is to be taken before or after meals—it can feel like a puzzle with no key. And let's not forget the stress of misreading a dose, skipping a refill, or simply losing track amidst a busy schedule. What should be a straightforward health routine often turns into a daily guessing game.
                            </p>
                            <p>
                                That's where <strong>AI Prescription Saathi</strong> comes in—a smart, intuitive assistant designed to take the confusion out of prescriptions. By using cutting-edge AI to read and interpret even the most illegible handwriting, it transforms medical scribbles into clear, actionable information. Whether it's reminding you to take your meds on time, explaining what each medicine is for, or keeping your entire prescription history organized in one place, AI Prescription Saathi offers a seamless experience. It's like having a personal health companion in your pocket—making prescription management as effortless and natural as checking your phone for the weather.
                            </p>
                        </div>
                    </div>

                    {/* Visual Section (Placeholders) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left visual - App branding using existing icon as placeholder base */}
                        <div className="bg-gradient-to-br from-cyan-400 to-blue-600 h-[300px] md:h-[400px] rounded-lg flex flex-col items-center justify-center p-8 text-white shadow-lg">
                            <img src={rxIcon} alt="AI Prescription Saathi Logo" className="w-24 h-24 mb-4 rounded-xl shadow-md" />
                            <h3 className="text-3xl font-bold drop-shadow-md">AI Prescription</h3>
                            <h3 className="text-3xl font-bold drop-shadow-md">Saathi</h3>
                        </div>

                        {/* Right visual - Placeholder for "Easily Get Insights" */}
                        <div className="bg-blue-500 h-[300px] md:h-[400px] rounded-lg flex items-center justify-center relative overflow-hidden shadow-lg">
                            <div className="absolute inset-0 bg-blue-500 flex items-center justify-center">
                                <span className="text-white text-xl font-bold opacity-50">[Image Placeholder: Mobile App Insight View]</span>
                            </div>
                            <div className="relative z-10 text-center text-white p-6">
                                <h3 className="text-2xl font-bold mb-2">Easily Get Insights of</h3>
                                <h3 className="text-2xl font-bold">Handwritten Prescription</h3>
                            </div>
                        </div>
                    </div>

                    {/* Features & Details */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                        {/* Text Content */}
                        <div className="lg:col-span-2 space-y-8 text-gray-700">

                            {/* Why it matters */}
                            <div>
                                <h3 className="text-xl font-bold text-[#004d4f] mb-2">Why This App Matters</h3>
                                <p className="leading-relaxed text-justify">
                                    Imagine if your phone could help you stay on top of your health—like a trusted partner quietly sorting out those crumpled paper prescriptions, confusing medicine names, and scattered notes into one neat, digital place. That's exactly what <strong>AI Prescription Saathi</strong> does. It's more than just another app—it's like having a smart assistant that understands your daily health needs.
                                </p>
                                <p className="leading-relaxed mt-2 text-justify">
                                    Whether you're a patient trying to manage several medicines, a parent keeping track of your child's treatments, or a caregiver looking after an elder at home, this app is built to make life easier. It helps you avoid missed doses, reminds you about medicines, and stores your prescriptions safely so you can access them anytime, anywhere. With AI Prescription Saathi, managing health becomes less stressful and more organized—for you and your loved ones.
                                </p>
                            </div>

                            {/* How It Works */}
                            <div>
                                <h3 className="text-xl font-bold text-[#004d4f] mb-2">How It Works—With Intelligence and Ease</h3>
                                <p className="leading-relaxed text-justify">
                                    Point your phone at a prescription—handwritten or printed, in English or your local script—and let the app do the heavy lifting. Using artificial intelligence (AI) and optical character recognition (OCR), AI Prescription Saathi instantly scans and reads your prescription, pulling out medication names, dosages, frequency, doctor details, and patient info. No more typos, no more guesswork—just a clear, accurate, digital summary you can refer to anytime, anywhere.
                                </p>
                            </div>

                            {/* Key Features */}
                            <div>
                                <h3 className="text-xl font-bold text-[#004d4f] mb-3">Key Features That Make Life Simpler</h3>
                                <ul className="space-y-2 list-inside text-justify">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1.5 text-xs">◆</span>
                                        <span><strong>Prescription Scanner:</strong> Snap a photo, and the app instantly digitizes your prescription—whether it's a handwritten note from your family doctor or a printed discharge summary from the hospital.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1.5 text-xs">◆</span>
                                        <span><strong>Accurate Data Extraction:</strong> The app reliably picks out vital details like medication names, dosages, frequencies, and instructions, even from sloppy handwriting or faded prints.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1.5 text-xs">◆</span>
                                        <span><strong>Secure, Organized Records:</strong> All your prescriptions are stored securely, so you can review your medication history at a glance, share details with family or caregivers, or quickly answer your doctor's questions at your next visit.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500 mt-1.5 text-xs">◆</span>
                                        <span><strong>Peace of Mind, Not Medical Advice:</strong> AI Prescription Saathi is a record-keeper, not a doctor. It helps you keep track—but always check with your healthcare provider before making any medical decisions.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Human Touch */}
                            <div>
                                <h3 className="text-xl font-bold text-[#004d4f] mb-2">The Human Touch in Digital Health</h3>
                                <p className="leading-relaxed text-justify">
                                    What makes AI Prescription Saathi stand out isn't just the tech—it's how it makes that tech feel approachable, like a helpful friend who's got your back. The app is designed for everyone, from young adults managing their first prescription to families caring for aging parents, and even healthcare professionals looking to streamline record-keeping.
                                </p>
                                <p className="leading-relaxed mt-2 text-justify">
                                    It's simple: less stress, less confusion, more confidence. Your prescriptions, made smarter—so you can focus on what really matters: your health and peace of mind.
                                </p>
                            </div>

                        </div>

                        {/* Right Content - Visual Placeholder for Man */}
                        <div className="lg:col-span-1">
                            <div className="bg-[#fef9c3] h-full min-h-[400px] rounded-lg flex items-center justify-center relative shadow-sm border border-gray-100 p-8">
                                <div className="text-center">
                                    <span className="text-gray-400 font-bold block mb-4">[Image Placeholder]</span>
                                    <p className="text-gray-500 text-sm">Illustration of a person using the app on a phone.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Section>

            {/* CTA Footer */}
            <div className="bg-gradient-to-r from-[#249f86] to-[#ebf57c] py-16 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 drop-shadow-sm">
                        Download AI Prescription Saathi Now!
                    </h2>
                    <Button
                        size="lg"
                        className="bg-transparent hover:bg-white/10 border border-white text-white font-medium px-8 py-6 rounded-lg text-lg transition-colors shadow-none inline-flex items-center gap-2"
                    >
                        <Play className="w-5 h-5 fill-current" /> Download
                    </Button>
                </div>
            </div>
        </div>
    );
}
