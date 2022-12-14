const { createSlice } = require('@reduxjs/toolkit');

const initialState = { name:null, ProjectPlotArea: null, GreenArea: null }

const property1Slice = createSlice({
    name: 'property1',
    initialState,
    reducers: {
        add1(state, action) {
            state.name = action.payload.name;
            state.ProjectPlotArea = action.payload.ProjectPlotArea;
            state.GreenArea = action.payload.GreenArea;
        },
     
    },
});

export const { add1 } = property1Slice.actions;
export default property1Slice.reducer;