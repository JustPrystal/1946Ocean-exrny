import Header from "../components/Header";
import Hero from "../components/Hero";
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
        </>
     );
}
 
export default Contact;
