const Hero = ({data}) => {
    const {backgroundImage, heading, description} = data;
    return (  
        <div className="hero">
            <img src={backgroundImage} alt="" className="background-image" />
            <div className="inner">
                {(heading || description) && <div className="content">
                    <h1 className="heading">{heading}</h1>
                    <p className="description">{description}</p>
                </div>}
            </div>
        </div>
    );
}
 
export default Hero;

