import { useEffect, useReducer, useState } from "react"
import formReducer from "../reducers/formReducer"
import Email from "./Email"

const initialForm = {
    jobTitle: '',
    client: '',
    location: 'remote',
    locations: '',
    yearsExperience: '0',
    employmentType: 'contract',
    payType: 'hr',
    coderbyte: true
}

const Form = () => {
    const [state, dispatch] = useReducer(formReducer, initialForm)
    const [showEmail, setShowEmail] = useState(false)
    const [showLocations, setShowLocations] = useState(false)
    const [showContractLength, setShowContractLength] = useState(false)

    useEffect(() => {
        console.log(state)
        if (state.location === 'on-site' || state.location === 'hybrid') {
            setShowLocations(true)
        } else if (state.employmentType === 'contract-to-hire' && state.location === 'remote') {
            setShowLocations(true)
        } else if (state.employmentType === 'contract-to-hire' || state.employmentType === 'contract') {
            setShowContractLength(true)
        } else {
            setShowLocations(false)
            setShowContractLength(false)
        }
    }, [state])

    const handleSubmit = () => {
        setShowEmail(!showEmail)
    }

    if (showEmail) return <Email handleSubmit={handleSubmit} data={state} />

    return (
        <form className="flex flex-col w-[50%] border border-gray-600 rounded-xl mx-auto p-5">
            {/* Title */}
            <label htmlFor='job-title'>Job Title:</label>
            <input
                type='text'
                id='job-title'
                name='jobTitle'
                className="border border-gray-600 px-2"
                onChange={e => dispatch({
                    type: 'set_title',
                    field: e.target.name,
                    payload: e.target.value
                })}
            />
            {/* Client */}
            <label htmlFor='client'>Client:</label>
            <input
                type='text'
                id='client'
                name='client'
                className="border border-gray-600 px-2"
                onChange={e => dispatch({
                    type: 'set_client',
                    field: e.target.name,
                    payload: e.target.value
                })}
            />
            {/* Location */}
            <label htmlFor="location" class="block">Work location:</label>
            <select id="location" name="location" class="border border-gray-600 p-2" onChange={e => dispatch({
                type: 'set_location',
                field: e.target.name,
                payload: e.target.value
            })}>
                <option value="remote">Remote</option>
                <option value="hybrid">Hybrid</option>
                <option value="on-site">On-site</option>
            </select>
            {showLocations && (
                <>
                    <label htmlFor="locations">Location/s:</label>
                    <input
                        type='text'
                        name="locations"
                        id="locations"
                        className="border border-gray-600 px-2"
                        onChange={e => dispatch({
                            type: 'set_locations',
                            field: e.target.name,
                            payload: e.target.value
                        })}
                    />
                </>
            )}
            {/* Years of Experience */}
            <label htmlFor="years-experience">Minimum years of experience: </label>
            <input
                type='number'
                id="years-experience"
                name="yearsExperience"
                className="border border-gray-600 px-2"
                onChange={e => dispatch({
                    type: 'set_experience',
                    field: e.target.name,
                    payload: e.target.value
                })}
            />
            {/* Employment Type */}
            <label>Employment type:</label>
            <select
                id="employment-type"
                name="employmentType"
                class="border border-gray-600 p-2"
                onChange={e => dispatch({
                    type: 'set_employment_type',
                    field: e.target.name,
                    payload: e.target.value
                })}
            >
                <option value="contract">Contract</option>
                <option value="contract-to-hire">Contract-to-hire</option>
                <option value="full-time">Full-time</option>
            </select>
            {showContractLength && (
                <>
                    <label htmlFor="years-experience">Contract Length: </label>
                    <input
                        type='number'
                        id="contract-length"
                        name="contractLength"
                        className="border border-gray-600 px-2"
                        onChange={e => dispatch({
                            type: 'set_contract',
                            field: e.target.name,
                            payload: e.target.value
                        })}
                    />
                </>
            )}
            {/* Pay Range */}
            <div>
                <p>Pay Range:</p>
                <div className="flex max-h-10 mb-2">
                    <input
                        type='number'
                        name="payMin"
                        className="border border-gray-600 text-center w-[33%]"
                        onChange={e => dispatch({
                            type: 'set_min',
                            field: e.target.name,
                            payload: e.target.value
                        })}
                    />
                    <p className="mx-2">-</p>
                    <input
                        type='number'
                        name="payMax"
                        className="border border-gray-600 text-center w-[33%] mr-2"
                        onChange={e => dispatch({
                            type: 'set_max',
                            field: e.target.name,
                            payload: e.target.value
                        })}
                    />
                    <select id="pay-type" name="payType" class="border border-gray-600 p-2" onChange={e => dispatch({
                        type: 'set_pay_type',
                        field: e.target.name,
                        payload: e.target.value
                    })}>
                        <option value="hr">Per Hour</option>
                        <option value="yr">Per Year</option>
                        <option value="day">Per Day</option>
                    </select>
                </div>
            </div>
            {/* Coderbyte Required */}
            <label htmlFor="cb">Coderbyte/Screening required:</label>
            <select
                id="coderbyte"
                name="coderbyte"
                className="border border-gray-600 p-2"
                onChange={e => dispatch({
                    type: 'set_cb',
                    field: e.target.name,
                    payload: e.target.value
                })}
            >
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            <button
                type="button"
                className="bg-black text-white rounded py-2 mt-5 hover:bg-gray-900"
                onClick={handleSubmit}
            >Generate Email</button>
        </form >
    )
}

export default Form