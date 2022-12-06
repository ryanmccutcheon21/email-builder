import React, { createContext, useContext, useEffect, useState } from "react";
// import { toast } from "react-hot-toast";

const Context = createContext()

export const StateContext = ({ children }) => {
    const [isSignIn, setIsSignIn] = useState(false)

    const signIn = () => {
        setIsSignIn(true)
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