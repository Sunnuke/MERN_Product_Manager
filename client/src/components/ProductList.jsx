import React from "react";

export default (props) => {
    return(
        <div>
            {
                props.products.map((product, i) => {
                    let temp = "http://localhost:3000/products/" + product._id;
                    return(
                        <>
                            <a href={temp}>{product.title}</a><br/>
                        </>
                    )
                })
            }
        </div>
    )
}