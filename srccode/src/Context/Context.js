import React,{useState} from 'react'

const AppContext=React.createContext()
function AppProvider({children}) {
    const [page,setPage]=useState("home")
    const [rate,setRate]=useState(0)
    const [disabled,setDisabled]=useState(true)
    const changepage=(value)=>{
        setPage(value)
    }
    const changerate=(value)=>{
        setRate(value)
    }
    const changestate=(value)=>{
        setDisabled(value)
    }
  return (
   <AppContext.Provider value={{page,changepage,rate,changerate,disabled,changestate}}>
       {children}
   </AppContext.Provider>
  )
}
export const useGlobalContext=()=>{
    return React.useContext(AppContext)
}
export {AppContext, AppProvider}