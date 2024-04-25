import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

export const Page404 = () => {
  const navigate = useNavigate()
  const intervalRef = useRef()

  const [counter, setCounter] = useState(5)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCounter((prev) => prev - 1)
    }, 1000)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  useEffect(() => {
    if (counter <= 0) {
      navigate('/app', { replace: true })
    }
  }, [counter])

  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-3 min-vh-100">
      <h1 style={{ marginBottom: 0 }}>Page not found</h1>
      <p>Redirecting to the home page in {counter} second(s)...</p>
    </div>
  )
}
