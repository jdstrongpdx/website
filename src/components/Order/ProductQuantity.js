import React, { useState } from 'react';

import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

function ProductQuantity() {
    const [quantity, setQuantity] = useState(0);

    const increaser = () => quantity >= 10 ? setQuantity(10) : setQuantity(quantity + 1);

    let decreaser = () => quantity <= 0 ? setQuantity(0) : setQuantity(quantity - 1);

    return (
        <>
        <div>
            <i><AiOutlineMinusCircle onClick={decreaser} /></i>
            &nbsp; {quantity} &nbsp;
            <i><AiFillPlusCircle onClick={increaser} /></i>
        </div>
        </>
    );
}

export default ProductQuantity;