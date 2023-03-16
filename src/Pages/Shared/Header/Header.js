import { Col, Row } from "react-bootstrap"
import "./Header.css"
import logo from "../../../Assets/img/bear.jpg"
import { Link } from "react-router-dom"
import { FaTwitter, FaDiscord } from "react-icons/fa"


const Header = () => {
    return (
        <div className="navbar">
            <Row className="w-100">
                <Col>
                    <div className="logo">
                        <img src={logo} alt="" className="images" />
                        <p className="m-0">
                            Itty’s
                        </p>
                    </div>
                </Col>
                <Col className="d-none d-sm-block">
                    <div className="nav_options d-flex align-items-center justify-content-end gap-2">
                        <div className="d-flex align-items-center gap-2">
                            <img src={logo} alt="" className="images" />
                            <Link to="/" className="text-decoration-none"><p className="m-0 nav_option">
                                VISION
                            </p></Link>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                            <img src={logo} alt="" className="images" />
                            <Link to="/team" className="text-decoration-none"><p className="m-0 nav_option">
                                TEAM
                            </p> </Link>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                            <img src={logo} alt="" className="images" />
                            <Link
                                to="/thenft"
                                className="text-decoration-none"
                            >
                                <p className="m-0 nav_option">
                                    THE NFTS
                                </p></Link>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                            <img src={logo} alt="" className="images" />
                            <Link to="/arttools" className="text-decoration-none"><p className="m-0 nav_option">
                                ART TOOLS
                            </p></Link>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                            <img src={logo} alt="" className="images" />
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