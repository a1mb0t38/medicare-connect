import DoctorDetail from '@/components/DoctorDetail';

import { getDoctors } from '@/lib/action/doctors';
import React from 'react';

const DoctorsDetailsPage = async({params}) => {

    const {id} = await params;
    // console.log("this is id of detial page", id)

    const res = await fetch(`${process.env.BASE_URL}/doctors/${id}`, {cache: 'no-store'})
    const data = await res.json()

    // console.log("this is doctor data",data)


    const doctor = await getDoctors()

    return (
        <div>
            doctor detial page
            <DoctorDetail doctor={data}></DoctorDetail>
        </div>
    );
};

export default DoctorsDetailsPage;