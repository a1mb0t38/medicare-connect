import Overview from '@/components/Overview';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const OverViewPage = async() => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;
    // console.log(user)

    const res = await fetch(`${process.env.BASE_URL}/appointments/${user?.id}`,{cache: 'no-store'})
    const appointments = await res.json()

    // console.log(appointments, "apppoints data")

    return (
        <div>
            <h1 className='text-md font-semibold'>Welcome {user?.name}</h1>
            {
                user?.role === "patient" && <Overview appointments={appointments}></Overview>
            }
        </div>
    );
};

export default OverViewPage;