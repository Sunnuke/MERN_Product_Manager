import axios from "axios";
import React, { useState, useEffect } from "react";

export default () => {
    const [message, setMessage] = useState("Connecting...");

    useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then(res => setMessage(res.data.message))
    }, []);

    return(
        <h1>Connection status: {message}</h1>
    )
}