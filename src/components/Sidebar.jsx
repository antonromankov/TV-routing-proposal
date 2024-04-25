import { Button } from 'reactstrap'
import { useLocation, useNavigate } from 'react-router-dom'

export const Sidebar = ({ items }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const isBackButtonHidden = pathname === '/app'
  const opacity = +!isBackButtonHidden * 100

  const handleBack = () => {
    navigate(-1)
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
