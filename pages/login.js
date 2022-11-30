import React, { useState, useEffect } from 'react'
import clientPromise from '../lib/mongodb';
// import { useSession } from 'next-auth/react'

export const getStaticProps = async () => {
    const client = await clientPromise;
    const db = client.db('email-builder');

    const users = await db
        .collection("users")
        .find({})
        .limit(1000)
        .toArray();
    return {
        props: { users: JSON.parse(JSON.stringify(users)) },
    };
}

const Login = ({ users }) => {
    const [user, setUser] = useState({})
    // const session = useSession()

    useEffect(() => {
        console.log(user)
        console.log(users)
        // console.log(session)
    }, [user])

    const handleSubmit = async () => {
        // Validation
        if (!user.email) {
            alert('Invalid credentials')
            return
        }
        const res = users.filter(obj => {
            obj.email === user.email
        })
    }

    const attributes = {
        labelAttributes: {
            className: 'mx-auto'
        },
        inputAttributes: {
            className: 'mx-auto border border-gray-600 my-2 pl-2',
            onChange: (e) => {
                setUser({ ...user, [e.target.name]: e.target.value })
            }
        },
        buttonAttributes: {
            className: 'bg-red-900 hover:bg-red-800 text-white w-[35%] mx-auto rounded my-4 py-2',
            onClick: () => { handleSubmit }
        }
    }
    return (
        <div className='h-[100vh] flex flex-col justify-center'>
            <form className='flex flex-col justify-center border border-gray-600 w-[50%] mx-auto p-5 rounded-xl'>
                <label {...attributes.labelAttributes} htmlFor='email'>Email:</label>
                <input {...attributes.inputAttributes} type='email' name='email' id='email' />
                {/* <label {...attributes.labelAttributes} htmlFor='password'>Password:</label>
                <input {...attributes.inputAttributes} name='password' type='password' id='password' /> */}
                <button {...attributes.buttonAttributes}>Login</button>
            </form>
        </div>
    )
}

export default Login