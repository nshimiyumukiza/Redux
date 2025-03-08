import { Link } from "react-router"

const Navbar = () => {
  return (
    <div className="bg-black">
     <div className="flex p-4 justify-between">
     <div>
        <Link to="/" className="text-green-400 font-bold text-2xl">ERNESTE SAGAGA</Link>
      </div>
      <div className="flex space-x-5">
        <Link className="border rounded-md px-3 py-1.5 text-white bg-green-500 hover:bg-blue-800" to="/register">Rigister</Link>
        <Link className="border rounded-md px-3 py-1.5 text-white bg-blue-800 hover:bg-green-500" to="/login">Login</Link>
      </div> 
     </div>
    </div>
  )
}

export default Navbar