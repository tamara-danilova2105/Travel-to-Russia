import CentralFO from "./Districts/CentralFO";
import EastFO from "./Districts/EastFO";
import NordCaucasusFO from "./Districts/NordCaucasusFO";
import NordWestFO from "./Districts/NordWestFO";
import SiberiaFO from "./Districts/SiberiaFO";
import SouthFO from "./Districts/SouthFO";
import UralFO from "./Districts/UralFO";
import VolgaFO from "./Districts/VolgaFO";

function MyTravelMap({ items }) {
    return (
        <div>
            <div className="myTravel-block">
                <CentralFO items={items}/>
                <NordWestFO items={items}/>
                <SouthFO items={items}/>
                <NordCaucasusFO items={items}/>
                <VolgaFO items={items}/>
                <UralFO items={items}/>
                <SiberiaFO items={items}/>
                <EastFO items={items}/>
            </div>
        </div>
    );
}

export default MyTravelMap