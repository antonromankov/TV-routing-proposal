import { useLocation, Outlet } from 'react-router-dom'

import { Home } from '../Home'

import { Sidebar, Modal } from '../../components'

const menu = [
  { id: 1, to: '/app', title: 'Home' },
  { id: 2, to: '/app/pages', title: 'Pages' },
  { id: 3, to: '/app/gallery', title: 'Gallery' },
  { id: 4, to: '/settings', title: 'Settings' }
]

export const FirstLayout = () => {
  const { pathname } = useLocation()
  const isModalOpened = pathname.includes('/app') && pathname !== '/app'

  return (
    <div className="d-flex h-100">
      <Sidebar items={menu} />
      <div className="app-content">
        <Home />
        <Modal isOpen={isModalOpened}>
          <Outlet />
        </Modal>
      </div>
    </div>
  )
}
