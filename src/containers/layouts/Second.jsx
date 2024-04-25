import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components'

const menu = [{ id: 2, title: 'Pages', to: '/settings/pages' }]

export const SecondLayout = () => {
  return (
    <div className="d-flex h-100">
      <Sidebar items={menu} />
      <div className="app-content">
        <h1>Settings</h1>
        <Outlet />
      </div>
    </div>
  )
}
