import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import ErrorPage from "./pages/Error";
import Contact from "./pages/Contact";
import Residences from "./pages/Residences";
import Availabilities from "./pages/Availabilities";

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
        path: "/residences",
        element: <Residences />,
    },
    {
        path: "/availabilities",
        element: <Availabilities />,
    },
])

export default router;