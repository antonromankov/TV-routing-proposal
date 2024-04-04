import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Modal } from './components'
import { Home } from './containers'

import { useStore } from './store'

export const App = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { isModalOpened, setModalOpened } = useStore((state) => state.common)

  useEffect(() => {
    setModalOpened(location.pathname !== '/')
  }, [location])

  const onModalClose = () => {
    setModalOpened(false)
    navigate('/')
  }

  return (
    <div className="app-wrapper position-relative">
      <Home />
      <Modal isOpen={isModalOpened} onClose={onModalClose} />
    </div>
  )
}
