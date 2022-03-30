import { useSelector } from "react-redux";
import { getSelectedRegion } from "../../redux/regionSlice";
import { data } from "../../data";
import RegionList from "./RegionList";

function RegionRussia() {
    const selectedRegion = useSelector(getSelectedRegion)

    return (
        <div>
            <div>
                <h2 className="nameFo">{selectedRegion}</h2>
            </div>
            <div className="region-block">
                {data
                .filter(region => {
                    return selectedRegion === region.district
                })
                .map((region, id) => <RegionList key={id} region={region}/>)}
            </div>
        </div>

    );
}

export default RegionRussia;