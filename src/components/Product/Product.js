import React from 'react';
import './Product.css'

const Product = ({product}) => {
    const {img, name,price,ratings,seller}=product;
   
    return (
        <div className='cart-container'>
            <img src={img} alt="" />
            <div className="product-info">
            <p className='product-name'>{name.slice(0,20)}</p>
                <p>Price:{price}</p>
                <p>Seller: {seller}</p>
                <p>Rating:{ratings} stars</p>
            </div>
            <div>
                <button className='btn-cart'><p>Add To Cart</p></button>
            </div>

        </div>
    );
};

export default Product;