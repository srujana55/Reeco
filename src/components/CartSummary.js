import React from 'react'
import './cartsummary.css'
import { IoFastFoodOutline } from "react-icons/io5";
import { PiBowlFoodLight } from "react-icons/pi";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";

const CartSummary = () => {
  return (
    <div className="summary-con">
       <div className='supplierBox'>
          <p className='supplier-para'>Supplier</p>
          <h2 className='supplier-heading'>East coast fruits & vegetables</h2>
       </div>
       <div className='supplierBox'>
          <p className='supplier-para'>Shipping date</p>
          <h2 className='supplier-heading'>Thu, Feb 10</h2>
       </div>
       <div className='supplierBox'>
          <p className='supplier-para'>Total</p>
          <h2 className='supplier-heading'>$ 15,028.3</h2>
       </div>
       <div className='supplierBox'>
          <p className='supplier-para'>Category</p>
          <div className='icons-con'>
          <IoFastFoodOutline />
          <PiBowlFoodLight />
          <MdOutlineEmojiFoodBeverage />
          <FaBowlFood />
          </div>
          
       </div>
       <div className='supplierBox'>
          <p className='supplier-para'>Department</p>
          <h2 className='supplier-heading'>300-444-678</h2>
       </div>
       <div className='supplierBox'>
          <p className='supplier-para'>Status</p>
          <h2 className='supplier-heading'>Awaiting your approvel</h2>
       </div>

      
   </div>
  )
}

export default CartSummary
