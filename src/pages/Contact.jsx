import Hero from "../components/Hero";
import bannerImage from '../assets/images/contact/banner.jpg';
import Form from '../components/Form';
import BannerContent from "../components/BannerContent";
import Header from '../components/Header';
import Footer from '../components/Footer';

let heroData = {
    backgroundImage : bannerImage,
    heading : "",
    description: ""
}
let bannerContentData = {
    heading: "Your Perfect Residence Awaits at 1946 Ocean",
    description: "For more information about the residences at 1946 Ocean, please add your contact information to the form and click “submit.” Once received, our team will be happy to reach out to you with more information about this building’s brand new Brooklyn apartments for rent."
}

const Contact = () => {
    return ( 
        <>
            <Header/>
            <Hero data={heroData} />
            <BannerContent data={bannerContentData}/>
            <Form />
            <Footer/>
        </>
     );
}
 
export default Contact;
