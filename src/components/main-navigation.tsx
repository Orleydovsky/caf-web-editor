import { Link } from 'react-router-dom'

const MainNavigation = (): JSX.Element => {
  return (
    <nav className='h-5 border'>
      <Link to='/'>Dashboard</Link>
      <Link to='/create'>Creator</Link>
      <Link to='/usermanual'>Manual</Link>
      <button>Logout</button>
    </nav>
  )
}

export default MainNavigation
