import logo from './logo.svg';
import './App.css';
import {LoadImages} from "./components/api"

function App() {
  const data = LoadImages()
  console.log(data)
  return (
    <div className="App">
    Hello world
    </div>
  );
}

export default App;
