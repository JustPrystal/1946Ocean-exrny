import { useEffect, useState } from 'react';
import UpArrow from '../assets/images/up-arrow.svg'

const ScrollUpButton = () => {

    const [buttonClasses, setButtonClasses] = useState([])

    const scrollUp = ()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    useEffect(() => {
        const handleScrollButton = () => {
          const button = document.querySelector('.up-arrow-circle');
          if (window.scrollY >= 600 && !button.classList.contains('scrolled')) {
            setButtonClasses([...buttonClasses, 'scrolled']);
          } else if (window.scrollY < 100 && button.classList.contains('scrolled')) {
            setButtonClasses(buttonClasses.filter(className => className !== 'scrolled'));
          }
        };
    
        document.addEventListener('scroll', handleScrollButton);

      }, [buttonClasses]);
    return ( 
        <div className={buttonClasses + " up-arrow-circle"} onClick={scrollUp}>
            <img className="scroll-up-button" src={UpArrow} alt="" />
        </div>
    );
}
 
export default ScrollUpButton ;