import React from "react";

function Navbar() {
  return (
    <nav className='flex justify-end pr-52  h-24 bg-black text-white relative shadow-sm font-mono' role='navigation'>
    
        <a href='#' className='p-4 text-3xl mr-5 hover:text-green-600'>Home</a>
        <a href='#' className='p-4 text-3xl mr-5 hover:text-green-600'>About</a>
        <a href='#' className='p-4 text-3xl mr-5 hover:text-green-600'>Contact</a>
        <a href='#' className='p-4 text-3xl hover:text-green-600'>Login</a>
   
</nav>
  );
}

export default Navbar;