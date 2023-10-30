import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TicketCard from "../TicketDetailsComp/TicketCard.jsx";
import TabPanel from "../TabPanel/TabPanel.jsx";
import TicketDetailsComp from "../TicketDetailsComp/TicketDetailsComp.jsx";
import { useState } from "react";
const tickets = [
  {
    children: <TicketDetailsComp status={"status1"} user_name="Mohammed 1"/>,
    label: <TicketCard user_name="Mohammed 1" />,
    index: 0,
    value: 0,
  },
  {
    children: <TicketDetailsComp status={"status2"} user_name="Mohammed 2"/>,
    label: <TicketCard user_name="Mohammed 1" />,
    index: 1,
    value: 0,
  },
  {
    children: <TicketDetailsComp status={"status3"} user_name="Mohammed 3"/>,
    label: <TicketCard user_name="Mohammed 1" />,
    index: 2,
    value: 0,
  },
  {
    children: <TicketDetailsComp status={"status4"} user_name="Mohammed 4"/>,
    label: <TicketCard user_name="Mohammed 1" />,
    index: 3,
    value: 0,
  },
];

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function TicketTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const backgroundColor = (index) =>
    value == index ? "rgba(27 103 146 / 20%)" : "";
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: "100%",
          width: "100%",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: "divider",
            minHeight: "100%",
            minWidth: "350px",
            marginRight:4
          }}
        >
          {tickets.map((ticket) => (
            <Tab
              sx={{
                backgroundColor: backgroundColor(ticket.index),
                borderRadius: "4px",
                borderLeft: `4px solid rgba(255, 0, 0, 0.${ticket.index + 1})}`,
              }}
              label={ticket.label}
              {...a11yProps(ticket.index)}
              key={ticket.index}
            />
          ))}
        </Tabs>
        <Box sx={{ width: "100%" }}>
          {tickets.map((ticket) => (
            <TabPanel value={value} index={ticket.index} key={ticket.index}>
              {ticket.children}
            </TabPanel>
          ))}
        </Box>
      </Box>
    </>
  );
}
