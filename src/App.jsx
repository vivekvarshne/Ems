import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDeshboard from './components/Deshboard/EmployeeDeshboard'
import AdminDeshboard from './components/Deshboard/AdminDeshboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'
import { data } from 'autoprefixer'

const App = () => {
  const [user, setUser] = useState(null) 
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setUserData] = useContext(AuthContext)

  //  useEffect(()=>{
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  //  },[authData]);
  useEffect(()=>{
    const loggedInUser = localStorage.getItem("loggedInUser")
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])

  const handleLogin = (email, password)=>{
    if(email === 'admin@me.com' && password === '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(userData ){
      const employee = userData.find((e)=>email == e.email && e.password == password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
      }

    }
    else{
      alert('Incorrect email or password') 
    }
  }
  
  // useEffect(()=>{
  //   setLocalStorage()
  //   getLocalStorage()
  // })
  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/>:''}
      {user == 'admin' ? <AdminDeshboard changeUser= {setUser}/> : (user == 'employee' ? <EmployeeDeshboard changeUser= {setUser} data={loggedInUserData} />: null)}
      {/* {setLocalStorage()} */}
      
    </>
  )
}

export default App
