import axios from "axios";
import React, { useState, useEffect } from "react";
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

    const removingDOM = (productId) => {
        setProducts(products.filter(product => product._id != productId));
    }

    return(
        <>
            <h1>Connection status: {message}</h1>
            <ProductForm />
            <hr/>
            {loaded && <ProductList products={products} deletingDOM={removingDOM}/>}
        </>
    )
}