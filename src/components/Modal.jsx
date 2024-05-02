const Modal = ({data}) => {
    const {description} = data;
    return ( 
        <>
            <section className="modal">
                <div className="wrap">
                    <div className="content-wrap" dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            </section>
        </>
    );
}
 
export default Modal;