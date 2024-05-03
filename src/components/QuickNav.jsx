import { Link } from "react-router-dom";
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const QuickNav = ({links}) => {
    const {prev, next} = links

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,
            easing: "ease-out-cubic",
        });
    }, []);

    return ( 
        <section class="quick-navigation">
            <div class="inner">
                <Link class="prev-page" to={prev.url}>
                    <svg className="arrow leftarrow" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FAE9D7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13.26 15.53L9.73999 12L13.26 8.46997" stroke="#FAE9D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <p>{prev.title}</p>
                </Link>
                <div class="heading-wrap"  data-aos="fade-up">
                    <h2>Schedule a Tour</h2>
                </div>
                <Link class="next-page" to={next.url}>
                    <p>{next.title}</p>
                    <svg className='arrow rightarrow' width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FAE9D7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.74 15.53L14.26 12L10.74 8.46997" stroke="#FAE9D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </Link>
            </div>
        </section>
    );
}
 
export default QuickNav;