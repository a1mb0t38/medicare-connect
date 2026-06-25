
import Doctors from '@/components/Doctors';
import SearchBar from '@/components/SearchBar';
import { getDoctors } from '@/lib/action/doctors';
import React, { Suspense } from 'react';

const DoctorsPage = async ({searchParams}) => {

    const { name = '', specialization = '' } = await searchParams;

    const doctor = await getDoctors(name, specialization)
    //   console.log(doctor, "doctors data")



    return (
        <div className='px-4 py-6'>

            <Suspense>
                <SearchBar></SearchBar>
            </Suspense>

            {
                doctor.length === 0 ? (
                    <p className='mt-16 text-center text-slate-400 text-lg'>No Doctors found try a differenct name or specialization</p>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[1200px] mx-auto justify-items-center'>
                        {
                            doctor.map((doc) => {
                                return <Doctors key={doc._id} doctor={doc}></Doctors>
                            })
                        }
                    </div>
                )
            }



        </div>
    );
};

export default DoctorsPage;