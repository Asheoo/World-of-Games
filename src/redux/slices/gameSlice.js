import { createSlice } from "@reduxjs/toolkit";



const initialState={
    value:[]
}

export const gameSlice=createSlice({
    name:'items',
    initialState,
    reducers:{
        addGame:(state,action)=>{
            state.value.push(action.payload)
        }
    }
})

export const {addGame}=gameSlice.actions;

export default gameSlice.reducer