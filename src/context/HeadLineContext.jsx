import { createContext, useState } from "react"

export const headLineContext = createContext(null)

const HeadLineContext = ({ children }) => {

    const [headLines, setHeadLines] = useState([])

  return (
    <>
        <headLineContext.Provider value={{ headLines, setHeadLines }}>
            { children }
        </headLineContext.Provider>
    </>
  )
}

export default HeadLineContext