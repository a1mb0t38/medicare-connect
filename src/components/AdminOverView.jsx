'use client';

import { Card } from '@heroui/react';

import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AdminOverView = ({data}) => {

    const chartData = [
        {
            name: "Users",
            total: data.totalUsers,
        },
        {
            name: "Doctors",
            total: data.totalDoctors,
        },
        {
            name: "Appointments",
            total: data.totalAppointments,
        },
        {
            name: "Prescriptions",
            total: data.totalPrescriptions,
        },
    ];

    return (
        <div className='max-w-7xl mx-auto p-6 space-y-8'>
            <h2 className='text-3xl font-bold'>Admin Dashboard</h2>


            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
                <Card className='p-5 text-center'>
                    <h3 className='text-gray-500'>Users</h3>
                    <p className='text-3xl font-bold'>{data.totalUsers}</p>
                </Card>
                 <Card className='p-5 text-center'>
                    <h3 className='text-gray-500'>Doctors</h3>
                    <p className='text-3xl font-bold'>{data.totalDoctors}</p>
                </Card>
                 <Card className='p-5 text-center'>
                    <h3 className='text-gray-500'>Appointments</h3>
                    <p className='text-3xl font-bold'>{data.totalAppointments}</p>
                </Card>
                 <Card className='p-5 text-center'>
                    <h3 className='text-gray-500'>Prescriptions</h3>
                    <p className='text-3xl font-bold'>{data.totalPrescriptions}</p>
                </Card>
            </div>

            <Card className='p-6'>
                <h3 className='text-xl font-semibold mb-6'>System Statistics</h3>

                <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray='3 3'></CartesianGrid>
                        <XAxis dataKey='name'></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                        <Bar dataKey='total' radius={[8,8,0,0]}></Bar>
                    </BarChart>
                </ResponsiveContainer>

            </Card>
        </div>
    );
};

export default AdminOverView;