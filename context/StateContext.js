import React, { createContext, useContext, useEffect, useState } from "react";
// import { toast } from "react-hot-toast";

const Context = createContext()

export const StateContext = ({ children }) => {
    const [isSignIn, setIsSignIn] = useState(false)
    const [user, setUser] = useState({})

    const fetchUsers = async () => {
        const res = await fetch('/api/users')
        const data = await res.json()
        return data
    }

    const signIn = async () => {
        const users = await fetchUsers()
        await users.filter(obj => {
            if (obj.email === email) {
                setIsSignIn(true)
            }
        })
    }
    const signOut = () => {
        setIsSignIn(false)
    }

    return (
        <Context.Provider
            value={{
                signIn,
                signOut,
                isSignIn
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)