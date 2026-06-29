import MedicalRecords from '@/components/MedicalRecords';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MedicalRecordPage = async() => {

    const session = await auth.api.getSession({
        headers: await headers(),
    })

    const user = session?.user;

    const res = await fetch(`${process.env.BASE_URL}/prescriptions/patient/${user.id}`,{cache: 'no-store'})
    const prescriptions = await res.json()
    // console.log(prescriptions, "prescription data");

    return (
        <div>
            <MedicalRecords prescriptions={prescriptions}></MedicalRecords>
        </div>
    );
};

export default MedicalRecordPage;