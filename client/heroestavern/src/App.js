import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import MyCharSheets from "./pages/mycharsheets/mycharsheets";
import { Routes, Route } from "react-router-dom";
import CharacterCreation from "./pages/charactercreation/charactercreation";
import SignUpForm from "./pages/auth/forms/signup";
import LoginForm from "./pages/auth/forms/login";
import { CurrentUserProvider } from "./contexts/currentUserContext";
import CharacterList from "./pages/characterlist/characterlist";
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <CurrentUserProvider>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<CharacterList />}></Route>
          <Route path="characters/:id" element={<MyCharSheets />}></Route>
          <Route
            path="charactercreation/"
            element={<CharacterCreation />}
          ></Route>
          <Route path="signup/" element={<SignUpForm />}></Route>
          <Route path="login/" element={<LoginForm />}></Route>
        </Routes>
      </main>
      <Toaster position="bottom-right" reverseOrder={true}/>
    </CurrentUserProvider>
  );
}

export default App;
