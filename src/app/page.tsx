// src/app/page.tsx
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-row bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64">
        <Navbar />
        <Feed />
      </div>
    </div>
  );
}
