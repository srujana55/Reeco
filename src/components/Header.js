import React from 'react';
import './header.css';
import MainData from './MainData';
import CartSummary from './CartSummary';

import { BsCart } from "react-icons/bs";

const Header = () => {
  return (
  
    <>
<div className='headerbg'>
    <div className="top-div">
        <h2 className='headersections'>Reeco</h2>
        <p className='headersections'>Store</p>
        <p className='headersections'>Orders</p>
        <p className='headersections'>Analytics</p>
    </div>
    <div className='right-div'>
    <BsCart className='headersections' />
    <div>
    
    <select className='dropdown headersections'>
        <option selected>Hello,James</option>
    </select>
    </div>
    </div>
</div>
<div className='order-card'>
    <p className="order-id">Orders: Order 32457ABC </p>
    <div className="order-details">
        <h3>Order 32547ABC</h3>
        <div>
            <button className="back-button-style">Back</button>
            <button className="back-button-style green">Approve order</button>
        </div>
    </div>
</div>
<div className="cartAndprodCon">
 <CartSummary/>   
<MainData/>
</div>

</>

   
  )
}

export default Header
