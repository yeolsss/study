import { createBrowserRouter } from "react-router-dom";
import Main from "./routes/Main";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
    ],
  },
]);

export default router;
