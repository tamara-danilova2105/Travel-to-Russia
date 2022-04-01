import FilterRegion from "./FilterRegion";
import Search from "./Search";

function ButtonRegions({ setValueSearch }) {

    

    return (
        <div className="filterbutton">
            <Search setValueSearch={setValueSearch}/>
            {['Центральный округ', 'Северо-Западный округ', 'Южный округ', 'Северо-Кавказский округ', 'Приволжский округ', 'Уральский округ', 'Сибирский округ', 'Дальневосточный округ']
            .map((district, index) => <FilterRegion key={index} district={district} />)}
        </div>
    );
}

export default ButtonRegions;