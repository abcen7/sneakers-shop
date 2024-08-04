import { Item } from '@/types/Item'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InitialState } from './types'

const initialState: InitialState = {
	items: JSON.parse(localStorage.getItem('cart') ?? '[]'),
}

export default createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<Item>) => {
			state.items.push(action.payload)
		},
		removeFromCart: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter(item => item.id !== action.payload)
		},
	},
})
