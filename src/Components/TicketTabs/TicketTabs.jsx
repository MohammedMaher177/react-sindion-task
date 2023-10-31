import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { tickets } from "../../Data/DummyData.jsx";
import PropTypes from "prop-types";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function TicketTabs({value, setValue}) {
  // const [value, setValue] = useState(0);

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
          maxHeight: "80%",
          width: "100%",
          overflow: "auto",
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
            height: "100%",
            minWidth: "200px",
            maxWidth:"100%",
            // marginRight: 4,
          }}
        >
          {tickets?.map((ticket) => (
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
        {/* <Box sx={{ width: "100%" }}>
          {tickets.map((ticket) => (
            <TabPanel value={value} index={ticket.index} key={ticket.index}>
              {ticket.children}
            </TabPanel>
          ))}
        </Box> */}
      </Box>
    </>
  );
}


TicketTabs.propTypes = {
  value: PropTypes.number,
  setValue: PropTypes.func,
};
