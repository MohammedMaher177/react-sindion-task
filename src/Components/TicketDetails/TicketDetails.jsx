import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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
import TicketCard from "./TicketCard.jsx";
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

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box component="div">
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
              <List component="Box" disablePadding>
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
              </List>
            </Collapse>
          </List>
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box
              component="div"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
              }}
            >
              {/* just */}
              <LensIcon
                sx={{
                  color: "#68005E",
                  width: "64px",
                  height: "64px",
                  marginRight: 1,
                }}
              />
              <Box component="span">
                <Typography>User Name</Typography>
                <Typography sx={{ whiteSpace: "nowrap" }}>
                  From: Department
                </Typography>
                <Typography sx={{ whiteSpace: "nowrap" }}>
                  To: Department
                </Typography>
              </Box>
            </Box>

            <Box sx={{}}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                  d="M17.7803 26.0104H26.2829"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.4103 6.47856C19.6183 5.13456 17.077 5.49723 15.733 7.28789C15.733 7.28789 9.04897 16.1919 6.73031 19.2812C4.41164 22.3719 6.60497 26.2012 6.60497 26.2012C6.60497 26.2012 10.9303 27.1959 13.2156 24.1492C15.5023 21.1039 22.2183 12.1559 22.2183 12.1559C23.5623 10.3652 23.201 7.82256 21.4103 6.47856Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.0054 9.61523L20.4907 14.4832"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <svg
                width="22"
                height="26"
                viewBox="0 0 22 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1511 9.42004C13.8148 9.42004 13.5422 9.69265 13.5422 10.0289V21.5371C13.5422 21.8732 13.8148 22.146 14.1511 22.146C14.4874 22.146 14.76 21.8732 14.76 21.5371V10.0289C14.76 9.69265 14.4874 9.42004 14.1511 9.42004ZM6.96608 9.42004C6.62978 9.42004 6.35718 9.69265 6.35718 10.0289V21.5371C6.35718 21.8732 6.62978 22.146 6.96608 22.146C7.30243 22.146 7.57497 21.8732 7.57497 21.5371V10.0289C7.57497 9.69265 7.30243 9.42004 6.96608 9.42004Z"
                  fill="#FF4444"
                />
                <path
                  d="M1.72936 7.74045V22.7424C1.72936 23.6292 2.05451 24.4618 2.62249 25.0593C2.90216 25.3557 3.23933 25.592 3.61338 25.7537C3.98744 25.9155 4.39055 25.9993 4.79808 26H16.3187C16.7262 25.9993 17.1293 25.9155 17.5034 25.7538C17.8775 25.592 18.2146 25.3557 18.4943 25.0593C19.0623 24.4618 19.3874 23.6292 19.3874 22.7424V7.74045C20.5165 7.44075 21.2481 6.34997 21.0971 5.19142C20.9458 4.03305 19.959 3.16659 18.7906 3.16635H15.6731V2.40523C15.6749 2.08838 15.6137 1.77434 15.493 1.48134C15.3724 1.18834 15.1948 0.922215 14.9705 0.698424C14.7461 0.474655 14.4796 0.297691 14.1862 0.177808C13.8929 0.0579255 13.5787 -0.00248702 13.2618 7.89287e-05H7.85499C7.53811 -0.00249511 7.22388 0.0579135 6.93054 0.177797C6.63721 0.29768 6.37061 0.474648 6.14624 0.698424C5.92193 0.922215 5.74431 1.18834 5.6237 1.48134C5.50309 1.77434 5.44188 2.08838 5.44363 2.40523V3.16635H2.3262C1.15784 3.16659 0.171003 4.03305 0.0196921 5.19142C-0.131315 6.34997 0.600276 7.44075 1.72936 7.74045ZM16.3187 24.7822H4.79814C3.75705 24.7822 2.94715 23.8879 2.94715 22.7424V7.79397H18.1696V22.7424C18.1696 23.8879 17.3598 24.7822 16.3187 24.7822ZM6.66143 2.40523C6.65944 2.24824 6.68901 2.09246 6.74837 1.94712C6.80774 1.80178 6.89571 1.66985 7.00704 1.55916C7.11833 1.44841 7.25074 1.36113 7.3964 1.3025C7.54205 1.24388 7.698 1.2151 7.85499 1.21787H13.2618C13.4188 1.2151 13.5748 1.24388 13.7204 1.3025C13.8661 1.36113 13.9985 1.44841 14.1098 1.55916C14.2211 1.66985 14.3091 1.80178 14.3684 1.94712C14.4278 2.09246 14.4573 2.24824 14.4553 2.40523V3.16635H6.66143V2.40523ZM2.3262 4.38414H18.7907C19.396 4.38414 19.8868 4.87486 19.8868 5.48016C19.8868 6.08547 19.396 6.57618 18.7907 6.57618H2.32614C1.72083 6.57618 1.23012 6.08547 1.23012 5.48016C1.23012 4.87486 1.72089 4.38414 2.3262 4.38414Z"
                  fill="#FF4444"
                />
                <path
                  d="M10.5586 9.42004C10.2223 9.42004 9.94971 9.69265 9.94971 10.0289V21.5371C9.94971 21.8732 10.2223 22.146 10.5586 22.146C10.895 22.146 11.1675 21.8732 11.1675 21.5371V10.0289C11.1675 9.69265 10.895 9.42004 10.5586 9.42004Z"
                  fill="#FF4444"
                />
              </svg>
            </Box>
          </Box>
          <Typography>Issue Subject</Typography>
        </Box>
      </Box>
    </>
  );
}
