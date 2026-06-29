import ManageDoctors from '@/components/ManageDoctors';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const ManageDoctorsPage = async () => {


    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`${process.env.BASE_URL}/doctors`,
        {
            headers: {
                authorization: `Bearer ${token}`
            }
        },
        {
            cache: 'no-store',
        })
    const doctors = await res.json()

    return (
        <div>
            <ManageDoctors doctors={doctors}></ManageDoctors>
        </div>
    );
};

export default ManageDoctorsPage;