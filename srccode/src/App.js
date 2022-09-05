import React from 'react'
import Homepage from './Components/Homepage'
import Ratingpage from './Components/ratingpage'
import { useGlobalContext } from './Context/Context'
function App() {
  const {page}=useGlobalContext()
  return (
    <>
    {(page==="home")?<Homepage/>:<Ratingpage/>}
    </>
  )
}

export default App