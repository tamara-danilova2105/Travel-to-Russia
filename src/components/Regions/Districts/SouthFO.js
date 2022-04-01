import MyRegion from "../MyRegion";
import { cases } from './cases'

function SouthFO({items}) {

    const SouthFO = items.filter(item => item.district === 'Южный округ')

    return (
        <div>
            {SouthFO.length > 0 ? (
            <div className="district">
                <h2 className="nameFoList">Южный округ:</h2>
                {SouthFO.map((item, id) => <MyRegion key={id} item={item}/> )}
                <h2 className="resultregion">Вы посетили {SouthFO.length} {cases (SouthFO.length, ['регион', 'региона', 'регионов'])} из 8</h2>
            </div>
            ) : null}
        </div>

    );
}

export default SouthFO