import { useSelector } from "react-redux";
import { getMyTravel } from '../redux/myTravelSlice';
import MyTravelMap from "../components/Regions/MyTravelMap";
import MyTravelImagesPage from "../components/Regions/MyTravelImagesPage";
import MyTravelEmpty from "../components/Regions/MyTravelEmpty";

function MyTravel() {
    const items = useSelector(getMyTravel)
    return (
        <div className="container-mytravel">
            <MyTravelImagesPage/>
            {items.length < 1 
            ? <MyTravelEmpty/>
            : <MyTravelMap items={items}/>}
        </div>
    );
}

export default MyTravel;