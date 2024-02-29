// import { useLocation } from 'react-router-dom'
import { Container } from 'reactstrap'

import { Breadcrumbs } from './components'
import { Home, Router } from './containers'

export const App = () => {
	// const location = useLocation()

	return (
		<div className="app-wrapper position-relative">
			<Home />
			<Breadcrumbs />
			<br />
			<Container>
				<Router />
			</Container>
		</div>
	)
}
