import React, { createContext, useState, useMemo, useRef, useEffect, useContext } from "react";

const ErrorMessageContext = createContext();


export default ({ children }) => {
    const [ error, setError ] = useState(null);
    const errorCtx = useMemo(() => ({ error, setError }), [ error ])
    return (
        <ErrorMessageContext.Provider value={errorCtx}>
            {children}
        </ErrorMessageContext.Provider>
    )
}

export const ErrorWrapper = () => {
    const { error } = useContext(ErrorMessageContext);

    return (
        error && (
            <div role='alert'>
                <svg viewBox='0 0 100 100'
                height='300' width='300' xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="40" fill='transparent' stroke='red' strokeWidth='5'/>
                <line x1="20" y1="80" x2="75" y2="18" stroke="red" strokeWidth='5'/>
                </svg>

            </div>
        )
    )
 }


export function ErrorListener({ error }) {
    const ref = useRef();
    const errorContext = useContext(ErrorMessageContext)

    useEffect(() => {
        if(errorContext === ref.current ) errorContext.setError(error);
        else ref.current = errorContext;
    })
    return ErrorWrapper()
}