import React from "react";

const inline ={
    color: 'blue',
    marginTop: '10px'
   }
function Functional(){
   return (
    <div className='box-1'>
         <h1>This is created using functional Component</h1>
               <p className="para1">This is  done using external CSS</p>
               <p style={inline}>This is  done using inlines CSS</p>
    </div>
    )
}

export default Functional;