import React from 'react';
import  { useState,useEffect } from 'react';
import Select from 'react-select';
import {getalldata} from './api'
import { useDispatch } from 'react-redux';
import { add1 } from './store/property1Slice';

const Select1 = () => {
    const [users,setUsers] = useState([]);
    const [data,setdata] = useState([]);
     
    useEffect(() => {
        getdata()
       
      }, []);
      useEffect(() => {
       
        dispatch(add1(users))
      }, [users]);
     
    const getAllUsers=(selectedOptions)=>{
        let response= selectedOptions;
        setUsers(response)
        //console.log(response)
        
       }
  

    const getdata = async () => {
        let response = await getalldata();
        setdata(response.data);
    }
  const dispatch=useDispatch()
  
     

  return (
    <div>
        <Select
     
     onChange={getAllUsers}
     options={data}
     style={{height:"10px",width:"10px"}}
     labelledBy="Select Property"
   />

    </div>
  )
}

export default Select1