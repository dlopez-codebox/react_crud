import React ,{useContext, useState}from 'react'

import { Button } from 'react-bootstrap'
import { CartContext } from "../Context/CartContext";

function ItemCount() {
    const { cartCount, addValue,removeValue,addToCart } = useContext(CartContext);

    const [countItemIntern, setcountItemIntern] = useState(0)
    const addProductToCart = (product) => {
        addValue();
        addToCart(product,2);
        setcountItemIntern(countItemIntern+1);
    
      };

    return (
        <div>
            <Button onClick={addProductToCart}>+</Button>
            <input type="number" style={{width:50}} onChange={()=>{}} value={countItemIntern}/>
            <Button>-</Button>
        </div>
    )
}

export default ItemCount
