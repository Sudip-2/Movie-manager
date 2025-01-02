import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: JSON.parse(localStorage.getItem("imdbIdArray")) || [],
}

export const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    increment: (state,action) => {
      state.value.unshift(action.payload) 
      localStorage.setItem("imdbIdArray",JSON.stringify(state.value))
    },
    decrement: (state,action) => {
      let index = state.value.indexOf(action.payload)
      state.value.splice(index,1)
      localStorage.setItem("imdbIdArray",JSON.stringify(state.value))
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement} = watchlistSlice.actions

export default watchlistSlice.reducer