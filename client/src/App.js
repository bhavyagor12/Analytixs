import Signin from "./pages/Signin";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/signin" element={<Signin/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
