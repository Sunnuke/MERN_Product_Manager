import React from "react";

export default (props) => {
    return(
        <div>
            {
                props.products.map((product, i) => {
                    let temp = "http://localhost:8000/api/products/" + product.id;
                    return(
                        <a href={temp}>{product}</a>
                    )
                })
            }
        </div>
    )
}