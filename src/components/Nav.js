import { logouthandler } from "./context/auth/apiCalls"
import { AuthContext } from "./context/auth/AuthContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

function Nav() {
    let navigate = useNavigate()
    const {dispatch} = useContext(AuthContext)
    const handleLogout = () => {
        let path = "/"
        logouthandler(dispatch)
        navigate(path)
    }

    return (
        <div className="w-full flex justify-between px-12 py-2" >
            <h1 className="text-4xl" >admin</h1>
            <div className="bg-red-500 text-white p-2" >
                <button onClick={handleLogout}  >Logout</button>
            </div>
        </div>
    )
}

export default Nav