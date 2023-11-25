import { Component} from 'react';
import './maindata.css'
import { IoPrintOutline } from "react-icons/io5";
import React  from 'react'
import EachRow from './EachRow';
import {v4 as uuidv4} from 'uuid'


const Initialdata=[
    { id: uuidv4(), total:0,quantity:0,status:false ,missingStatus:false,price:0},
    { id: uuidv4(), total:0,quantity:15,status:false,missingStatus:false,price:9000.88},
    { id: uuidv4(), total:0,quantity:0,status:false,missingStatus:false,price:9000.88},
    { id: uuidv4(), total:0,quantity:15,status:false,missingStatus:false,price:0},
    { id: uuidv4(), total:0,quantity:0,status:false,missingStatus:false,price:0},
    { id: uuidv4(), total:0,quantity:13,status:false,missingStatus:false,price:9000.88},
    { id: uuidv4(), total:0,quantity:0,status:false,missingStatus:false,price:0},
    { id: uuidv4(), total:0,quantity:0,status:false,missingStatus:false,price:12000.12},
    

]

class MainData extends Component{
    state={data:Initialdata,}
   

    handleonClickApprove = (id) => {

        this.setState((prevState) => ({
            data: prevState.data.map((item) =>
              item.id === id ? { ...item, status: !item.status } : item
            ),
          }));
       
      };

      handleCancelStatus=(id,userChoice)=>{
        console.log(userChoice+"this is")
        let displayMissingUrgent=""
        if (userChoice!==null){
            if (userChoice===true){
               displayMissingUrgent="Missing Urgent"
            }
        
        else{
            displayMissingUrgent="Missing"
        }}
    console.log(displayMissingUrgent)
 this.setState((prevState)=>(
    {
        data:prevState.data.map((item)=>
        item.id===id?{...item,missingStatus:displayMissingUrgent}:item
        )
    }
))

      }
 
    render(){
        const {data}=this.state
        
        return(
            <>
            <div className='ListofAllProds-con'>
               <div className='search-section'>
                <input placeholder='Search...' className='search-style' type="search"/>
                <div className='printerandbtnCon'>
                   <button className='back-button-style'>Add Item</button> 
                   <IoPrintOutline className='printer-style'/> 
                </div>
               </div>
               <div className="productsTable">
                    
                        <ul className='list-con'>
                            <li className='columns-con'>
                            <p className='productCol'> Product name</p>
                            <p className='brandCol'>Brand</p>
                            <p className='priceCol'>Price</p>
                            <p className='quantityCol'>Quantity</p>
                            <p className='totalCol'>Total</p>
                            <p className='statusCol'>Status</p>
                            </li>
                            {
                                data.map(eachItem=>
                                    <EachRow handleonClickApprove={this.handleonClickApprove} handleCancelStatus={this.handleCancelStatus} detailsofListItem={eachItem} key={eachItem.id}/>
                                    )
                            }
                        </ul>
                        
                        
               </div>
            </div>
            
            </>
        )
   
                        }
}

export default MainData
 