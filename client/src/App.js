import Signin from "./pages/Signin";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <BrowserRouter>
  
    <Routes>
    <Route path="/" element={<Homepage darkMode={darkMode} setDarkMode={setDarkMode}/>} />
    <Route path="/signin" element={<Signin/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
