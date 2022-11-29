import React from 'react';
import { MultiSelect } from "react-multi-select-component";
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { add } from './store/cartSlice';

const options = [
    { label: " ProjectPlotArea", value: "ProjectPlotArea" },
    { label: "GreenArea", value: "GreenArea" },
    { label: "PropertyStatus", value: "PropertyStatus" },
  ];

const Choose = () => {
    const [selected, setSelected] = useState([]);
 // console.log(selected)
    //var result = selected.map(person => ( person.value));
    //console.log(result)

   const dispatch= useDispatch();
    
   useEffect(() => {
    dispatch(add(selected))
   
  }, [selected]);


  return (
    <div>
          <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  )
}

export default Choose