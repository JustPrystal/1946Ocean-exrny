import Header from "../components/Header";
import Hero from "../components/Hero";
import Map from "../components/Map";
import bannerImage from '../assets/images/contact/banner.jpg';

let heroData = {
    backgroundImage : bannerImage,
    heading : "",
    description: ""
}

const Contact = () => {
    return ( 
        <>
            <Header/>
            <Hero data={heroData} />
            <Map />

        </>
     );
}
 
export default Contact;
