
'use server'

import { headers } from "next/headers"
import { auth } from "../auth"

const baseUrl = process.env.BASE_URL

export const getDoctors = async (name='', specialization='') =>{
    //   const  {token} = await auth.api.getToken({
    //         headers: await headers()
    //     })
    const params = new URLSearchParams()
    if(name) params.set('name', name)
    if(specialization) params.set('specialization', specialization)
    const qs = params.toString()
    const url = qs ? `${baseUrl}/doctors?${qs}` : `${baseUrl}/doctors`;
    const res = await fetch(url, {cache: 'no-store'})
    return await res.json()
}