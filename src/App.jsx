import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import "./App.css";
import MainLayout from "./Pages/MainLayout/MainLayout.jsx";
import Home from "./Pages/Home/Home.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import Settings from "./Pages/Settings/Settings.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";
import AllTickets from "./Components/AllTickets/AllTickets.jsx";
import Solved from "./Components/Solved/Solved.jsx";
import Pending from "./Components/Pending/Pending.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/",
        element: <Home />,
        children: [
          { index: true, element: <AllTickets /> },
          { path: "/all-tickets", element: <AllTickets /> },
          { path: "/solved", element: <Solved /> },
          { path: "/pending", element: <Pending /> },
          { path: "/*", element: <NotFound /> },
        ],
      },
      { path: "/solved", element: <Solved /> },
      { path: "/profile", element: <Profile /> },
      { path: "/settings", element: <Settings /> },
      { path: "/*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
