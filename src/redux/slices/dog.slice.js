import {createSlice} from "@reduxjs/toolkit";

const initialState = {dog: []};

const dogSlice = createSlice({
    name: 'dogSlice',
    initialState,
    reducers: {

    }
})

const {reducer: dogsReducer, actions: {}} = dogSlice;

export default dogsReducer;