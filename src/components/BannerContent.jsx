import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const BannerContent = ({data}) => {
    const {heading, description} = data;

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,
            easing: "ease-out-cubic",
        });
    }, []);

    return ( 
        <div className="banner-content">
            <div className="inner">
                <h2 className="heading"  data-aos="fade-left">{heading}</h2>
                <p className="description" data-aos="fade-left">{description}</p>
            </div>
        </div>
     );
}
 
export default BannerContent;