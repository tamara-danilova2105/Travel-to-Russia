import { configureStore } from '@reduxjs/toolkit'
import region from './regionSlice'
import myTravel from './myTravelSlice'

export const store = configureStore({
    reducer: {
        region: region,
        myTravel: myTravel
    }
})