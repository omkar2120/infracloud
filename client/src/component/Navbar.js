import React, { useEffect } from 'react'

const Navbar = () => {
    const display = () => {
      let userName = prompt("Enter Your Name")
          if(userName !== null){
            sessionStorage.setItem('name',userName)
            console.log(sessionStorage.getItem('name'))
          }
    }    
    useEffect(() => {
        display()
    },[])
   
  return (
    <div>

    </div>
  )
}

export default Navbar