

const User = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center py-4 font-semibold text-blue-500 text-xl">
        Users in My Webpage
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-6 text-left">First Name</th>
              <th className="py-3 px-6 text-left">Last Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Password</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-gray-100">
              <td className="py-3 px-6">John</td>
              <td className="py-3 px-6">Doe</td>
              <td className="py-3 px-6">john@example.com</td>
              <td className="py-3 px-6">••••••••</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-3 px-6">sagaga</td>
              <td className="py-3 px-6">sagaga</td>
              <td className="py-3 px-6">sagaga@example.com</td>
              <td className="py-3 px-6">••••••••</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-3 px-6">erneste</td>
              <td className="py-3 px-6">erneste</td>
              <td className="py-3 px-6">ernestesexample.com</td>
              <td className="py-3 px-6">••••••••</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;

