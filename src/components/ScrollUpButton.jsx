import UpArrow from '../assets/images/up-arrow.svg'

const ScrollUpButton = () => {
    return ( 
        <div className="up-arrow-circle">
            <img className="scroll-up-button" src={UpArrow} alt="" />
        </div>
    );
}
 
export default ScrollUpButton ;