import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import "./alertglobal.css";


const AlertGlobal = (props) => {
    useEffect(() => {
                    const clearMessage = setTimeout(props.onClose, 3000);
                    return () => clearTimeout(clearMessage);
                }, [props.show])

    return (
        <>
            <Alert
            {...props}
                className='cust-alert'
                variant="success"
                dismissible>
                <p>
                    {props.isiTeks}
                </p>
                
            </Alert>
        </>
    )
}

export default AlertGlobal;