import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    increment: (state,action) => {
      state.value.unshift(action.payload)
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = watchlistSlice.actions

export default watchlistSlice.reducer