import Header from '../components/Header';
import Hero from '../components/Hero';
import MapLegend from '../components/MapLegend';
import QuickNav from '../components/QuickNav';
import Footer from '../components/Footer';


let heroData = {
    backgroundImage : bannerImage,
    heading : "Your Urban Oasis",
    description: "Nestled within the vibrant neighborhood of Midwood, Brooklyn, 1946 Ocean Avenue epitomizes luxury living at its finest. These opulent apartments offer a seamless blend of modern elegance and urban convenience, presenting an unparalleled opportunity for those seeking Brooklyn, New York apartments available for rent."
}

let MaplegendData = [
    {
        heading : "Points of Interest",
        list : [
            "Brooklyn Marine Park",
            "Brooklyn College",
            "New York community hospital",
            "Restaurants on Kings highway",
            "Shopping on King Highway",
            "Public library",
        ]
    },
    {
        heading : "Points of Interest",
        list : [
            "Express bus to the city",
            "B & Q train",
        ]
    }
]

const Neighborhood = () => {
    return ( 
        <>
            <Header />
            <Hero data={heroData} />
            <MapLegend />
            <QuickNav />
            <Footer />
        </>
     );
}
 
export default Neighborhood;