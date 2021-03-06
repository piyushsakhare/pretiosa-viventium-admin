import axios from "axios";
import { loginFail, loginStart, loginSuccess, logout } from "./AuthActions";

export const login = async (user, dispatch) => {
    dispatch(loginStart())
    try{
        const res = await axios.post("https://pretiosa-viventium-api.herokuapp.com/api/auth/login", user)
        res.data.isAdmin && dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFail())
    }
}

export const logouthandler = (dispatch) => {
    dispatch(logout())
}