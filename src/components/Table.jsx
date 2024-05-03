const Table = ({data}) => {
    return ( 
        <>  
            <div className="table">
                <div className="inner">
                    <div className="table-row table-head">
                        <div className="residence cell head">Residence</div>
                        <div className="type cell head">Type</div>
                        <div className="bed-bath cell head">Bed/Bath</div>
                        <div className="outdoor cell head">Outdoor</div>
                        <div className="price cell head">Price</div>
                        <div className="tour3d cell head">3D Tour</div>
                    </div>
                    {
                        data.map((subtable, index) => {
                            return (
                                <div className={"subtable index" + index} key={index}>
                                            <div className="table-row table-head mobile">
                                                <div className="cell head">
                                                    {subtable[0].type}
                                                </div>
                                            </div>
                                    {
                                        subtable.map((row, rowIndex)=>{
                                            return (
                                                <div className="table-row" key={rowIndex}>
                                                    <div className="residence cell"><span className="mobile">Residence</span>{row.residence}</div>
                                                    <div className="type cell">{row.type}</div>
                                                    <div className="bed-bath cell"><span className="label mobile">Bed/Bath</span>{row.bedBath}</div>
                                                    <div className="outdoor cell"><span className="label mobile">Outdoor</span>{row.outdoor}</div>
                                                    <div className="price cell"><span className="label mobile">Price</span>{row.price}</div>
                                                    <div className="tour3d cell"><span className="label mobile">3D Tour</span>{row.tour3d}</div>
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