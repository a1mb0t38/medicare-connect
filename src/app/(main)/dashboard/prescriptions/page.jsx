import Prescription from '@/components/Prescription';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const PrescriptionPage = async() => {

    const session = await auth.api.getSession({
        headers: await headers(),
    })
    const user = session?.user;

    const res = await fetch(`${process.env.BASE_URL}/appointments/doctor/${user.id}/accepted`,{
        cache: 'no-store',
    })
    const appointments = await res.json()

    console.log(appointments)

    return (
        <div>
            <Prescription doctor={user} appointments={appointments}></Prescription>
        </div>
    );
};

export default PrescriptionPage;