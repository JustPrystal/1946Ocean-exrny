import UpArrow from '../assets/images/up-arrow.svg'

const ScrollUpButton = () => {
    return ( 
        <a className="up-arrow-circle" href="#header">
            <img className="scroll-up-button" src={UpArrow} alt="" />
        </a>
    );
}
 
export default ScrollUpButton ;