import './App.css';
import Navbar from './component/Navbar';

function App() {
  const name=prompt("Enter Your Name");
  sessionStorage.setItem("name",name)
  return (
    <div className="App">
       <Navbar/>
    </div>
  );
}

export default App;
