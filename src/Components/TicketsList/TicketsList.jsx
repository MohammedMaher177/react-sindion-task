import {
  Box,
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
import { tickets } from "../../Data/DummyData.jsx";
import TabPanel from "../TabPanel/TabPanel.jsx";

// eslint-disable-next-line react/prop-types
export default function TicketsList({ status }) {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <List
        sx={{
          // width: "100%",
          maxWidth: "100%",
          bgcolor: "background.paper",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
        component="nav"
        aria-labelledby="all-tickets"
      >
        <ListItemButton
          onClick={handleClick}
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText
            primary={status}
            sx={{
              textTransform: "capitalize",
              width: "100%",
            }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="Box" disablePadding>
            <TicketTabs value={value} setValue={setValue} />
          </List>
        </Collapse>
      </List>
      <Box sx={{ width: "60%", marginLeft: open ? "" : "" }}>
        {tickets.map((ticket) => (
          <TabPanel value={value} index={ticket.index} key={ticket.index}>
            {ticket.children}
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
}
