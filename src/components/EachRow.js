import React,{useState} from 'react'
import { ImCross } from "react-icons/im";
import './eachroww.css'

const EachRow = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [userChoice, setUserChoice] = useState(null);
   
const {detailsofListItem,handleonClickApprove,handleCancelStatus,}=props
const {id,status,missingStatus,quantity,price}=detailsofListItem

const approvedStatusButton=<button className="approveBtn">Approved</button>
const missingUrgentBtn=<button className='missing-urgent-btn'>Missing-Urgent</button>
const missingbtn=<button className='missing-urgent-btn missing-btn'>Missing</button>
console.log(missingStatus)

let displayStatusonClose=""
if (missingStatus!==false){
    if (missingStatus==="Missing Urgent"){
        displayStatusonClose=missingUrgentBtn
    }
    else{
        displayStatusonClose=missingbtn
    }
}



const handleApprove=()=>{
    handleonClickApprove(id)
}
const handleCrossClick = () => {
    setShowModal(true);
  
  };

const handleConfirm = () => {
    // Handle the confirmation logic here
    console.log('User clicked "Yes"');
    setUserChoice(true);
    setShowModal(false);
    handleCancelStatus(id,true)
  };

  const handleCancel = () => {
    // Handle the cancellation logic here
    console.log('User clicked "No"');
    setUserChoice(false);
    setShowModal(false);
    handleCancelStatus(id,false)
  };

  const handleClose = () => {
    setShowModal(false);
  };


  return (
    <li className="listItemcon">
        <div className='imageAndparaCon'>
            <div>
            <img className="avacadoImage" src="./avacadoImage.jpg" alt="fruit"/>
            </div>
            <p>Chicken Breats Fillets, Boneless matuu maMarinated 6 Ounce Raw,invivid</p>
        </div>
        <p className='brandCol'>Hormel Black Labelmany</p>
        <p className='priceCol'>$60.67/6*1LB</p>
        <p className='quantityCol'>{quantity} x 6 * 1LB</p>
        <p className='totalCol'>${price}</p>
        <div className="wrapStatus">
           <div>
            {status && approvedStatusButton}
             {displayStatusonClose}          
            </div>
         <div className='statusCol status-con'>
           <button onClick={handleApprove} className={status ?"approvedTickBtn":"normaltickBtn"}> ✔</button>
           <p className={userChoice?"redcolor-cross":((userChoice!==null)?"orangecolor-cross":"cross")} onClick={handleCrossClick}><ImCross /> </p>
            <button>Edit</button>
         </div>
         </div> 

         {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className='modal-close-con'>
             <h2>Missing Product</h2>
             <button className="close-button" onClick={handleClose}>
             &#x2715;
              </button>
            </div>
            <p>Is 'Chicken Breast Fillets, Boneless...' urgent?</p>
            <button onClick={handleConfirm}>Yes</button>
            <button onClick={handleCancel}>No</button>
          </div>
        </div>
      )}
    </li>
     

  )
}

export default EachRow
