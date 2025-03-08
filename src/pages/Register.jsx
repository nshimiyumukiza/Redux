
const Register = () => {
  return (
    <div className="bg-gray-100 ">
      <div>
        <h1 className="text-3xl font-bold text-center pt-4">Wellcome !</h1>
        <p className="text-lg text-center pt-5">Regester enable to be use This Website very Well no worry all is good</p>
        <p className="text-blue-400 font-bold text-2xl text-center p-4">REGISTER FORM</p>
      </div>
      <div className="flex justify-center  ">
        <form className="space-y-4 p-5 bg-gray-400 m-8 rounded-md" action="">
        <div>
          <label>Name</label><br />
          <input className="border rounded-md outline-none bg-gray-50 px-3 py-1.5" type="text"placeholder="Enter Your Name" />
        </div>
        <div>
          <label>Email</label><br />
          <input className="border rounded-md outline-none bg-gray-50 px-3 py-1.5" type="email"placeholder="Enter Your Email" />
        </div>
        <div>
          <label>Password</label><br />
          <input className="border rounded-md outline-none bg-gray-50 px-3 py-1.5" type="password"placeholder="Enter Your Password" />
        </div>
        <div>
          <label>ConfrimPassword</label><br />
          <input className="border rounded-md outline-none bg-gray-50 px-3 py-1.5" type="password"placeholder="ConfrimPassword" />
        </div>
        <button className="border rounded-md px-2 py-1 bg-green-400 text-white hover:bg-blue-500">Send</button>
        </form> 
      </div>

    </div>
  )
}

export default Register