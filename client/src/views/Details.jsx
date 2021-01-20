import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from "@reach/router";

export default (props) => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct(res.data))
    }, [])
    const deleting = (id) => {
        axios.delete("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log(res);
                navigate("/products");
            })
    }
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/products/" + props.id + "/edit"}>
                Edit
            </Link>
            <button onClick={ e => {deleting(props.id)} }>
                Delete
            </button>
        </div>
    )
}
