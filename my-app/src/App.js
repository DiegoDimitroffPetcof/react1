import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./components/pure/home";
import { Login } from "./components/pure/form";
import { Signout } from "./components/pure/signout";
import { Documentation } from "./components/pure/documentation";
import { MenuGame } from "./components/menuGames";
import { LoginSuccess } from "./components/auth/Login success";
import { Loginfail } from "./components/auth/loginfail";
import { Test } from "./components/auth/test";
import { PageNotFound } from "./pages/404";

function App() {
  return (
    <div>
      <Routes>
        
          <Route path="/" element={<Home />}>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<MenuGame />} />
            <Route path="/signout" element={<Signout />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/login/loginsuccess" element={<LoginSuccess />} />
            <Route path="/signout/loginsuccess" element={<LoginSuccess />} />
            <Route path="/loginfail" element={<Loginfail />} />
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<PageNotFound />} />
            
          </Route>
        
      </Routes>
    </div>
  );
}

export default App;
