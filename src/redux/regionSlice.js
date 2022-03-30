import { createSlice } from '@reduxjs/toolkit'

export const regionSlice = createSlice({
    name: 'region',
    initialState: {
        selectedRegion: 'Центральный округ'
    },
    reducers: {
        filterRegion: (state, action) => {
            state.selectedRegion = action.payload
        }
    }
})

export const getSelectedRegion = state => state.region.selectedRegion
export const { filterRegion } = regionSlice.actions
export default regionSlice.reducer