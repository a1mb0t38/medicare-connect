import { Calendar, Clock } from '@gravity-ui/icons';
import { Card } from '@heroui/react';
import React from 'react';

const DoctorOverView = ({appointments1}) => {

     const totalEarnings = appointments1.filter((appointment)=> appointment.paymentStatus === "paid")
    .reduce((total, appointment)=>{
        return total + Number(appointment.consultationFee);
    }, 0);

    const pendingAppointmments = appointments1.filter(
        (appointment) => appointment.appointmentStatus === "Pending"
    );

    return (
        <div className='max-w-6xl mx-auto p-6 space-y-6'>
            
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            <Card className='p-4 flex items-center gap-3 shadow-sm border'>
                <Calendar className='text-blue-500 w-5 h-5'></Calendar>
                <div>
                    <p className='text-xs text-gray-400'>Pending Appointments</p>
                    <p className='text-xl font-bold'>
                        {pendingAppointmments.length}
                    </p>
                </div>
            </Card>

            <Card className='p-4 flex items-center gap-3 shadow-sm border'>
                <Clock className='text-purple-500 w-5 h-5'></Clock>

                <div>
                    <p className='text-xs text-gray-400'>Total Appointments</p>
                    <p className='text-xl font-bold'>{appointments1.length}</p>
                </div>
            </Card>

            <Card className='p-4 flex items-center gap-3 shadow-sm border'>
                <Clock className='text-green-500 w-5 h-5'></Clock>

                <div>
                    <p className='text-xs text-gray-400'>Total Earnigs</p>
                    <p className='text-xl font-bold'>{totalEarnings}</p>
                </div>
            </Card>
        </div>
        

        <div className='space-y-3'>
            <h2 className='text-lg font-bold'>Appointment Requests</h2>

            <div className='overflow-x-auto rounded-xl border bg-white shadow-sm'>
                <table className='w-full text-sm'>
                    <thead className='bg-gray-50 border-b text-gray-500 uppercase text-xs'>
                        <tr>
                            <th className='p-4 text-left'>Patient</th>
                            <th className='p-4 text-left'>Data</th>
                            <th className='p-4 text-left'>Time</th>
                            <th className='p-4 text-left'>Symptoms</th>
                            <th className='p-4 text-left'>Fee</th>
                            <th className='p-4 text-left'>Payment</th>
                            <th className='p-4 text-left'>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            appointments1.map((appointment)=>{
                                <tr key={appointment._id} className='border-b hover:bg-gray-50'>
                                    <td className='p-4'>{appointment.patientId}</td>
                                    <td className='p-4'>{appointment.appointmentDate}</td>
                                    <td className='p-4'>{appointment.appointmentTime}</td>
                                    <td className='p-4'>{appointment.symptoms}</td>
                                    <td className='p-4'>{appointment.consultationFee}</td>
                                    <td className='p-4'>
                                        <span className='px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-semibold'>
                                            {appointment.paymentStatus}
                                        </span>
                                    </td>


                                    <td className='p-4'>
                                        {
                                            appointment.appointmentStatus === "Pending" ? (
                                                <div className='flex gap-2'>
                                                    <button className='px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700'>Accept</button>
                                                    <button className='px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700'>Reject</button>
                                                </div>
                                            ) : (
                                                <span className={`px-2 py-1 rounded text-xs font-semibold ${appointment.appointmentStatus === "Accepted" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                                    {appointment.appointmentStatus}
                                                </span>
                                            )
                                        }
                                    </td>

                                </tr>
                            })
                        }
                    </tbody>

                </table>
            </div>
        </div>

        </div>
    );
};

export default DoctorOverView;