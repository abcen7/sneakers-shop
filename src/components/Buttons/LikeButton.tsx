'use client'

import { Heart } from 'lucide-react'

interface LikeButtonProps {
	id: number
	isFavorite: boolean
	className?: string
	onClick: (id: number) => void
}

export default function LikeButton({
	id,
	isFavorite,
	className,
	onClick,
}: LikeButtonProps) {
	return (
		<div className={`flex flex-col ${className}`}>
			{
				<button
					className={
						isFavorite
							? 'flex justify-center items-center w-[40px] h-[40px] bg-rose-200/40 text-rose-600/70 rounded-lg'
							: 'flex justify-center items-center w-[40px] h-[40px] border-gray-500/10 text-gray-500/30 border-2 rounded-lg'
					}
					onClick={() => onClick(id)}
				>
					{isFavorite ? (
						<Heart size={24} className='fill-rose-600/60' strokeWidth={0} />
					) : (
						<Heart size={24} />
					)}
				</button>
			}
		</div>
	)
}
