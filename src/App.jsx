import { BrowserRouter, Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes >
      <Route path="/"element={<Home />}/>
      <Route path="/register"element={<Register />}/>
      <Route path="/login"element={<Login />}/>
      
    </Routes>
    <Footer />
    </BrowserRouter>

    </>
  )
}

export default App