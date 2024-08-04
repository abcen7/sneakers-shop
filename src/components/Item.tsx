'use client'

import { Item as IItem } from '@/types/Item'
import Image from 'next/image'
import AddButton from './Buttons/AddButton'
import LikeButton from './Buttons/LikeButton'

interface ItemProps {
	item: IItem
	onToggleFavorite: (id: number) => void
	onToggleInCart: (item: IItem) => void
}

export default function Item({
	onToggleFavorite,
	onToggleInCart,
	item
}: ItemProps) {
	return (
		<div className='flex flex-col w-56 h-72 border-gray-500/10 border-2 rounded-3xl p-7 gap-5'>
			<div className='flex flex-row w-full h-[115px] relative'>
				<LikeButton
					className='absolute'
					isFavorite={item.isFavorite}
					onClick={onToggleFavorite}
					id={item.id}
				/>
				<Image
					src={item.imagePath}
					alt={'Sneakers Shop'}
					width={200}
					height={115}
					className='rounded-2xl object-cover'
				/>
			</div>
			<p className='text-wrap text-sm'>{item.title}</p>
			<div className='flex flex-row justify-between'>
				<div className='flex flex-col'>
					<p className='text-sm text-gray-500/75 uppercase'>Цена:</p>
					<p className='font-semibold'>{item.cost.toLocaleString()}₽</p>
				</div>
				<AddButton item={item} onClick={onToggleInCart} />
			</div>
		</div>
	)
}
