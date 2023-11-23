import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'

const Navbar = async () => {
    const session = await getServerSession(authOptions);
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
                        <li>
                            {!session && <Link href='/api/auth/signin'>login</Link>}
                            {session && <div>{session.user!.name}</div>}
                        </li>
                        {session && <li>
                            <Link href='/api/auth/signout'>Logout</Link>
                        </li>}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar