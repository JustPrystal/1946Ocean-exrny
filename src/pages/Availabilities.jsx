import Table from '../components/Table';

const Availabilities = () => {
    let TableData = [
        [
            {
                residence : "4B",
                type : "1 Bed",
                bedBath : "1 Bed 2 Bath + Home Office",
                outdoor : "Balcony",
                price : "2,987",
                tour3d : "Coming Soon"
            },
            {
                residence : "5B",
                type : "1 Bed",
                bedBath : "1 Bed 2 Bath + Home Office",
                outdoor : "Balcony",
                price : "3,000",
                tour3d : "Coming Soon"
            },
            {
                residence : "6B",
                type : "1 Bed",
                bedBath : "1 Bed 2 Bath + Home Office",
                outdoor : "Balcony",
                price : "3,012",
                tour3d : "Coming Soon"
            },
        ],
        [
            {
                residence : "3C",
                type : "2 Bed",
                bedBath : "2 Bed 2 Bath",
                outdoor : "Balcony",
                price : "2,975",
                tour3d : "Coming Soon"
            },
            {
                residence : "4F",
                type : "2 Bed",
                bedBath : "2 Bed 2 Bath + Home Office",
                outdoor : "Balcony",
                price : "3,287.5",
                tour3d : "Coming Soon"
            },
            {
                residence : "5H",
                type : "2 Bed",
                bedBath : "2 Bed 2 Bath",
                outdoor : "-",
                price : "2,975",
                tour3d : "Coming Soon"
            },
        ],
        [
            {
                residence : "7F",
                type : "3 Bed",
                bedBath : "3 Bed 2 Bath",
                outdoor : "Terrace",
                price : "3,650",
                tour3d : "Coming Soon"
            }
        ]
    ]
    return ( 
    <>
        <Table data={TableData}/>
    </> 
    );
}
 
export default Availabilities;