import './App.css'
import Login from './components/Login'
import Profile from './components/profile'
import UserContextProvider from './context/UserContextprovider'

function App() {

  return (
    <>
    <UserContextProvider>
      <h1>Linkedin learn</h1>
      <Login />
      <Profile />
    </UserContextProvider>
    </>
  )
}

export default App
