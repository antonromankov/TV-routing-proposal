import { Container } from 'reactstrap'
import { LinksList } from '../components'

const links = [
	{ to: '/', label: 'Home' },
	{ to: '/pages', label: 'Pages' },
	{ to: '/gallery', label: 'Gallery' }
]
export const Home = () => (
	<div className="position-relative z-0">
		<Container>
			<h1>This is a home page</h1>
			<LinksList items={links} />
		</Container>
	</div>
)
