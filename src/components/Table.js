import React, { useEffect } from 'react';
import '../css/Table.css';

export default function Table({data}) {
  useEffect(()=>{
   console.log(data)
  })
  return (
    <div className="table-container">
      {
        data.length==0?<>No result found</>:
      
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Place Name</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item,id)=>
                <tr key={id}>
                   <td>{id+1}</td>
                   <td>{item.city}</td>
                  <td>{item.country}</td>
                </tr>)
          }
          
         
        </tbody>
      </table>
    }
    </div>
  );
}
