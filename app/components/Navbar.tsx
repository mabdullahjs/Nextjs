import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link href='/' className="btn btn-ghost text-xl">NextJs</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link href='/contact'>Contact</Link>
                        </li>
                        <li>
                            <Link href='/contact/user'>User</Link>
                        </li>
                        <li>
                            <Link href='/contact/user/singleuser'>Single User</Link>
                        </li>
                        <li>
                            <Link href='/upload'>Upload Page</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar