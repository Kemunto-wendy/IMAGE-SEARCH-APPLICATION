import{useState, useEffect} from "react"
import './App.css';
import {LoadImages, SearchImages} from "./components/api"
import Image from "./components/image"

function App() {
  const [query, setQuery] = useState()
  const [searchQ, setSearch] = useState()
  const data = LoadImages()
  console.log(query)
  const search = () => {
    setSearch(query)
  }
  const searchData = SearchImages(query)
  console.log(SearchImages(searchQ))
  return (
    <div className="App">
      <div className="header">
      <nav>
      <h2 class="logo">ONLINE CBC KIDS <span> IMAGE SEARCH </span></h2>
      <ul>
          <li><a href="#">CONTACT ME</a></li>
      </ul>
          <a href="#" class="btn">Commentary</a>
  </nav>
      </div>
    <div>
      <input type= "text" onChange={(event) => setQuery(event.target.value)}/>
      <button onClick={search}>Search</button>
      </div>
      <div className="container">
        {searchQ ? searchData.map((img, key) => (
          <Image src={img.urls.thumb} key={key} />
        )) : 
        data.map((img, key) => (
          <Image src={img.urls.thumb} key={key} />
        ))}
    </div>
  </div>
  );
}
window.print("Print the displayed image")
export default App;
