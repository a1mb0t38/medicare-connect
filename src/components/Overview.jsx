import { Calendar, CircleDollar, Clock } from '@gravity-ui/icons';
import { Card } from '@heroui/react';
import React from 'react';

const Overview = ({appointments}) => {

    const totalPayments = appointments.filter((appointment)=> appointment.paymentStatus === "paid")
    .reduce((total, appointment)=>{
        return total + Number(appointment.consultationFee);
    }, 0);


    return (
        <div className='max-w-6xl mx-auto p-6 space-y-6 '>
            {/* dashboard overview */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                <Card className='p-4 flex items-center gap-3 shadow-sm border'>
                    <Calendar className='text-blue-500 w-5 h-5'></Calendar>
                    <div>
                        <p className='text-xs text-gray-400'>Upcomming</p>
                        <p className='text-xl font-bold'>{appointments.length}</p>
                    </div>
                </Card>

                <Card className='p-4 flex items-center gap-3 shadow-sm border'>
                    <Clock className='text-purple-500 w-5 h-5'></Clock>
                    <div>
                        <p className='text-xs text-gray-400'>History</p>
                        <p className='text-xl font-bold'>0</p>
                    </div>
                </Card>

                 <Card className='p-4 flex items-center gap-3 shadow-sm border'>
                    <CircleDollar className='text-emerald-500-500 w-5 h-5'></CircleDollar>
                    <div>
                        <p className='text-xs text-gray-400'>Total Payments</p>
                        <p className='text-xl font-bold'>{totalPayments} Taka</p>
                    </div>
                </Card>
            </div>

            {/* data table */}
            <div className='space-y-3'>
                <h2 className='text-lg font-bold text-gray-800'>My Appointments</h2>

                <div className='overflow-x-auto border rounded-xl bg-white shadow-sm'>
                    <table className='w-full text-left border-collapse text-sm text-gray-600'>
                        <thead>
                            <tr className='bg-gray-50 border-b text-xs font-semibold uppercase text-gray-500'>
                                <th className='p-4'>Doctor</th>
                                <th className='p-4'>Date</th>
                                <th className='p-4'>Time</th>
                                <th className='p-4'>Problem</th>
                                <th className='p-4'>Fee</th>
                                <th className='p-4'>Payment</th>
                                <th className='p-4'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appointments.map((item)=> (
                                    <tr key={item._id} className='border-b last:border-0 hover:bg-gray-50/50 transition-colors'>
                                        <td className='p-4 font-mono text-xs text-gray-500'>{item.doctorId}</td>
                                        <td className='p-4 font-medium text-gray-800'>{item.appointmentDate}</td>
                                        <td className='p-4'>{item.appointmentTime}</td>
                                        <td className='p-4 capitalize'>{item.symptoms}</td>
                                           <td className='p-4 font-medium text-gray-800'>{item.consultationFee}</td>
                                           <td className='p-4'>
                                            <span className='bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md font-semibold uppercase text-xs'>{item.paymentStatus}</span>
                                           </td>
                                           <td className='p-4'>
                                            <span className='bg-amber-50 text-amber-700 px-2 py-1 rounded-md font-semibold text-xs'>
                                                {item.appointmentStatus}
                                            </span>
                                           </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Overview;