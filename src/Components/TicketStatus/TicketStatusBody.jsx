import { Tab, Tabs } from "@mui/material";
import TabPanel from "../TabPanel/TabPanel.jsx";
import { useState } from "react";
import { resources } from "../../Data/DummyData.jsx";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function TicketStatusBody() {
  const [value, setValue] = useState(0);
  const backgroundColor = (index) =>
    value == index ? "rgba(27 103 146 / 20%)" : "";
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Tabs
        orientation="horizontal"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          minHeight: "100%",
          minWidth: "350px",
          marginRight: 4,
        }}
      >
        {resources?.map((resource, i) => (
          <Tab
            sx={{
              backgroundColor: backgroundColor(i),
              borderRadius: "4px",
            }}
            label={resource.name}
            {...a11yProps(i)}
            key={i}
          />
        ))}
      </Tabs>
      {resources.map((ticket, i) => (
        <TabPanel value={value} index={i} key={i}>
          {ticket.children}
        </TabPanel>
      ))}
    </div>
  );
}
