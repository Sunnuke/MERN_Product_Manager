import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import axios from "axios";
import DeleteButton from "../components/DeleteButton";
import ProductForm from "../components/ProductForm";

export default (props) => {
    const { id } = props;
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                setLoaded(true);
        })
            .catch(err => console.log(err));
    }, [])

    const updating = (product) => {
        axios.put("http://localhost:8000/api/products/" + id, product)
            .then(res => {
                console.log(res)
                navigate("/products");
            });
    }

    return(
        <div>
            <h1>Edit Product Details</h1>
            {loaded && <ProductForm titleIn={title} priceIn={price} descriptionIn={description} submitProduct={updating} />}
            <DeleteButton productId={id} removingDOM={() => navigate("/products")} />
        </div>
    )
}