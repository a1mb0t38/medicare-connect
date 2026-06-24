
'use server'

const baseUrl = process.env.BASE_URL

export const getDoctors = async () =>{
    const res = await fetch(`${baseUrl}/doctors`)
    return await res.json()
}