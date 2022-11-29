import React, { useState,useEffect } from 'react';
import Select from 'react-select';
import {getalldata} from './api'
import style from './style.css';
import { MultiSelect } from "react-multi-select-component";

const options = [
    { label: " ProjectPlotArea", value: "ProjectPlotArea" },
    { label: "GreenArea", value: "GreenArea" },
    { label: "PropertyStatus", value: "PropertyStatus" },
  ];
 
 
const Page = () => {

    const [selected, setSelected] = useState([]);
console.log(selected)
var result = selected.map(person => ( person.value));
console.log(result)


  const [users,setUsers] = useState([]);
  const [data,setdata] = useState([]);
  const [print,setprint] = useState({});

 

const selectedUsers = ['Ruth', 'Daniel'];

/*const filteredUsers = Object.keys(users)
    .filter(key => result.includes(key))
    .reduce((obj, key) => {
        obj[key] = users[key];
        return obj;
  }, {});
*/



 
  
 
  const getdata = async () => {
      let response = await getalldata();
      setdata(response.data);
  }


  
 
  return (
    <>
 
 
        
  
           <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
          
{/*Object.entries(filteredUsers).map(([key, value]) => (
    <div key={key}>{value}</div>
))

*/}









</>
   
  )
}

export default Page;