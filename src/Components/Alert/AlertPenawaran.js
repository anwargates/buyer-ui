import React, { useEffect, useState } from "react"
import { Alert } from "react-bootstrap";
// import "./AlertPenawaran.css"


const AlertPenawaran = (props) => {
    return (
        <>
            <Alert
            {...props}
                className='cust-alert'
                variant="success"
                dismissible>
                <p>
                Status produk berhasil diperbarui
                </p>
            </Alert>
        </>
    )
}

export default AlertPenawaran;