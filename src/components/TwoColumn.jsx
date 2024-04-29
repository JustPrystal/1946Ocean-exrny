const TwoColumn = ({data}) => {
    const {variant, heading, subheading, description, image, flexDirection, logo} = data;
    return (  
        <>
            <section className={"two-column " + variant}>
                <div className="inner" style= {{
                        display:"flex",
                        flexDirection:flexDirection,
                        justifyContent:"center",
                    }} >

                    <div className="image-wrap">

                        <img src={image} alt="image" />

                    </div>

                    <div className="content-wrap" style= {{
                            display:"flex",
                            flexDirection:"column",
                        }} >

                        <div className="heading"> {heading} </div>
                        <div className="sub-heading" dangerouslySetInnerHTML={{ __html: subheading }} />
                        <div className="description" dangerouslySetInnerHTML={{ __html: description }} />
                        <div className="logo" >
                            <img src={logo} alt="logo" />
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}
 
export default TwoColumn;