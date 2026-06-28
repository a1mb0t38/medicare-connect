import DoctorInfo from '@/components/DoctorInfo';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const DoctorInfoPage = async() => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    // console.log(session)
    const user = session?.user;


    return (
        <div>
            <DoctorInfo user={user}></DoctorInfo>
        </div>
    );
};

export default DoctorInfoPage;