import MyRegion from "../MyRegion";
import { cases } from './cases'

function CentralFO({items}) {

    const centralFO = items.filter(item => item.district === 'Центральный округ')

    return (
        <div>
            {centralFO.length > 0 ? (
            <div className="district">
                <h2 className="nameFoList">Центральный округ:</h2>
                {centralFO.map((item, id) => <MyRegion key={id} item={item}/> )}
                <h2 className="resultregion">Вы посетили {centralFO.length} {cases (centralFO.length, ['регион', 'региона', 'регионов'])} из 18</h2>
            </div>
            ) : null}
        </div>

    );
}

export default CentralFO