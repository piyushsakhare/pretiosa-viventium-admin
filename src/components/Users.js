import { useContext, useState, useEffect } from "react"
import axios from "axios"
import { AuthContext } from "./context/auth/AuthContext"

function Users() {

    const [userList,setUserList] = useState([])

    const {user} = useContext(AuthContext)

      useEffect(() => {
          try{
            axios.get("/users/", 
          {
              headers : {
                  token : `Bearer ${user.accessToken}`
              }
          })
          .then( res => setUserList(res.data))
          }
          catch(err){
              console.log(err)
          }
           
      },[])

    return (
        <div>
            <h1 className="font-medium text-4xl" >Users List</h1>
            <div className="mt-8 grid grid-cols-1 divide-y" >
                {
                    userList.map((item,i) => { 
                        
                        return (
                        <div key={i} className="my-1 font-base flex justify-between" >
                            <p>{item.firstname + " " + item.lastname}</p>
                            <div className="text-white" >
                                <button className="bg-red-600 p-2 rounded ml-3" >Delete</button>
                            </div>
                            
                        </div>
                    )})
                }
                    
                    
                    
                     
                </div>
        </div>
    )
}

export default Users