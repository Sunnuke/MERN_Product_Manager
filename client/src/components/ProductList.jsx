import { Link } from "@reach/router";
import axios from "axios";
import React from "react";

export default (props) => {
    const { removingDOM } = props;
    const deleting = (id) => {
        axios.delete("http://localhost:8000/api/products/" + id)
            .then(res => {
                removingDOM(id);
            })
    }
    return(
        <div>
            {
                props.products.map((product, i) => {
                    return(
                        <>
                            <p>
                                <Link to={"/products/" + product._id}>
                                    {product.title}
                                </Link>
                                 | 
                                <button onClick={ e => {deleting(product._id)} }>
                                    Delete
                                </button>
                            </p>
                        </>
                    )
                })
            }
        </div>
    )
}