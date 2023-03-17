import { Col, Row } from "react-bootstrap"
import "./Header.css"
import logo from "../../../Assets/img/head.png"
import { Link } from "react-router-dom"
import { FaTwitter, FaDiscord } from "react-icons/fa"

import vision from "../../../Assets/img/vision.png"
import team from "../../../Assets/img/team.png"
import ntfs from "../../../Assets/img/ntfs.png"
import art from "../../../Assets/img/art.png"
import raid from "../../../Assets/img/raid.png"

const Header = () => {
    return (
        <div className="navbar">
            <Row className="w-100">
                <Col>
                    <div className="logo">
                        <img src={logo} alt="" className="logo_image" />
                        <p className="m-0">
                            Itty’s
                        </p>
                    </div>
                </Col>
                <Col md={8} className="d-none d-sm-block">
                    <div className="nav_options d-flex align-items-center justify-content-end gap-2">
                        <div className="d-flex align-items-center">
                            <img src={vision} alt="" className="images" />
                            <Link to="/" className="text-decoration-none"><p className="m-0 nav_option">
                                VISION
                            </p></Link>
                        </div>

                        <div className="d-flex align-items-center">
                            <img src={team} alt="" className="images" />
                            <Link to="/team" className="text-decoration-none"><p className="m-0 nav_option">
                                TEAM
                            </p> </Link>
                        </div>

                        <div className="d-flex align-items-center">
                            <img src={ntfs} alt="" className="images" />
                            <Link
                                to="/thenft"
                                className="text-decoration-none"
                            >
                                <p className="m-0 nav_option">
                                    THE NFTS
                                </p></Link>
                        </div>

                        <div className="d-flex align-items-center">
                            <img src={art} alt="" className="images" />
                            <Link to="/arttools" className="text-decoration-none"><p className="m-0 nav_option">
                                ART TOOLS
                            </p></Link>
                        </div>

                        <div className="d-flex align-items-center">
                            <img src={raid} alt="" className="images" />
                            <Link to="/" className="text-decoration-none"><p className="m-0 nav_option">
                                RAID TOOLS
                            </p></Link>
                        </div>

                        <div className="d-flex gap-2 align-items-center">
                            <FaTwitter className="social_icons" />
                            <FaDiscord className="social_icons" />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Header