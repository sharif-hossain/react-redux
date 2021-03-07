import React from 'react';

const Product = ({product, addToCart}) => {
    return (
        <div style={{border:'1px solid gray', padding:'10px', margin:'20px',display:'inline-block'}}>
            <h4>product : {product.name}</h4>
            <button onClick={()=>addToCart(product.id, product.name)}>Add to cart</button>
        </div>
    );
};

export default Product;