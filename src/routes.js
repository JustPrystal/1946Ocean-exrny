import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import ErrorPage from "./pages/Error";
import Contact from "./pages/Contact";
import Residences from "./pages/Residences";
import Availabilities from "./pages/Availabilities";
import Neighborhood from "./pages/Neighborhood";
import Amenities from "./pages/Amenities";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/amenities",
        element: <Amenities />,
    },
    {
        path: "/residences",
        element: <Residences />,
    },
    {
        path: "/availabilities",
        element: <Availabilities />,
    },
    {
        path: "/neighborhood",
        element: <Neighborhood />,
    },
])

export default router;