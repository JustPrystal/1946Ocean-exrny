import UpArrow from '../assets/images/up-arrow.svg'

const ScrollUpButton = () => {
    const scrollUp = ()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return ( 
        <div className="up-arrow-circle" onClick={scrollUp}>
            <img className="scroll-up-button" src={UpArrow} alt="" />
        </div>
    );
}
 
export default ScrollUpButton ;