import React,{createContext,useContext} from 'react'

const Context = createContext();
export const ApiProvider = ({children,useData}) => {
  const values = useData
  return(
    <Context.Provider value={values}>{children}</Context.Provider>  
  )  
}
export const useApi = () =>{
    const context = useContext(Context)
    if(context === undefined){
        throw new Error('useApi hook must be call inside ApiProvider component')
    }
    return context
}
export async function getStaticProps(){
    
}
