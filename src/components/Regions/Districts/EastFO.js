import MyRegion from "../MyRegion";
import { cases } from './cases'

function EastFO({items}) {

    const EastFO = items.filter(item => item.district === 'Дальневосточный округ')

    return (
        <div>
            {EastFO.length > 0 ? (
            <div className="district">
                <h2 className="nameFoList">Дальневосточный округ:</h2>
                {EastFO.map((item, id) => <MyRegion key={id} item={item}/> )}
                <h2 className="resultregion">Вы посетили {EastFO.length} {cases (EastFO.length, ['регион', 'региона', 'регионов'])} из 11</h2>
            </div>
            ) : null}
        </div>

    );
}

export default EastFO