'use client';

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {

    const { data: sesssion, isPending, error } = authClient.useSession()
    console.log("session data", sesssion)
    const user = sesssion?.user;

    return (
        <div>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <Link href='/'>Home</Link>
                    <Link href='/doctors'>Find Doctors</Link>
                    <Link href='/aboutUs'>Acout Us</Link>
                    <Link href='/contactUs'>Contact Us</Link>
                    <Link href='/dashboard'>DashBoard</Link>
                </ul>
            </div>
            <div className="flex justify-between items-center bg-white px-2 pb-2">

                <div>
                    <Link className='text-[#055c84] font-bold text-xl pl-2' href="/">MediCare Connect</Link>
                </div>
                <div className='hidden lg:flex gap-3 text-[#64748B] font-semibold'>
                    <Link href='/'>Home</Link>
                    <Link href='/doctors'>Find Doctors</Link>
                    <Link href='/aboutUs'>About Us</Link>
                    <Link href='/contactUs'>Contact Us</Link>
                    <Link href='/dashboard'>DashBoard</Link>

                </div>

                {
                    isPending ? <span className="loading loading-spinner text-error"></span> : user ? <div className="flex items-center gap-2">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                        <span className='text-[#64748B]'>Hi {user?.name}</span>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="user Image"
                                        src={user?.image} />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div> : <>
                        <div className='flex items-center gap-2 font-semibold'>
                            <button className='btn text-white bg-[#0EA5E9]'><Link href='/login'>Login</Link></button>
                            <button className='btn text-white bg-[#0EA5E9]'><Link href='/register'>Register</Link></button>
                        </div>
                    </>
                }



            </div>
        </div>
    );
};

export default NavBar;