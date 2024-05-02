import menuIcon from '../assets/images/menu.svg';
import cross from '../assets/images/cross.svg';
import headerLogo from '../assets/images/header_logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  const [headerToggle, setHeaderToggle] = useState('false');
  const handleToggle = ()=>{
    setHeaderToggle(headerToggle?false:true)
  }
  // document.addEventListener('scroll', () => {
  //   const header = document.querySelector('header');

  //   if (window.scrollY > 0) {
  //     header.classList.add('scrolled');
  //   }
  //   else{
  //     header.classList.remove('scrolled');
  //   }
  // });
  
  return (
    <header className={(headerToggle ? "" : "closed")}>
      <div className="header-wrap">
        
        <div className="links">
          <Link to="/" className="link">Home</Link>
          <Link to="/residences" className="link">Residences</Link>
          <Link to="/amenities" className="link">Amenities</Link>
          <Link to="/availabilities" className="link">Availabilities</Link>
          <Link to="/neighborhood" className="link">Neighborhood</Link>
          <Link to="/contact" className="link">Contact</Link>
        </div>
        <div className="logo-wrap">
          <Link to="/">
            <img className="logo" src={headerLogo} alt=""/>
          </Link>
        </div>
        <div className="schedule-button">
          <Link to="/contact" >Schedule A Tour</Link>
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