import React, { useState } from 'react'
import { useStateContext } from '../context/StateContext';

const Login = () => {
    const [user, setUser] = useState({})
    const { signIn, userGlobal, setSignedInUser } = useStateContext()

    const handleClick = async (e) => {
        e.preventDefault()
        // Validation
        if (!user.email || !user.password) {
            alert('Invalid credentials')
            return
        }
        const res = await fetch(`/api/signIn`, {
            method: 'POST',
            body: JSON.stringify({ user }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        // console.log(data.result)
        if (data) {
            signIn()
            setSignedInUser(data.result)
            console.log(userGlobal)
        } else {
            console.log("Couldn't sign in.")
        }
    }

    const onChange = e => {
        e.preventDefault()
        setUser({ ...user, [e.target.name]: e.target.value })
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
                    onChange={onChange}
                />
                <label
                    className='mx-auto'
                    htmlFor='password'
                >
                    Password:
                </label>
                <input
                    className='mx-auto border border-gray-600 my-2 pl-2'
                    type='password'
                    name='password'
                    id='password'
                    onChange={onChange}
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