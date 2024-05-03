import UpArrow from '../assets/images/up-arrow.svg'

const ScrollUpButton = () => {
    const scrollUp = ()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return ( 
        <a className="up-arrow-circle" onClick={scrollUp}>
            <img className="scroll-up-button" src={UpArrow} alt="" />
        </a>
    );
}
 
export default ScrollUpButton ;