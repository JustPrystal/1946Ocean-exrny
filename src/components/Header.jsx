import headerLogo from '../assets/images/header_logo.png';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  {
    link : "/",
    linkText : "Home"
  },
  {
    link : "/residences",
    linkText : "Residences"
  },
  {
    link : "/amenities",
    linkText : "Amenities"
  },
  {
    link : "/availabilities",
    linkText : "Availabilities"
  },
  {
    link : "/neighborhood",
    linkText : "Neighborhood"
  },
  {
    link : "/contact",
    linkText : "Contact"
  },
];
const Header = () => {
  const [headerToggle, setHeaderToggle] = useState('false');
  const [headerClasses, setHeaderClasses] = useState([])

  const handleToggle = ()=>{
    setHeaderToggle(headerToggle?false:true)
    if(headerToggle){
      setHeaderClasses(headerClasses.filter(className => className !== 'close'));
    }else{
      setHeaderClasses([...headerClasses, 'close']);
    }
  }
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY >= 100 && !header.classList.contains('scrolled')) {
        setHeaderClasses([...headerClasses, 'scrolled']);
      } else if (window.scrollY < 100 && header.classList.contains('scrolled')) {
        setHeaderClasses(headerClasses.filter(className => className !== 'scrolled'));
      }
    };

    document.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [headerClasses]);
  // (headerToggle ? "" : "closed")
  return (
    <header id="header" className={headerClasses.join(' ')}>
      <div className="header-wrap">
        
        <div className="links" id="header-links">
          {
            links.map((link, index)=>{
              return (<NavLink className={({ isActive }) =>( isActive ? "link active" : "link")} 
              to={link.link} 
              key={index}>
                {link.linkText}
              </NavLink>)
            })
          }
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
          <div className="menu-icon">
            <span></span>
            <span></span>
          </div>
          <span>Menu</span>
        </div>
      </div>
  </header>
  )
}

export default Header