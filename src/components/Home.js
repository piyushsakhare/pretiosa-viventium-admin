import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "./context/auth/AuthContext"

function Home() {

      const [newUsers,setNewUsers] = useState([])
      const {user} = useContext(AuthContext)

      useEffect(() => {
          try{
            axios.get("https://pretiosa-viventium-api.herokuapp.com/api/users?new=true", 
          {
              headers : {
                  token : `Bearer ${user.accessToken}`
              }
          })
          .then( res => setNewUsers(res.data))
          }
          catch(err){
              console.log(err)
          }
           
      },[])

    return(
        <div className="w-full" >
            <div className="flex" >
                <div className="w-1/2 mx-4 bg-gray-300  rounded py-4 px-10" >
                    <h1 className="font-medium text-2xl" >Users</h1>
                    <p className="mt-2">this month</p>
                    <h1 className="mt-4 font-medium text-5xl" >2098</h1>
                </div>
                <div className="w-1/2 mx-4 bg-gray-300  rounded py-4 px-10" >
                    <h1 className="font-medium text-2xl" >Revenue</h1>
                    <p className="mt-2">this month</p>
                    <h1 className="mt-4 font-medium text-5xl" >129</h1>
                </div>
            </div>
            <div className="my-10 bg-gray-300  rounded mx-4 py-4 px-10" >
                <h1 className="font-medium text-4xl" >New Users</h1>
                <div className="mt-8 grid grid-cols-1 divide-y" >
                    {
                        newUsers.map((user,i) => (<p key={i} className="my-1 font-base" >{user.firstname + " " + user.lastname}</p>) )
                    }
                </div>
            </div>
        </div>
    )
}

export default Home