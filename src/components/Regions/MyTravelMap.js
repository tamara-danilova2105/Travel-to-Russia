import MyRegion from "./MyRegion";

function MyTravelMap({ items }) {
    return (
        <div>
            <div className="myTravel-block">
                <div className="district">
                    <h2 className="nameFoList">Центральный округ:</h2>
                    {items
                    .filter(item => item.district === 'Центральный округ')
                    .map((item, id) => <MyRegion key={id} item={item}/> )}
                </div>

                <div className="district">
                    <h2 className="nameFoList">Северо-Западный округ:</h2>
                    {items
                    .filter(item => item.district === 'Северо-Западный округ')
                    .map((item, id) => <MyRegion key={id} item={item}/> )}
                </div>
            </div>

            <div className="myTravel-block">
                <div className="district">
                    <h2 className="nameFoList">Южный округ:</h2>
                    {items
                    .filter(item => item.district === 'Южный округ')
                    .map((item, id) => <MyRegion key={id} item={item}/> )}
                </div>

                <div className="district">
                    <h2 className="nameFoList">Северо-Кавказский округ:</h2>
                    {items
                    .filter(item => item.district === 'Северо-Кавказский округ')
                    .map((item, id) => <MyRegion key={id} item={item}/> )}
                </div>
            </div>

            <div className="myTravel-block">
                <div className="district">
                    <h2 className="nameFoList">Приволжский округ:</h2>
                    {items
                    .filter(item => item.district === 'Приволжский округ')
                    .map((item, id) => <MyRegion key={id} item={item}/> )}
                </div>

                <div className="district">
                    <h2 className="nameFoList">Уральский округ:</h2>
                    {items
                    .filter(item => item.district === 'Уральский округ')
                    .map((item, id) => <MyRegion key={id} item={item}/> )}
                </div>
            </div>

            <div className="myTravel-block">
                <div className="district">
                    <h2 className="nameFoList">Сибирский округ:</h2>
                    {items
                    .filter(item => item.district === 'Сибирский округ')
                    .map((item, id) => <MyRegion key={id} item={item}/> )}
                </div>

                <div className="district">
                    <h2 className="nameFoList">Дальневосточный округ:</h2>
                    {items
                    .filter(item => item.district === 'Дальневосточный округ')
                    .map((item, id) => <MyRegion key={id} item={item}/> )}
                </div>
            </div>
        </div>
    );
}

export default MyTravelMap;