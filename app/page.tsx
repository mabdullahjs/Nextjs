import React from 'react'
import Button from './components/Button'
import Link from 'next/link'

const Page = () => {
  return (
    <>
    <h1>Hello</h1>
    <Link href='contact'>contact</Link><br/>
    <Link href='contact/user'>User</Link>
    </>

  )
}

export default Page