import axios from "axios";
import React from "react";

export default (props) => {
    const { productId, removingDOM } = props;
    const deleting = (e) => {
        axios.delete("http://localhost:8000/api/products/" + productId)
            .then(res => {
                removingDOM();
            })
    }
    return(
            <button onClick={ e => {deleting(e)} }>
                Delete
            </button>
    )
}