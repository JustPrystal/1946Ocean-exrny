import { Link } from "react-router-dom";
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = ({data}) => {
    const {backgroundImage, heading, description, buttonUrl, buttonText} = data;

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,
            easing: "ease-out-cubic",
        });
    }, []);

    return (  
        <div className="hero">
            <img src={backgroundImage} alt="" className="background-image" />
            <div className="inner">
                {(heading || description) && <div className="content" >
                    <h1 className="heading" data-aos="fade-left">{heading}</h1>
                    <p className="description" data-aos="fade-left">{description}</p>
                    {
                        buttonUrl && buttonText && (
                            <Link to="/">Back to Home</Link>
                        )
                    }
                </div>}
            </div>
        </div>
    );
}
 
export default Hero;