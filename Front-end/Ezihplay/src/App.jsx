import { useEffect } from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import LandingPage from '../Pages/landing/LandingHome'

function App() {
  const loggedIn  = useSelector((state) => state.userinfo.loggedIn)

  useEffect(() => {
    document.title = "Ezihplay | Checking .."
    if (loggedIn) {
      window.location.href = "/"
    } else {
      document.title = "Ezih Play"
    }
  })
  return (
    <>
    {
        loggedIn ? <Spin fullscreen={true} size='large' /> : <LandingPage />
      }
    </>
  )
}

export default App
