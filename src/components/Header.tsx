'use client'

import Logo from '@/components/Logo'
import { CircleUserRound, Heart, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
	return (
		<header className='p-7 flex flex-row justify-between border border-b-gray-500/30'>
			<Link href='/'>
				<div className='flex flex-row items-center'>
					<Logo />
					<div className='flex flex-col ml-4'>
						<h1 className='text-xl font-bold'>SNEAKERS SHOP</h1>
						<p className='text-gray-500/75 text-sm'>Магазин лучших кроссовок</p>
					</div>
				</div>
			</Link>
			<div className='flex flex-row items-center gap-8 text-gray-500/75'>
				<Link href='/cart'>
					<div className='flex flex-row gap-1 items-center'>
						<ShoppingCart size={18} />
						<p>1205₽</p>
					</div>
				</Link>
				<Link href='/favorites'>
					<div className='flex flex-row gap-1 items-center'>
						<Heart size={18} />
						<p>Избранное</p>
					</div>
				</Link>
				<Link href='/orders'>
					<div className='flex flex-row gap-1 items-center'>
						<CircleUserRound size={18} />
						<p>Профиль</p>
					</div>
				</Link>
			</div>
		</header>
	)
}
