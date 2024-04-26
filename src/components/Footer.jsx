import Logo from '../assets/images/logo-blue-with-white-letters.png';
import EXR from '../assets/images/exr.png';
import SafeHousing from '../assets/images/equal-housing-opportunity.png';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="inner">
                <div className="footer-content">
                    <div className="logo-wrap">
                        <img className="logo" src={Logo} alt="logo" />
                    </div>
                    <div className="content">
                        <div className="location">
                            <h4 className="heading"> Location </h4>
                            <p> 1946 Ocean Ave, Brooklyn, NY, 11230 </p>
                        </div>
                        <div className="menu">
                            <h4 className="heading"> Menu </h4>
                            <ul className="links">
                                <li className="link"> <a href="#"> Home </a> </li>
                                <li className="link"> <a href="#"> Residences </a> </li>
                                <li className="link"> <a href="#"> Amenities </a> </li>
                                <li className="link"> <a href="#"> Availabilities </a> </li>
                                <li className="link"> <a href="#"> Neighborhood </a> </li>
                                <li className="link"> <a href="#"> Contact </a> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="logos">
                        <div className="logo-wrap exr">
                            <img src={EXR} alt="exr logo" />
                        </div>
                        <div className="logo-wrap safe-housing">
                            <img src={SafeHousing} alt="Safe-housing logo" />
                        </div>
                    </div>
                </div>
                <div className="lower-wrap">
                    <div className="copyright">
                        <p> ©Copyright 2024 EXR. All rights reserved. Website by OnelineWeb. </p>
                    </div>
                    <ul className="extra-links">
                        <li className="link"> <a href="#"> Fair Housing Statement </a> </li>
                        <li className="link"> <a href="#"> Accessibility </a> </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;