import React from 'react';
import { connect } from 'react-redux';
import { removeFomCart } from '../Redux/Actions/Actions';

const Cart = (props) => {
    const {cart, removeFomCart} = props;
     return (
        <div>
            <h1>This is cart :{cart.length} </h1>
            <ul>
            {
                cart.map(id => <li>{id} <button onClick={()=>removeFomCart(id)}>X</button> </li>)
            }
            </ul>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
      cart: state.cart,
    };
  };
  const mapDispatchToProps = {
    removeFomCart: removeFomCart,
  };
  
export default connect(mapStateToProps, mapDispatchToProps) (Cart);