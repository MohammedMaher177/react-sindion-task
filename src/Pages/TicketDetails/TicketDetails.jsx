import { useParams } from "react-router";
import TicketsList from "../../Components/TicketsList/TicketsList.jsx";
import { useDispatch } from "react-redux";
import {
  closeSideBar,
  openSideBar,
} from "../../Redux/Slices/AppSlice/appSlice.js";
import { useEffect } from "react";
import TicketStatus from "../../Components/TicketStatus/TicketStatus.jsx";
import { Box, Button, ListItemButton, ListItemText } from "@mui/material";

export default function TicketDetails() {
  const { status } = useParams();
  const dispatch = useDispatch();

  const toggleDrawer = () => {
    dispatch(closeSideBar());
  };
  const openS = () => {
    dispatch(openSideBar());
  };

  useEffect(() => {
    toggleDrawer();
    return openS;
  }, []);
  return (
    <>
      <div className="container-fluid pt-4">
        <Box sx={{ display: "flex" }}>
          <Button sx={{
            backgroundColor:"#F7F6F6"
          }}>
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
            >
              <path
                d="M6 1C6 1 1 4.44569 1 6.00144C1 7.55719 6 11 6 11"
                stroke="#B9BCBC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <ListItemButton>
            <ListItemText
              primary={`${status}`}
              secondary={`(45)`}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                gap: 1,
                textTransform: "capitalize",
              }}
            />
          </ListItemButton>
        </Box>
        <div className="row">
          <div className="col-md-8">
            <TicketsList status={status} />
          </div>
          <div className="col-md-4">
            <TicketStatus />
          </div>
        </div>
      </div>
    </>
  );
}
