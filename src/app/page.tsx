'use client'

import ItemsList from '@/components/ItemsList'
import { Item } from '@/types/Item'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
	const [items] = useState<Item[]>(
		Array(1).fill({
			id: 0,
			imagePath: '/products/nike.png',
			title: 'Мужские Кроссовки Nike Blazer Mid Suede',
			cost: 12999,
			isFavorite: false,
			isInCart: false,
		})
	)
	return (
		<>
			<div className='w-full relative h-[300px]'>
				<Image
					src={'/assets/banner.svg'}
					alt={'Sneakers Shop'}
					fill
					objectFit='contain'
					className='w-full top-0 left-0 object-contain rounded-2xl'
				/>
			</div>
			<ItemsList
				className='mt-5 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
				itemsList={items}
			/>
		</>
	)
}
