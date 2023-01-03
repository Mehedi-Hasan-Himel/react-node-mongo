import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddUser from "./components/AddUser/AddUser";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="user/home" element={<Home></Home>}></Route>
        <Route path="user/add" element={<AddUser></AddUser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
