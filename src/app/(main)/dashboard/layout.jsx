import SideBar from '@/components/SideBar';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const DashboardLayout = async({children}) => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;
    return (
        <div className='flex'>
            <SideBar user={user}></SideBar>
            <main className='flex-1 p-6'>
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;