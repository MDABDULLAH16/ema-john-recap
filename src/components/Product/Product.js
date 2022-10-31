import React from 'react';
import './Product.css'


const Product = ( props ) => {
    const {handleAddToCart,product}=props
    const { img, name, price, ratings, seller } = props.product;
    


    return (
        <div className='cart-container'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name.slice(0, 20)}</p>
                <p>Price:{price}</p>
                <p>Seller: {seller}</p>
                <p>Rating:{ratings} stars </p>
            </div>
            <div>
                <button onClick={()=>handleAddToCart(product)} className='btn-cart'><p>Add To Cart  </p></button>
            </div>

        </div>
    );
};
// {/* <FontAwesomeIco icon="fa-solid fa-cart-shopping" /> */}
export default Product;