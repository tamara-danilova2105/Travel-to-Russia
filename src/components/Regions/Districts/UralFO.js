import MyRegion from "../MyRegion";
import { cases } from './cases'

function UralFO({items}) {

    const UralFO = items.filter(item => item.district === 'Уральский округ')

    return (
        <div>
            {UralFO.length > 0 ? (
            <div className="district">
                <h2 className="nameFoList">Уральский округ:</h2>
                {UralFO.map((item, id) => <MyRegion key={id} item={item}/> )}
                <h2 className="resultregion">Вы посетили {UralFO.length} {cases (UralFO.length, ['регион', 'региона', 'регионов'])} из 6</h2>
            </div>
            ) : null}
        </div>

    );
}

export default UralFO