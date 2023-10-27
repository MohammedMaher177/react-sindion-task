import { Outlet } from "react-router-dom";
import Days from "../Days/Days.jsx";
import HomeMenu from "../HomeMenu/HomeMenu.jsx";
import Header from "../Header/Header.jsx";
import Pie from "../Pie/Pie.jsx";
// import styles from "./home.module.css";

export default function HomeLayout() {
  return (
    <>
      <div className="container my-2">
        <div className="row">
          <div className="col-md-4">
            <Days />
            <Pie />
            <HomeMenu />
          </div>
          <div className="col-md-8">
            <Header />
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}
