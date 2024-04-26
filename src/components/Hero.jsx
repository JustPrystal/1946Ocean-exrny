const Hero = ({data}) => {
    const {backgroundImage, heading, description} = data;
    console.log(backgroundImage)
    return (  
        <div className="hero">
            <img src={backgroundImage} alt="" className="background-image" />
        </div>
    );
}
 
export default Hero;

