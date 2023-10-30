import EditIcon from "../Icons/EditIcon.jsx";
import DeleteIcon from "../Icons/DeleteIcon.jsx";
import { Box } from "@mui/system";
import LensIcon from "@mui/icons-material/Lens";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function TicketDetailsHeader({user_name}) {
  return (
    <div className="container d-flex justify-content-between w-100 mb-3">
        <span className="d-flex">
          <LensIcon
            sx={{
              color: "#68005E",
              width: "64px",
              height: "64px",
              marginRight: 1,
            }}
          />
          <Box component="span">
            <Typography>{user_name}</Typography>
            <Typography
              sx={{ whiteSpace: "nowrap", marginRight: 2 }}
              component="span"
            >
              27 Jon 2023
            </Typography>
            <Typography sx={{ whiteSpace: "nowrap" }} component="span">
              From: Department
            </Typography>
          </Box>
        </span>
        <span className="d-flex">
          <Box sx={{ gap: 2, display: "flex" }}>
            <EditIcon />
            <DeleteIcon />
          </Box>
        </span>
      </div>
  )
}

TicketDetailsHeader.propTypes = {
    user_name: PropTypes.number.isRequired,
  };