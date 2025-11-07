import NewsTab from '../other/NewsTab.jsx'
import Navbar from '../other/Navbar.jsx'
import { useContext } from 'react'
import { headLineContext } from '../context/HeadLineContext.jsx'

const LandingPage = () => {

  const { headLines } = useContext(headLineContext)  

  return (
    <>
      <Navbar />  

      <div className="h-screen flex flex-col gap-2 w-full px-40">
        
        {
          headLines.map((elem, idx) => {
            return <NewsTab key={idx} title={elem.title} description={elem.description} urlToImage={elem.urlToImage} url={elem.url} />
            
          })
        }


      </div>
    </>
  )
}

export default LandingPage