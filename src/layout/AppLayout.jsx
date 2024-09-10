import "../App.css";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-backgound"></div>

      <main className="min-h-screen px-10 ">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        Made by Abdul Rauf
      </div>
    </div>
  );
};

export default AppLayout;
