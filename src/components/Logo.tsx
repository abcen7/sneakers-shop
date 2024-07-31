import Image from 'next/image'

export default function Logo() {
	return (
		<Image width={32} height={32} src={'/logo.svg'} alt={'Sneakers Shop'} />
	)
}
