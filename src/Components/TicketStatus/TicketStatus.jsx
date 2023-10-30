import { Box, Typography } from "@mui/material";
import DownIcon from "../Icons/DownIcon.jsx";
import TicketStatusBody from "./TicketStatusBody.jsx";
export default function TicketStatus() {
  return (
    <>
      <Box>
        <Typography
          component="h4"
          sx={{
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.08)",
            backgroundColor: "#1B6792",
            borderRadius: "8px",
            transform: "rotate3d(180deg)",
            padding: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#FFFFFF",
            marginBottom: 3,
          }}
        >
          Pending
          <DownIcon />
        </Typography>
        <TicketStatusBody />
      </Box>
    </>
  );
}
