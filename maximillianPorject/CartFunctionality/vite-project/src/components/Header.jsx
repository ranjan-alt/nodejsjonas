import React, { useState } from 'react';
import CartModal from './CartModal';

const Header = ({ cartItems }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <header>
            <h1>Online Store</h1>
            <div>
                <button onClick={toggleModal}>View Cart ({cartItems.length})</button>
                {showModal && <CartModal cartItems={cartItems} onClose={toggleModal} />}
            </div>
        </header>
    );
};

export default Header;
