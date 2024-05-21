import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Quote } from '../types'

interface QuotesState {
    currentIndex: number;
    quotes: Quote[]
}

const initialState: QuotesState = {
  currentIndex: 0,
  quotes: []
}

const quoteSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    setQuotes(state, action: PayloadAction<Quote[]>) {
      state.quotes = action.payload
    },
    incrementCurrentIndex: (state) => {
      state.currentIndex = (state.currentIndex + 1) % state.quotes.length
    }
  }
})

export const { setQuotes, incrementCurrentIndex } = quoteSlice.actions

export default quoteSlice.reducer