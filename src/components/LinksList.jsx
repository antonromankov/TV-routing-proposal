import { Link } from 'react-router-dom'

export const LinksList = ({ items }) => (
  <nav>
    <ul>
      {items.map((link) => (
        <li key={link.to}>
          <Link to={link.to}>{link.label}</Link>
        </li>
      ))}
    </ul>
  </nav>
)
