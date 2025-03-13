import { BrowserRouter, Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import {Provider} from "react-redux"
import { store } from "./components/rtk/store/store";
import User from "./pages/User";

const App = () => {
  return (
    <>
        <Provider store={store}>
        <BrowserRouter>
    <Navbar />
    <Routes >
      <Route path="/"element={<Home />}/>
      <Route path="/register"element={<Register />}/>
      <Route path="/login"element={<Login />}/>
      <Route path="/dash"element={<Dashboard />}/>
      <Route path="/users"element={<User />}/>
      
    </Routes>
    <Footer />
    </BrowserRouter>

        </Provider>
    </>
  )
}

export default App