// src/components/Sidebar.tsx
import Link from "next/link";
import { FaHome } from "react-icons/fa";

const categories = [
  { name: "Cars" },
  { name: "Fitness" },
  { name: "Wallpaper" },
  { name: "Websites" },
  { name: "Photo" },
  { name: "Food" },
  { name: "Nature" },
];

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen p-4 fixed overflow-y-auto border-r bg-white">
      <div className="flex items-center mb-10">
        <div className="text-3xl font-bold">Sharenet</div>
      </div>
      <ul>
        <li className="mb-4 flex items-center space-x-2 cursor-pointer">
          <FaHome />
          <Link href="/" passHref>
            <span className="cursor-pointer">Home</span>
          </Link>
        </li>
        <div className="text-gray-500 mb-2">Discover categories</div>
        {categories.map((category, index) => (
          <li key={index} className="mb-3 pl-4">
            <Link href={`/category/${category.name.toLowerCase()}`} passHref>
              <span className="cursor-pointer">{category.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
