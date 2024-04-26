import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useStore } from '../store'

const Msg = ({ text }) => (
  <div>
    Focus was set to
    <br />
    <strong>{text}</strong>
  </div>
)

const uuid = (length = 5) => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  let counter = 0
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return result
}

export const useManageFocus = () => {
  const { pathname } = useLocation()
  const { pages, pushPage, clearPages } = useStore((state) => state.history)

  useEffect(() => {
    if (pathname === '/app') {
      clearPages()
      toast.error('Cleared focus history')
    } else {
      if (!pages[pathname]) {
        const focusId = uuid()
        pushPage({ [pathname]: focusId })
        toast.warning(`Added focusId for ${pathname}`)
      }
    }

    if (pages[pathname]) {
      toast.success(`Restored focus on ${pathname}`)
    }

    console.log(`${pathname} in`)

    return () => {
      console.log(`${pathname} out`)
    }
  }, [pathname])
}
