import Link from 'next/link'
import React from 'react'
import { useStateContext } from '../context/StateContext'

const linkStyles = {
    className: 'hover:underline'
}

const Navbar = () => {
    const { isSignIn, signOut } = useStateContext()

    return (
        <nav className='flex justify-between mx-5 mt-5'>
            <Link {...linkStyles} href='/'>Home</Link>
            {!isSignIn ? (
                <Link {...linkStyles} href='/login'>Login</Link>

            ) : (
                <p {...linkStyles} onClick={signOut}>Logout</p>

            )}
            <Link {...linkStyles} href='/create'>Create Account</Link>
        </nav>
    )
}

export default Navbar