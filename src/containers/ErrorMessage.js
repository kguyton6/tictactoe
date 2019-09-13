import React, { useContext, useRef, useEffect } from "react";
import ErrorMessage, { ErrorListener, ErrorWrapper } from "../hooks/ErrorMessageContext";


export default ({error}) => {
    return (
        <ErrorMessage>
            {/* <ErrorWrapper /> */}
         <ErrorListener error={error}/>
        </ErrorMessage>
    )
}
