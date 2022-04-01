import MyRegion from "../MyRegion";
import { cases } from './cases'

function NordCaucasusFO({items}) {

    const NordCaucasusFO = items.filter(item => item.district === 'Северо-Кавказский округ')

    return (
        <div>
            {NordCaucasusFO.length > 0 ? (
            <div className="district">
                <h2 className="nameFoList">Северо-Кавказский округ:</h2>
                {NordCaucasusFO.map((item, id) => <MyRegion key={id} item={item}/> )}
                <h2 className="resultregion">Вы посетили {NordCaucasusFO.length} {cases (NordCaucasusFO.length, ['регион', 'региона', 'регионов'])} из 7</h2>
            </div>
            ) : null}
        </div>

    );
}

export default NordCaucasusFO