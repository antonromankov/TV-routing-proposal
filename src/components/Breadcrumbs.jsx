import { useStore } from '../store'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

export const Breadcrumbs = () => {
	// const { pathname } = useLocation()
	const pathname = '/asd'
	const { pages } = useStore((state) => state.history)

	return (
		<div className="breadcrumbs">
			<h5>Breadcrumbs</h5>
			<Breadcrumb>
				{pages.map((page, index) => (
					<BreadcrumbItem key={page.path + index} active={pathname.includes(page.path)}>
						<a href={page.path}>{page.name}</a>
					</BreadcrumbItem>
				))}
			</Breadcrumb>
		</div>
	)
}
