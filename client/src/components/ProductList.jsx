import { Link } from "@reach/router";
import React from "react";
import DeleteButton from "./DeleteButton";

export default (props) => {
    const { removingDOM } = props;
    return(
        <div>
            {
                props.products.map((product, i) => {
                    return(
                        <div key={i}>
                            <p>
                                <Link to={"/products/" + product._id}>
                                    {product.title}
                                </Link>
                                | 
                                <DeleteButton productId={product._id} removingDOM={() => removingDOM(product._id)} />
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}