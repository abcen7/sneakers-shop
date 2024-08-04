'use client'

import { AppStore, makeStore } from '@/store/store'
import { useRef } from 'react'
import { Provider } from 'react-redux'

export default function StoreProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const storeRef = useRef<AppStore>()
	if (!storeRef.current) {
		storeRef.current = makeStore()
		storeRef.current.subscribe(() => {
			const state = storeRef.current!.getState()
			localStorage.setItem('cart', JSON.stringify(state.cart.items))
		})
	}

	return <Provider store={storeRef.current}>{children}</Provider>
}
