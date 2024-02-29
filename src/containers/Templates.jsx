import { useLocation, useParams } from 'react-router-dom'

import { BackLink, LinksList } from '../components'

export const PagesTemplate = ({ prevPage, header, links }) => {
	const location = useLocation()

	return (
		<div>
			<BackLink to={prevPage} />
			<h2>{header}</h2>
			<LinksList items={links} />
		</div>
	)
}

export const PageTemplate = ({prevPage, headerPrefix}) => {
	const { id } = useParams()

	return (
		<div>
			<BackLink to={prevPage} />
			<h2>{headerPrefix} {id}</h2>
		</div>
	)
}
