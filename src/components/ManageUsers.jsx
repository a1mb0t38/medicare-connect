'use client'
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ManageUsers = ({users}) => {

    const [userList, setUserList] = useState(users);
    const handleDelete = async(id) =>{

        const confirmDelete = confirm(
            "Are you sure you want to delete this user?"
        )
        if(!confirmDelete) return;

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/${id}`,{
            method: "DELETE",
        })

        const result = await res.json();
        if(result.deletedCount>0){
            setUserList(
                userList.filter((user)=> user._id !== id)
            )
            toast.success("user deleted successfully")
        }
    }

    return (
        <div className='max-w-7xl mx-auto p-6'>
            <h2>Manage Users</h2>
            
            <div className='overflow-x-auto bg-white rounded-xl shadow'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Joined</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userList.map((user)=>(
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <span className='badge badge-primary'>{user.role}</span>
                                    </td>

                                    <td>
                                        {new Date(
                                            user.createdAt
                                        ).toLocaleDateString()}
                                    </td>
                                    <td>
                                        <button disabled={user.role === "admin"} onClick={()=> handleDelete(user._id)} className='btn btn-sm btn-error text-white'>
                                            Delete
                                        </button>
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

export default ManageUsers;