import { Box } from "@mui/system";
import { Pagination } from "@mui/material";
import TypographyComp from "./TypographyComp.jsx";
import CustomizedTables from "../../Components/Table/Table.jsx";
export default function Solved() {
  const titles = [
    {
      company: "Company Name",
      from: "Graphic Designer",
      to: "front-End Developer",
      type: "Internal  ",
      date: "27 Jon 2023",
      status: "Solved",
      color: "#5FD971",
      bg: "#dae4dc",
    },
  ];
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        
        {titles?.map((title, i) => (
          <TypographyComp title={title} key={i} />
        ))}
      </Box>
      {/* <CustomizedTables /> */}
      <Pagination count={10} variant="outlined" color="secondary" />
    </>
  );
}
