import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./Pages/MainLayout/MainLayout.jsx";
import Home from "./Pages/Home/Home.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import Settings from "./Pages/Settings/Settings.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";
import TicketDetails from "./Pages/TicketDetails/TicketDetails.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/tickets/:status", element: <TicketDetails /> },
      { path: "profile", element: <Profile /> },
      { path: "settings", element: <Settings /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
