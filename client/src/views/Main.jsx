import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

export default () => {
    const [message, setMessage] = useState("Connecting...");
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            });
    },[])
    useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then(res => setMessage(res.data.message))
    }, []);

    const createProduct = (product) => {
        setProducts([...products, product]);
        axios.post("http://localhost:8000/api/products/new", product)
            .then(res => {
                console.log(res);
                navigate("/products");
            })
            .catch(err => console.log(err))
    }

    const removingDOM = (productId) => {
        setProducts(products.filter(product => product._id != productId));
    }

    return(
        <>
            <h1>Connection status: {message}</h1>
            <ProductForm titleIn="" priceIn="" description="" submitProduct={createProduct} />
            <hr/>
            {loaded && <ProductList products={products} removingDOM={removingDOM}/>}
        </>
    )
}