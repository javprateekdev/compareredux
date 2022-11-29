import React ,{useEffect, useState} from 'react';
import { useSelector } from 'react-redux';


const View = () => {
  
     const array=useSelector((state) => state.cart)
  
   console.log(array)

    const select= useSelector((state) => state.property1);

   
    
   
   /*   const filteredUsers = Object.keys(select)
    .filter(key => array.includes(key))
    .reduce((obj, key) => {
        obj[key] = select[key];
        return obj;
  }, {});
 console.log(filteredUsers)
*/
  return (
    <div>
     
    
    </div>
  )
}

export default View;