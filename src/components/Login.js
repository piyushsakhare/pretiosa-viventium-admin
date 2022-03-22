import { useContext, useState } from "react"
import { login } from "./context/auth/apiCalls"
import { AuthContext } from "./context/auth/AuthContext"

function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const {isFetching, dispatch} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()
        login({email, password}, dispatch)
    }

    return (
        <div className=" grid place-content-center p-4" >
            <form className="flex flex-col" >
                <h1 className="text-4xl font-medium" >Login</h1>
                <input className="p-2 border-2 border-black rounded my-3" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                <input className="p-2 border-2 border-black rounded my-3" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} ></input>
                <button onClick={handleLogin} className="bg-green-600 p-2 rounded" disabled={isFetching} >Login</button>
            </form>
        </div>
    )
}

export default Login