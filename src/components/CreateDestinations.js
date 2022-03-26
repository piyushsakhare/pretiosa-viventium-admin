import { useContext, useState } from "react"
import storage from "../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createDestination } from "./context/destinations/apiCalls";
import { DestinationContext } from "./context/destinations/DestinationContext";

function CreateDestinations() {

    const [destination, setDestination] = useState({})
    const [image1, setImage1] = useState(null)
    const [image2, setImage2] = useState(null)
    const [image3, setImage3] = useState(null)
    const [uploaded, setUploaded] = useState(0)

    const handleChange = (e) => {
        const value = e.target.value
        setDestination({...destination, [e.target.name] : value})
    }

    const metadata = {
        contentType: 'image/jpeg'
      };

    const upload = (items) => {
        items.forEach(item => {
            const storageRef = ref(storage,`/images/${item.file.name}`)
            const uploadTask = uploadBytesResumable(storageRef, item.file, metadata);
            uploadTask.on("state_changed",snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                console.log(progress)
            }, err => console.log(err), 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(url => {
                    setDestination( prev => {
                        return {...prev, [item.label] : url}
                    })
                    setUploaded(3)
                })
            })
        })
    }

    const handleUpload = (e) => {
        e.preventDefault()
        upload([
            {file : image1, label : "image1"},
            {file : image2, label : "image2"},
            {file : image3, label : "image3"}
        ])
    }

    const {dispatch} = useContext(DestinationContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        createDestination(destination, dispatch)
    }

    console.log(destination)

    return (
        <div className="text-black" >
            <form  >
                <div className="w-full flex" >
                <div className="w-1/2" >
                    <p className="font-medium text-xl" >Title</p>
                    <input className="p-2 border-2 border-black rounded w-2/3 my-3" onChange={handleChange} name="title" type="text" placeholder="Title" ></input>
                    <p className="font-medium text-xl" >Description</p>
                    <input className="p-2 border-2 border-black rounded w-2/3 my-3" onChange={handleChange} name="description" type="text" placeholder="Description" ></input>
                    <p className="font-medium text-xl" >Price</p>
                    <input className="p-2 border-2 border-black rounded w-2/3 my-3" onChange={handleChange} name="price" type="number" placeholder="Price" ></input>
                    <p className="font-medium text-xl" >Image-2</p>
                    <input className="p-2 border-2 border-black rounded w-2/3 my-3" onChange={ e => setImage2(e.target.files[0]) } name="image2" type="file" placeholder="Image" ></input>
                </div>
                <div className="w-1/2" >
                    <p className="font-medium text-xl" >Type</p>
                    <select className="p-2 border-2 border-black rounded w-2/3 my-3" onChange={handleChange} name="type" type="text" placeholder="Type" >
                        <option value="cottages" >Cottage</option>
                        <option value="homes" >Home</option>
                        <option value="unique" >Unique Stay</option>
                    </select>
                    <p className="font-medium text-xl" >Location</p>
                    <input className="p-2 border-2 border-black rounded w-2/3 my-3" onChange={handleChange} name="location" type="text" placeholder="Location" ></input>
                    <p className="font-medium text-xl" >Image-1</p>
                    <input className="p-2 border-2 border-black rounded w-2/3 my-3" onChange={ e => setImage1(e.target.files[0]) } name="image1" type="file" placeholder="Image" ></input>
                    <p className="font-medium text-xl" >Image-3</p>
                    <input className="p-2 border-2 border-black rounded w-2/3 my-3" onChange={ e => setImage3(e.target.files[0]) } name="image3" type="file" placeholder="Image" ></input>
                </div>
                </div>
                {uploaded === 3 ? <button onClick={handleSubmit} type="submit" className="bg-blue-600 p-2 text-white font-medium rounded" >Submit
                </button> : <button onClick={handleUpload} type="submit" className="bg-blue-600 p-2 text-white font-medium rounded" >Upload
                </button>}
                
            </form>
        </div>
    )
}

export default CreateDestinations