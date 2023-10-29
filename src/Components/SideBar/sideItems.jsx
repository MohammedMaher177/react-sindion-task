import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./sideBar.module.css";
import Logo from "./Logo.jsx";
export const items = [
  { name: "Home", to: "." },
  { name: "Profile", to: "/profile" },
  { name: "Settings", to: "/settings" },
];

const ListItems = () => {
  const { pathname } = useLocation();
  const location = useLocation();
  console.log(location);
  return (
    <Box sx={{ width: "100%" }} role="presentation">
      <Box sx={{
        marginBottom:2,
        fontSize:"22px"
      }}>
      <Logo />
      </Box>
      <List>
        {items.map((text) => (
          <ListItem
            key={text.name}
            disablePadding
            // className={`${
            //   pathname.includes(text.to) ? styles.active : styles.item
            // }`}
          >
            {/* <NavLink to={text.to} className="w-100 text-decoration-none"> */}
            <NavLink to={text.to} className={({isActive}) => isActive? styles.active: styles.item}>
              <ListItemButton>
                <ListItemIcon>
                  {/* {index % 2 === 0 ? "InboxIcon" : "MailIcon"} */}
                </ListItemIcon>
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
