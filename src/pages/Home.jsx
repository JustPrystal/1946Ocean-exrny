import Header from '../components/Header';
import Hero from '../components/Hero';
import bannerImage from '../assets/images/home/banner.jpg';
import unitDetailsImage from '../assets/images/home/unit-details-image.png';
import amenitiesImage from '../assets/images/home/amenities-image.png';
import QuickNav from '../components/QuickNav';
import Footer from '../components/Footer';
import TwoColumn from '../components/TwoColumn';

let heroData = {
    backgroundImage : bannerImage,
    heading : "Your Urban Oasis",
    description: "Nestled within the vibrant neighborhood of Midwood, Brooklyn, 1946 Ocean Avenue epitomizes luxury living at its finest. These opulent apartments offer a seamless blend of modern elegance and urban convenience, presenting an unparalleled opportunity for those seeking Brooklyn, New York apartments available for rent."
}

let TwoColumnData = [
    {
        backgroundColor : "#5e7584",
        heading : {
            text : "Unit Details",
            color : "#FFFFFF"
        },
        subheading : {
            text : "Exceptional <span>Design<span/>",
            color : "#FFFFFF",
            secondaryColor : "#f4e9d7"
        },
        description : {
            text : `<p>Welcome to Ocean 1946, where contemporary elegance meets modern convenience.</p>
            <p>Featuring Marvin windows on one side and floor-to-ceiling windows on the other, each residence is bathed in natural light, illuminating the white oak hardwood floors and light-colored interiors. Stainless steel appliances, quartz countertops, and open-concept kitchens make cooking a joy, while washer dryers in every unit add convenience to daily life.</p>
            <p>With HVAC temperature control ensuring comfort year-round, and marble bathrooms with showers in the master tub, luxury abounds in every detail. Black finishes add a touch of sophistication, while floors 3-6 boast balconies and the 6th floor offers expansive porches for outdoor relaxation.</p>
            <p>Experience a harmonious blend of style and functionality at Ocean 1946.</p>`,
            color : "#FFFFFF"
        },
        image : unitDetailsImage,
        flexDirection : "row",
        logo : false
    },
    {
        backgroundColor : "#ffffff",
        heading : {
            text : "Amenities",
            color : "#000000"
        },
        subheading : {
            text : "Opulent <span>Amenities<span/>",
            color : "#8e591b",
            secondaryColor : "#5e7584"
        },
        description : {
            text : `<p>Stay active and energized in our state-of-the-art fitness center, then unwind and socialize in the elegant lounge or gather with friends in the chef’s kitchen for culinary adventures. Need to catch up on work? Our business center provides a productive environment, while the package room ensures convenient deliveries. Relax in the stylish lobby or utilize our efficient mailroom services. With parking available for your convenience, Ocean 1946 offers the ultimate in modern living, where every detail is designed to enhance your lifestyle.</p>`,
            color : "#000000"
        },
        image : amenitiesImage,
        flexDirection : "row-reverse",
        logo : false
    }
]

const Home = () => {
    return ( 
        <>
            <Header />
            <Hero data={heroData} />
            {
                TwoColumnData.map((section, index) => {
                    return <TwoColumn key={index} data={section} />;
                })
            }
            <QuickNav />
            <Footer />
        </>
     );
}
 
export default Home;