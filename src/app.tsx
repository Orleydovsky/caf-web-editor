import AuthenticatedApp from './authenticated-app'
import UnauthenticatedApp from './unauthenticated-app'
import './styles/main.css'

const App = (): JSX.Element => {
  const user = true
  return (
    user ? <AuthenticatedApp/> : <UnauthenticatedApp/>
  )
}

export default App
