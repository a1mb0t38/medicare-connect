import DoctorDetail from '@/components/DoctorDetail';

import { getDoctors } from '@/lib/action/doctors';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const DoctorsDetailsPage = async({params}) => {

    const {id} = await params;
    // console.log("this is id of detial page", id)
    const  {token} = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`${process.env.BASE_URL}/doctors/${id}`,{
         headers: {
            authorization: `Bearer ${token}`
        }
    }, {cache: 'no-store'})
    const data = await res.json()

    // console.log("this is doctor data",data)


    const doctor = await getDoctors()

    return (
        <div>
          
            <DoctorDetail doctor={data}></DoctorDetail>
        </div>
    );
};

export default DoctorsDetailsPage;