import React, { useState } from "react";
import axios from "axios";

export default () => {
    const [ titleInput, setTitleInput ] = useState("");
    const [ priceInput, setPriceInput ] = useState("");
    const [ descriptionInput, setDescriptionInput ] = useState("");

    const ProcessProduct = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/new", {
            titleInput,
            priceInput,
            descriptionInput
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return(
        <div>
            <form onSubmit={ProcessProduct}>
                <label>Title</label>
                <input type="text" onChange={ e => setTitleInput(e.target.value) } /><br/>

                <label>Price</label>
                <input type="number" onChange={ e => setPriceInput(e.target.value) } /><br/>

                <label>Description</label>
                <input type="text" onChange={ e => setDescriptionInput(e.target.value) } /><br/>

                <input type="submit" />
            </form>
        </div>
    )
}