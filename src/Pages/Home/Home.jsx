import { Outlet } from "react-router-dom";
import Days from "../../Components/Days/Days.jsx";
import HomeMenu from "../../Components/HomeMenu/HomeMenu.jsx";

import Header from "../../Components/Header/Header.jsx";
import Pie from "../../Components/Pie/Pie.jsx";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
// import NoData from "../../Components/NoData/NoData.jsx";
import CustomizedTables from "../../Components/Table/Table.jsx";
import { useEffect } from "react";
import { Main } from "../../Theme/ThemeProvider.js";
import { getTickets } from "../../Redux/Slices/TicketsSlice/TicketsSlice.js";

export default function Home() {
  const dispatch = useDispatch();

  const { sideBarCollapsed } = useSelector(({ app }) => app);
  const getAllTickets = () => {
    dispatch(getTickets());
  };
  useEffect(() => {
    getAllTickets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Main open={sideBarCollapsed}>
        <div className="container mx-2">
          <div className="row my-2 d-flex">
            <Box
              sx={{ minWidth: "350px", maxWidth: "450px" }}
              className="col-lg-4"
            >
              <Days />
              <Pie />
              <HomeMenu />
            </Box>
            <div className="col-md-12 col-lg-8">
              <Header />
              {/* <NoData /> */}
              <CustomizedTables />
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
