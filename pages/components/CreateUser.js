import React, { useEffect, useState } from 'react'

const CreateUser = () => {
    const [user, setUser] = useState({})

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/users`)
            const data = await res.json()
            console.log(data)
        })()

    }, [user])

    const textInput = {
        type: 'text',
        placeholder: 'Ryan',
        className: 'pl-2',
        onChange: e => {
            e.preventDefault()
            setUser({ ...user, [e.target.name]: e.target.value })
        }
    }

    const handleSubmit = async () => {
        // post new user to MongoDB 
        await fetch(`/api/users`, {
            method: 'POST',
            body: JSON.stringify({ user }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return (
        <form className='border border-gray-600 rounded-xl mx-auto p-5 flex flex-col w-[50%] [&>input]:border [&>input]:border-gray-600'>
            <label>First name:</label>
            <input {...textInput} name='first' />
            <label>Last name:</label>
            <input {...textInput} name='last' placeholder='McCutcheon' />
            <label>Title:</label>
            <input {...textInput} name='title' placeholder='Ex: Technical Recruiter' />
            <label>Password:</label>
            <input type='password' className='pl-2' name='password' />
            <button onClick={handleSubmit} className='bg-red-900 w-[50%] mx-auto rounded my-5 py-2 text-white hover:bg-red-800'>Create Account</button>
        </form>
    )
}

export default CreateUser