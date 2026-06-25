'use client';
import { CircleFill, GraduationCap, Suitcase } from '@gravity-ui/icons';
import { Calendar, Stethoscope } from 'lucide-react';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const DoctorDetail = ({doctor}) => {

    // console.log(doctor, "doctor data")

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [symptoms, setSymptoms] = useState("")
    const [isProcessing, setIsprocessing] = useState(false);

    const handleBooking = async (e) =>{
        e.preventDefault();
        setIsprocessing(true);

        const appointmentPayload = {
            // patientId: User?._id,
            doctorId: doctor._id,
            appointmentDate: date,
            appointmentStatus: "Pending",
            symptoms: symptoms,
            paymentStatus: "paid"

        }
        try{
            const res = await fetch(`${process.env.BASE_URL}/appointments`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(appointmentPayload),
            })
            if(res.ok){
                toast.success(`Payment of {doctor.consultationFee} Received`)
                setDate("")
                setTime("")
                setSymptoms("")
            }else{
                toast.error("Payment or booking faild")
            }
        }catch(error){
            console.error("booking error", error);
        }
    }   
    return (
        <div className='max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 font-sans'>

            <div className='md: col-span-2 space-y-6'>
                <div className='bg-white border rounded-xl p-6 flex flex-col sm:flex-row gap-6 items-start shadow-sm'>
                    <img
                        src={doctor.profileImage}
                        alt={doctor.doctorName}
                        className='w-28 h-28 rounded-xl object-cover'
                    />
                    <div className='space-y-2'>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-2xl font-bold'>{doctor.doctorName}</h1>
                            {
                                doctor.verificationStatus === "verified" && (

                                    <CircleFill className='text-blue-500 w-5 h-5'></CircleFill>
                                )
                            }
                        </div>
                        <p className='text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-md text-sm inline-block'>{doctor.specialization}</p>
                        <div className='pt-2 flex gap-4 text-sm text-gray-600'>
                            <span className='flex items-center gap-1'>
                                <Suitcase className='w-4 h-4'></Suitcase> {doctor.experience} years Exp
                            </span>
                            <span className='flex items-center gap-1'>
                                <Stethoscope className='w-4 h-4'></Stethoscope> {doctor.hospitalName}
                            </span>
                        </div>
                    </div>
                </div>

                <div className='bg-white border rounded-xl p-6 shadow-sm'>
                    <h2 className='text-lg font-bold mb-3 flex items-center gap-2'>
                            <GraduationCap className='text-blue-500'></GraduationCap> Qualifications
                    </h2>
                    <p className='text-gray-700 font-medium'>{doctor.qualifications}</p>
                </div>
            </div>

            <div className='bg-white border rounded-xl p-6 shadow-sm h-fit'>
                <div className='mb-4'>
                    <span className='text-xs text-gray-400 font-bold uppercase'>
                            Payable Fee
                    </span>
                    <div className='text-2xl font-bold text-gray-800'>
                            {doctor.consultationFee} Taka
                    </div>
                </div>
                <form onSubmit={handleBooking} className='space-y-4 pt-4 border-t'>
                    <h3 className='font-bold flex items-center gap-2'>
                        <Calendar className='text-blue-500'></Calendar> Pay & Book Appointment
                    </h3>

                    {/* pick Date */}
                    <div>
                        <label className='block text-xs font-semibold text-gray-600'>Select Date</label>
                        <input 
                        type="date" 
                        required
                        value={date}
                        onChange={(e)=> setDate(e.target.value)}
                        className='w-full bg-gray-50 border rounded-lg p-2 text-sm focus:outline-blue-500'
                        />
                        <span className='text-[11px] text-gray-400 mt-1
                         block'>
                            Days Available: {doctor.availableDays?.join(" ")}
                        </span>
                    </div>

                    {/* time picker */}
                    <div>
                        <label className='block text-xs font-semibold text-gray-600 mb-2 '>Select Time</label>
                        <div className='grid grid-cols-3
                         gap-2'>
                            {
                                doctor.availableSlots.map((slot)=> (
                                    <button
                                    type='button'
                                    key={slot}
                                    onClick={()=> setTime(slot)}
                                    className={`p-2 text-xs font-medium rounded-lg border text-center transition ${
                                        time === slot ? 'bg-blue-600 text-white border-blue-600' : "bg-white text-gray-600 hover:bg-gray-50"
                                    }`}
                                    >
                                        {slot}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                        
                        <div>
                            <label className='block text-xs font-semibold text-gray-600 mb-1'>Describe Your Problem</label>
                            <textarea
                            required
                            value={symptoms}
                            onChange={(e)=> setSymptoms(e.target.value)}
                            placeholder='Write down your symptoms or problem here...'
                            className='w-full bg-gray-50 border rounded-lg p-2 text-sm h-28 resize-none'
                            >
                            </textarea>
                        </div>

                        <button
                        type='submit'
                        disabled={!date || !time || !symptoms || isProcessing}
                        className='w-full bg-emerald-600 text-white font-medium py-5 rounded-lg hover:bg-emerald-700 disabled:opacity-50 transition'
                        >
                            {
                                isProcessing ? "processing Payment..." : `Pay ${doctor.consultationFee} & Confirm`
                            }
                        </button>

                </form>
            </div>  
            <Toaster
  position="top-center"
  reverseOrder={false}
/>
        </div>
    );
};

export default DoctorDetail;