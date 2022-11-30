import React, { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const CreateUser = () => {
    const [user, setUser] = useState({})

    useEffect(() => {
        console.log(user)
    }, [user])

    // base attributes for text inputs
    const textInput = {
        type: 'text',
        placeholder: 'Ryan',
        className: 'pl-2',
        onChange: e => {
            e.preventDefault()
            setUser({ ...user, [e.target.name]: e.target.value })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // Validation
        if (!user.first || !user.last || !user.email) {
            alert('Invalid credentials')
            return
        }
        // POST form values
        const res = await fetch(`/api/users`, {
            method: 'POST',
            body: JSON.stringify({ user }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        console.log(data)
    }

    return (
        <div className='flex flex-col justify-evenly h-[100vh]'>
            <Navbar />
            <main>
                <form className='border border-gray-600 rounded-xl mx-auto p-5 flex flex-col w-[50%] [&>input]:border [&>input]:border-gray-600'>
                    <label>First name:</label>
                    <input {...textInput} name='first' />
                    <label>Last name:</label>
                    <input {...textInput} name='last' placeholder='McCutcheon' />
                    <label>Title:</label>
                    <input {...textInput} name='title' placeholder='Ex: Technical Recruiter' />
                    <label>Email:</label>
                    <input {...textInput} name='email' placeholder='Email address' />
                    {/* <label>Password:</label>
            <input onChange={textInput.onChange} type='password' className='pl-2' name='password' /> */}
                    <button onClick={handleSubmit} className='bg-red-900 w-[50%] mx-auto rounded my-5 py-2 text-white hover:bg-red-800'>Create Account</button>
                </form>
            </main>
            <Footer />
        </div>
    )
}

export default CreateUser