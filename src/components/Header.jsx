import { Link } from 'react-router-dom';
import menuIcon from '../assets/images/menu.svg';
import cross from '../assets/images/cross.svg';
import headerLogo from '../assets/images/header_logo.png';
import { useState } from 'react';


const Header = () => {
  const [headerToggle, setHeaderToggle] = useState('false');
  const handleToggle = ()=>{
    setHeaderToggle(headerToggle?false:true)
  }
  document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    }
    else{
      header.classList.remove('scrolled');
    }
  });
  
  return (
    <header className={(headerToggle ? "" : "closed")}>
      <div className="header-wrap">
        <div className="links">
          <a href="/" className="link">Home</a>
          <a href="/residences" className="link">Residences</a>
          <a href="/amenities" className="link">Amenities</a>
          <a href="/availabilities" className="link">Availabilities</a>
          <a href="/neighborhood" className="link">Neighborhood</a>
          <a href="/contact" className="link">Contact</a>
        </div>
        <div className="logo-wrap">
          <a href="#">
            <img className="logo" src={headerLogo} alt=""/>
          </a>
        </div>
        <div className="schedule-button">
          <a href="#">Schedule A Tour</a>
        </div>
        <div className="menu-button" onClick={handleToggle}>
          <img className="hamburger" src={menuIcon} alt="" />
          <img className="cross" src={cross} alt="" />
          <span>Menu</span>
        </div>
      </div>
  </header>
  )
}

export default Header