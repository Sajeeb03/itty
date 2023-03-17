import "./Home.css"
import { TbPointFilled } from "react-icons/tb"
import { BsFillCircleFill, BsFillTriangleFill } from "react-icons/bs"

//images
import img2 from "../../../Assets/gif/IMG_0029.gif";
import img3 from "../../../Assets/gif/IMG_0034.gif"
import img4 from "../../../Assets/gif/IMG_0028.gif"
import img5 from "../../../Assets/gif/IMG_0035.gif"
import img6 from "../../../Assets/gif/IMG_0030.gif"
import img7 from "../../../Assets/gif/IMG_0027.gif"

const Home = () => {
    return (
        <div className="home_section mt-1">
            <div className="card_section">
                <div className="card p-3 p-lg-5">
                    <p className="card_title m-0">
                        What is Ittys?
                    </p>
                    <p className="card_des m-0">
                        A small collection of 1:1 animated nfts used to foster a tight knit community of artistis, collectors and builders
                    </p>
                </div>

                <div className="card">
                    <img src={img2} alt="" />
                </div>

                <div className="card">
                    <img src={img3} alt="" />
                </div>
                <div className="card">
                    <img src={img4} alt="" />

                </div>
                <div className="fifth_card p-3 p-lg-5 position-relative">

                    <p className="card_title m-0">
                        Core Ittys?
                    </p>
                    <p className="card_des m-0">

                        There is a core collection of 100 ittys split into two parts: <br />
                        70 pixel ittys <br />
                        30 mutations
                    </p>

                </div>
                <div className="card">
                    <img src={img5} alt="" />

                </div>
                <div className="card">
                    <img src={img6} alt="" />

                </div>
                <div className="card p-3 p-lg-5">
                    <p className="card_title m-0">
                        Sub Collection?
                    </p>
                    <p className="card_des m-0">
                        A mini collection of 50 Itty PFP pieces and a number of custom mini series will be created over time which offer basic access to the community
                    </p>
                </div>
                <div className="card">
                    <img src={img7} alt="" />

                </div>
            </div>

            {/* plan section start */}
            <div className="plan_section">
                <p className="card_title">
                    What's the plan?
                </p>

                <div className="card_des">
                    <p>
                        <TbPointFilled /> focus on providing 1:1 art that holders vibe with
                    </p>
                    <p>
                        <TbPointFilled /> Build a small, tight knit discord and twitter community
                    </p>
                    <p>
                        <TbPointFilled /> actively reward and support core itty holders and early supporters
                    </p>
                    <p>
                        <TbPointFilled /> reinvest in 1:1 artists growing in SOL
                    </p>
                    <p>
                        <TbPointFilled /> adopt new tech and collaborative opportunities
                    </p>
                </div>

            </div>



            {/* holder section start */}

            <div className="holder_section">
                <p className="card_title">HOlder Perks</p>
                <div className="card_des">
                    <p className="p-0 d-flex align-items-center gap-1 justify-content-center">
                        gated discord community
                        <BsFillCircleFill />
                        <BsFillTriangleFill />
                    </p>

                    <p className="p-0 d-flex align-items-center gap-1 justify-content-center">
                        Private twitter chat
                        <BsFillCircleFill />
                    </p>

                    <p className="p-0 d-flex align-items-center gap-1 justify-content-center">
                        Tier 1 Whitelist giveaways
                        <BsFillCircleFill />
                    </p>

                    <p
                        className="p-0 d-flex align-items-center gap-1 justify-content-center"
                    >
                        Tier 2 Whitelist giveaways
                        <BsFillCircleFill />
                        <BsFillTriangleFill />
                    </p>

                    <p
                        className="p-0 d-flex align-items-center gap-1 justify-content-center"
                    >
                        editions airdrops and whitelists
                        <BsFillCircleFill />
                        <BsFillTriangleFill />
                    </p>

                    <p
                        className="p-0 d-flex align-items-center gap-1 justify-content-center"
                    >
                        1:1 EA & FF nft raffles from treasury wallet
                        <BsFillCircleFill />
                    </p>

                    <p
                        className="p-0 d-flex align-items-center gap-1 justify-content-center"
                    >
                        traditional nft giveaways & raffles
                        <BsFillCircleFill />

                    </p>

                </div>
                <div className="card_des d-flex justify-content-around">
                    <p className="d-flex align-items-center gap-1">
                        <BsFillCircleFill />
                        Itty Holders
                    </p>
                    <p className="d-flex align-items-center gap-1">
                        <BsFillTriangleFill />
                        Basic Perks
                    </p>
                </div>
            </div>



            {/* funds section */}

            <div className="funds_section">
                <p className="card_title funds_title">How will the funds be used?
                </p>

                <div className="percent">
                    <div className="circle">
                        <p className="card_title m-0">20%</p>
                        <p className="card_des m-0">artist & founder</p>
                    </div>
                    <div className="circle">
                        <p className="card_title m-0">30%</p>
                        <p className="card_des m-0">core team</p>
                    </div>
                    <div className="circle">
                        <p className="card_title m-0">25%</p>
                        <p className="card_des m-0">treasury (art)</p>
                    </div>
                    <div className="circle">
                        <p className="card_title m-0">20%</p>
                        <p className="card_des m-0">treasury (utility)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home