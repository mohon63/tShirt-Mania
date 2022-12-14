import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    // Conditional rendering options
    // .1 Element variable
    // .2 Ternary operator condition ? true : false
    // .3 && operator (shorthand)
    // .4 ||
    let command;
    if (cart.length === 0) {
        command = <p style={{ color: "red", fontWeight: "bold" }}>Please add at least one item!!!</p>
    } else if (cart.length === 1) {
        command = <p style={{ color: "yellow", fontWeight: "bold" }}>Please add more...</p>
    } else {
        command = <p><small style={{ color: "green", fontWeight: "bold" }}>Thanks for adding item.</small> </p>
    }

    return (
        <div>
            <h2>Selected items: {cart.length}</h2>

            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button style={{ color: "red", marginLeft: "10px" }} onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }

            {cart.length === 0 || <p className='orange'>YAY! you are buying</p>}

            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>3jon ke ki gift deba</p>
            </div>}

            {command}
            {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove All</button>}
            {cart.length === 4 && <button>Review Order</button>}
        </div>
    );
};

export default Cart;