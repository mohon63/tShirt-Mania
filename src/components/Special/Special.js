import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h5>Special</h5>
            <h4>Gift: {ring}</h4>
        </div>
    );
};

export default Special;