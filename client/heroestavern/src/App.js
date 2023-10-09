import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import MyCharSheets from "./pages/mycharsheets/mycharsheets";
import { Routes, Route } from "react-router-dom";
import CharacterCreation from "./pages/charactercreation/charactercreation"

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='characters/' element={<MyCharSheets/>}></Route>
        <Route path='charactercreation/' element={<CharacterCreation/>}></Route>
      </Routes>
    </>
  );
}

export default App;
