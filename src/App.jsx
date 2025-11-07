import { useContext, useEffect } from 'react'
import LandingPage from './pages/LandingPage.jsx'
import axios from 'axios'
import { headLineContext } from './context/HeadLineContext.jsx'

const App = () => {

  const { setHeadLines } = useContext(headLineContext)

  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=88cb30d5024e4ee08146260d48a3db2d').then(res => {
      setHeadLines(res.data.articles)
    })
  }, [])

  return (
    <>
      <LandingPage />
    </>
  )
}

export default App