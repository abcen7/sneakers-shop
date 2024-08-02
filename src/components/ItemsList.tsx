'use client'

import { Item as IItem } from '@/types/Item'
import { useState } from 'react'
import Item from './Item'

interface ItemsListProps {
	className?: string
}

export default function ItemsList({ className }: ItemsListProps) {
	const [items, setItems] = useState<IItem[]>(
		Array(29).fill({
			id: 0,
			imagePath: '/products/nike.png',
			title: 'Мужские Кроссовки Nike Blazer Mid Suede',
			cost: 12999,
			isFavorite: true,
			isInCart: false,
		})
	)

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
