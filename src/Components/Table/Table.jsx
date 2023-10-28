import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
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
        <TableBody>
          {titles.map((row, i) => (
            <StyledTableRow key={i} sx={{marginBlock: 2}}>
              <StyledTableCell component="th" scope="row" align="left">
                {row.company}
              </StyledTableCell>
              <StyledTableCell align="left">{row.from}</StyledTableCell>
              <StyledTableCell align="left">{row.to}</StyledTableCell>
              <StyledTableCell align="left">{row.type}</StyledTableCell>
              <StyledTableCell align="left">{row.date}</StyledTableCell>
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
  );
}
