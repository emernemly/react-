import React from 'react'
import "./Navbar.css"
const Navbar = () => {
 return (
  <div className='Navbar'>
   <div className='logo'> 
   MovieShow
     </div>
   <div className='leftSide'>
    <div  className='links'>
    <a href='home'>Home</a>
    <a href='list'>my_List</a>
    <a href='filter'>Filtre</a>
    </div>
    


   </div>
   <div className='rightSide'>
    <input type="text"placeholder='Search...'/>
    <button>Search</button>
   </div>

   
   
  </div>
 )
}

export default Navbar
