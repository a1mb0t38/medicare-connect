'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import React, { useState } from 'react';

const SearchBar = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const [name, setName] = useState(searchParams.get('name') || '');
    const [specialization, setSpecialization] = useState(searchParams.get('specialization') || '');

    const hasActiveSearch = searchParams.get('name') || searchParams.get('specialization')

    const handleSearch = () =>{
        const params = new URLSearchParams();
        if(name.trim()) params.set('name', name.trim())
        if(specialization.trim()) params.set('specialization', specialization.trim())
        router.push(`${pathname}?${params.toString()}`)
    }

    const handleClear=()=>{
        setName('')
        setSpecialization('')
        router.push(pathname)
    }

    const handleKeyDown = (e) =>{
        if(e.key === "Enter") handleSearch();
    }


    return (
        <div className='flex flex-col sm: flex-row gap-3 w-full max-w-[1200px] mx-auto mb-8'>
            <input
                type='text'
                value={name}
                onChange={(e)=> setName(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='Search by doctor name'
                className='flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-slate-800 shadow-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100'
            />
            <input
             type="text"
             value={specialization}
             onChange={(e)=> setSpecialization(e.target.value)}
             onKeyDown={handleKeyDown}
             placeholder='Search By specialization'
             className='flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-slate-800 shadow-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100'
             />
             <button onClick={handleSearch} className='rounded-xl bg-sky-700 px-6 py-2.5 font-semibold text-white hover:bg-sky-800 transition'>
                Search
             </button>
             {
                hasActiveSearch && (
                    <button onClick={handleClear} className='rounded-xl border border-slate-200 px-6 py-2.5 font-semibold text-slate-600 hover:bg-slate-50 transition'>
                        Clear
                    </button>
                )
             }
        </div>
    );
};

export default SearchBar;