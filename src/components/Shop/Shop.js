import React from "react";
import { connect } from "react-redux";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { addToCart } from "../Redux/Actions/Actions";
const Shop = (props) => {
    const {products, addToCart} = props;
    console.log(props)
  return (
    <div>
        <Cart/>
      <h1>This is Shop !!</h1>
      {products.map((pd) => (
        <Product key={pd.id} addToCart={addToCart} product={pd}></Product>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products,
  };
};
const mapDispatchToProps = {
  addToCart: addToCart,
};

//const connectToStore = connect(mapStateToProps, mapDispatchToProps);
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
