import { NavLink, Outlet } from "react-router-dom"
import Header from "../Shared/Header/Header"
import "./Layout.css"

import btn from "../../Assets/img/Group 147.svg"
import vision from "../../Assets/img/vision.png"
import team from "../../Assets/img/team.png"
import ntfs from "../../Assets/img/ntfs.png"
import art from "../../Assets/img/art.png"
import raid from "../../Assets/img/raid.png"
import { FaDiscord, FaTwitter } from "react-icons/fa"



const Layout = () => {
    return (
        <>
            <Header />
            <Outlet className="outlet" />
            {/* 
            <div className="mobile_nav">
                <div className="nav_icon btn_icon">
                    <img src={btn} alt="" className="" />
                </div>
                <div className="nav_icons">
                    <NavLink to="/" className={({ isActive }) => isActive ? "activated mobile_nav_icons" : "mobile_nav_icons"}>
                        <img src={vision} alt="" className="nav_img" />
                        <p className="nav_option m-0">
                            VISION
                        </p>
                    </NavLink>
                    <NavLink to="/team" className={({ isActive }) => isActive ? "activated mobile_nav_icons" : "mobile_nav_icons"}>
                        <img src={team} alt="" className="nav_img" />
                        <p className="nav_option m-0">
                            TEAM
                        </p>
                    </NavLink>
                    <NavLink to="/thenft" className={({ isActive }) => isActive ? "activated mobile_nav_icons" : "mobile_nav_icons"}>
                        <img src={ntfs} alt="" className="nav_img" />
                        <p className="nav_option m-0">
                            THE NFTS
                        </p>
                    </NavLink>
                    <NavLink to="/arttools" className={({ isActive }) => isActive ? "activated mobile_nav_icons" : "mobile_nav_icons"}>
                        <img src={art} alt="" className="nav_img" />
                        <p className="nav_option m-0">
                            ART TOOLS
                        </p>
                    </NavLink>
                    <NavLink to="/raidtools" className={({ isActive }) => isActive ? "activated mobile_nav_icons" : "mobile_nav_icons"}>
                        <img src={raid} alt="" className="nav_img" />
                        <p className="nav_option m-0">
                            RAID TOOLS
                        </p>
                    </NavLink>

                    <div className="d-flex align-items-center ms-4 gap-2">
                        <FaDiscord className="social_icons_sm" />
                        <p className="nav_option m-0 text-uppercase">
                            discord
                        </p>
                    </div>

                    <div className="d-flex align-items-center ms-4 gap-2">
                        <FaTwitter className="social_icons_sm" />
                        <p className="nav_option m-0 text-uppercase">
                            Twitter
                        </p>
                    </div>

                </div>
            </div> */}
        </>
    )
}

export default Layout