import logo from './logo.svg';
import './App.css';
import {LoadImages} from "./components/api"
import Image from "./components/image"
function App() {
  const data = LoadImages()
  console.log(data)
  return (
    <div className="App">
        {data.map((img) => (
          <Image src={img.urls.thumb} />
        ))}
    </div>
  );
}

export default App;
