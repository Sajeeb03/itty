import { Col, Row } from 'react-bootstrap'
import './TheNft.css'
import img from "../../Assets/img/bear.jpg"

const TheNft = () => {
    return (
        <div className='nft_section pb-4 pb-md-d-4'>
            <Row className='gap-4'>
                <Col>
                    <div className="left_card">
                        <img src={img} alt="" />
                        <div className='d-flex flex-column justify-content-center align-items-center mt-3 text-center gap-1'>
                            <p className="nft_card_title text-uppercase m-0">Itty Bittys x 100</p>
                            <p className="nft_card_des text-uppercase m-0">
                                100 1:1 Ittys and Itty Mutations granting full access to the community and all perks
                            </p>
                            <button className='collection_btn'>Explore collection</button>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="right_card">
                        <div className="nft_card d-flex gap-4 position-relative">
                            <img src={img} alt="" />
                            <div className="">
                                <p className="nft_card_title text-uppercase m-0">Itty PFPs x 50</p>

                                <p className="nft_card_des text-uppercase m-0">
                                    Generate through twitter engagement or custom tokens.
                                </p>

                                <br />

                                <p className="nft_card_des text-uppercase m-0">
                                    grant basic Community access and perks
                                </p>

                                <button className='explore_btn'>
                                    Explore
                                </button>
                            </div>
                        </div>
                        <div className="nft_card  d-flex gap-4 position-relative">
                            <img src={img} alt="" />
                            <div className="">
                                <p className="nft_card_title text-uppercase m-0">
                                    Custom Ghosties x 40
                                </p>

                                <p className="nft_card_des text-uppercase m-0">
                                    Exchangeable for a custom Ghostie 1:1 of your choosing.
                                </p>

                                <br />

                                <p className="nft_card_des text-uppercase m-0">
                                    grant basic Community access and perks
                                </p>

                                <button className='explore_btn'>
                                    Explore
                                </button>
                            </div>
                        </div>
                        <div className="nft_third_card">
                            Coming Soon...
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default TheNft