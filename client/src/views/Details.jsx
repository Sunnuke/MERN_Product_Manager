import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from "@reach/router";
import DeleteButton from '../components/DeleteButton';

export default (props) => {
    const { removingDOM } = props;
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct(res.data))
    }, [])
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/products/" + props.id + "/edit"}>
                Edit
            </Link><br />
            <DeleteButton productId={product._id} removingDOM={() => navigate("/products")} />
        </div>
    )
}
