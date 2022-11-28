import React from 'react'

const CreateUser = () => {
    return (
        <form className='border border-gray-600 rounded-xl mx-auto p-5 flex flex-col w-[50%] [&>input]:border [&>input]:border-gray-600'>
            <label>First name:</label>
            <input type='text' />
            <label>Last name:</label>
            <input type='text' />
            <label>Title:</label>
            <input type='text' placeholder='Ex: Technical Recruiter' />
            <label>Password:</label>
            <input type='password' />
            <button className='bg-red-900 w-[50%] mx-auto rounded my-5 py-2 text-white hover:bg-red-800'>Create Account</button>
        </form>
    )
}

export default CreateUser