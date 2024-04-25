import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components'

const menu = [
  { id: 1, title: 'Settings 1' },
  { id: 2, title: 'Settings 2' },
  { id: 3, title: 'Settings 3' },
  { id: 4, title: 'Settings 4' }
]

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
