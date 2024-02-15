import React, { useState } from 'react';

const products = [
    {
        "id": 1,
        "name": "Product 1",
        "price": 10,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "product1.jpg"
    },
    {
        "id": 2,
        "name": "Product 2",
        "price": 15,
        "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "image": "product2.jpg"
    }
];

const ProductList = ({ addToCart }) => {


    return (
        <div>
            <h2>Products</h2>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        <p>{product.description}</p>
                        <button style={{ border: "2px solid red" }} onClick={() => addToCart(product)}>Add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
