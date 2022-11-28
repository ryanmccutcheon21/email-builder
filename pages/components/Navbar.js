import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <Link className='hover:underline flex justify-end mr-5 mt-5' href='/create'>Create Account.</Link>
        </nav>
    )
}

export default Navbar