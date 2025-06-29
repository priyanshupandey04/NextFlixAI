import Browse from "./Browse";
import Login from "./login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);
const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;
