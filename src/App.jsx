import { Modal } from './components'
import { Home } from './containers'
import { useStore } from './store'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const App = () => {
	const location = useLocation()
	const { isModalOpened, setModalOpened } = useStore((state) => state.common)

	useEffect(() => {
		setModalOpened(location.pathname !== '/')
	}, [location])

	return (
		<div className="app-wrapper position-relative">
			<Home />
			<Modal isOpen={isModalOpened} onClose={() => setModalOpened(false)} />
		</div>
	)
}
