import { useDispatch, useSelector } from "react-redux";
import { getMyTravel, addItemInMyTravel, removeItemInMyTravel  } from '../../redux/myTravelSlice'

function RegionList({ region }) {
    const dispatch = useDispatch()
    const items = useSelector(getMyTravel)
    const regionInList = items.some(item => item.id === region.id)

    const handleClick = () => {
        if(regionInList) {
            dispatch(removeItemInMyTravel(region.id))
        } else {
            dispatch(addItemInMyTravel(region))
        }
    }

    return (
        <div className="region-container">
            <img className="flag" src={`./${region.flag}.jpg`} alt='флаг региона'/>
            <h2 className="region">{region.region}</h2>
            <button onClick={handleClick}
            className={regionInList ? 'doneBtn' : "noBtn"}>
            {regionInList ? 'посещал' : 'не посещал'}</button>
        </div>
    );
}

export default RegionList;