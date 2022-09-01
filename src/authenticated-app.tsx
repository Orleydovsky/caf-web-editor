import { Route, Routes } from 'react-router-dom'
import MainNavigation from './components/main-navigation'
import Create from './screens/create'
import Dashboard from './screens/dashboard'
import UserManual from './screens/user-manual'

const AuthenticatedApp = (): JSX.Element => {
  return (
    <div>
      <MainNavigation/>
      <AuthenticatedAppRoutes/>
    </div>
  )
}

const AuthenticatedAppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/usermanual' element={<UserManual/>}/>
    </Routes>
  )
}

export default AuthenticatedApp
