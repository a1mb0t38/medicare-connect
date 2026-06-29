import ManageDoctors from '@/components/ManageDoctors';
import React from 'react';

const ManageDoctorsPage = async() => {

    const res = await fetch(`${process.env.BASE_URL}/doctors`,{
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