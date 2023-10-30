import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import { NavLink } from "react-router-dom";
import styles from "./sideBar.module.css";
import Logo from "./Logo.jsx";
export const items = [
  { name: "Home", to: ".", icon: <HomeIcon /> },
  { name: "Profile", to: "/profile", icon: <AccountBoxIcon /> },
  { name: "Settings", to: "/settings", icon: <SettingsIcon /> },
];

const ListItems = () => {
  return (
    <Box sx={{ width: "100%" }} role="presentation">
      <Box
        sx={{
          marginBottom: 2,
          fontSize: "22px",
        }}
      >
        <Logo />
      </Box>
      <List
        sx={{
          color: "white",
        }}
      >
        {items.map((text) => (
          <ListItem key={text.name} disablePadding>
            <NavLink
              to={text.to}
              className={({ isActive }) =>
                isActive ? styles.active : styles.item
              }
            >
              <ListItemButton>
                <ListItemIcon>{text.icon}</ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
};
export default ListItems;
