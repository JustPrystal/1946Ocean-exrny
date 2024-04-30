import Header from '../components/Header';
import Hero from '../components/Hero';
import bannerImage from "../assets/images/Neighborhood/brooklyn-new-york-usa-cityscape-over-brooklyn-heights.jpg";
import Map from "../components/Map";
import MapLegend from '../components/MapLegend';
import QuickNav from '../components/QuickNav';
import Footer from '../components/Footer';


let heroData = {
    backgroundImage : bannerImage,
    heading : "",
    description: "",
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
        heading : "Transportation",
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
            <Map />
            <MapLegend data={MaplegendData} />
            <QuickNav />
            <Footer />
        </>
     );
}
 
export default Neighborhood;