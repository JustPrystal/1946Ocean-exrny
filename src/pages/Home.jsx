import Header from '../components/Header';
import Hero from '../components/Hero';
import BannerImage from '../assets/images/home/banner.jpg';

let heroData = {
    backgroundImage : BannerImage,
    heading : "Your Urban Oasis",
    description: "Nestled within the vibrant neighborhood of Midwood, Brooklyn, 1946 Ocean Avenue epitomizes luxury living at its finest. These opulent apartments offer a seamless blend of modern elegance and urban convenience, presenting an unparalleled opportunity for those seeking Brooklyn, New York apartments available for rent."
}

const Home = () => {
    return ( 
        <>
            <Header />
            <Hero data={heroData} />
        </>
     );
}
 
export default Home;