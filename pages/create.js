import React from 'react'
import CreateUser from './components/CreateUser'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const Create = () => {
    return (
        <div className='flex flex-col justify-evenly h-[100vh]'>
            <Navbar />
            <main>
                <CreateUser />
            </main>
            <Footer />
        </div>
    )
}

export default Create