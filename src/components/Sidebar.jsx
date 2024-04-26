import { Button } from 'reactstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { useStore } from '../store'
import { toast } from 'react-toastify'

export const Sidebar = ({ items }) => {
  const { removePage } = useStore((state) => state.history)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const isBackButtonHidden = pathname === '/app'
  const opacity = +!isBackButtonHidden * 100

  const handleBack = () => {
    navigate(-1)
    removePage(pathname)
    toast.error(`Removed focus for ${pathname}`)
  }

  const handleNavigate = (to) => {
    to && pathname !== to && navigate(to)
  }

  return (
    <aside className="app-sidebar d-flex flex-column align-items-center gap-3">
      <Button
        style={{ height: 48 }}
        color="link"
        className={`opacity-${opacity}`}
        disabled={isBackButtonHidden}
        onClick={handleBack}
      >
        ← Back
      </Button>
      <ul className="menu list-unstyled d-flex flex-column gap-3 flex-grow-1 justify-content-center">
        {items?.map((item) => (
          <li key={item.id} className="menu-item text-center" onClick={() => handleNavigate(item.to)}>
            {item.title}
          </li>
        ))}
      </ul>
    </aside>
  )
}
