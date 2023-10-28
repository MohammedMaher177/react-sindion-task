import { Outlet } from "react-router-dom";
import Days from "../Days/Days.jsx";
import HomeMenu from "../HomeMenu/HomeMenu.jsx";
import { styled } from "@mui/material/styles";

import Header from "../Header/Header.jsx";
import Pie from "../Pie/Pie.jsx";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-150px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: "50px",
    }),
  })
);

export default function HomeLayout() {
  const { sideBarCollapsed } = useSelector(({ app }) => app);
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
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
