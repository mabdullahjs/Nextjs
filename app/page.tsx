import React from 'react'
import Button from './components/Button'
import Link from 'next/link'

const Page = () => {
  return (
    <>
    <h1>Hello world</h1>
    <Link href='contact'>contact</Link>
    <Link href='contact/user'>User</Link>
    </>

  )
}

export default Page