import {
  createBrowserRouter,
} from "react-router-dom";

import SignIn from "./routes/SignIn";
import Dashboard from "./routes/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
