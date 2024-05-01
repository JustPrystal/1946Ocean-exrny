const MapLegend = ({data}) => {
    const {heading, list} = data;
    return ( 
        <section className="maplegend">
            <div className="inner">
                {
                    data.map((legendItem, index) => {
                        return(
                            <div className="content-wrap" key={index}>

                                <div className="heading"> <h2>{legendItem.heading}</h2> </div>
                                <div className="content"> 
                                    {
                                        legendItem.list.map((listItem, itemIndex)=>{
                                            return (
                                                <p className="list-item" key={itemIndex}>
                                                    {listItem}
                                                </p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </section>
    );
}
 
export default MapLegend;