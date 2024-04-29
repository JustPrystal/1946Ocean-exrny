import Header from "../components/Header";
import Hero from "../components/Hero";

let heroData = {
    // backgroundImage : bannerImage,
    heading : "Your Urban Oasis",
    description: "Nestled within the vibrant neighborhood of Midwood, Brooklyn, 1946 Ocean Avenue epitomizes luxury living at its finest. These opulent apartments offer a seamless blend of modern elegance and urban convenience, presenting an unparalleled opportunity for those seeking Brooklyn, New York apartments available for rent."
}

const Contact = () => {
    return ( 
        <>
            <Header data={heroData}/>
            {/* <Hero /> */}
        </>
     );
}
 
export default Contact;
