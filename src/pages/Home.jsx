import Hero from '../components/Hero';
import bannerImage from '../assets/images/home/banner.jpg';
import unitDetailsImage from '../assets/images/home/unit-details-image.png';
import amenitiesImage from '../assets/images/home/amenities-image.png';
import neighboehoodImage from '../assets/images/home/img-5-with-border-2.png';
import TwoColumn from '../components/TwoColumn';
import QuickNav from '../components/QuickNav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollUpButton from '../components/ScrollUpButton';
import { Helmet } from 'react-helmet';

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
let QuickLinks = {
    prev : {
        title : "Contact",
        url : "/contact"
    },
    next : {
        title : "Residences",
        url : "/residences"
    }
}


const Home = () => {
    return ( 
        <>
            <Helmet>
                <title>1946 Ocean | Midwood's Newest Luxury Apartments</title>
                <meta name="description" content="Discover luxury living at 1946 Ocean in Midwood, Brooklyn. Our apartments combine modern elegance with urban convenience, offering an unparalleled living experience for those seeking to rent in Brooklyn, New York." />
            </Helmet>
            <Header />
            <Hero data={heroData} />
            {
                TwoColumnData.map((section, index) => {
                    return <TwoColumn key={index} data={section} />;
                })
            }
            <QuickNav links={QuickLinks}/>
            <Footer />
            <ScrollUpButton />
        </>
     );
}
 
export default Home;