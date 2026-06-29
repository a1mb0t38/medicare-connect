"use client";

import { authClient } from '@/lib/auth-client';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

const days = [
    "Saturday",
    "Sunday",
    "Monday",
    "TuesDay",
    "Wednesday",
    "Thursday",
    "Friday",
]

const DoctorInfo = ({user}) => {
    const {register, handleSubmit} = useForm({
        defaultValues: {
            doctorName: user.name || "",
            profileImage: user.image || "",
        }
    })

    const onSubmit = async(data) =>{
        const doctorData = {
            ...data,
            experience: Number(data.experience),
            consultationFee: Number(data.consultationFee),
            availableDays: Array.isArray(data.availableDays)
            ? data.availableDays : [data.availableDays],

            availableSlots: data.availableSlots.split(",").map((slot)=> slot.trim()),
            verificationStatus: "pending",
            doctorId: user.id,
        };
        // console.log(doctorData, "doctordata")

             const {data:tokenData} = await authClient.token();
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/doctors`,{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                     authorization: `Bearer ${tokenData?.token}`
                },
                body: JSON.stringify(doctorData),
            })
            const result = await res.json()
            if(res.ok){
                toast.success('Doctor Data Added successfully!')
            }
       
    }
    return (
        <div className='max-w-3xl mx-auto bg-white p-8 rounded-xl shadow'>
            <h2 className='text-2xl font-bold mb-6'>Complete Your Doctor Profile</h2>

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                <input type="text" {...register("doctorName")}
                className='input input-bordered w-full' placeholder='Doctor Name' />

                <input type="text" {...register("specialization")}
                className='input input-bordered w-full' placeholder='Specialization' />

                <input type="text" {...register("qualification")}
                className='input input-bordered w-full' placeholder='Qualification' />

                <input type="number" {...register("experience")}
                className='input input-bordered w-full' placeholder='Years of Expericence' />


                <input type="number" {...register("consultationFee")}
                className='input input-bordered w-full' placeholder='ConsultationFee' />

                <input type="text" {...register("hospitalName")}
                className='input input-bordered w-full' placeholder='Hospital Name' />

                <input type="url" {...register("profileImage")}
                className='input input-bordered w-full' placeholder='Profile Image URL' />

                <div>
                    <h3 className='font-semibold mb-2'>Available Days</h3>
                    <div className='grid grid-cols-2 gap-2'>
                        {
                            days.map((day)=> (
                                <label key={day} className='flex items-center gap-2'>
                                    <input type="checkbox"
                                    value={day}
                                    {...register("availableDays")}
                                    />
                                    {day}
                                </label>
                            ))
                        }
                    </div>
                </div>

                <input type="text"
                {...register("availableSlots")}
                className='input input-bordered w-full'
                placeholder='09:00 AM, 11:00 AM, 02:00 PM'
                />

                <button className='btn btn-primary w-full'>
                    Save Info
                </button>

            </form>
            <Toaster
  position="top-center"
  reverseOrder={false}
/>
        </div>
    );
};

export default DoctorInfo;