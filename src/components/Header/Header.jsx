import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find book of your choice.</h2><br />
                <p className='header-text fs-18 fw-3'>
                Books are treasures that transcend time and transport us to worlds both real and imagined. Within their pages, we find solace, knowledge, and boundless inspiration. They have the power to ignite our imaginations, broaden our perspectives, and spark profound introspection. 
                </p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header