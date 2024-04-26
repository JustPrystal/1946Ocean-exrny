import { Link } from 'react-router-dom';
import menuIcon from '../assets/images/menu.svg';
import cross from '../assets/images/cross.svg';


const Header = () => {
  return (
    <header>
      <div className="header-wrap">
        <div className="links">
          <a href="#" className="link">Home</a>
          <a href="#" className="link">Residences</a>
          <a href="#" className="link">Amenities</a>
          <a href="#" className="link">Availabilities</a>
          <a href="#" className="link">Neighborhood</a>
          <a href="#" className="link">Contact</a>
        </div>
        <div className="logo-wrap">
          <img className="logo" src="./assets/images/1946_Ocean_Logo_White.png" alt=""/>
        </div>
        <div className="schedule-button">
          <a href="#">Schedule A Tour</a>
        </div>
        <div className="menu-wrap">
          <img src={menuIcon} alt="" />
          <img src={cross} alt="" />
          <span>Menu</span>
        </div>
      </div>
  </header>
  )
}

export default Header