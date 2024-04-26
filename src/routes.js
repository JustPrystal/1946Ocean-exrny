import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import ErrorPage from "./pages/Error";
import Contact from "./pages/Contact";

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
])

export default router;