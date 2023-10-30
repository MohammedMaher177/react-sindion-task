import { Box, Typography } from "@mui/material";
import UserIcon from "../Icons/UserIcon.jsx";


export default function TicketStatusDetails() {
  const rows = [
    {
      id: 1,
      first: "Send by",
      second: <UserIcon name="Yara Ayad" />,
    },
    { id: 2, first: "Department", second: "Accounting" },
    { id: 3, first: "Assigned to ", second: "Marketing" },
    { id: 4, first: "Status", second: "Pending" },
    { id: 5, first: "Created time", second: "05 Jul 2023, 08:30 AM" },
  ];
  return (
    <>
      <Box>
        {rows.map((row) => (
          <Box
            key={row.id}
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              marginBottom: 4,
              fontSize: "16px",
              lineHeight: "22px",
            }}
          >
            <Typography
              component="span"
              sx={{
                width: "30%",
                color: "#616363",
                fontWeight: 500,
              }}
            >
              {row.first}
            </Typography>
            <Typography
              component="span"
              sx={{
                fontWeight: 400,
                color: "#000000",
                fontSize: "18px",
              }}
            >
              {row.second}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}
