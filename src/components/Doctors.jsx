

import React from 'react';

const Doctors = ({doctor}) => {

    // console.log(doctor)



    return (
        <div className='max-w-[320px] w-full rounded-2xl bg-white p-4 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col'>
            
        {/* doctor image */}
        <div className='relative'>
            <img src={doctor.profileImage} alt={doctor.doctorName}
            className='h-56 w-full rounded-2xl object-cover'/>

            {/* verified badge */}

            {
                doctor.verificationStatus === "verified" ? <div className='absolute font-semibold top-3 right-3 flex items-center gap-1 rounded-full bg-green-400 px-3 py-1 text-xs font-semibold text-slate-800'>
                {doctor.verificationStatus}
            </div> : <div className='absolute font-semibold  top-3 right-3 flex items-center gap-1 rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-slate-800'>
                {doctor.verificationStatus}
            </div>
            }
        </div>

        {/* Doctor info */}
        <div className='mt-5'>
            <h3 className='text-2xl font-bold text-slate-900'>{doctor.doctorName}</h3>
            <p className='mt-1 text-slate-500'>{doctor.specialization} . {doctor.experience} years of experience</p>

            {/* Rating */}
            <div className='mt-4 flex items-center gap-3'>
                <div className='flex text-red-500'>
                    {"★★★★★"}
                </div>

                <span className='text-sm text-slate-500'>
                (345 reviews)
            </span>
            </div>
        </div>

        <div className='my-5 h-px bg-slate-200'></div>

        {/* bottom section */}
        <div className='flex items-center justify-between'>
            <div>
                <p className='text-sm text-slate-500'>Consultation</p>
            </div>
            <h4 className='text-3xl font-bold text-slate-900'>
                {doctor.consultationFee}
            </h4>
        </div>

        <button className='mt-auto w-full rounded-2xl bg-sky-700 px-8 font-semibold text-white transition hover:bg-sky-800 cursor-pointer'>
            View Details
        </button>

        </div>
    );
};

export default Doctors;