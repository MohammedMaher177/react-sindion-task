import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import LensIcon from "@mui/icons-material/Lens";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const titles = [
  {
    id:1,
    company: "Company Name",
    from: "Graphic Designer",
    to: "front-End Developer",
    type: "Internal  ",
    date: "27 Jon 2023",
    status: "Solved",
    color: "#5FD971",
    bg: "#dae4dc",
  },
  {
    id:2,
    company: "Company Name",
    from: "front-End Developer",
    to: "Graphic Designer",
    type: "External   ",
    date: "27 Jon 2023",
    status: "Pendding",
    color: "#5FD971",
    bg: "#dae4dc",
  },
  {id:3,
    company: "Company Name",
    from: "Graphic Designer",
    to: "front-End Developer",
    type: "Internal  ",
    date: "27 Jon 2023",
    status: "Solved",
    color: "#5FD971",
    bg: "#dae4dc",
  },
  {
    id:4,
    company: "Company Name",
    from: "front-End Developer",
    to: "Graphic Designer",
    type: "External   ",
    date: "27 Jon 2023",
    status: "Pendding",
    color: "#5FD971",
    bg: "#dae4dc",
  },
  {
    id:5,
    company: "Company Name",
    from: "Graphic Designer",
    to: "front-End Developer",
    type: "Internal  ",
    date: "27 Jon 2023",
    status: "Solved",
    color: "#5FD971",
    bg: "#dae4dc",
  },
  {
    id:6,
    company: "Company Name",
    from: "front-End Developer",
    to: "Graphic Designer",
    type: "External   ",
    date: "27 Jon 2023",
    status: "Pendding",
    color: "#5FD971",
    bg: "#dae4dc",
  },
];

export default function CustomizedTables() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead sx={{ backgroundColor: "white" }}>
            <TableRow sx={{ backgroundColor: "white" }}>
              <StyledTableCell
                sx={{
                  backgroundColor: "white",
                  "&..css-1mo5k65-MuiTableCell-root.MuiTableCell-head": {
                    backgroundColor: "white",
                  },
                }}
              >
                Company Name
              </StyledTableCell>
              <StyledTableCell align="left">From</StyledTableCell>
              <StyledTableCell align="left">To</StyledTableCell>
              <StyledTableCell align="left">Type </StyledTableCell>
              <StyledTableCell align="left">Date</StyledTableCell>
              <StyledTableCell align="left">Statues </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{overflow:"hidden", whiteSpace:"nowrap"}}>
            {titles.map((row, i) => (
              <StyledTableRow key={i} sx={{ marginBlock: 2 }}>
                <StyledTableCell
                  component="th"
                  scope="row"
                  align="left"
                  sx={{ whiteSpace:"nowrap" }}
                >
                  <LensIcon sx={{ color: "#D9D9D9", width: "30px", height: "30px", marginRight:1 }} />
                  {row.company}
                </StyledTableCell>
                <StyledTableCell align="left" sx={{ whiteSpace:"nowrap" }} >{row.from}</StyledTableCell>
                <StyledTableCell align="left" sx={{ whiteSpace:"nowrap" }} >{row.to}</StyledTableCell>
                <StyledTableCell align="left" sx={{ whiteSpace:"nowrap" }} >{row.type}</StyledTableCell>
                <StyledTableCell align="left" sx={{ whiteSpace:"nowrap" }} >{row.date}</StyledTableCell>
                <StyledTableCell
                  align="left"
                  sx={{
                    backgroundColor: row.bg,
                    borderRadius: 3,
                    color: row.color,
                  }}
                >
                  {row.status}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
