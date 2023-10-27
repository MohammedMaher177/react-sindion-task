import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import EditNoteIcon from '@mui/icons-material/EditNote';
import EditOffIcon from "@mui/icons-material/EditOff";
import styles from "./addTicket.module.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 3,
  px: 4,
  pb: 3,
  borderRadius: 5,
};



function ChildModal({ icon, title, titleP, text, paragraph }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <span className={styles.add_icon}>
          <span className={styles.add_icon_nested}>{icon}</span>
        </span>
        <div>
          <Button onClick={handleOpen}>{title}</Button>
          <p id="parent-modal-description">{titleP}</p>
        </div>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, maxWidth: 800, minWidth: 600 }}>
          <h2 id="child-modal-title">{text}</h2>
          <p id="child-modal-description">{paragraph}</p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        className={styles.add_ticket_btn}
        sx={{
          "&.MuiButton-root": {
            backgroundColor: "#1b6792",
            color: "#ffffff",
          },
        }}
      >
        + New Ticket
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, maxWidth: 800, minWidth: 600 }}>
          <Box sx={{ display: "flex" }}>
            <span className={styles.add_icon}>
              <span className={styles.add_icon_nested}>
                <AddToPhotosIcon />
              </span>
            </span>
            <div>
              <h2 id="parent-modal-title">Create New Ticket </h2>
              <p id="parent-modal-description">
                Chose Ticket type to create new ticket
              </p>
            </div>
          </Box>
          <ChildModal
            text="Text in a child modal"
            paragraph="Creating a new ticket to be sent between company departments"
            title="Create Company Ticket "
            titleP="Creating a new ticket to be sent between company departments"
            icon={<EditNoteIcon />}
          />
          <ChildModal
            text="Text in a child modal"
            paragraph="Creating a new ticket to be sent to a department in another company "
            title="Create Support Ticket "
            titleP="Creating a new ticket to be sent to a department in another company "
            icon={<EditOffIcon />}
          />
        </Box>
      </Modal>
    </div>
  );
}
