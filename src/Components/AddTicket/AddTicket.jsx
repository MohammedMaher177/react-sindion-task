import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import EditNoteIcon from "@mui/icons-material/EditNote";
import EditOffIcon from "@mui/icons-material/EditOff";
import styles from "./addTicket.module.css";
import { FormControl, RadioGroup } from "@mui/material";
import Checked from "./Checked.jsx";
import { useState } from "react";
import ChildModal from "./ChildModal.jsx";

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 3,
  px: 4,
  borderRadius: 5,
};

export default function NestedModal() {
  const [open, setOpen] = useState(false);
  const [checkedVal, setCheckedVal] = useState("company");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (value) => {
    setCheckedVal(value);
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
            ":hover": {
              backgroundColor: "#185b81",
              color: "#FFFFFF",
            },
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
          <Box sx={{ display: "flex", marginBottom: 3 }}>
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
          <FormControl sx={{ width: "100%" }}>
            <RadioGroup
              onChange={({ target }) => handleChange(target.defaultValue)}
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="company"
              name="radio-buttons-group"
            >
              <Checked
                title="Create Company Ticket"
                titleP="Creating a new ticket to be sent to a department in another company"
                icon={<EditNoteIcon />}
                value="company"
                checkedVal={checkedVal}
              />
              <Checked
                icon={<EditOffIcon />}
                title="Create Support Ticket"
                titleP="Creating a new ticket to be sent to a department in another company"
                value="support"
                checkedVal={checkedVal}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 2,
                  height: "45px",
                  gap: "20px",
                }}
              >
                <Button
                  onClick={handleClose}
                  className={styles.continue}
                  sx={{
                    color: "#616363",
                    boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                    borderRadius: "8px",
                    border: "1px solid #1B6792",
                    width: "50%",
                    fontSize: "16px",
                    ":hover": {
                      backgroundColor: "#1B6792",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  Cancel
                </Button>
                <ChildModal checkedVal={checkedVal} handleCloseParent={handleClose}/>
              </Box>
            </RadioGroup>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}
