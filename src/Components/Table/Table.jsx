import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import UserIcon from "../Icons/UserIcon.jsx";
import { useDispatch, useSelector } from "react-redux";
import { StyledTableCell, StyledTableRow } from "../../Theme/ThemeProvider.js";
import { useEffect } from "react";
import { getTitles } from "../../Redux/Slices/TitlesSlice/TitlesSlice.js";
import Loading from "../Loading/Loading.jsx";
import NoData from "../NoData/NoData.jsx";

export default function CustomizedTables() {
  const dispatch = useDispatch();
  const { titles, loading } = useSelector(({ title }) => title);
  const getAllTitles = () => {
    dispatch(getTitles());
  };
  useEffect(() => {
    getAllTitles();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : !titles.length ? (
        <NoData />
      ) : (
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
            <TableBody sx={{ overflow: "hidden", whiteSpace: "nowrap" }}>
              {titles?.map((row, i) => (
                <StyledTableRow key={i} sx={{ marginBlock: 2 }}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    align="left"
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    <UserIcon name={row.company} />
                  </StyledTableCell>
                  <StyledTableCell align="left" sx={{ whiteSpace: "nowrap" }}>
                    {row.from}
                  </StyledTableCell>
                  <StyledTableCell align="left" sx={{ whiteSpace: "nowrap" }}>
                    {row.to}
                  </StyledTableCell>
                  <StyledTableCell align="left" sx={{ whiteSpace: "nowrap" }}>
                    {row.type}
                  </StyledTableCell>
                  <StyledTableCell align="left" sx={{ whiteSpace: "nowrap" }}>
                    {row.date}
                  </StyledTableCell>
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
      )}
    </>
  );
}
