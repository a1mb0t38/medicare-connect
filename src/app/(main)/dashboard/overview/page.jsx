

import AdminOverView from '@/components/AdminOverView';
import DoctorOverView from '@/components/DoctorOverView';
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

    const  {token} = await auth.api.getToken({
        headers: await headers()
    })


    const res = await fetch(`${process.env.BASE_URL}/appointments/patient/${user?.id}`,{
         headers: {
                    authorization: `Bearer ${token}`
                }
    },{cache: 'no-store'})
    const appointments = await res.json()

    const res1 = await fetch(`${process.env.BASE_URL}/appointments/doctor/${user?.id}`,{
         headers: {
                    authorization: `Bearer ${token}`
                }
    },{cache: 'no-store'})
    const appointments1 = await res1.json()

    // console.log(appointments1[0], "apppoints data")

     const res2 = await fetch(`${process.env.BASE_URL}/admin/overview`,{
         headers: {
                    authorization: `Bearer ${token}`
                }
     }, {cache: "no-store"})
    const data = await res2.json()

    return (
        <div>
            <h1 className='text-md font-semibold'>Welcome {user?.name}</h1>
            {
                user?.role === "patient" ? (<Overview appointments={appointments}></Overview>) : user?.role === "doctor" ? (<DoctorOverView appointments1={appointments1}></DoctorOverView>) : <AdminOverView data={data}></AdminOverView> 
            }
        </div>
    );
};

export default OverViewPage;