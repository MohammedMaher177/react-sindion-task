import { useDispatch, useSelector } from "react-redux";
import NoData from "../NoData/NoData.jsx";
import { useEffect } from "react";

export default function AllTickets() {
  const { tickets } = useSelector(({ ticket }) => ticket);
  const dispatch = useDispatch();
  const getTickets = () => {
    dispatch(getTickets());
  };
  useEffect(() => {
    getTickets();
  }, [tickets]);
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <NoData />
    </div>
  );
}
