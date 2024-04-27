import BannerContent from "../components/BannerContent";
import Header from "../components/Header";
import bannerImage from "../assets/images/residences/banner-image.jpg";
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
            
        ]
    }
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