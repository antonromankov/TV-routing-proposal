import { Component, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import { LinksList } from '../components'

import { useStore } from '../store'

const PagesTemplateRaw = ({ header, links }) => {
  const location = useLocation()

  return (
    <div>
      <h2>{header}</h2>
      <LinksList items={links} />
    </div>
  )
}

const PageTemplateRaw = ({ headerPrefix }) => {
  const { id } = useParams()

  return (
    <div>
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
    // TODO get focus id from store
    console.log(`${pathname} in`)
    pushPage({ path: pathname })
    return () => {
      // TODO set focus id to store
      // [{ path: pathname, focusId: currentPageFocusId }]
      removeLastPage()
      console.log(`${pathname} out`)
    }
  }, [])

  return <Component {...props} />
}

export const PageTemplate = withHistory(PageTemplateRaw)
export const PagesTemplate = withHistory(PagesTemplateRaw)
