import Signin from "./pages/Signin";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import { useState } from "react";
//Student
import StudentDashboard from "./pages/Student/Dashboard";

//Teacher
import TeacherDashboard from "./pages/Teacher/Dashboard";

//Parent
import ParentDashboard from "./pages/Parent/Dashboard";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Homepage darkMode={darkMode} setDarkMode={setDarkMode}/>} />
    <Route path="/signin" element={<Signin darkMode={darkMode} setDarkMode={setDarkMode}/>} />

    {/* student */}
    <Route path="/student" element={<StudentDashboard darkMode={darkMode} setDarkMode={setDarkMode}/>} />

    {/* teacher */}
    <Route path="/teacher" element={<TeacherDashboard darkMode={darkMode} setDarkMode={setDarkMode}/>} />


    {/* parent */}
    <Route path="/parent" element={<ParentDashboard darkMode={darkMode} setDarkMode={setDarkMode}/>} />
    
    </Routes>
    </BrowserRouter>
   
    
  );
}

export default App;
