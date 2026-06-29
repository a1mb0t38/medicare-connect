import ManageUsers from '@/components/ManageUsers';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const ManageUsersPage = async() => {

    const  {token} = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`${process.env.BASE_URL}/users`,{
         headers: {
            authorization: `Bearer ${token}`
        }
    }, {cache: 'no-store'})
    const users = await res.json()

    return (
        <div>
            <ManageUsers users={users}></ManageUsers>
        </div>
    );
};

export default ManageUsersPage;