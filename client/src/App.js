import Signin from "./pages/Signin";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
function App() {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Homepage/>} />
    <Route path="/signin" element={<Signin/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
