import MyRegion from "../MyRegion";
import { cases } from './cases'

function SiberiaFO({items}) {

    const SiberiaFO = items.filter(item => item.district === 'Сибирский округ')

    return (
        <div>
            {SiberiaFO.length > 0 ? (
            <div className="district">
                <h2 className="nameFoList">Сибирский округ:</h2>
                {SiberiaFO.map((item, id) => <MyRegion key={id} item={item}/> )}
                <h2 className="resultregion">Вы посетили {SiberiaFO.length} {cases (SiberiaFO.length, ['регион', 'региона', 'регионов'])} из 10</h2>
            </div>
            ) : null}
        </div>

    );
}

export default SiberiaFO