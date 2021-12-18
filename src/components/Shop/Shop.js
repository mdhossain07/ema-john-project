import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const tenProducts = fakeData.slice(0,10);
    const [products, setproducts] = useState(tenProducts);
    const [cart, setCart] = useState([]);

    function addCart(product){
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <div className='shop-container'>
            
            <div className="product-container">
                {
                    products.map(product => 
                    <Product 
                        info = {product}
                        addcart= {addCart}>

                    </Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart = {cart}> </Cart>
            </div>
            
                
        </div>
    );
};

export default Shop;