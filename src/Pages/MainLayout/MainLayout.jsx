import { Outlet } from "react-router-dom";
import NavBar from "../../Components/Navbar/Navbar.jsx";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <div className="container py-5">
        <Outlet></Outlet>
      </div>
    </>
  );
}
