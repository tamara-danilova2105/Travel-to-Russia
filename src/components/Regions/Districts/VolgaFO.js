import MyRegion from "../MyRegion";
import { cases } from './cases'

function VolgaFO({items}) {

    const VolgaFO = items.filter(item => item.district === 'Приволжский округ')

    return (
        <div>
            {VolgaFO.length > 0 ? (
            <div className="district">
                <h2 className="nameFoList">Приволжский округ:</h2>
                {VolgaFO.map((item, id) => <MyRegion key={id} item={item}/> )}
                <h2 className="resultregion">Вы посетили {VolgaFO.length} {cases (VolgaFO.length, ['регион', 'региона', 'регионов'])} из 14</h2>
            </div>
            ) : null}
        </div>

    );
}

export default VolgaFO