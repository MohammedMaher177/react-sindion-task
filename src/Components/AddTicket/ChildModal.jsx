import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";
import { style } from "./AddTicket.jsx";
import styles from "./addTicket.module.css";
import AddTicketModal from "../Modal/AddTicketModal.jsx";

// eslint-disable-next-line react/prop-types
export default function ChildModal({checkedVal, handleCloseParent}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    handleCloseParent()
    setOpen(false);
  };
  return (
    <>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Button
         disabled={checkedVal !== "company"}
          onClick={handleOpen}
          className={styles.continue}
          sx={{
            backgroundColor: "#1B6792",
            color: "#FFFFFF",
            boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #1B6792",
            ":hover": {
              backgroundColor: "#185b81",
              color: "black",
            },
          }}
        >
          Continue
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, maxWidth: 800, minWidth: 600, minHeight:"400px", maxHeight:"auto" }}>
          <AddTicketModal handleClose={handleClose}/>
        </Box>
      </Modal>
    </>
  );
}
