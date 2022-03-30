import FilterRegion from "./FilterRegion";

function ButtonRegions() {
    return (
        <div className="filterbutton">
            {['Центральный округ', 'Северо-Западный округ', 'Южный округ', 'Северо-Кавказский округ', 'Приволжский округ', 'Уральский округ', 'Сибирский округ', 'Дальневосточный округ']
            .map((district, index) => <FilterRegion key={index} district={district} />)}
        </div>
    );
}

export default ButtonRegions;