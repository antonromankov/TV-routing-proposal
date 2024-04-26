import { ToastContainer } from 'react-toastify'
import { Router } from './containers'
import { useManageFocus } from './hooks'

export const App = () => {
  useManageFocus()

  return (
    <div className="app-wrapper position-relative">
      <Router />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
    </div>
  )
}
