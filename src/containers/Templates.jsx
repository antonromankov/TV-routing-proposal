import { Component, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import { LinksList } from '../components'

import { useStore } from '../store'
import { Input, FormGroup, Label, Form } from 'reactstrap'

const PagesTemplateRaw = ({ header, links }) => {
  const location = useLocation()

  return (
    <div>
      <h1>{header}</h1>
      <LinksList items={links} />
    </div>
  )
}

const PageTemplateRaw = ({ headerPrefix }) => {
  const { id } = useParams()

  return (
    <div>
      <h1 className="mb-3">
        {headerPrefix} {id}
      </h1>
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

export const SettingsPages = () => {
  const id = Math.floor(Math.random() * 10) + 1
  const links = new Array(id).fill(0).map((_, i) => ({
    to: `/settings/pages/${i + 1}`,
    label: `Page ${i + 1}`
  }))

  return (
    <div>
      <h2>Pages settings</h2>
      <LinksList items={links} />
    </div>
  )
}

export const SettingsPageId = () => {
  const { id } = useParams()

  const onSubmit = (e) => {
    e.preventDefault()
    alert(`Save page ${id}`)
  }

  return (
    <div>
      <h2>Settings page {id}</h2>
      <br />
      <Form onSubmit={onSubmit} style={{ maxWidth: 300 }}>
        <FormGroup>
          <Label htmlFor="title">Page title</Label>
          <Input id="title" placeholder="Page title" />
        </FormGroup>
        <Input className="btn btn-primary" type="submit" value="Save" />
      </Form>
    </div>
  )
}

export const PageTemplate = withHistory(PageTemplateRaw)
export const PagesTemplate = withHistory(PagesTemplateRaw)
