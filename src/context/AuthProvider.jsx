import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'
import { data } from 'autoprefixer'

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
  // localStorage.clear()

  const [userData, setUserData] = useState(null)

 useEffect(()=>{
  // setLocalStorage()
  const {employees} = getLocalStorage()
  // console.log(employees, admin)
  setUserData(employees)
  }, [])
  
  
  return (
    <div>
      <AuthContext.Provider value={[userData,setUserData]}>
        {children} 
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
