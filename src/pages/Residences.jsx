import BannerContent from "../components/BannerContent";
import Header from "../components/Header";
import bannerImage from "../assets/images/residences/banner-image.jpg";
//1 bedroom slider images
import slider1image1 from "../assets/images/residences/1 Bedroom/1946-Ocean-plans-and-renderings-14-scaled.jpg";
import slider1image2 from "../assets/images/residences/1 Bedroom/1946-Ocean-plans-and-renderings-15-scaled.jpg";
import slider1image3 from "../assets/images/residences/1 Bedroom/img-2.png";
//1 bedroom slider images
import slider2image1 from "../assets/images/residences/2 Bedroom/1946-Ocean-plans-and-renderings-14-scaled.jpg";
import slider2image2 from "../assets/images/residences/2 Bedroom/1946-Ocean-plans-and-renderings-15-scaled.jpg";
import slider2image3 from "../assets/images/residences/2 Bedroom/img-2.png";
//1 bedroom slider images
import slider3image1 from "../assets/images/residences/3 Bedroom/1946-Ocean-plans-and-renderings-14-scaled.jpg";
import slider3image2 from "../assets/images/residences/3 Bedroom/1946-Ocean-plans-and-renderings-15-scaled.jpg";
import slider3image3 from "../assets/images/residences/3 Bedroom/img-2.png";

import Hero from "../components/Hero";

let heroData = {
    backgroundImage : bannerImage,
    heading : "",
    description: ""
}
let bannerContentData = {
    heading: "Experience Luxury Living in Brooklyn",
    description: "Nestled within the vibrant neighborhood of Midwood, Brooklyn, 946 Ocean Avenue epitomizes luxury living at its finest. These opulent apartments offer a seamless blend of modern elegance and urban convenience."
}
let residenceData = [
    {
        images : [
            slider1image1,
            slider1image2,
            slider1image3
        ],
        flexDirection : "row",
        heading: "1 Bedroom <span>Apartments<span/>" ,
        price : "2,291", 
        description : "<p>Step into refined living with our one-bedroom apartments, where comfort and style harmonize seamlessly. Thoughtfully crafted layouts optimize space, providing room for relaxation, work, and entertainment. Large windows flood the interiors with natural light, accentuating modern finishes and creating an inviting atmosphere. Experience the ideal blend of functionality and elegance, where every detail is designed with your comfort in mind.</p>",
    },
    {
        images : [
            slider1image1,
            slider1image2,
            slider1image3
        ],
        flexDirection : "row-reverse",
        heading: "2 Bedroom <span>Apartments<span/>" ,
        price : "2,658", 
        description : "<p>These expansive units offer endless possibilities, featuring contemporary open floor plans and state-of-the-art finishes throughout. Immaculately designed, every detail has been carefully considered, making these 2 bedroom Brooklyn apartments an ideal residence for those who seek to continually impress with their living space.</p>",
    },
]


const Residences = () => {
    return ( 
        <>
            <Header />
            <Hero data={heroData}/>
            <BannerContent data={bannerContentData} />
        </>
     );
}
 
export default Residences;