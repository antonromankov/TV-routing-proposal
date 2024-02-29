import { useLocation, useParams } from 'react-router-dom'

import { BackLink, LinksList } from '../components'
import { Component, useEffect } from 'react'
import { useStore } from '../store'

const PagesTemplateRaw = ({ prevPage, header, links }) => {
	const location = useLocation()

	return (
		<div>
			<BackLink to={prevPage} />
			<h2>{header}</h2>
			<LinksList items={links} />
		</div>
	)
}

const PageTemplateRaw = ({ prevPage, headerPrefix }) => {
	const { id } = useParams()

	return (
		<div>
			<BackLink to={prevPage} />
			<h2 className="mb-3">
				{headerPrefix} {id}
			</h2>
		</div>
	)
}

const withHistory = (Component) => (props) => {
	const { pathname } = useLocation()
	const { pages, pushPage, removeLastPage } = useStore((state) => state.history)

	useEffect(() => {
		console.log('🚀 | Templates.jsx:34 | location.pathname', pathname)
		// const lastPage = pages.slice(-1)[0]

		return () => {
			console.log(`${pathname} unmounted`)
		}
	}, [pathname])

	return <Component {...props} />
}

export const PageTemplate = withHistory(PageTemplateRaw)
export const PagesTemplate = withHistory(PagesTemplateRaw)
