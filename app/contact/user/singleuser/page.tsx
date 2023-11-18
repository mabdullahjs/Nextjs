'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const SingleUser = () => {
    const router = useRouter()
    return (
        <>
            <h1>Single user</h1>
            <button className='btn  mx-5' onClick={()=> router.push('/contact/user')}>click</button>
            
        </>

    )
}

export default SingleUser