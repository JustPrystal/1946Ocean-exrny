const Footer = () => {
    return (
        <footer className="footer">
            <div className="inner">
                <div className="footer-content">
                    <div className="logo_wrap">
                        <img className="logo" src="./assets/Images/logo-blue-with-white-letters.png" alt="logo" />
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
                            <img src="./assets/Images/exr.png" alt="exr logo" />
                        </div>
                        <div className="logo-wrap safe-housing">
                            <img src="./assets/Images/equal-housing-opportunity.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="lower-wrap">
                    <div className="copyright">
                        <p> ©Copyright 2024 EXR. All rights reserved. Website by OnelineWeb. </p>
                    </div>
                    <ul className="extra-links">
                        <li> <a href="#"> Fair Housing Statement </a> </li>
                        <li> <a href="#"> Accessibility </a> </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;