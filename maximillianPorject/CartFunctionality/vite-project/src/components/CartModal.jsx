import React from 'react';
import "./cartmodal.css"

const CartModal = ({ cartItems, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Shopping Cart</h2>
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CartModal;
