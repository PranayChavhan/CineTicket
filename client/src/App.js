import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Auth/Login/LoginPage";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="home" element={<HomePage/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
