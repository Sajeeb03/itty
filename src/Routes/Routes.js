import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Layout from "../Pages/Layouts/Layout";
import TheNft from "../Pages/NFT/TheNft";
import Team from "../Pages/Team/Team";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/team",
                element: <Team />
            },
            {
                path: "/thenft",
                element: <TheNft />
            }
        ]
    }
])