const Table = ({data}) => {
    console.log(data)
    return ( 
        <>  
            <div className="table">
                <div className="inner">
                    <div className="table-head">
                        <div className="residence-head">Residence</div>
                        <div className="type-head">Type</div>
                        <div className="bed-bath-head">Bed/Bath</div>
                        <div className="outdoor-head">Outdoor</div>
                        <div className="price-head">Price</div>
                        <div className="tour3d-head">3D Tour</div>
                    </div>
                    {
                        data.map((subtable, index) => {
                            return (
                                <div className="subtable" key={index}>
                                    {
                                        subtable.map((row, rowIndex)=>{
                                            return (
                                                <div className="table-row" key={rowIndex}>
                                                    <div className="residence-cell">{row.residence}</div>
                                                    <div className="type-cell">{row.type}</div>
                                                    <div className="bed-bath-cell">{row.bedBath}</div>
                                                    <div className="outdoor-cell">{row.outdoor}</div>
                                                    <div className="price-cell">{row.price}</div>
                                                    <div className="tour3d-cell">{row.tour3d}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
     );
}
 
export default Table;