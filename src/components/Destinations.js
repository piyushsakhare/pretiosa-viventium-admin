import { useContext, useEffect } from "react"
import { deleteDestination, getDestinations } from "./context/destinations/apiCalls"
import { DestinationContext } from "./context/destinations/DestinationContext"

function Destinations() {

    const {destinations, dispatch} = useContext(DestinationContext)

    useEffect(() => {
        getDestinations(dispatch)
    },[dispatch])

    const handleDelete = (id) => {
        deleteDestination(id, dispatch)
    }

    console.log(destinations)

    return (
        <div>
            <h1 className="font-medium text-4xl" >Destinations List</h1>
            <div className="mt-8 grid grid-cols-1 divide-y" >
                    { destinations.map((destination) => { 
                        return (
                        <div key={destination._id} className="my-1 font-base flex justify-between" >
                        <p>{destination.title}</p>
                        <div className="text-white" >
                            <button className="bg-blue-600 p-2 rounded" >Edit</button>
                            <button className="bg-red-600 p-2 rounded ml-3" onClick={() => handleDelete(destination._id)} >Delete</button>
                        </div>
                    </div>)
                    } ) }
                    
                    
                     
                </div>
        </div>
    )
}

export default Destinations