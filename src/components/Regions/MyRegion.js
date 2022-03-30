function MyRegion({ item }) {

    return (
        <div className="myRegoin-block">
            <img className="flagInMyTravel" src={`./${item.flag}.jpg`} alt='флаг региона'/>
            <h2 className="regionInMyTravel">{item.region}</h2>
        </div>
    );
}

export default MyRegion;