import { configureStore } from '@reduxjs/toolkit'
import watchlistReducer from './Slices/Watchlist/watchlistSlice.js'

export const store = configureStore({
  reducer: {
    watchlist:watchlistReducer
  },
})