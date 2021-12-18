import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    cart.forEach(element => {
        total = total + element.price;
    });
    console.log(total);

    return (
        <div>
            <h3> Order Summary </h3>
            <p>Items Ordered : {cart.length} </p>
            <p> {total} </p>
        </div>
    );
};

export default Cart;