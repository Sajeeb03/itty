import { Outlet } from "react-router-dom"
import Header from "../Shared/Header/Header"
import "./Layout.css"

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Layout