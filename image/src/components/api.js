import{useState, useEffect} from "react"
import axios from "axios"
const count = 1

function LoadImages(){
    const [state, setState] = useState([])
    useEffect(() => {
        axios.get("https://api.unsplash.com/photos?client_id=6fa91622109e859b1c40218a5dead99f7262cf4f698b1e2cb89dd18fc5824d15")
        .then((data) =>{
            setState(data.data)  
    })
    }, [count])
    return state
}

export {LoadImages}