import { Box, ListItemText, Typography } from "@mui/material";
import PDFIcon from "../Icons/PDFIcon.jsx";
import { Link } from "react-router-dom";
import pdfFile from "../../assets/Technical_Task.pdf";
import logo from "../../assets/client-sm-4.jpg";
import styles from "./ticketDetails.module.css";
export default function TicketDetailsBody() {
  return (
    <>
      <Typography
        sx={{
          fontSize: "20px",
          lineHeight: "32px",
          letterSpacing: "0.15px",
          fontWeight: 800,
          fontFamily: "Roboto",
          color: "#001011",
        }}
      >
        Issue Subject
      </Typography>
      <Typography component="p" sx={{ color: " #616363", marginBottom: 2 }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
        <br />
        <br /> Lorem Ipsum has been the industry standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled
        it to make a type specimen book not only fiv...
        <br />
        <br /> It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.
      </Typography>

      <ListItemText
        primary="Attachments"
        secondary={`(2)`}
        sx={{
          fontSize: "20px",
          lineHeight: "32px",
          letterSpacing: "0.15px",
          fontWeight: "600",
          fontFamily: "Roboto",
          color: "#001011",
          display: "flex",
          gap: 1,
        }}
      />
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
      >
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <PDFIcon />
          <div className="col-md-4 col-sm-12 col-xs-12 text-right wow fadeInRight animated animated">
            <Link target="_blank" to={pdfFile} className={styles.link}>
              Technical_Task.pdf
            </Link>
            <Typography className={styles.link}>23.09 MB</Typography>
          </div>
        </Box>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <PDFIcon />
          <div className="col-md-4 col-sm-12 col-xs-12 text-right wow fadeInRight animated animated">
            <Link target="_blank" to={pdfFile} className={styles.link}>
              Technical_Task.pdf
            </Link>
            <Typography className={styles.link}>23.09 MB</Typography>
          </div>
        </Box>
      </Box>

      <ListItemText
        primary="Images:"
        secondary={`(2)`}
        sx={{
          fontSize: "20px",
          lineHeight: "32px",
          letterSpacing: "0.15px",
          fontWeight: "600",
          fontFamily: "Roboto",
          color: "#001011",
          display: "flex",
          gap: 1,
        }}
      />
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <img src={logo} alt="" />
        <div className="col-md-4 col-sm-12 col-xs-12 text-right wow fadeInRight animated animated">
          <Typography className={styles.link}>FileName.Jpg </Typography>
          <Typography className={styles.link}>23.09 MB</Typography>
        </div>
      </Box>
    </>
  );
}
