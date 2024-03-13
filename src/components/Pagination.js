import React, { useState } from 'react';
import '../css/Pagination.css';

export default function Pagination({ limit, setLimit,count,setCount }) {
 
  
  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value);
    console.log(newValue)
    if (newValue >= 1 && newValue <= 10) {
      setLimit(newValue);
    }
    else{
      setLimit(newValue%10);
    }
  };

  return (
    <div>
      <div className="pagination">
        <a  onClick={()=>{

           if(count>0){
            setCount(count-1);
           }
        }}>❮</a>
        <a onClick={()=>{
                      console.log("increase")
                      if(count<5){
                        console.log("isucces")
                        setCount(count+1);
                       }
        }}>❯</a>
      </div>
      <div className="items-per-page">
        <span>Show:</span>
        <input
          type="number"
          min="1"
          max="10"
          value={limit}
          onChange={handleInputChange}
        />
        <span>items per page</span>
      </div>
    </div>
  );
}
