import UnitDetailsImg from '../assets/images/home/unit-details-image.png'; 

const TwoColumn = ({data}) => {
    const {backgroundColor, heading, subheading, description, image, flexDirection, logo} = data;
    return (  
        <>
            <section className="unit-details">
                <div className="inner">
                    <div className="image-wrap">
                        <img src={UnitDetailsImg} alt="" />
                    </div>
                    <div className="content-wrap">
                        <div className="heading">

                        </div>
                        <div className="sub-heading">

                        </div>
                        <div className="description">

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default TwoColumn;