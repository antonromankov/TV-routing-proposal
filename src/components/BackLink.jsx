import { Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

export const BackLink = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate(-1)
  }

  return (
    <Button className="mb-3 p-0" color="link" onClick={onClick}>
      ← Back
    </Button>
  )
}
