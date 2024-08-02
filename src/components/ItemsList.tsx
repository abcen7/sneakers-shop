'use client'

import { Item as IItem } from '@/types/Item'
import { useState } from 'react'
import Item from './Item'

interface ItemsListProps {
	className?: string
	itemsList: IItem[]
}

export default function ItemsList({ className, itemsList }: ItemsListProps) {
	const [items, setItems] = useState<IItem[]>(itemsList)

	const toggleFavorite = (id: number) => {
		setItems(prevItems => {
			let newItems = [...prevItems]
			newItems.forEach(newItem =>
				newItem.id === id ? (newItem.isFavorite = !newItem.isFavorite) : newItem
			)
			return newItems
		})
	}

	const toggleInCart = (id: number) => {
		setItems(prevItems => {
			let newItems = [...prevItems]
			newItems.forEach(newItem =>
				newItem.id === id ? (newItem.isInCart = !newItem.isInCart) : newItem
			)
			return newItems
		})
	}

	return (
		<div className={className}>
			{items.map(item => (
				<Item
					key={item.id}
					{...item}
					onToggleFavorite={toggleFavorite}
					onToggleInCart={toggleInCart}
				/>
			))}
		</div>
	)
}
