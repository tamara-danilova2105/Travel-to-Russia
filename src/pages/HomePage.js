import { useState } from "react";
import ButtonRegions from "../components/Filter/ButtonRegions";
import RegionRussia from "../components/Regions/RegionRussia";
import { data } from "../data";


function HomePage() {

    const [valueSearch, setValueSearch] = useState('')
    const searchResult = data.filter(item => {
        return item.region.toLocaleLowerCase().includes(valueSearch.toLocaleLowerCase().trim())
    })

    return (
        <div className="container-homepage">
            <ButtonRegions setValueSearch={setValueSearch} />
            <RegionRussia searchResult={searchResult} />
        </div>
    );
}

export default HomePage;
