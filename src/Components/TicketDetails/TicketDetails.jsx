import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Badge,
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import LensIcon from "@mui/icons-material/Lens";
import styles from "./ticketDetails.module.css";
import { useDispatch } from "react-redux";
import {
  closeSideBar,
  openSideBar,
} from "../../Redux/Slices/AppSlice/appSlice.js";
export default function TicketDetails() {
  const { status } = useParams();
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();

  const handleClick = () => {
    setOpen(!open);
  };
  const toggleDrawer = () => {
    dispatch(closeSideBar());
  };
  // eslint-disable-next-line no-unused-vars
  const openS = () => {
    dispatch(openSideBar());
  };

  useEffect(() => {
    toggleDrawer();
    // return openS
  }, []);
  const shapeStyles = { bgcolor: "#e6ee9c", width: 80, height: 40 };
  const shapeCircleStyles = { borderRadius: "8px" };

  const circle = (
    <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
  );
  return (
    <>
      <Button>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="4" fill="#F7F6F6" />
        </svg>
      </Button>
      <ListItemButton>
        <ListItemText
          primary={`${status}`}
          secondary={`({text.count})`}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            gap: 1,
            textTransform: "capitalize",
          }}
        />
      </ListItemButton>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="all-tickets"
      >
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="All Tickets" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{
                pl: 4,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", flexGrow: 2 }}
              >
                <ListItemText
                
                  primary="User Name"
                  secondary={
                    <Badge
                    sx={{
                      display:"flex", justifyContent:"center",alignItems:"center"
                    }}
                      color="default"
                      overlap="circular"
                      badgeContent="Pending"
                      anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                      }}
                    >
                      {circle}
                    </Badge>
                  }
                  sx={{ display: "flex", justifyContent: "space-between" }}
                />
                <Badge title="hhhh" />
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                  className={styles.sub_header}
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
          </List>
        </Collapse>
      </List>
    </>
  );
}
