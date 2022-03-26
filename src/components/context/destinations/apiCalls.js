import axios from "axios"
import { createDestinationFail, createDestinationStart, createDestinationSuccess, deleteDestinationFail, deleteDestinationStart, deleteDestinationSuccess, getDestinationsFail, getDestinationsStart, getDestinationsSuccess } from "./DestinationActions"

export const getDestinations = async (dispatch) => {
    dispatch(getDestinationsStart())
    try{
        await axios.get("https://pretiosa-viventium-api.herokuapp.com/api/destinations/", {
            headers : {
                token : "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken 
            }
        }).then(res => dispatch(getDestinationsSuccess(res.data)))
        
    }catch(err) {
        dispatch(getDestinationsFail())
    }
}

export const createDestination = async (destination, dispatch) => {
    dispatch(createDestinationStart())
    try{
        await axios.post("https://pretiosa-viventium-api.herokuapp.com/api/destinations/", destination , {
            headers : {
                token : "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken 
            }
        }).then(res =>  dispatch(createDestinationSuccess(res.data)))
       
    }catch(err) {
        dispatch(createDestinationFail())
    }
}

// delete
export const deleteDestination = async (id, dispatch) => {
    dispatch(deleteDestinationStart())
    try{
        axios.get("https://pretiosa-viventium-api.herokuapp.com/api/destinations/find/" + id, {
            headers : {
                token : "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken 
            }
        })
        dispatch(deleteDestinationSuccess(id))
    }catch(err) {
        dispatch(deleteDestinationFail())
    }
}