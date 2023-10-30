import TicketCard from "../Components/TicketDetailsComp/TicketCard.jsx";
import TicketDetailsComp from "../Components/TicketDetailsComp/TicketDetailsComp.jsx";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachmentIcon from "@mui/icons-material/Attachment";
import TicketStatusDetails from "../Components/TicketStatus/TicketStatusDetails.jsx";
import DetailsIcon from "../Components/Icons/DetailsIcon.jsx";
export const tickets = [
  {
    children: <TicketDetailsComp status={"status1"} user_name="Mohammed 1" />,
    label: <TicketCard user_name="Mohammed 1" />,
    index: 0,
    value: 0,
  },
  {
    children: <TicketDetailsComp status={"status2"} user_name="Mohammed 2" />,
    label: <TicketCard user_name="Mohammed 1" />,
    index: 1,
    value: 0,
  },
  {
    children: <TicketDetailsComp status={"status3"} user_name="Mohammed 3" />,
    label: <TicketCard user_name="Mohammed 1" />,
    index: 2,
    value: 0,
  },
  {
    children: <TicketDetailsComp status={"status4"} user_name="Mohammed 4" />,
    label: <TicketCard user_name="Mohammed 1" />,
    index: 3,
    value: 0,
  },
];
export const resources = [
  { name: <DetailsIcon />, children: <TicketStatusDetails /> },
  { name: <AccessTimeIcon />, children: "Time 1" },
  { name: <AttachmentIcon />, children: "Attachments 1" },
];
export const titles = [
  {
    id:1,
    company: "Company Name",
    from: "Graphic Designer",
    to: "front-End Developer",
    type: "Internal  ",
    date: "27 Jon 2023",
    status: "Solved",
    color: "#5FD971",
    bg: "#dae4dc",
  },
  {
    id:2,
    company: "Company Name",
    from: "front-End Developer",
    to: "Graphic Designer",
    type: "External   ",
    date: "27 Jon 2023",
    status: "Pendding",
    color: "#5FD971",
    bg: "#dae4dc",
  },
  {id:3,
    company: "Company Name",
    from: "Graphic Designer",
    to: "front-End Developer",
    type: "Internal  ",
    date: "27 Jon 2023",
    status: "Solved",
    color: "#5FD971",
    bg: "#dae4dc",
  },
  {
    id:4,
    company: "Company Name",
    from: "front-End Developer",
    to: "Graphic Designer",
    type: "External   ",
    date: "27 Jon 2023",
    status: "Pendding",
    color: "#5FD971",
    bg: "#dae4dc",
  },
  {
    id:5,
    company: "Company Name",
    from: "Graphic Designer",
    to: "front-End Developer",
    type: "Internal  ",
    date: "27 Jon 2023",
    status: "Solved",
    color: "#5FD971",
    bg: "#dae4dc",
  },
  {
    id:6,
    company: "Company Name",
    from: "front-End Developer",
    to: "Graphic Designer",
    type: "External   ",
    date: "27 Jon 2023",
    status: "Pendding",
    color: "#5FD971",
    bg: "#dae4dc",
  },
];