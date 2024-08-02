import ItemsList from '@/components/ItemsList'
import Image from 'next/image'

export default function Home() {
	return (
		<main className='mx-16 my-11'>
			<div className='w-full relative h-[300px]'>
				<Image
					src={'/assets/banner.svg'}
					alt={'Sneakers Shop'}
					fill
					objectFit='contain'
					className='w-full top-0 left-0 object-contain rounded-2xl'
				/>
			</div>
			<ItemsList className='mt-5 grid gap-10 grid-cols-5' />
		</main>
	)
}
