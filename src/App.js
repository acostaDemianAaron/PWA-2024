import logo from './logo.svg';
import './App.css';
import Button from "./components/Button/Button";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home></Home>
        <Button></Button>
      </header>
    </div>
  );
}

export default App;
