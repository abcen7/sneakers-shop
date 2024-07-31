import Header from '@/components/Header'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Sneakers Shop',
	description: 'Created by K. Sermyagin',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body>
				<Header />
				{children}
			</body>
		</html>
	)
}
