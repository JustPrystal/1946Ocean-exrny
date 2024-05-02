import Header from '../components/Header';
import Hero from '../components/Hero';
import bannerImage from '../assets/images/home/banner.jpg';
import unitDetailsImage from '../assets/images/home/unit-details-image.png';
import amenitiesImage from '../assets/images/home/amenities-image.png';
import neighboehoodImage from '../assets/images/home/img-5-with-border-2.png';
import TwoColumn from '../components/TwoColumn';
import QuickNav from '../components/QuickNav';
import Footer from '../components/Footer';
import Modal from '../components/Modal';


let heroData = {
    backgroundImage : bannerImage,
    heading : "Your Urban Oasis",
    description: "Nestled within the vibrant neighborhood of Midwood, Brooklyn, 1946 Ocean Avenue epitomizes luxury living at its finest. These opulent apartments offer a seamless blend of modern elegance and urban convenience, presenting an unparalleled opportunity for those seeking Brooklyn, New York apartments available for rent."
}

let TwoColumnData = [
    {
        variant : "blue",
        heading : "Unit Details",
        subheading : "Exceptional <span>Design<span/>",
        description : `<p>Welcome to Ocean 1946, where contemporary elegance meets modern convenience.</p>
            <p>Featuring Marvin windows on one side and floor-to-ceiling windows on the other, each residence is bathed in natural light, illuminating the white oak hardwood floors and light-colored interiors. Stainless steel appliances, quartz countertops, and open-concept kitchens make cooking a joy, while washer dryers in every unit add convenience to daily life.</p>
            <p>With HVAC temperature control ensuring comfort year-round, and marble bathrooms with showers in the master tub, luxury abounds in every detail. Black finishes add a touch of sophistication, while floors 3-6 boast balconies and the 6th floor offers expansive porches for outdoor relaxation.</p>
            <p>Experience a harmonious blend of style and functionality at Ocean 1946.</p>`,
        image : unitDetailsImage,
        flexDirection : "row",
        logo : false,
    },
    {
        variant : "white",
        heading : "Amenities",
        subheading : "Opulent <span>Amenities<span/>",
        description : `<p>Stay active and energized in our state-of-the-art fitness center, then unwind and socialize in the elegant lounge or gather with friends in the chef’s kitchen for culinary adventures. Need to catch up on work? Our business center provides a productive environment, while the package room ensures convenient deliveries. Relax in the stylish lobby or utilize our efficient mailroom services. With parking available for your convenience, Ocean 1946 offers the ultimate in modern living, where every detail is designed to enhance your lifestyle.</p>`,
        image : amenitiesImage,
        flexDirection : "row-reverse",
        logo : false,
    },
    {
        variant : "cream",
        heading : "Neighborhood",
        subheading : "In the heart <span>of Brooklyn<span/>",
        description : `<p>Experience the convenience of Ocean 1946’s prime location, surrounded by a wealth of amenities and attractions. From the tranquility of Brooklyn Marine Park to the academic hub of Brooklyn College, and the nearby New York Community Hospital, everything you need is within reach. Enjoy a diverse culinary scene, shopping options, and easy access to public transportation, including the express bus and the B and Q train on Kings Highway. Dive into the vibrant neighborhood surrounding Ocean 1946, where urban convenience meets luxury living.</p>`,
        image : neighboehoodImage,
        flexDirection : "row",
        logo : true,
    },
]
let ModalData = [
    {
        description : `<h2>Fair Housing Statement</h2>
        <svg width="64px" height="64px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z" fill="#000000"></path> </g></svg>
        <p>EXR complies fully with local, state and federal fair housing laws against discrimination on the basis of race, color, religion, sex, national origin, handicap, age, marital status and/or familial status, children or other prohibited factors.</p>
        <h2>The Civil Rights Act of 1968</h2>
        <p>The Civil Rights Act of 1968 known as the Federal Fair Housing Law makes illegal any discrimination based on race, color, religion, sex or national origin in connection with the sale or rental of housing. The 1988 amendment to this Act (The Fair Housing Amendments Act of 1988) expands the coverage of this law to handicapped persons and families with children. EXR complies fully with State and local statutes and Federal Fair Housing laws.</p>
        <h2>Links</h2>
        <p>For more information, visit these websites:<br><a target="_blank" href="http://www.dhr.ny.gov/">http://www.dhr.ny.gov</a><br><a target="_blank" href="http://www.nyc.gov/html/cchr/">http://www.nyc.gov/html/cchr/</a><br><a target="_blank" href="http://portal.hud.gov/">http://portal.hud.gov</a></p>`,
    },
    {
        description : ` <h2>Accessibility</h2>
        <p>We are striving to meet online usability and design requirements recommended by the World Wide Web Consortium (W3C) in its Web Content Accessibility Guidelines 2.0 Level AA, as well as requirements under the Twenty-First Century Communications and Video Accessibility Act of 2010. We are using design standards that help customers identify, interpret, understand and interact with information presented on our websites and mobile apps.</p>
        <p>Here are some helpful tips for using our sites and apps:</p>
        <ul>
            <li>Account numbers: In most instances, you won’t see your complete account number online. For security reasons, we’ll only reveal a few digits (typically the last 3 or 4) of your account number. The remaining digits are represented by a series of periods or the letter X.</li>
            <li>Dollar amounts: Please don’t use the dollar sign ($) when you include dollar amounts in any form field; it will cause an error. When you include dollar amounts, you may see one input field or two fields separated by a decimal point. In some cases, you’ll find an example adjacent to the input field(s) to help you understand how to format your amount.</li>
            <li>JavaScript: Is enabled by default in modern web browsers, if you disable it you won’t be able to enjoy all of the features of our site. Software and Recommendation Settings:</li>
        </ul>
        <p>We follow the W3C’s globally recognized standards to provide content that’s compatible with the most popular assistive technologies and web browsers. We recommend using the most current version (or the version released just prior to) of manufacturer’s assistive technology applications, along with a current version of the browsers listed below. Try different types of browsers with assistive technology applications to determine which combination works best for you.</p>
        <p>Please go to the individual manufacturer’s site for information about how to obtain them. You may also have access to assistance from local and state agencies or non-profit groups in your area.</p> 
        <svg width="64px" height="64px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z" fill="#000000"></path> </g></svg>`,
    },
] 

const Home = () => {
    return ( 
        <>
            <Header />
            <Hero data={heroData} />
            {
                TwoColumnData.map((section, index) => {
                    return <TwoColumn key={index} data={section} />;
                })
            }
            <QuickNav />
            <Footer />
            {
                ModalData.map((section, index) => {
                    return <Modal key={index} data={section} />;
                })
            }
        </>
     );
}
 
export default Home;