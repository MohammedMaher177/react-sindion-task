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
import styles from "./homeMenu.module.css";
import { Badge } from "@mui/base";
const items = [
  { name: "All Tickets", to: "all-tickets", count: 120 },
  { name: "Solved", to: "solved", count: 80 },
  { name: "Pending", to: "pending", count: 45 },
  { name: "In progress", to: "in-progress", count: 4 },
  { name: "Canceled", to: "canceled", count: 30 },
  { name: "Closed", to: "closed", count: 47 },
];
export default function HomeMenu() {
  return (
    <div>
      <Box sx={{ width: 250, marginLeft: 4 }} role="presentation">
        <List>
          {items.map((text) => (
            <ListItem key={text.name} disablePadding>
              <NavLink
                to={`/tickets/${text.to}`}
                className={({ isActive }) =>
                  `w-100 text-decoration-none mb-4 ${
                    isActive ? styles.active : ""
                  }`
                }
              >
                <ListItemButton>
                  <ListItemText
                    primary={`${text.name}`}
                    secondary={`(${text.count})`}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      gap: 1,
                    }}
                  />
                  <Badge color="secondary" variant="dot" invisible={true} overlap="circular" badgeContent=" "/>
                  <Box
                    sx={{
                      color: "action.active",
                      display: "flex",
                      flexDirection: "column",
                      "& > *": {
                        marginBottom: 2,
                      },
                      "& .MuiBadge-root": {
                        marginRight: 4,
                      },
                    }}
                  >
                    <div>
                      <Badge color="primary" variant="dot" invisible={false} overlap="circular" badgeContent=" "/>
                    </div>
                  </Box>
                  <ListItemIcon>
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                      <path
                        d="M1 11C1 11 6 7.55431 6 5.99856C6 4.44281 1 1 1 1"
                        stroke="#B9BCBC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ListItemIcon>
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
