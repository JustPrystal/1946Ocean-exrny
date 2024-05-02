import bannerImage from '../assets/images/amenities/banner.jpg'
import Hero from '../components/Hero';
import BannerContent from '../components/BannerContent';
import TwoColumn from '../components/TwoColumn';
//twocolumn images
import loungeImage from '../assets/images/amenities/TwoColumn/lounge.png'
import fitnessImage from '../assets/images/amenities/TwoColumn/fitness.png'
import kitchenImage from '../assets/images/amenities/TwoColumn/chefs-kitchen.png'
import businessImage from '../assets/images/amenities/TwoColumn/business.png'
import packageImage from '../assets/images/amenities/TwoColumn/package-room-2012x2048.png'
import lobbyImage from '../assets/images/amenities/TwoColumn/lobby-2.png'
import mailImage from '../assets/images/amenities/TwoColumn/mailboxes-2-2012x2048.png'
import parkingImage from '../assets/images/amenities/TwoColumn/parking.png'
import QuickNav from '../components/QuickNav';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Amenities = () => {
    let heroData = {
        backgroundImage : bannerImage,
        heading : "",
        description : "",
    }
    let bannerContentData = {
        heading: "Unveil Your Ideal Lifestyle",
        description: "From meticulously designed common areas to a tranquil rooftop terrace, every detail is crafted to offer a serene escape from city life. Enjoy upscale amenities extending beyond your apartment walls, including indoor and outdoor spaces perfect for entertaining or fostering community."
    }
    let TwoColumnData = [
        {
            variant : "blue",
            heading : "Amenities",
            subheading : "<span>Lounge</span>",
            description : `<p>Enter our building lounge—a haven of luxury and relaxation. With stylish décor and plush seating, it’s the perfect spot to unwind or socialize. Whether you’re catching up with neighbors or enjoying a quiet moment alone, this inviting space is the heart of community living.</p>`,
            image : loungeImage,
            flexDirection : "row",
            logo : false,
        },
        {
            variant : "white",
            heading : "Amenities",
            subheading : "Fitness <span>Centre</span>",
            description : `<p>Equipped with top-of-the-line amenities and cutting-edge equipment, it’s where residents come to elevate their fitness routines and prioritize their well-being. Whether you’re breaking a sweat with a cardio session, lifting weights, or joining a group class, our fitness center provides the perfect environment for achieving your health goals. With its modern design and energizing atmosphere, staying active has never been more enjoyable.</p>`,
            image : fitnessImage,
            flexDirection : "row-reverse",
            logo : false,
        },
        {
            variant : "cream",
            heading : "Amenities",
            subheading : "Chef's <span>Kitchen</span>",
            description : `<p>Elevate your culinary experience in this inviting space designed for creating delicious meals and unforgettable memories. With premium appliances and stylish design, it’s perfect for cooking, hosting gatherings, or simply enjoying a morning coffee. </p>`,
            image : kitchenImage,
            flexDirection : "row",
            logo : false,
        },
        {
            variant : "green",
            heading : "Amenities",
            subheading : "Business <span>Centre</span>",
            description : `<p>Whether you’re catching up on emails, attending virtual meetings, or diving into a project, our business center offers the tools and atmosphere you need to thrive. With its sleek design and convenient amenities, staying focused and productive has never been easier.”</p>`,
            image : businessImage,
            flexDirection : "row-reverse",
            logo : false,
        },
        {
            variant : "brown",
            heading : "Amenities",
            subheading : "Package <span>Room</span>",
            description : `<p>With secure storage and efficient organization, our package room is designed to simplify your busy lifestyle. Whether you’re receiving packages, picking up mail, or sending out shipments, our package room ensures seamless transactions every time. With its user-friendly layout and reliable service, managing your deliveries has never been more convenient.</p>`,
            image : packageImage,
            flexDirection : "row",
            logo : false,
        },
        {
            variant : "white",
            heading : "Amenities",
            subheading : "Lobby",
            description : `<p>“In our lobby, sophistication meets convenience—a stylish hub where residents connect and relax. With its elegant design and comfortable seating, it’s more than just an entrance; it’s a welcoming space for socializing and unwinding. Whether you’re waiting for a friend or enjoying a moment of tranquility, our lobby sets the tone for luxury living.”</p>`,
            image : lobbyImage,
            flexDirection : "row-reverse",
            logo : false,
        },
        {
            variant : "blue",
            heading : "Amenities",
            subheading : "<span>MailRoom</span>",
            description : `<p>With neatly arranged mailboxes and efficient organization, it simplifies your daily routine. Whether you’re picking up parcels or checking for letters, our mailroom ensures quick and easy access to your mail.</p>`,
            image : mailImage,
            flexDirection : "row",
            logo : false,
        },
        {
            variant : "cream",
            heading : "Amenities",
            subheading : "Parking",
            description : `<p>With designated spots and 24/7 surveillance, the parking area ensures peace of mind for residents. Whether you’re coming home from work or heading out for the day, our parking facility offers easy access and protection for your vehicle. From its efficient layout to its safety measures, parking has never been more convenient or worry-free.”</p>`,
            image : parkingImage,
            flexDirection : "row-reverse",
            logo : false,
        },
    ]
    let QuickLinks = {
        prev : {
            title : "Residences",
            url : "/residences"
        },
        next : {
            title : "Availabilities",
            url : "/availabilities"
        }
    }
    
    return ( 
        <>
            <Header />
            <Hero data={heroData}/>
            <BannerContent data={bannerContentData} />
            {
                TwoColumnData.map((section, index) => {
                    return <TwoColumn key={index} data={section} />;
                })
            }
            <QuickNav links={QuickLinks}/>
            <Footer />
        </>
     );
}
 
export default Amenities;