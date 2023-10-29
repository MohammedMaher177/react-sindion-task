import { Outlet } from "react-router-dom";
import NavBar from "../../Components/Navbar/Navbar.jsx";
import SideBar from "../../Components/SideBar/SideBar.jsx";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";

export default function MainLayout() {
  const { navWidth } = useSelector(({ app }) => app);

  return (
    <>
      <NavBar />
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: "auto",
          width: navWidth,
          position: "static",
        }}
      >
        <SideBar />
        <Outlet></Outlet>
      </Box>
    </>
  );
}
