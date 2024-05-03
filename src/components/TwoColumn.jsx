import logoImage from '../assets/images/home/1964-white.png';
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const TwoColumn = ({data}) => {
    const {variant, heading, subheading, description, image, flexDirection, logo} = data;

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,
            easing: "ease-out-cubic",
        });
    }, []);

    return (  
        <>
            <section className={"two-column " + variant}>
                <div className="inner" style= {{
                        display:"flex",
                        flexDirection:flexDirection,
                        justifyContent:"center",
                    }} >

                    <div className="image-wrap" data-aos="fade-right">

                        <img src={image} alt="two-col" />

                    </div>

                    <div className="content-wrap" style= {{
                            display:"flex",
                            flexDirection:"column",
                        }} >

                        <div className="heading" data-aos="fade-left"> {heading} </div>
                        <div className="sub-heading" dangerouslySetInnerHTML={{ __html: subheading }} data-aos="fade-left"/>
                        <div className="description" dangerouslySetInnerHTML={{ __html: description }} data-aos="fade-left"/>
                        {(logo) && <div className="logo">
                            <img src={logoImage} alt="logo" />
                        </div>}

                    </div>

                </div>
            </section>
        </>
    );
}
 
export default TwoColumn;