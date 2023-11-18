import React from 'react'
import Button from '../components/Button'
import Link from 'next/link'

const Contact = () => {
  return (
    <>
    <h1>Contact </h1>
    <Link href='/contact/user?sortOrder=name'>Name</Link>
    <Link href='/contact/user?sortOrder=email'>Email</Link>
    <Button/>
    </>
  )
}

export default Contact