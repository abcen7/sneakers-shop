'use client'

import cartSlice from '@/store/slice'
import { RootState } from '@/store/store'
import { Item as IItem } from '@/types/Item'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Item from './Item'

interface ItemsListProps {
	className?: string
	itemsList: IItem[]
}

export default function ItemsList({ className, itemsList }: ItemsListProps) {
	const [items, setItems] = useState<IItem[]>(itemsList)
	const cart = useSelector((state: RootState) => state.cart.items)
	const dispatch = useDispatch()

	const toggleFavorite = (id: number) => {
		// TODO: ???
		// setItems(prevItems => {
		// 	let newItems = [...prevItems]
		// 	newItems.forEach(newItem =>
		// 		newItem.id === id ? (newItem.isFavorite = !newItem.isFavorite) : newItem
		// 	)
		// 	return newItems
		// })
	}

	const toggleInCart = (item: IItem) => {
		setItems(prevItems =>
			prevItems.map(newItem =>
				newItem.id === item.id
					? { ...newItem, isInCart: !newItem.isInCart }
					: newItem
			)
		)
		item.isInCart = !item.isInCart
		if (cart.some(cartItem => cartItem.id === item.id)) {
			dispatch(cartSlice.actions.removeFromCart(item.id))
		} else {
			dispatch(cartSlice.actions.addToCart(item))
		}
	}

	return (
		<div className={className}>
			{items.map(item => (
				<Item
					key={item.id}
					item={item}
					onToggleFavorite={toggleFavorite}
					onToggleInCart={toggleInCart}
				/>
			))}
		</div>
	)
}
