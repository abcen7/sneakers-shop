import { Item } from '@/types/Item'
import RemoveButton from '../Buttons/RemoveButton'

interface CartItemProps extends Item {}

export default function CartItem({
	id,
  imagePath,
  title,
  cost,
  isFavorite,
  isInCart,
}: CartItemProps) {
	return (
		<div className='flex flex-row items-center justify-between border-gray-500/10 border-2 rounded-3xl p-5'>
			<img src='' alt='' />
			<div className='flex flex-col'>
				<RemoveButton onClick={() => console.log('clicked')} />
			</div>
		</div>
	)
}
