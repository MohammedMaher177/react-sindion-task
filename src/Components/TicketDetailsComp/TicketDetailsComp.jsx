import PropTypes from "prop-types";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  closeSideBar,
  openSideBar,
} from "../../Redux/Slices/AppSlice/appSlice.js";
import TicketDetailsHeader from "./TicketDetailsHeader.jsx";
import TicketDetailsBody from "./TicketDetailsBody.jsx";
import { Divider } from "@mui/material";

export default function TicketDetailsComp({ user_name }) {
  const dispatch = useDispatch();

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
      <TicketDetailsHeader user_name={user_name} />
      <Divider sx={{ marginBottom: 2 }} />
      <TicketDetailsBody />
    </>
  );
}

TicketDetailsComp.propTypes = {
  status: PropTypes.number.isRequired,
  user_name: PropTypes.number.isRequired,
};
