import Logo from '../assets/images/logo-blue-with-white-letters.png';
import EXR from '../assets/images/exr.png';
import SafeHousing from '../assets/images/equal-housing-opportunity.png';
import Modal from './Modal';
import ScrollUpButton from './ScrollUpButton';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

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
const Footer = () => {
    const [modalShow, setModalShow] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const showModal = (e) => {
        for (let i = 0; i < modalData.length; i++) {
            if(e.target.className === modalData[i].slug){
                setModalContent(modalData[i].content)
            }
        }
        setModalShow(true)
    }
    let modalData = [
        {
            slug : "fair-housing",
            content : `<h2>Fair Housing Statement</h2>
            <p>EXR complies fully with local, state and federal fair housing laws against discrimination on the basis of race, color, religion, sex, national origin, handicap, age, marital status and/or familial status, children or other prohibited factors.</p>
            <h2>The Civil Rights Act of 1968</h2>
            <p>The Civil Rights Act of 1968 known as the Federal Fair Housing Law makes illegal any discrimination based on race, color, religion, sex or national origin in connection with the sale or rental of housing. The 1988 amendment to this Act (The Fair Housing Amendments Act of 1988) expands the coverage of this law to handicapped persons and families with children. EXR complies fully with State and local statutes and Federal Fair Housing laws.</p>
            <h2>Links</h2>
            <p>For more information, visit these websites:<br><a target="_blank" href="http://www.dhr.ny.gov/">http://www.dhr.ny.gov</a><br><a target="_blank" href="http://www.nyc.gov/html/cchr/">http://www.nyc.gov/html/cchr/</a><br><a target="_blank" href="http://portal.hud.gov/">http://portal.hud.gov</a></p>`
        },
        {
            slug : "accessibility",
            content :  ` <h2>Accessibility</h2>
            <p>We are striving to meet online usability and design requirements recommended by the World Wide Web Consortium (W3C) in its Web Content Accessibility Guidelines 2.0 Level AA, as well as requirements under the Twenty-First Century Communications and Video Accessibility Act of 2010. We are using design standards that help customers identify, interpret, understand and interact with information presented on our websites and mobile apps.</p>
            <p>Here are some helpful tips for using our sites and apps:</p>
            <ul>
                <li>Account numbers: In most instances, you won’t see your complete account number online. For security reasons, we’ll only reveal a few digits (typically the last 3 or 4) of your account number. The remaining digits are represented by a series of periods or the letter X.</li>
                <li>Dollar amounts: Please don’t use the dollar sign ($) when you include dollar amounts in any form field; it will cause an error. When you include dollar amounts, you may see one input field or two fields separated by a decimal point. In some cases, you’ll find an example adjacent to the input field(s) to help you understand how to format your amount.</li>
                <li>JavaScript: Is enabled by default in modern web browsers, if you disable it you won’t be able to enjoy all of the features of our site. Software and Recommendation Settings:</li>
            </ul>
            <p>We follow the W3C’s globally recognized standards to provide content that’s compatible with the most popular assistive technologies and web browsers. We recommend using the most current version (or the version released just prior to) of manufacturer’s assistive technology applications, along with a current version of the browsers listed below. Try different types of browsers with assistive technology applications to determine which combination works best for you.</p>
            <p>Please go to the individual manufacturer’s site for information about how to obtain them. You may also have access to assistance from local and state agencies or non-profit groups in your area.</p>`
        }
    ]
    return (
        <>
            <footer className="footer">
                <div className="inner">
                    <div className="footer-content">
                        <div className="logo-wrap">
                            <a href="/">
                                <img className="logo" src={Logo} alt="logo" />
                            </a>
                        </div>
                        <div className="content">
                            <div className="location">
                                <h4 className="heading"> Location </h4>
                                <a href="https://www.google.com/maps/place/1946+Ocean+Ave,+Brooklyn,+NY+11230,+USA/@40.6144619,-73.9571784,17z/data=!3m1!4b1!4m6!3m5!1s0x89c244be658af2bb:0x9c9aa5dbe4865cf9!8m2!3d40.6144579!4d-73.9546035!16s%2Fg%2F11bw402hp3?entry=ttu">
                                    1946 Ocean Ave, Brooklyn,<br/> NY 11230, USA
                                </a>
                            </div>
                            <div className="menu">
                                <h4 className="heading"> Menu </h4>
                                <ul className="links">
                                {
                                    links.map((link, index)=>{
                                    return (<li className="link"><NavLink className={({ isActive }) =>( isActive ? "active" : "")} 
                                    to={link.link} 
                                    key={index}>
                                        {link.linkText}
                                    </NavLink></li>)
                                    })
                                }
                                </ul>
                            </div>
                        </div>
                        <div className="logos">
                            <div className="logo-wrap exr">
                                <a href="https://www.exrny.com/?utm_source=https%3A%2F%2F1946ocean.com%2F&utm_medium=referral&utm_campaign=landing_pages">
                                    <img src={EXR} alt="exr logo" />
                                </a>
                            </div>
                            <div className="logo-wrap safe-housing">
                                <img src={SafeHousing} alt="Safe-housing logo" />
                            </div>
                        </div>
                    </div>
                    <div className="lower-wrap">
                        <div className="copyright">
                            <p>©Copyright 2024 EXR. All rights reserved.</p>
                        </div>
                        <ul className="extra-links">
                            <li className="link" onClick={showModal}> <p className='fair-housing'> Fair Housing Statement </p> </li>
                            <li className="link" onClick={showModal}> <p className='accessibility'> Accessibility </p> </li>
                        </ul>
                    </div>
                </div>
            </footer>
            {
                modalShow && <Modal data={modalContent} setter={setModalShow}/>
            }
            <ScrollUpButton />
        </>
    );
}

export default Footer;