import { useParams } from "react-router";
import TicketsList from "../../Components/TicketsList/TicketsList.jsx";
import { useDispatch } from "react-redux";
import { closeSideBar, openSideBar } from "../../Redux/Slices/AppSlice/appSlice.js";
import { useEffect } from "react";
import TicketStatus from "../../Components/TicketStatus/TicketStatus.jsx";

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
    return openS
  }, []);
  return (
    <>
      <div className="container-fluid">
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