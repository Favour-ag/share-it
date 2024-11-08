import { FaPlusCircle, FaUserCircle } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
      <input
        type="text"
        placeholder="Search"
        className="p-2 rounded-md border border-gray-300 w-full max-w-4xl"
      />
      <div className="flex items-center space-x-4">
        <FaPlusCircle className="text-2xl cursor-pointer" />
        <FaUserCircle className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
