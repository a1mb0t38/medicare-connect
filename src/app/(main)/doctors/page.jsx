
import Doctors from '@/components/Doctors';
import { getDoctors } from '@/lib/action/doctors';
import React from 'react';

const DoctorsPage = async () => {

  const doctor = await getDoctors()
//   console.log(doctor, "doctors data")



    return (
        <div>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[1200px] mx-auto justify-items-center'>
             {
                doctor.map((doc)=> {
                    return <Doctors key={doc._id} doctor={doc}></Doctors>
                })
            }
           </div>
 
        </div>
    );
};

export default DoctorsPage;