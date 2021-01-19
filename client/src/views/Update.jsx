import React, { useState, useEffect } from "react";
import axios from "axios";

export default (props) => {
    const {id} = props;
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/product/" + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
        })
            .catch(err => console.log(err));
    }, [])

    const updating = (e) => {
        e.preventDefault();
        axios.put("/api/products/" + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res));
    }

    return(
        <div>
            <h1>Edit Product Details</h1>
            <form onSubmit={updating}>
                <p>
                    <label>Title</label><br/>
                    <input type="text"
                    name="title"
                    value={title}
                    onChange={ e => { setTitle(e.target.value) } }/>
                </p>

                <p>
                    <label>Price</label><br/>
                    <input type="text"
                    name="price"
                    value={price}
                    onChange={ e => { setPrice(e.target.value) } }/>
                </p>

                <p>
                    <label>Description</label><br/>
                    <input type="text"
                    name="description"
                    value={description}
                    onChange={ e => { setDescription(e.target.value) } }/>
                </p>

                <input type="submit"/>
            </form>
        </div>
    )
}