const Email = ({ data, handleSubmit }) => {

    return (
        <div className='flex flex-col justify-center w-[50%] mx-auto my-10'>
            <p className='mb-8'>Hi,</p>
            {data.jobTitle && data.client && data.location === 'remote' ? (
                <p className='mb-8'>I&apos;m Ryan McCutcheon, a Technical Recruiter at Apex Systems. I am reaching out regarding a Remote {data.jobTitle} opportunity with our client, {data.client}.</p>
            ) : data.jobTitle && data.client ? (
                <p className='mb-8'>I&apos;m Ryan McCutcheon, a Technical Recruiter at Apex Systems. I am reaching out regarding a {data.jobTitle} opportunity with our client, {data.client}.</p>
            ) : (
                <p className='mb-8'>I&apos;m Ryan McCutcheon, a Technical Recruiter at Apex Systems. I am reaching out regarding a {data.jobTitle} opportunity.</p>
            )}
            {data.yearsExperience > 0 && data.jobTitle ? (
                <p className='mb-8'>I am looking for a {data.jobTitle} with at least {data.yearsExperience} years of experience who wants the chance to impact millions by working for the largest company in the world by revenue.</p>
            ) : (
                <p className='mb-8'>I am looking for someone who wants the chance to impact millions by working for the largest company in the world by revenue.</p>
            )}
            {data.employmentType === 'contract' && data.location === 'remote' && data.payMin && data.payMax ? (
                <p className='mb-8'>This is a {data.contractLength}-month, {data.employmentType} position, and is {data.location} for the duration of the contract. The pay ranges between ${data.payMin}-{data.payMax}/{data.payType}.</p>
            ) : data.employmentType === 'contract-to-hire' && data.location === 'remote' && data.locations ? (
                <p className='mb-8'>This is a {data.contractLength}-month, {data.employmentType} position, and is {data.location} for the duration of the contract. Upon conversion to full-time, you will need to live in, or relocate to, the following hub locations, {data.locations}. The pay ranges between ${data.payMin}-{data.payMax}/{data.payType}.</p>
            ) : data.location === 'on-site' ? (
                <p className='mb-8'>This is an {data.location}, {data.employmentType}, position and the pay ranges between ${data.payMin}-{data.payMax}/{data.payType}.</p>
            ) : data.employmentType === 'contract' || data.employmentType === 'contract-to-hire' ? (
                <p className='mb-8'>This is a {data.contractLength}-month, {data.location}, {data.employmentType} position, and the pay ranges between ${data.payMin}-{data.payMax}/{data.payType}. The employee for this position must live in, or be willing to relocate to the following hub locations, {data.locations}.</p>
            ) : (
                <p className='mb-8'>This is a {data.location}, {data.employmentType} position, and the pay ranges between ${data.payMin}-{data.payMax}/{data.payType}.</p>
            )}
            {data.coderbyte ? (
                <p className='mb-8'>If interested, let me know your primary email and I will send a Coderbyte screening assessment that needs to be completed within 48 hours. Upon successful completion, we will set up a time to chat and discuss the position further, and answer any questions before submitting your application.</p>
            ) : (
                <p className='mb-8'>If interested, let me know a good number and time to reach you to discuss your background, and answer any questions you may have before submitting your application.</p>
            )}
            <p className='my-8'>Best,</p>
            <p>Ryan McCutcheon</p>
            <button type='button' onClick={handleSubmit} className='bg-red-900 p-2 rounded text-white mt-5 text-center hover:bg-red-700 hover:cursor-pointer w-[20rem] mx-auto'>Close</button>
        </div>
    )
}

export default Email