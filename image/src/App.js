import{useState, useEffect} from "react"
import './App.css';
import {LoadImages, SearchImages} from "./components/api"
import Image from "./components/image"
function App() {
  const [query, setQuery] = useState()
  const [search, setSearch] = useState()
  const data = LoadImages()
  console.log(query)
  const search = () => {
    setSearch(query)
  }
  console.log(SearchImages(query))
  return (
    <div className="App">
    <div>
      <input type= "text" onChange={(event) => setQuery(event.target.value)}/>
      <button onClick={search}>Search</button>
      </div>
        {data.map((img, key) => (
          <Image src={img.urls.thumb} key={key} />
        ))}
    </div>
  );
}

export default App;
