import React, { useState } from "react";

export default (props) => {
    const { titleIn, priceIn, descriptionIn, submitProduct } = props;
    const [ title, setTitle ] = useState(titleIn);
    const [ price, setPrice ] = useState(priceIn);
    const [ description, setDescription ] = useState(descriptionIn);

    const ProcessProduct = (e) => {
        e.preventDefault();
        submitProduct({ title, price, description });
    }

    return(
        <div>
            <form onSubmit={ProcessProduct}>
                <label>Title</label>
                <input type="text" 
                name="title"
                value={title}
                onChange={ e => setTitle(e.target.value) } /><br/>

                <label>Price</label>
                <input type="number" 
                name="price"
                value={price}
                onChange={ e => setPrice(e.target.value) } /><br/>

                <label>Description</label>
                <input type="text" 
                name="description"
                value={description}
                onChange={ e => setDescription(e.target.value) } /><br/>

                <input type="submit" />
            </form>
        </div>
    )
}