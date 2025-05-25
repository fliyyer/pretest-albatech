import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProfilePage from "./pages/ProfilePage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  }

])

function App() {

  return <RouterProvider router={routes} />
}

export default App
