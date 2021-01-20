import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

export default () => {
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");

    const ProcessProduct = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/new", {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                navigate("/products");
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <form onSubmit={ProcessProduct}>
                <label>Title</label>
                <input type="text" onChange={ e => setTitle(e.target.value) } /><br/>

                <label>Price</label>
                <input type="number" onChange={ e => setPrice(e.target.value) } /><br/>

                <label>Description</label>
                <input type="text" onChange={ e => setDescription(e.target.value) } /><br/>

                <input type="submit" />
            </form>
        </div>
    )
}