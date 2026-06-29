'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

const Prescription = ({doctor, appointments}) => {

    const {register, handleSubmit, reset} = useForm();

    const appointment = appointments[0];

    const onSubmit = async(data) => {
        const prescription = {
            doctorId: doctor.id,
            patientId: appointment.patientId,
            appointmentId: appointment._id,
            diagnosis: data.diagnosis,
            medications: data.medications,
            notes: data.notes,
            createdAt: new Date().toISOString(),
        }
        console.log(prescription)

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/prescriptions`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(prescription)
        })
        if(res.ok){
            toast.success('Prescription submited to patient')
        }
        reset();
    }

    return (
        <div className='max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md'>
            <h2 className='text-2xl font-bold mb-6'>
                Write Prescription
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                <div>
                    <label className='font-medium block mb-2'>Diagnosis</label>
                    <input type="text" placeholder='e.g. Viral Fever' {...register("diagnosis", {required: true})} className='input input-bordered w-full' />
                </div>
                 <div>
                    <label className='font-medium block mb-2'>Medications</label>
                    <textarea rows={5} placeholder={`Paracetamol 500mg - twice daily\nVitamin C - Once daily`} {...register("medications", {required: true})} className='textarea textarea-bordered w-full' />
                </div>
                 <div>
                    <label className='font-medium block mb-2'>Notes</label>
                    <textarea rows={4} placeholder='Additional instruction for the patient' {...register("notes")} className='textarea textarea-bordered w-full' />
                </div>
                <button className='btn btn-primary w-full' type='submit'>
                    Save Prescription
                </button>
            </form>
            <Toaster
  position="top-center"
  reverseOrder={false}
/>
        </div>
    );
};

export default Prescription;