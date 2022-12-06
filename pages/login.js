import React, { useState } from 'react'
import { useStateContext } from '../context/StateContext';

const Login = () => {
    const [user, setUser] = useState({})
    const { signIn } = useStateContext()

    const fetchUsers = async () => {
        const res = await fetch('/api/users')
        const data = await res.json()
        return data
    }

    const handleClick = async (e) => {
        e.preventDefault()
        if (!user.email) {
            alert('You must enter a valid email address.')
        }
        const users = await fetchUsers()
        await users.filter(obj => {
            if (obj.email === user.email) {
                signIn()
            }
        })
    }

    return (
        <div className='h-[90vh] flex flex-col justify-center'>
            <form className='flex flex-col justify-center border border-gray-600 w-[50%] mx-auto p-5 rounded-xl'>
                <label
                    className='mx-auto'
                    htmlFor='email'
                >
                    Email:
                </label>
                <input
                    className='mx-auto border border-gray-600 my-2 pl-2'
                    type='email'
                    name='email'
                    id='email'
                    onChange={e => setUser({ ...user, [e.target.name]: e.target.value })}
                />
                <button
                    className='bg-red-900 hover:bg-red-800 text-white w-[35%] mx-auto rounded my-4 py-2'
                    onClick={handleClick}
                >
                    Login
                </button>
            </form>
        </div >
    )
}

export default Login