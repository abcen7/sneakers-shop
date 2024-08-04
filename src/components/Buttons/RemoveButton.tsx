import { X } from 'lucide-react'

export default function RemoveButton({ onClick }: { onClick: () => void }) {
	return (
		<>
			<button
				onClick={onClick}
				className='w-[35px] h-[35px] flex justify-center items-center border-gray-500/10 text-gray-500/30 border-2 rounded-lg'
			>
				<X />
			</button>
		</>
	)
}
