'use client'

import Image from 'next/image'
import AddButton from './Buttons/AddButton'
import LikeButton from './Buttons/LikeButton'

interface ItemProps {
	id: number
	imagePath: string
	title: string
	cost: number
	isFavorite: boolean
	isInCart: boolean
	onToggleFavorite: (id: number) => void
	onToggleInCart: (id: number) => void
}

export default function Item({
	id,
	imagePath,
	title,
	cost,
	isFavorite,
	isInCart,
	onToggleFavorite,
	onToggleInCart,
}: ItemProps) {
	return (
		<div className='flex flex-col w-56 h-72 border-gray-500/10 border-2 rounded-3xl p-7 gap-5'>
			<div className='flex flex-row w-full h-[115px] relative'>
				<LikeButton
					className='absolute'
					isFavorite={isFavorite}
					onClick={onToggleFavorite}
					id={id}
				/>
				<Image
					src={imagePath}
					alt={'Sneakers Shop'}
					width={200}
					height={115}
					className='rounded-2xl object-cover'
				/>
			</div>
			<p className='text-wrap text-sm'>{title}</p>
			<div className='flex flex-row justify-between'>
				<div className='flex flex-col'>
					<p className='text-sm text-gray-500/75 uppercase'>Цена:</p>
					<p className='font-semibold'>{cost.toLocaleString()}₽</p>
				</div>
				<AddButton isInCart={isInCart} onClick={onToggleInCart} id={id} />
			</div>
		</div>
	)
}
