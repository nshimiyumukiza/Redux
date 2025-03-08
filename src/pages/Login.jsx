
const Login = () => {
  return (
    <div>
      <h1 className="text-center text-2xl text-blue-500 p-5">Login From</h1>
      <div className="flex justify-center">
        <form className="space-y-3" action="">
        <div>
          <label>Email</label><br />
          <input className="border rounded-md outline-none bg-gray-50 px-3 py-1.5" type="email"placeholder="Enter Your Email" />
        </div>
        <div>
          <label>Password</label><br />
          <input className="border rounded-md outline-none bg-gray-50 px-3 py-1.5" type="password"placeholder="Enter Your Password" />
        </div>
        <button className="border rounded-md px-2 py-1 bg-green-400 text-white hover:bg-blue-500">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Login
