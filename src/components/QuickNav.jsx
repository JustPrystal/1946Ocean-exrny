import LeftArrow from '../assets/images/left.svg';
import RightArrow from '../assets/images/right.svg';


const QuickNav = () => {
    return ( 
        <section class="quick-navigation">
            <div class="inner">
                <div class="prev-page">
                    <img src={LeftArrow} alt="leftarrow" />
                    <p> Amenities </p>
                </div>
                <div class="heading-wrap">
                    <h2> Schedule a Tour </h2>
                </div>
                <div class="next-page">
                    <p> Neighborhood </p>
                    <img src={RightArrow} alt="rightarrow" />
                </div>
            </div>
        </section>
    );
}
 
export default QuickNav;