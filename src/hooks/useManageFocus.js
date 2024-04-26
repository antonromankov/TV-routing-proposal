import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useStore } from '../store'
import { uuid } from '../utils'

export const useManageFocus = () => {
  const { pathname } = useLocation()
  const { pages, pushPage, clearPages } = useStore((state) => state.history)

  useEffect(() => {
    if (pathname === '/') {
      return
    }

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
