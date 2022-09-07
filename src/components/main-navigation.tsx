import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'

const MainNavigation = (): JSX.Element => {
  return (
    <nav className='p-3 mb-5 shadow-md w-full font-nunito font-bold text-gray-500'>
      <div className='container mx-auto max-w-4xl flex items-center'>

        <div className='w-1/3 h-10 flex justify-start'>
          <img src='/icon.png'/>
        </div>
        <div className='w-1/3 flex justify-between'>
          <Link to='/'>Principal</Link>
          <Link to='/create'>Editor</Link>
          <Link to='/usermanual'>Manual</Link>
        </div>
        <div className='w-1/3 flex justify-end'>
          <button>Salir <FontAwesomeIcon icon={faSignOut}/></button>
        </div>
      </div>
    </nav>
  )
}

export default MainNavigation
