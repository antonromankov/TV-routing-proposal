import { Link, useLocation } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

import { useStore } from '../store'

export const Breadcrumbs = () => {
	const { pathname } = useLocation()
	const { pages } = useStore((state) => state.history)

	return (
		<div className="breadcrumbs">
			<Breadcrumb>
				{pages.map((page, index) => (
					<BreadcrumbItem key={page.path + index} active={pathname.includes(page.path)}>
						<Link to={page.path}>{page.name}</Link>
					</BreadcrumbItem>
				))}
			</Breadcrumb>
		</div>
	)
}
