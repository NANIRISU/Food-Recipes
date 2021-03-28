import React from 'react';
import Input from '../input/Input';
import {FiSearch} from 'react-icons/fi';
import { FiAlignCenter } from "react-icons/fi";
import { BsFillGridFill } from "react-icons/bs";

const NewHeader =()=>{
    return (
    <header className="header"> 
     
     <div style={{display:"flex",justifyContent:"space-between",width:"50%"}}>
     <div className="action-container">
     <BsFillGridFill />
        <FiAlignCenter />
        <Input placeholder="Search...." icon={<FiSearch />} classes={{inputComponentClass:"hover-action"}} />

      </div>
    
     </div>
    </header>
    )
}

export default NewHeader;