import { Navigate } from 'react-router-dom'

const PATHS = {
	home: '/home',
	about: '/about',
	sports: '/sports',
	favorites: '/favorites'
}

const ROUTES = [
	{
		path: '/',
		element: <Navigate to={PATHS.home} />
	}
]
