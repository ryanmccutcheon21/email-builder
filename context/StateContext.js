import React, { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

const Context = createContext()

export const StateContext = ({ children }) => {
    const [isSignIn, setIsSignIn] = useState(false)
    const [userGlobal, setUserGlobal] = useState({})

    const signIn = () => {
        setIsSignIn(true)
        toast.success('Signed in!')
    }
    const signOut = () => {
        setIsSignIn(false)
    }

    const setSignedInUser = (user) => {
        setUserGlobal(user)
    }

    return (
        <Context.Provider
            value={{
                signIn,
                signOut,
                isSignIn,
                setUserGlobal,
                userGlobal,
                setSignedInUser
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)