import { Outlet } from "react-router";

const LayoutAdmin = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <hr />
      <Outlet />
    </div>
  );
};
export default LayoutAdmin;
