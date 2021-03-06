import React from 'react';
import Product from '../Product/Product'
const Shop = () => {
    const products = [
        {name:'laptop', id:1},
        {name:'desktop', id:2},
        {name:'lenovo', id:3},
        {name:'Dell', id:4},
    ]
    return (
        <div>
            <h1>This is Shop !!</h1>
            {
                products.map(pd => <Product key={pd.id} product ={pd}></Product>)
            }
        </div>
    );
};

export default Shop;