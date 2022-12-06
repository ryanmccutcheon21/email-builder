import Link from 'next/link'
import React from 'react'
import { useStateContext } from '../context/StateContext'

const linkStyles = {
    className: 'hover:underline'
}

const Navbar = () => {
    const { isSignIn } = useStateContext()

    return (
        <nav className='flex justify-between mx-5 mt-5'>
            <Link {...linkStyles} href='/'>Home</Link>
            <Link {...linkStyles} href='/login'>{!isSignIn ? 'Login' : 'Logout'}</Link>
            <Link {...linkStyles} href='/create'>Create Account</Link>
        </nav>
    )
}

export default Navbar