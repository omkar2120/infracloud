import React, {  } from 'react'

const Navbar = ({name}) => {
  
   
  return (
    <div>
     <h1> Welcome  {sessionStorage.getItem("name")}</h1>
        
    </div>
  )
}

export default Navbar