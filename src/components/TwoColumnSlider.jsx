const TwoColumnSlider = ({data}) => {
    const {images, flexDirection, heading, price, description} = data;
    return ( 
        <section className="slider-section">
            <div className={"blurb " + flexDirection}>
                <div className="slider">
                    {
                        images.map((image, index) => {
                            return <div className="slides" key={index}>
                                <img className="image" src={image} alt="" />
                            </div>;
                        })
                    }
                </div>
                <div className="content">
                    <h2 className="heading">{heading}</h2>
                    <p className="price">Starting From ${price}</p>
                    <div className="description">{description}</div>
                    <div className="button">
                        <a href="#">View Availability</a>
                        <svg className="arrow" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#00000" stroke-width="4.8"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.4" d="M10.7402 15.5302L14.2602 12.0002L10.7402 8.47021" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.4" d="M10.7402 15.5302L14.2602 12.0002L10.7402 8.47021" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default TwoColumnSlider;