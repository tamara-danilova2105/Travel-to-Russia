import { createSlice } from "@reduxjs/toolkit";

export const myTravelSlice = createSlice({
    name: 'myTravel',
    initialState: {
        travelItem: []
    },
    reducers: {
        addItemInMyTravel: (state, action) => {
            state.travelItem.push(action.payload)
        },
        removeItemInMyTravel: (state, action) => {
            state.travelItem = state.travelItem.filter(region => region.id !== action.payload)
        },
    }
})

export const getMyTravel = state => state.myTravel.travelItem
export const { addItemInMyTravel, removeItemInMyTravel } = myTravelSlice.actions;
export default myTravelSlice.reducer;