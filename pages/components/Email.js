import React, { useEffect } from 'react'

const Email = ({ data, handleSubmit }) => {

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div className='container mx-auto'>
            <p className='mb-8'>Hi,</p>
            {data.jobTitle && data.client && (
                <p className='mb-8'>I&apos;m Ryan McCutcheon, a Technical Recruiter at Apex Systems. I am reaching out regarding a {data.jobTitle} opportunity with our client, {data.client}.</p>
            )}
            {data.yearsExperience > 0 && data.jobTitle && (
                <p className='mb-8'>I am looking for someone with at least {data.yearsExperience} years of experience as a {data.jobTitle} who wants the chance to impact millions by working for the largest company in the world by revenue.</p>
            )}
            {data.yearsExperience === 0 && (
                <p className='mb-8'>I am looking for someone who wants the chance to impact millions by working for the largest company in the world by revenue.</p>
            )}
            {data.employmentType && data.location && data.payMin && data.payMax && (
                <p className='mb-8'>This is a {data.employmentType} position, and is {data.location} for the duration of the contract. The pay ranges between ${data.payMin}-{data.payMax}/{data.payType}.</p>
            )}
            {data.coderbyte && (
                <p className='mb-8'>If interested, let me know your primary email and I will send a Coderbyte screening assessment that needs to be completed within 48 hours. Upon successful completion, we will set up a time to chat and discuss the position further, and answer any questions before submitting your application.</p>
            )}
            <p className='my-8'>Best,</p>
            <p>Ryan McCutcheon</p>
            <div className='w-[100vw] flex justify-center'>
                <buton type='button' onClick={handleSubmit} className='bg-red-900 p-2 rounded text-white mt-5 text-center hover:bg-red-700 hover:cursor-pointer w-[20rem]'>Close</buton>
            </div>
        </div>
    )
}

export default Email