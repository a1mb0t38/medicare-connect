import ManageUsers from '@/components/ManageUsers';
import React from 'react';

const ManageUsersPage = async() => {

    const res = await fetch(`${process.env.BASE_URL}/users`, {cache: 'no-store'})
    const users = await res.json()

    return (
        <div>
            <ManageUsers users={users}></ManageUsers>
        </div>
    );
};

export default ManageUsersPage;