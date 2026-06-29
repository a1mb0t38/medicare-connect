'use client'

import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ManageDoctors = ({doctors}) => {


    const [doctorList, setDoctorList] = useState(doctors)

    const handleStatus = async(id, status)=>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/doctors/${id}/status`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                verificationStatus: status,
            }),
        })

        const result = await res.json()
        if(result.modifiedCount > 0){
            setDoctorList((prev)=> prev.map((doctor)=> doctor._id === id ? {...doctor, verificationStatus: status} : doctor))
            toast.success(`Doctor ${status}`)
        }
    }

    return (
        <div className='max-w-7xl mx-auto p-6'>
            <h2 className='text-2xl font-bold mb-6'>Manage Doctors</h2>

            <div className='overflow-x-auto bg-white rounded-xl shadow'>
                <table className='table table-zebra'>
                    <thead>
                        <tr>
                            <th>Doctor</th>
                            <th>Specialization</th>
                            <th>Hospital</th>
                            <th>Experience</th>
                            <th>Fee</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctorList.map((doctor)=> (
                                <tr key={doctor._id}>
                                    <td>{doctor.doctorName}</td>
                                    <td>{doctor.specialization}</td>
                                    <td>{doctor.hospitalName}</td>
                                    <td>{doctor.experience}</td>
                                    <td>{doctor.consultationFee}</td>
                                    <td>
                                        <span className={`badge ${
                                            doctor.verificationStatus === "verified" ? "badge-success" : doctor.verificationStatus === "rejected" ? "badge-error" : "badge-warning"
                                        }`}>
                                            {doctor.verificationStatus}
                                        </span>
                                    </td>

                                    <td>
                                        <div className='flex gap-2'>
                                            {
                                                doctor.verificationStatus !== "verified" && (
                                                    <button onClick={()=> handleStatus(doctor._id, "verified")} className='btn btn-sm btn-success'>
                                                        Accept
                                                    </button>
                                                )
                                            }
                                            {
                                                doctor.verificationStatus !== "rejected" && (
                                                    <button onClick={()=> handleStatus(doctor._id, "rejected")} className='btn btn-sm btn-error'>
                                                        Reject
                                                    </button>
                                                )
                                            }
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <Toaster
  position="top-center"
  reverseOrder={false}
/>
        </div>
    );
};

export default ManageDoctors;