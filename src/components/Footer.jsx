import { Hospital, Phone } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className='w-full bg-white border-t border-gray-200 mt-auto font-sans'>
            <div className='max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div className='space-y-3'>
                    <div className='flex items-center gap-2 text-blue-600 font-bold text-lg'>
                        <Hospital className='w-6 h-6'></Hospital>
                        <span>Medicare Connect</span>
                    </div>
                    <p className='text-xs text-gray-500
                     leading-relaxed'>
                        Connecting patients with trusted medical professionals quickly and seamlessly.
                    </p>
                </div>

                <div className='space-y-3'>
                    <h4 className='text-xs font-bold uppercase tracking-wider text-gray-400'>Quick Links</h4>
                    <ul className='space-y-2 text-sm text-gray-600'>
                        <li><Link href='/doctors' className='hover:text-blue-600 transition'>Find a Doctor</Link></li>
                        <li><Link href='/dashboard/overview' className='hover:text-blue-600 transition'>My DashBoard</Link></li>
                        <li><Link href='/about' className='hover:text-blue-600 transition'>My DashBoard</Link></li>
                    </ul>
                </div>

                <div className='space-y-3'>
                    <h4 className='text-xs font-bold uppercase tracking-wider text-gray-400'>Contact & support</h4>
                    <div className='space-y-2 text-sm text-gray-600'>
                        <p className='flex items-center gap-2'>support@medicare.com</p>
                        <div className='bg-rose-50 border border-rose-100 rounded-lg p-2.5 text-rose-700 mt-1'>
                        <p className='text-[10px] font-bold uppercase tracking-wide'>Emergency Hotline</p>
                        <p className='font-bold text-base flex items-center gap-1.5 mt-0.5'><Phone className='w-4 h-4'></Phone>+0880123445667</p>
                        </div>
                    </div>
                </div>

                <div className='space-y-3'>
                    <h4 className='text-xs font-bold uppercase tracking-wider text-gray-400'>Follow Us</h4>
                    <div className='flex gap-3 text-gray-500'>
                        <a href="https://facebook.com" target='_black' className='hover:text-blue-600 transition text-sm flex items-center' gap-1>Facebook</a>
                        <a href="https://linkedin.com" target='_black' className='hover:text-blue-600 transition text-sm flex items-center gap-1'>LinkedIn</a>
                    </div>
                </div>

            </div>
            <div className='border-t border-gray-100 bg-gray-50/50 py-4 text-center text-xs text-gray-400'>
                &copy; {new Date().getFullYear()} Medicare Connect All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;