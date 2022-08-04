import React from 'react'

const Navbar =()=>{
  return(

    <div>
    <nav className='ui raisedvery padded segment'>
    <a className = 'ui teal invrted segment'> Image Search Engine </a>
    <div className='ui right floated header'>
    <button className='ui button'> <a href="/Home">Home </a> </button>
    <button className='ui button'> <a href="/About">About Us </a> </button>
    <button className='ui button'> <a href="/Contact">Contact Us </a> </button>
    </div>
    </nav>
    </div>
  )
}
export default Navbar;
