import React, { useEffect, useState } from 'react'

const Email = ({ data, handleSubmit }) => {
    const [dataObj, setDataObj] = useState({ ...data })

    useEffect(() => {
        console.log(dataObj)
    }, [dataObj])

    return (
        <div className='container mx-auto'>
            <p className='mb-8'>Hi,</p>
            {dataObj.jobTitle && dataObj.client && dataObj.location === 'remote' ? (
                <p className='mb-8'>I&apos;m Ryan McCutcheon, a Technical Recruiter at Apex Systems. I am reaching out regarding a Remote {dataObj.jobTitle} opportunity with our client, {dataObj.client}.</p>
            ) : dataObj.jobTitle && dataObj.client ? (
                <p className='mb-8'>I&apos;m Ryan McCutcheon, a Technical Recruiter at Apex Systems. I am reaching out regarding a {dataObj.jobTitle} opportunity with our client, {dataObj.client}.</p>
            ) : (
                <p className='mb-8'>I&apos;m Ryan McCutcheon, a Technical Recruiter at Apex Systems. I am reaching out regarding a {dataObj.jobTitle} opportunity.</p>
            )}
            {dataObj.yearsExperience > 0 && dataObj.jobTitle ? (
                <p className='mb-8'>I am looking for a {dataObj.jobTitle} with at least {dataObj.yearsExperience} years of experience who wants the chance to impact millions by working for the largest company in the world by revenue.</p>
            ) : (
                <p className='mb-8'>I am looking for someone who wants the chance to impact millions by working for the largest company in the world by revenue.</p>
            )}
            {dataObj.employmentType === 'contract' && dataObj.location === 'remote' && dataObj.payMin && dataObj.payMax ? (
                <p className='mb-8'>This is a {dataObj.contractLength}-month, {dataObj.employmentType} position, and is {dataObj.location} for the duration of the contract. The pay ranges between ${dataObj.payMin}-{dataObj.payMax}/{dataObj.payType}.</p>
            ) : dataObj.employmentType === 'contract-to-hire' && dataObj.location === 'remote' && dataObj.locations ? (
                <p className='mb-8'>This is a {dataObj.contractLength}-month, {dataObj.employmentType} position, and is {dataObj.location} for the duration of the contract. Upon conversion to full-time, you will need to live in, or relocate to, the following hub locations, {dataObj.locations}. The pay ranges between ${dataObj.payMin}-{dataObj.payMax}/{dataObj.payType}.</p>
            ) : dataObj.location === 'on-site' ? (
                <p className='mb-8'>This is an {dataObj.location}, {dataObj.employmentType}, position and the pay ranges between ${dataObj.payMin}-{dataObj.payMax}/{dataObj.payType}.</p>
            ) : dataObj.employmentType === 'contract' || dataObj.employmentType === 'contract-to-hire' ? (
                <p className='mb-8'>This is a {dataObj.contractLength}-month, {dataObj.location}, {dataObj.employmentType} position, and the pay ranges between ${dataObj.payMin}-{dataObj.payMax}/{dataObj.payType}. The employee for this position must live in, or be willing to relocate to the following hub locations, {dataObj.locations}.</p>
            ) : (
                <p className='mb-8'>This is a {dataObj.location}, {dataObj.employmentType} position, and the pay ranges between ${dataObj.payMin}-{dataObj.payMax}/{dataObj.payType}.</p>
            )}
            {dataObj.coderbyte ? (
                <p className='mb-8'>If interested, let me know your primary email and I will send a Coderbyte screening assessment that needs to be completed within 48 hours. Upon successful completion, we will set up a time to chat and discuss the position further, and answer any questions before submitting your application.</p>
            ) : (
                <p className='mb-8'>If interested, let me know a good number and time to reach you to discuss your background, and answer any questions you may have before submitting your application.</p>
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