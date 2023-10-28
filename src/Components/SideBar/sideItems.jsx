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
export const items = [
  { name: "Home", to: "/home" },
  { name: "Profile", to: "/profile" },
  { name: "Settings", to: "/settings" },
];

const ListItems = () => {
  const { pathname } = useLocation();
  const location = useLocation();
  console.log(location);
  return (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {items.map((text) => (
          <ListItem
            key={text.name}
            disablePadding
            className={`${
              pathname.includes(text.to) ? styles.active : styles.item
            }`}
          >
            <NavLink to={text.to} className="w-100 text-decoration-none">
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
