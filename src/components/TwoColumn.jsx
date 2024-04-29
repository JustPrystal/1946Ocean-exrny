const TwoColumn = ({data}) => {
    const {backgroundColor, heading, subheading, description, image, flexDirection, logo} = data;
    return (  
        <>
            <section className={"two-column " + heading.text} style= {{
                    background:backgroundColor,
                }} >
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

                        <div className="heading" style={{color:heading.color,}}> {heading.text} </div>
                        <div className="sub-heading" style={{color:subheading.color,   span:{color:subheading.secondaryColor,}}} dangerouslySetInnerHTML={{ __html: subheading.text }} />
                        <div className="description" style={{color:description.color}} dangerouslySetInnerHTML={{ __html: description.text }} />
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