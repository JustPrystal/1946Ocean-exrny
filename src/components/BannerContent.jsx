const BannerContent = ({data}) => {
    const {heading, description} = data;
    return ( 
        <div className="banner-content">
            <h2 className="heading">{heading}</h2>
            <p className="description">{description}</p>
        </div>
     );
}
 
export default BannerContent;