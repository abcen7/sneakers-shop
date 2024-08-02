import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function BackButton() {
	const router = useRouter()
	return (
		<>
			<button
				onClick={() => router.back()}
				className='w-[35px] h-[35px] flex justify-center items-center border-gray-500/10 text-gray-500/30 border-2 rounded-lg'
			>
				<ChevronLeft />
			</button>
		</>
	)
}
