"use client";

import Link from 'next/link';
import React from 'react';

const patientNav =[
    {key: "overview", label: "Overview", icon: "📊"},
    {key: "appointments", label: "Appointments", icon: "📅"},
    {key: "medical-records", label: "Medical Records", icon: "📋"},
    {key: "payments", label: "Payments", icon: "💳"},
    {key: "reviews", label: "Revivews", icon: "⭐"},
    {key: "settings", label: "Settings", icon: "⚙️"},
];

const doctorNav =[
    {key: "overview", label: "Overview", icon: "📊"},
    {key: "appointments", label: "Appointments", icon: "📅"},
    {key: "schedule", label: "Manage Schedule", icon: "📅"},
    {key: "prescriptions", label: "Prescriptions", icon: "💊"},
    {key: "doctor-info", label: "Doctor Information", icon: "🩺"},
    {key: "profile", label: "Profile", icon: "👤"},
    {key: "settings", label: "Settings", icon: "⚙️"},
];

const adminNav =[
    {key: "overview", label: "Overview", icon: "📊"},
    {key: "users", label: "Manage Users", icon: "👥"},
    {key: "doctors", label: "Manage Doctors", icon: "🩺"},
    {key: "appointments", label: "Appointments", icon: "📅"},
    {key: "payments", label: "Payments", icon: "💳"},
    {key: "settings", label: "Settings", icon: "⚙️"},
];



const SideBar = ({user}) => {
    // console.log("sidebar", user)
    const navItems = user?.role === "doctor" ? doctorNav : user?.role === "admin" ? adminNav : patientNav;
    return (
        <aside className='w-64 min-h-screen bg-gray-900 text-white flex flex-col'>
            {/* logo */}
            <div className='p-5 border-b border-gray-700'>
                <p className='text-xs text-blue-400 font-medium uppercase tracking-wider mb-0.5'>
                    {
                        user?.role === "doctor" ? "Doctor Portal" : user?.role === "admin" ? "Admin Portal" : "Patient Portal"
                    }
                </p>
                <h1 className='text-lg font-bold'>MediCare Connect</h1>
            </div>

            {/* user info */}
            <div className='p-4 border-b border-gray-700 flex items-center gap-3'>
                <div className='w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-sm font-semibold flex-shrink-0'>
                    {user?.name?.charAt(0) || "U"}
                </div>
                    <div className='min-w-0'>
                        <p className='text-sm font-medium turncate'>{user?.name || "User"}</p>
                        <p className='text-xs text-gray-400 turncate capitalize'>{user?.role}</p>
                    </div>
            </div>

            {/* Nav */}
            <nav className='flex-1 p-4'>
                <ul className='space-y-2'>
                    {
                        navItems.map((item)=> (
                            <li key={item.key}>
                                <button className='w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition'>
                                    <span>{item.icon}</span>
                                    <span><Link href={`/dashboard/${item.key}`}>{item.label}</Link></span>
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </nav>

        </aside>
    );
};

export default SideBar;