import useGetUser from "./hooks/use-getUser";

const User = () => {
    const {Users}=useGetUser()
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center py-4 font-semibold text-blue-500 text-xl">
        Users in My Webpage
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Names</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Password</th>
              <th className="py-3 px-6 text-left">Created At</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {Users?.data.map((user)=>(
            <tr className="hover:bg-gray-100">
                  <td className="py-3 px-6">{user.name}</td>
                  <td className="py-3 px-6">{user.email}</td>
                  <td className="py-3 px-6">{user.password}</td>
                  <td className="py-3 px-6">{user.createdAt}</td>
            </tr>
            ))}
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;

