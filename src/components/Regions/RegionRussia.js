import { useSelector } from "react-redux";
import { getSelectedRegion } from "../../redux/regionSlice";
import RegionList from "./RegionList";

function RegionRussia({ searchResult }) {
    const selectedRegion = useSelector(getSelectedRegion)

    return (
        <div className="region-russia">
            <div>
                <h2 className="nameFo">{selectedRegion}</h2>
            </div>
            <div className="region-block">
                {searchResult
                .filter(region => {
                    return selectedRegion === region.district
                })
                .map(region => <RegionList key={region.id} region={region}/>)}
            </div>
        </div>

    );
}

export default RegionRussia;