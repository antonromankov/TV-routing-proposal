import { useEffect } from 'react'

import { useStore } from './store'

export const App = () => {
	const { pages, pushPage } = useStore((state) => state.history)

	useEffect(() => {
		pushPage(1)
	}, [])

	return (
		<div>
			Hello world
			<br />
			<pre>{JSON.stringify(pages, null, 2)}</pre>
		</div>
	)
}
