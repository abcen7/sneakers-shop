'use client'

import BackButton from '@/components/Buttons/BackButton'
import ItemsList from '@/components/ItemsList'
import ItemsNotFound from '@/components/ItemsNotFound'
import { RootState } from '@/store/store'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
	const items = useSelector((state: RootState) => state.cart.items)

	return (
		<>
			<div className='flex flex-row gap-4 items-center'>
				<BackButton />
				<h1 className='text-2xl font-bold'>Корзина</h1>
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
		</>
	)
}
