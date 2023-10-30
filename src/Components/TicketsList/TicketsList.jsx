import {
  Box,
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import TicketTabs from "../TicketTabs/TicketTabs.jsx";

// eslint-disable-next-line react/prop-types
export default function TicketsList({ status }) {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box component="div">
      <Button>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F7F6F6" />
        </svg>
      </Button>
      <ListItemButton>
        <ListItemText
          primary={`${status}`}
          secondary={`({text.count})`}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: 1,
            textTransform: "capitalize",
          }}
        />
      </ListItemButton>
      <List
        sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="all-tickets"
      >
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={status} sx={{ textTransform: "capitalize" }} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="Box" disablePadding>
            <TicketTabs />
          </List>
        </Collapse>
      </List>
    </Box>
  );
}
