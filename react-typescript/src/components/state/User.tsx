import React,{useState} from 'react'
type AuthUser = {
    name : string,
    email : string
}
function User() {
    const [user,setUser] = useState<AuthUser|null>(null);


    const handleLogin = () => {
        setUser({
           name : "Avinash",
           email : "avinash@123gmail.com" 
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
  return (
    <div>{
        user?.email
    }</div>
  )
}

export default User