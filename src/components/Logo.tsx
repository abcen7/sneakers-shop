import Image from 'next/image'

export default function Logo() {
	return (
		<Image width={40} height={40} src={'/logo.svg'} alt={'Sneakers Shop'} />
	)
}
