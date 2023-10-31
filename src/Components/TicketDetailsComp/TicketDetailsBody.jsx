import { ListItemText, Typography } from "@mui/material";
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

      <div className="col-md-4 col-sm-12 col-xs-12 text-right wow fadeInRight animated animated">
        <a
          target="_blank"
          href="/src/assets/Technical_Task.pdf"
          className="download-btn theme-btn"
        >
          DOWNLOAD .PDF programme
        </a>
      </div>
    </>
  );
}
