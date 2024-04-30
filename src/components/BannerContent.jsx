const BannerContent = ({data}) => {
    const {heading, description} = data;
    return ( 
        <div className="banner-content">
            <div className="inner">
                <h2 className="heading">{heading}</h2>
                <p className="description">{description}</p>
            </div>
        </div>
     );
}
 
export default BannerContent;