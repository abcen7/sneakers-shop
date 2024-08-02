'use client'

import { Check, Plus } from 'lucide-react'

interface AddButtonProps {
	id: number
	isInCart: boolean
	className?: string
	onClick: (id: number) => void
}

export default function AddButton({
	id,
	isInCart,
	className,
	onClick,
}: AddButtonProps) {
	return (
		<div className={`flex flex-col ${className}`}>
			{
				<button
					className={
						isInCart
							? 'flex justify-center items-center w-[40px] h-[40px] bg-gradient-to-b from-green-200 to-green-500/85 text-white rounded-lg'
							: 'flex justify-center items-center w-[40px] h-[40px] border-gray-500/10 text-gray-500/30 border-2 rounded-lg'
					}
					onClick={() => onClick(id)}
				>
					{isInCart ? (
						<Check size={24} />
					) : (
						<Plus size={24} className='fill-rose-600/60' />
					)}
				</button>
			}
		</div>
	)
}
