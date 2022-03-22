import { Link } from "react-router-dom"

function Sidebar() {
    return (
        <div className="mt-12" >
            <Link to="/home"><div className="my-2 p-2 bg-gray-300 rounded font-medium" >
                 Home</div></Link>  
            <Link to="/users" ><div className="my-2 p-2 bg-gray-300 rounded font-medium" >
                Users</div></Link>
            <Link to="/destinations" ><div className="my-2 p-2 bg-gray-300 rounded font-medium" >
                Destinations</div></Link>
            <Link to="/createdestination" ><div className="my-2 p-2 bg-gray-300 rounded font-medium" >
                Create Destinations</div></Link>
            <Link to="/revenue" ><div className="my-2 p-2 bg-gray-300 rounded font-medium" >
                Revenue</div></Link>

        </div>
    )
}

export default Sidebar