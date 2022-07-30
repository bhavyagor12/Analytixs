import Signin from "./pages/Signin";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Homepage darkMode={darkMode} setDarkMode={setDarkMode}/>} />
    <Route path="/signin" element={<Signin darkMode={darkMode} setDarkMode={setDarkMode}/>} />
    </Routes>
    </BrowserRouter>
   
    
  );
}

export default App;
