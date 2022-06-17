import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./component/Post";
import Comment from "./component/Comment";
function App() {
  const name = prompt("Enter Your Name");
  sessionStorage.setItem("name", name);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Post />}></Route>
          <Route exact path="/comment" element={<Comment />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
