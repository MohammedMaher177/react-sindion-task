import {
  Badge,
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import LensIcon from "@mui/icons-material/Lens";
import PropTypes from "prop-types";

export default function TicketCard({user_name}) {
  const shapeStyles = { bgcolor: "#e6ee9c", width: 80, height: 40 };
  const shapeCircleStyles = { borderRadius: "8px" };

  const circle = (
    <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
  );
  return (
    <>
      <ListItemButton
        sx={{
          pl: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 2 }}>
          <ListItemText
            primary={user_name}
            secondary={
              <Badge
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                color="default"
                overlap="circular"
                badgeContent="Pending"
                anchorOrigin={{
                  vertical: "center",
                  horizontal: "center",
                }}
              >
                {circle}
              </Badge>
            }
            sx={{ display: "flex", justifyContent: "space-between" }}
          />
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            // className={styles.sub_header}
          >
            27 Jon 2023
            <LensIcon
              sx={{
                color: "#D9D9D9",
                width: "5px",
                height: "5px",
                marginInline: 1,
              }}
            />
            <Typography sx={{ whiteSpace: "nowrap" }}>
              From: Department
            </Typography>
            <Typography sx={{ whiteSpace: "nowrap" }}>
              To: Department
            </Typography>
            <Typography sx={{ whiteSpace: "nowrap" }}>Branch</Typography>
          </ListSubheader>
        </Box>
        <ListItemIcon>
          <LensIcon
            sx={{
              color: "#D9D9D9",
              width: "50px",
              height: "50px",
              marginRight: 1,
            }}
          />
        </ListItemIcon>
      </ListItemButton>
    </>
  );
}

TicketCard.propTypes = {
  user_name: PropTypes.string.isRequired,
};