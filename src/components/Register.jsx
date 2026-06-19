"use client"
import { Button, Description, FieldError, Input, Label, Separator, TextField } from '@heroui/react';
import { Check, EyeIcon, EyeOffIcon, HeartPlus, Sparkles } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {

    const [showPw, setShowPw] = useState(false);
    // const [fields, setFields] = useState({name:"", email:"", url:"", password:"", role:"patient"});

    // const handleChange = (e) =>{
    //     const { name, value} = e.target;
    //     const updated = {...fields, [name]: value}
    //     setFields(updated)
    // }

     const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

   const handleRegisterFunc = (data) =>{
        console.log(data, "this is form data")
   }


    return (
        <div className='min-h-screen w-full flex bg-slate-50 font-sans'>

            {/* left side     */}
            <div className='hidden md:flex md:w-7/12 bg-gradient-to-br from-cyan-700 to-teal-900 text-white p-12 flex-col justify-between relative overflow-hidden'>

                {/* subtitle background decoration */}

                <div className='absolute -top-20 -left-20 w-64 h-64 bg-cyan-600 rounded-full opacity-25 blur-3xl'></div>
                <div className='absolute -bottom-25 -right-20 w-80 h-80 bg-teal-600  rounded-full opacity-25 blur-3xl
        '></div>

                {/* header logo */}
                <div className='flex items-center gap-2 z-10'>
                    <div className='bg-white/10 p-2 rounded-xl backdrop-blur-md border border-white/20'>
                        <HeartPlus className='h-6 w-6 text-cyan-300
            '></HeartPlus>
                    </div>

                    <span className='font-bold text-xl tracking-wide'><Link href='/'>MediCare Connect</Link></span>
                </div>

                {/* hero text and testimonial */}
                <div className='my-auto max-w-md z-10 space-y-8'>
                    <h1 className='text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight'>Advancing Healthcare Together.</h1>
                    <p className='text-cyan-100  text-base lg:text-lg leading-relaxed'>Join a community of thousands of healthcare professionals and patients streamlining care, communication, and medical records in one secure platform</p>

                    {/* testimonial box */}
                    <div className='bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex gap-4 items-start shadow-xl'>
                        <div className='w-10 h-10 rounded-full bg-cyan-200/20 flex items-center justify-center flex-shrink-0'>
                            <Sparkles className='h-5 w-5 text-cyan-300'></Sparkles>
                        </div>

                        <div>
                            <p className='italic text-sm text-cyan-50'>The Most intuitive patient portal I have used.</p>
                            <p className='text-xs font-semibold text-cyan-300 mt-2'>Dr. Sarah Chen, Chief of Cardiology</p>
                        </div>

                    </div>

                </div>

                {/* Footer info */}
                <div className='text-xs text-cyan-200
                /60 z-10 mt-4'>
                    @ 2026 MediCare Connect.
                </div>
            </div>

            {/* Right side */}
            <div className='w-full md:w-7/12 flex items-center justify-center p-6 sm:p-12 md:p-16 bg-white overflow-x-hidden'>
                <div className='w-full max-w-md space-y-6'>
                    <div className='space-y-1'>
                        <h2 className='text-3xl font-bold text-slate-800 tracking-tight'>Create an account</h2>
                        <p className='text-sm text-slate-500'>Secure Access to your medical ecosystem</p>
                    </div>

                    {/* social sign-in */}
                    <Button
                        variant='bordered'
                        className="w-full flex gap-3 border-slate-200
                     text-slate-700 font-medium max-h-11 bg-cyan-300"
                    >
                        <FcGoogle />
                        Continue with Google
                    </Button>

                    {/* divider */}
                    <div className='flex items-center gap-4 my-2'>
                        <Separator className='flex-1'></Separator>
                        <span className='text-xs font-semibold text-slate-400 tracking-wider uppercase'>or register with email</span>
                        <Separator className='flex-1'></Separator>
                    </div>

                    {/* form field */}
                    <form onSubmit={handleSubmit(handleRegisterFunc)} className='flex flex-col gap-4'>
                        {/* name field */}
                        <TextField
                            className="border-slate-200/50 rounded-xl"
                            isRequired
                            name="name"
                            type="text"
                           
                        >
                            <Label>Enter Your name</Label>
                            <Input {...register("name", {required: "Name is required"})} placeholder="Enter your name" /> 
                            <FieldError />
                        </TextField>
                        {/* email field */}
                        <TextField
                         className="border-slate-200/50 rounded-xl"
                            isRequired
                            name="email"
                            type="email"
                            
                        >
                            <Label>Email</Label>
                            <Input {...register("email", {required: "email is required"})} placeholder="john@example.com" />
                            <FieldError />
                        </TextField>
                        {/* url field */}
                        <TextField
                         className="border-slate-200/50 rounded-xl"
                            isRequired
                            name="url"
                            type="url"
                            
                        >
                            <Label>Photo Url</Label>
                            <Input {...register("url", {required: "url is required"})} placeholder="Enter Profile Photo Url" />
                            <FieldError />
                        </TextField>
                        {/* password field */}
                        <TextField
                         className="border-slate-200/50 rounded-xl relative"
                            isRequired
                            minLength={8}
                            name="password"
                            
                            type={showPw ? "text" : "password"}
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                return null;
                            }}
                        >
                            <Label>Password</Label>
                            <Input {...register("password", {required: "passsword is required"})} placeholder="Enter your password" />
                            <button type='button' className='absolute top-8 left-72 bg-none border-none cursor-pointer flex items-center p-1 ' onClick={()=> setShowPw((v)=> !v)}>
                                {showPw ? <EyeOffIcon></EyeOffIcon> : <EyeIcon></EyeIcon>}
                            </button>
                            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                            <FieldError />
                        </TextField>

                        {/* role */}
                        <div className='flex iteam-center gap-4'>
                            <label className='text-slate-600 font-semibold'>Role</label>
                            <div className='flex gap-6'>
                                <label className='flex font-semibold items-center gap-2 text-slate-500'>
                                    <input
                                        type='radio'
                                        name='role'
                                        value="patient"
                                        defaultChecked
                                        {...register("role", {required: "role is required"})}
                                        
                                    />
                                    Patient
                                </label>

                                <label className='flex font-semibold items-center gap-2 text-slate-500'>
                                    <input
                                    type='radio'
                                    name='role'
                                    value="doctor"
                                    {...register("role", {required: "role is required"})}
                                    
                                    />
                                    Doctor
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Button className="w-full bg-gradient-to-br from-cyan-700 to-teal-900" type="submit">
                                Create Account
                            </Button>
                            <Button className="w-full" type="reset" variant="secondary">
                                Reset
                            </Button>
                        </div>
                    </form>
                    <div>
                        <p className='text-sm text-slate-500 font-semibold text-center'>Already have an account <Link className='text-green-600 font-semibold' href='/login'>Login</Link></p>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Register;