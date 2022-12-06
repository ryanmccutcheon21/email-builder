import Link from 'next/link'
import React from 'react'

const linkStyles = {
    className: 'hover:underline'
}

const Navbar = () => {
    return (
        <nav className='flex justify-between mx-5 mt-5'>
            <Link {...linkStyles} href='/'>Home</Link>
            <Link {...linkStyles} href='/login'>Login</Link>
            <Link {...linkStyles} href='/create'>Create Account.</Link>
        </nav>
    )
}

export default Navbar