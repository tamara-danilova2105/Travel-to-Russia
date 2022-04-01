import MyRegion from "../MyRegion";
import { cases } from './cases'

function NordWestFO({items}) {

    const NordWestFO = items.filter(item => item.district === 'Северо-Западный округ')

    return (
        <div>
            {NordWestFO.length > 0 ? (
            <div className="district">
                <h2 className="nameFoList">Северо-Западный округ:</h2>
                {NordWestFO.map((item, id) => <MyRegion key={id} item={item}/> )}
                <h2 className="resultregion">Вы посетили {NordWestFO.length} {cases (NordWestFO.length, ['регион', 'региона', 'регионов'])} из 11</h2>
            </div>
            ) : null}
        </div>

    );
}

export default NordWestFO

