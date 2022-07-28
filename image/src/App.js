import logo from './logo.svg';
import './App.css';
import {LoadImages} from "./components/api"
import Image from "./components/image"
function App() {
  const [query, setQuery] = useState()
  const data = LoadImages()
  console.log(data)
  return (
    <div className="App">
    <div>
      <input type= "text" onChange={(event) => setQuery(event.target.value)}/>
    </div>
        {data.map((img) => (
          <Image src={img.urls.thumb} />
        ))}
    </div>
  );
}

export default App;
