import Hero from '../components/Hero';
import bannerImage from "../assets/images/Neighborhood/brooklyn-new-york-usa-cityscape-over-brooklyn-heights.jpg";
import MapContainer from "../components/Map";
import MapLegend from '../components/MapLegend';
import QuickNav from '../components/QuickNav';
import BannerContent from '../components/BannerContent';
import TwoColumn from '../components/TwoColumn';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import { useState } from 'react';

//twocolumn images
import parkImage from '../assets/images/Neighborhood/TwoColumn/brooklyn-marine-park-2048x2034.png';
import collegeImage from '../assets/images/Neighborhood/TwoColumn/brooklyn-colege.png';
import hospitalImage from '../assets/images/Neighborhood/TwoColumn/new-york-hospital-2048x2034.png';
import restaurantImage from '../assets/images/Neighborhood/TwoColumn/restaurants.png';
import shoppingImage from '../assets/images/Neighborhood/TwoColumn/shopping.png';
import libraryImage from '../assets/images/Neighborhood/TwoColumn/library-1-2012x2048.png';
import busImage from '../assets/images/Neighborhood/TwoColumn/bus.png';
import trainImage from '../assets/images/Neighborhood/TwoColumn/train.png';
import ScrollToTop from '../components/ScrollToTop';


let heroData = {
    backgroundImage : bannerImage,
    heading : "",
    description: "",
}
let bannerContentData = {
    heading: "Midwood's Pinnacle of Sophistication",
    description: "Nestled in the vibrant heart of Midwood, Brooklyn, stands the exquisite 1946 Ocean Avenue. Positioned between Avenue N and Avenue O, this gem offers unparalleled convenience just a stone’s throw away from the Kings Highway subway station. Serviced by the B and Q trains, indulge in seamless city connections from this prime location."
}
let MaplegendData = [
    {
        heading : "Points of Interest",
        list : [
            {
               place : "Brooklyn Marine Park",
               coords : [-73.9353743, 40.6084001]
            },
            {
               place : "Brooklyn College",
               coords : [-73.951458, 40.6308935]
            },
            {
               place : "Maimonides Midwood Community Hospital",
               coords : [-73.9484207, 40.6139406]
            },
            {
               place : "Restaurants on Kings Highway",
               coords : [-73.957959, 40.618055]
            },
            {
               place : "Congregation Beth Abraham, Rabbi Dov Oshry",
               coords : [-73.9573565, 40.6127084]
            },
        ]
    },
    {
        heading : "Transportation",
        list : [
            {
                place : "Kings Highway Subway Station",
                coords : [-73.9578112, 40.6086735]
            },
            {
                place : "Ocean Av/Av O",
                coords : [-73.954018, 40.6086735]
            },
            {
                place : "Ocean Ave/Ave N",
                coords : [-73.954796, 40.616333]
            },
            {
                place : "B & Q Line",
                coords : [-73.9578112, 40.6086735]
            },
        ]
    }
]
let TwoColumnData = [
    {
        variant : "blue",
        heading : "Points of Interest",
        subheading : "Brooklyn <span>Marine Park</span>",
        description : `<p>Nestled just moments away from 1946 Ocean, residents have the privilege of indulging in the serene coastal landscapes and recreational offerings of Brooklyn Marine Park. From scenic trails to expansive waterfront views, this urban oasis serves as a sanctuary for relaxation and leisure.</p>`,
        image : parkImage,
        flexDirection : "row",
        logo : false,
    },
    {
        variant : "white",
        heading : "Points of Interest",
        subheading : "Brooklyn <span>College</span>",
        description : `<p>Positioned within the vibrant neighborhood of Flatbush, 1946 Ocean stands as an ideal residence for those seeking proximity to Brooklyn College, a renowned academic institution. With its historic campus and vibrant student community, Brooklyn College serves as a hub of intellectual pursuit and artistic expression.</p>`,
        image : collegeImage,
        flexDirection : "row-reverse",
        logo : false,
    },
    {
        variant : "cream",
        heading : "Points of Interest",
        subheading : "New York <span>Community Hospital</span>",
        description : `<p>Located in the heart of Brooklyn, 1946 Ocean offers residents peace of mind with its close proximity to New York Community Hospital. As a pillar of care and compassion, the hospital provides state-of-the-art facilities and a dedicated medical team, ensuring reassurance and healing to all in need.</p>`,
        image : hospitalImage,
        flexDirection : "row",
        logo : false,
    },
    {
        variant : "green",
        heading : "Points of Interest",
        subheading : "Restaurants <span>on Kings Highway</span>",
        description : `<p>Situated just moments away from the vibrant dining hub of Kings Highway in Brooklyn, Ocean 1946 offers an unparalleled blend of convenience and luxury living. With a diverse array of restaurants and eateries mere minutes from your doorstep, savoring culinary delights becomes a daily pleasure.</p>`,
        image : restaurantImage,
        flexDirection : "row-reverse",
        logo : false,
    },
    {
        variant : "brown",
        heading : "Points of Interest",
        subheading : "Shopping on <span>on Kings Highway</span>",
        description : `<p>Located a stone’s throw away from the bustling shopping district of Kings Highway in Brooklyn, Ocean 1946 presents an enticing fusion of upscale living and retail convenience. Spend leisurely afternoons exploring the eclectic array of shops and boutiques just minutes from your doorstep.</p>`,
        image : shoppingImage,
        flexDirection : "row",
        logo : false,
    },
    {
        variant : "white",
        heading : "Points of Interest",
        subheading : "Public <span>Library</span>",
        description : `<p>Whether delving into literary classics or attending engaging workshops, the library offers endless opportunities for enrichment and growth. Experience the convenience of living near this intellectual hub while enjoying the luxury of Ocean 1946’s premier amenities.</p>`,
        image : libraryImage,
        flexDirection : "row-reverse",
        logo : false,
    },
    {
        variant : "blue",
        heading : "Transportation",
        subheading : "Express Bus <span>to The City</span>",
        description : `<p>Nestled within reach of Ocean 1946 lies convenient access to an express bus route connecting residents directly to the bustling heart of the city. With swift transportation options just moments away, commuting to Manhattan is effortless, allowing residents to seamlessly blend urban convenience with suburban tranquility.</p>`,
        image : busImage,
        flexDirection : "row",
        logo : false,
    },
    {
        variant : "cream",
        heading : "Transportation",
        subheading : "B & Q <span>Train</span>",
        description : `<p>Ocean 1946 boasts proximity to the B and Q subway lines, offering residents swift access to transportation for their daily commutes and city adventures. With stations just a short stroll away, navigating Brooklyn and beyond becomes a breeze, allowing residents to immerse themselves in the vibrant culture and opportunities of New York City</p>`,
        image : trainImage,
        flexDirection : "row-reverse",
        logo : false,
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

const Neighborhood = () => {
    const [poi, setPoi] = useState([])
    const [poiTitle, setPoiTitle] = useState("")
    const [showPopup, setShowPopup] = useState(false);
    const [flyData, setFlyData] = useState({
        point : "",
        condition : false 
    });
    return ( 
        <>
            <ScrollToTop />
            <Helmet>
                <title>Discover Midwood – Brooklyn’s Residential Charm</title>
                <meta name="description" content="Learn about life in Midwood, Brooklyn at 1946 Ocean. 
Our luxury apartment complex is ideally located to blend modern living with 
the charm and convenience of a Brooklyn neighborhood." />
            </Helmet>
            <Header/>
            <Hero data={heroData} />
            <BannerContent data={bannerContentData}/>
            {
                TwoColumnData.map((section, index) => {
                    return <TwoColumn key={index} data={section} />;
                })
            }
            <MapContainer title={poiTitle} coords={poi} showPopup={showPopup} flyData={flyData} setFlyData={setFlyData}/>
            <MapLegend data={MaplegendData} setPoi={setPoi} setFlyData={setFlyData} flyData={flyData} setPoiTitle={setPoiTitle} setShowPopup={setShowPopup}/>
            <QuickNav links={QuickLinks} />
            <Footer/>
        </>
     );
}
 
export default Neighborhood;