'use client'

import Image from 'next/image'
import BackButton from './Buttons/BackButton'

interface ItemsNotFoundProps {
	iconPath: string
	title: string
	subtitle: string
	extraSubtitle?: string
}

export default function ItemsNotFound({
	iconPath,
	title,
	subtitle,
	extraSubtitle,
}: ItemsNotFoundProps) {
	return (
		<div className='flex flex-col justify-center items-center absolute top-0 left-0 right-0 bottom-0'>
			<Image src={iconPath} alt='' width={70} height={70} />
			<h2 className='font-semibold text-lg'>{title}</h2>
			<h3 className='font-semibold text-gray-500/75 text-sm'>{subtitle}</h3>
			<h3 className='font-semibold text-gray-500/75 text-sm mb-2'>
				{extraSubtitle}
			</h3>
			<BackButton />
		</div>
	)
}
