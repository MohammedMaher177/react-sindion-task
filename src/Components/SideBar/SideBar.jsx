import { Drawer } from "@mui/material";
import ListItems from "./sideItems.jsx";
import styles from "./sideBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../../Redux/Slices/AppSlice/appSlice.js";
const drawerWidth = 250;
export default function SideBar() {
  const { sideBarCollapsed } = useSelector(({ app }) => app);
  const dispatch = useDispatch();
  const toggleDrawer = () => {
    dispatch(toggleSideBar());
  };
  return (
    <>
      <div>
        {/* <Button onClick={() => toggleDrawer(true)} className={styles.openBtn}>
          <MenuIcon />
        </Button> */}
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              borderRight: "none",
            },
            textAlign: "center",
          }}
          variant="persistent"
          anchor="left"
          open={sideBarCollapsed}
          onClose={() => toggleDrawer()}
        >
          <div className={styles.side_bar}>{<ListItems />}</div>
        </Drawer>
      </div>
    </>
  );
}

//className="" style={{ height: "100%" }}
