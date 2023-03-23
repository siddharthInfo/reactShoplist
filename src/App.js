import React,{useState,useEffect} from 'react'
import './index.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight,faChevronLeft,faCircle,faCheckCircle,faPlus} from '@fortawesome/free-solid-svg-icons';


function App() {
  const [items,setItems]=useState([{itemName:'item',quantity:1,isSelected:false},
{itemName:'item2',quantity:2,isSelected:true},
{itemName:'item3',quantity:3,isSelected:false},
]);
const[inputValue,setInputValue]=useState('');
const [totalItemCount,setTotalitemCount]=useState(6);

const handleAdd=()=>{
  const newItem ={
    itemName:inputValue,
    quantity:1,
    IsSelected:false,};
  
    const newItems = [...items,newItem];
    setItems(newItems);
    setInputValue('');
    calculateTotal();
  };

  const handleQuantityIncrease=(index)=>{
   const newItems = [...items];
   newItems[index].quantity++;
   setItems(newItems);
   calculateTotal();
  };

  const handleQuantityDecrease=(index)=>{
    const newItems = [...items];
    newItems[index].quantity--;
    setItems(newItems);
    calculateTotal();
   };
   const toggleComplete=(index)=>{
    const newItems=[...items];
    newItems[index].isSelected=!newItems[index].isSelected;
    setItems(newItems);
   }
   const calculateTotal=(index)=>{
    const totalItemCount=items.reduce((total,item)=>{
      return total+item.quantity;
    },0);
    setTotalitemCount(totalItemCount);
   }
  return (
       <div className="app-background">
        <div className='main-container'>
        <div className="add-item-box">
          <input value={inputValue} onChange={(event)=>setInputValue(event.target.value)}
          className="add-item-input" placeholder='add an item..'></input>
          <FontAwesomeIcon icon={faPlus} onClick={()=>handleAdd()}></FontAwesomeIcon>
        </div>
        <div className="item-list">
          {items.map((item,index)=>(
            <div className="item-container">

              <div className="item-name" onClick={()=>toggleComplete(index)}>
                {item.isSelected?(
                  <><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                  <span className="completed">{item.itemName}</span></>
                ):(
                  <>
                  <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                  <span>{item.itemName}</span>
                  </>
                )}
              </div>
            
      
        <div className='quantity'>
          <button>
            <FontAwesomeIcon icon={faChevronLeft} onClick={()=>handleQuantityDecrease(index)}></FontAwesomeIcon>
          </button>
          <span>{items.quantity}</span>
          <button>
            <FontAwesomeIcon icon={faChevronRight} onClick={()=>handleQuantityIncrease(index)}></FontAwesomeIcon>
          </button>
        </div>
        </div> 
          ))
          }
        </div>
        <div className='total'>Total:{totalItemCount}</div>
    </div>
    </div>
  )
  
}

export default App
