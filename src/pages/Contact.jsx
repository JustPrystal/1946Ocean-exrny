import Hero from "../components/Hero";
import bannerImage from '../assets/images/contact/banner.jpg';
import Form from '../components/Form';
import BannerContent from "../components/BannerContent";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from "react-helmet";
import ScrollToTop from "../components/ScrollToTop";

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
            <ScrollToTop />
            <Helmet>
                <title>Contact us | 1946 Ocean Apartments, Midwood, Brooklyn</title>
                <meta name="description" content="Looking for your next home in Brooklyn? Contact us at 
1946 Ocean for more details about our luxury apartments and to discover 
why we're Midwood’s top choice for upscale living." />
            </Helmet>
            <Header/>
            <Hero data={heroData} />
            <BannerContent data={bannerContentData}/>
            <Form />
            <Footer/>
        </>
     );
}
 
export default Contact;
