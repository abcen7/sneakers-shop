import Header from '@/components/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StoreProvider from './StoreProvider'

const inter = Inter({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
	title: 'Sneakers Shop',
	description: 'Sneakers Shop based on Next.js by K. Sermyagin',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<StoreProvider>
			<html lang='ru'>
				<body className={inter.className}>
					<Header />
					<main className='mx-16 my-11'>{children}</main>
				</body>
			</html>
		</StoreProvider>
	)
}
