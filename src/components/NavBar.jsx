import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <div>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a>Item 1</a></li>
                    <li>
                        <a>Parent</a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li>
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

                </div>
                <div className='flex items-center gap-2 font-semibold'>
                    <button className='btn text-white bg-[#0EA5E9]'><Link href='/login'>Login</Link></button>
                    <button className='btn text-white bg-[#0EA5E9]'><Link href='/register'>Register</Link></button>
                </div>
                {/* <div className="flex gap-2">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
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
            </div> */}
            </div>
        </div>
    );
};

export default NavBar;