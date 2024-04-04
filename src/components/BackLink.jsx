import { Link } from 'react-router-dom'

export const BackLink = ({ to }) => (
  <Link to={to} className="mb-3 d-inline-block">
    ← Back
  </Link>
)
