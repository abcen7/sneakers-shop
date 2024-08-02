'use client'

import BackButton from '@/components/Buttons/BackButton'
import ItemsList from '@/components/ItemsList'
import ItemsNotFound from '@/components/ItemsNotFound'
import { Item } from '@/types/Item'
import { useState } from 'react'

export default function Orders() {
	const [items] = useState<Item[]>(
		Array(0).fill({
			id: 0,
			imagePath: '/products/nike.png',
			title: 'Мужские Кроссовки Nike Blazer Mid Suede',
			cost: 12999,
			isFavorite: true,
			isInCart: false,
		})
	)
	return (
		<main className='mx-16 my-11'>
			<div className='flex flex-row gap-4 items-center'>
				<BackButton />
				<h1 className='text-2xl font-bold'>Мои заказы</h1>
			</div>
			{items.length === 0 ? (
				<ItemsNotFound
					iconPath='/images/emojis/sad.svg'
					title='У вас нет заказов'
					subtitle='Вы нищеброд?'
					extraSubtitle='Оформите хотя бы один заказ.'
				/>
			) : (
				<ItemsList
					className='mt-5 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
					itemsList={items}
				/>
			)}
		</main>
	)
}
