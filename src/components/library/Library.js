import React from 'react'
import "./Library.css"
// import data from "../../data.json"
const Library = (props) => {
    return (
        <div>
        <div className="library-container">
           
                        <img src={props.image}/>
            
            <label className="desc" >{props.desc}</label>
            <label className="author">{props.author}</label>
                        
            

        
            
            
        </div>
        <button>{props.title}</button>
</div>
    )
}

export default Library
