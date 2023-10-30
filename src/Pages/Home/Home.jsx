import { Outlet } from "react-router-dom";
import Days from "../../Components/Days/Days.jsx";
import HomeMenu from "../../Components/HomeMenu/HomeMenu.jsx";
import { styled } from "@mui/material/styles";

import Header from "../../Components/Header/Header.jsx";
import Pie from "../../Components/Pie/Pie.jsx";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import NoData from "../../Components/NoData/NoData.jsx";
import CustomizedTables from "../../Components/Table/Table.jsx";
import { useEffect } from "react";
import { openSideBar } from "../../Redux/Slices/AppSlice/appSlice.js";
import { Main } from "../../Theme/ThemeProvider.js";



export default function Home() {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const openS = () => {
    dispatch(openSideBar());
  };
  const { sideBarCollapsed } = useSelector(({ app }) => app);
  useEffect(() => {
    // openS();
  }, []);
  return (
    <>
      <Main open={sideBarCollapsed}>
        <div className="container mx-2">
          <div className="row my-2 d-flex flex-nowrap">
            <Box sx={{ minWidth: "350px", maxWidth: "450px" }}>
              <Days />
              <Pie />
              <HomeMenu />
            </Box>
            <div className="col-md-8">
              <Header />
              <NoData />
              <CustomizedTables />
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
