const MapLegend = ({data}) => {
    const {heading, list} = data;
    return ( 
        <section className="maplegend">
            <div className="inner">
                <div className="content-wrap">
                    <div className="heading"><h2> {heading} </h2></div>
                    <div className="content">

                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default MapLegend;