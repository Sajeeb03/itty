import { createBrowserRouter } from "react-router-dom";
import ArtTools from "../Pages/ArtTools/ArtTools";
import Home from "../Pages/Home/Home/Home";
import Layout from "../Pages/Layouts/Layout";
import NFT from "../Pages/NFT/NFT";
import RaidTools from "../Pages/RaidTools/RaidTools";
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
                element: <NFT/>
            },
            {
                path: "/arttools",
                element: <ArtTools />
            },
            {
                path: "/raidtools",
                element: <RaidTools />
            }
        ]
    }
])