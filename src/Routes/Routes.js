import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Layout from "../Pages/Layouts/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])