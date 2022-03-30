import { useSelector, useDispatch } from "react-redux";
import { getSelectedRegion, filterRegion } from "../../redux/regionSlice";


function FilterRegion({ district }) {
    const selectedRegion = useSelector(getSelectedRegion)
    const dispatch = useDispatch()

    return (
        <div>
            <button 
                onClick={() => {dispatch(filterRegion(district))}}
                className={selectedRegion === district ? "btn-district-selected" : "btn-district" }>{district}
            </button>
        </div>
    );
}

export default FilterRegion;
