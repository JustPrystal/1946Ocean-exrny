import BannerContent from '../components/BannerContent';
import Table from '../components/Table';
import bannerImage from '../assets/images/availabilities/banner.jpg'
import Hero from '../components/Hero';
import QuickNav from '../components/QuickNav';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Availabilities = () => {
    let TableData = [
        [
            {
                residence : "4B",
                type : "1 Bed",
                bedBath : "1 Bed 2 Bath + Home Office",
                outdoor : "Balcony",
                price : "2,987",
                tour3d : "Coming Soon"
            },
            {
                residence : "5B",
                type : "1 Bed",
                bedBath : "1 Bed 2 Bath + Home Office",
                outdoor : "Balcony",
                price : "3,000",
                tour3d : "Coming Soon"
            },
            {
                residence : "6B",
                type : "1 Bed",
                bedBath : "1 Bed 2 Bath + Home Office",
                outdoor : "Balcony",
                price : "3,012",
                tour3d : "Coming Soon"
            },
        ],
        [
            {
                residence : "3C",
                type : "2 Bed",
                bedBath : "2 Bed 2 Bath",
                outdoor : "Balcony",
                price : "2,975",
                tour3d : "Coming Soon"
            },
            {
                residence : "4F",
                type : "2 Bed",
                bedBath : "2 Bed 2 Bath + Home Office",
                outdoor : "Balcony",
                price : "3,287.5",
                tour3d : "Coming Soon"
            },
            {
                residence : "5H",
                type : "2 Bed",
                bedBath : "2 Bed 2 Bath",
                outdoor : "-",
                price : "2,975",
                tour3d : "Coming Soon"
            },
        ],
        [
            {
                residence : "7F",
                type : "3 Bed",
                bedBath : "3 Bed 2 Bath",
                outdoor : "Terrace",
                price : "3,650",
                tour3d : "Coming Soon"
            }
        ]
    ]
    let heroData = {
        backgroundImage : bannerImage,
        heading : "",
        description: ""
    }
    let bannerContentData = {
        heading : "Check Availability",
        description : "Dive into luxury living at Ocean 1946 – where every corner is crafted for comfort and style. Explore our range of exquisite units and floor plans, tailored to suit your New York City dreams. Discover the perfect chapter for your next adventure at Ocean 1946."
    }
    let QuickLinks = {
        prev : {
            title : "Contact",
            url : "/contact"
        },
        next : {
            title : "Residences",
            url : "/residences"
        }
    }
    return ( 
    <>
        <Header/>
        <Hero data={heroData} />
        <BannerContent data={bannerContentData} />
        <Table data={TableData}/>
        <QuickNav links={QuickLinks}/>
        <Footer/>
    </> 
    );
}
 
export default Availabilities;