import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
const items = [
  { name: "All Tickets", to: "/all-tickets" },
  { name: "Solved", to: "/solved" },
  { name: "Pending", to: "/pending" },
  { name: "In progress", to: "/in-progress" },
  { name: "Canceled", to: "/canceled" },
  { name: "Closed", to: "/closed" },
];
export default function HomeMenu() {
  return (
    <div>
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          {items.map((text) => (
            <ListItem key={text.name} disablePadding>
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
    </div>
  );
}
