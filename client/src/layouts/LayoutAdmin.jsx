import Navbar from "@/components/navbar/Navbar";
import { Outlet } from "react-router";

const LayoutAdmin = () => {
  return (
    <div>
      <Navbar/>
      <hr />
      <Outlet />
    </div>
  );
};
export default LayoutAdmin;
