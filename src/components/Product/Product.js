import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    
    const {name, img, price, seller, stock} = props.info;
   // console.log(props);

    return (
        <div className='product'>
            <div className='product-image'>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h4> {name} </h4>
                <p> By: {seller} </p>
                <h5> Price : {price} </h5>
                <h5> Only {stock} stocks left - Order Soon</h5>
                <button className='main-button' onClick={ () => props.addcart(props.product)}> 
                <FontAwesomeIcon icon= {faShoppingCart} /> Add To Cart 
                </button>
            </div>
            
        </div>
    );
};

export default Product;