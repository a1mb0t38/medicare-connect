import { ArrowRight, Shield, ShieldCheck } from 'lucide-react';
import React from 'react';

const BannerPage = () => {
    return (
        <div className='min-h-screen bg-[#e0ecff]'>
            <main className='max-w-7xl mx-auto px-8 py-12 lg:py-20  grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

                {/* leftside */}
                <div className='space-y-6'>
                    <span className='inline-block bg-[#6cf5e0] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wide'>
                        Trusted by 50, 000+ Patients
                    </span>

                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0b1d30] leading-tight'>
                        Personalized HealthCare, <br />
                        <span className='text-[#006691]'>One Click Away</span>
                    </h1>

                    <p className='text-gray-600 text-base sm:text-lg max-w-xl leading-relaxed'>
                        Connect with top-rated specialists, manage medical recors, and book appointments instantly.
                        Experience healthcare designed for the modern world.
                    </p>


                    {/* Action Button */}
                    <div className='flex flex-wrap items-center gap-6 pt-2'>
                        <button className='bg-[#bc0b3b] text-white font-semibold px-6 py-3.5 rounded-xl shadow-md hover:bg-[#780624] transition-colors duration-200 cursor-pointer'>
                            Book an Appointment
                        </button>
                        <button className='flex items-center space-x-2 font-bold text-[#00659f] hover:text-blue-800 transition-colors group cursor-pointer'>
                            <span>How it works</span>
                            <ArrowRight className='h-5 w-5 transform group-hover:translate-x-1 transition-transform'></ArrowRight>
                        </button>
                    </div>
                    
                </div>

                {/* rightside */}
                <div className='relative flex justify-center lg:justify-end'>
                    <div className='relative w-full max-w-lg lg:max-w-xl aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl'>
                        <img src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Doctor image" />

                        <div className='absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-lg flex items-center space-x-3 border border-white/20'>
                            <div className='p-2 bg-[#2ce3b7]/20 rounded-xl text-[#0f4c43]'>
                                <ShieldCheck className='h-6 w-6'></ShieldCheck>
                            </div>
                            <div>
                                <p className='text-[11px] uppercase tracking-wider text-gray-500 font-bold'>
                                    AI Health Assistant
                                </p>
                                <p className='text-sm font-extrabold text-[#0f2d4a]'>Always Active</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BannerPage;