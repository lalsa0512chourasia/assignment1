import React from "react";

const para2 ={
    color: 'blue',
    marginTop: '10px'
   }
   
class ClassCompo extends React.Component{
    render(){
        return(
           <div className='box-2'>
               <h1>This is created using class Component</h1>
               <p className="para1">This is  done using external CSS</p>
               <p style={para2}>This is  done using inlines CSS</p>
           </div>
        )
    }
    }

export default ClassCompo;