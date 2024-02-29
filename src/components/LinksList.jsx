import { Link } from 'react-router-dom'
import cn from 'classnames'

export const LinksList = ({ items, row }) => (
	<nav>
		<ul className={cn('list-unstyled d-flex', { 'flex-column gap-1': !row, 'gap-2': row })}>
			{items.map((link) => (
				<li className="gap-2" key={link.to}>
					<Link to={link.to}>{link.label}</Link>
				</li>
			))}
		</ul>
	</nav>
)
