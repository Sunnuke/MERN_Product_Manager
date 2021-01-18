import axios from "axios";
import React, { useState, useEffect } from "react";

export default () => {
    const [message, setMessage] = useState("Please Wait!...");

    useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then(res => setMessage(res.data.message))
    }, []);

    return(
        <h1>Success Message: {message}</h1>
    )
}