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
        <div className="home_section mt-1 pb-4">
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
                    <svg className="left_arrow" width="58" height="12" viewBox="0 0 58 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.469697 5.46966C0.176803 5.76256 0.176803 6.23743 0.469697 6.53033L5.24267 11.3033C5.53556 11.5962 6.01043 11.5962 6.30333 11.3033C6.59622 11.0104 6.59622 10.5355 6.30333 10.2426L2.06069 6L6.30333 1.75735C6.59622 1.46446 6.59622 0.989588 6.30333 0.696695C6.01043 0.403801 5.53556 0.403801 5.24267 0.696695L0.469697 5.46966ZM57.3442 5.25L1.00003 5.25L1.00003 6.75L57.3442 6.75L57.3442 5.25Z" fill="#153438" />
                    </svg>

                    <svg className="right_arrow" width="58" height="12" viewBox="0 0 58 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M56.8745 6.53032C57.1674 6.23743 57.1674 5.76255 56.8745 5.46966L52.1016 0.69669C51.8087 0.403797 51.3338 0.403797 51.0409 0.69669C50.748 0.989583 50.748 1.46446 51.0409 1.75735L55.2836 5.99999L51.0409 10.2426C50.748 10.5355 50.748 11.0104 51.0409 11.3033C51.3338 11.5962 51.8087 11.5962 52.1016 11.3033L56.8745 6.53032ZM1.31134e-07 6.75L56.3442 6.74999L56.3442 5.24999L-1.31134e-07 5.25L1.31134e-07 6.75Z" fill="#153438" />
                    </svg>


                    {/* <FaLongArrowAltLeft className=""/> */}
                </div>
                <div className="card">
                    <img src={img5} alt="" />

                </div>
                <div className="card">
                    <img src={img6} alt="" />

                </div>
                <div className="card p-3 p-lg-5 position-relative">
                    <p className="card_title m-0">
                        Sub Collection?
                    </p>
                    <p className="card_des m-0">
                        A mini collection of 50 Itty PFP pieces and a number of custom mini series will be created over time which offer basic access to the community
                    </p>

                    <svg className="white_left_arrow" width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.422142 5.40717C0.12925 5.70006 0.12925 6.17493 0.422142 6.46783L5.19511 11.2408C5.48801 11.5337 5.96288 11.5337 6.25577 11.2408C6.54867 10.9479 6.54867 10.473 6.25578 10.1801L2.01313 5.9375L6.25578 1.69486C6.54867 1.40196 6.54867 0.92709 6.25578 0.634196C5.96288 0.341303 5.48801 0.341303 5.19511 0.634196L0.422142 5.40717ZM39.8105 5.1875L0.952473 5.1875L0.952473 6.6875L39.8105 6.6875L39.8105 5.1875Z" fill="#EDE1D0" />
                    </svg>


                    <svg className="white_right_arrow" width="41" height="12" viewBox="0 0 41 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.3493 6.6983C40.6422 6.40541 40.6422 5.93053 40.3493 5.63764L35.5764 0.864668C35.2835 0.571775 34.8086 0.571775 34.5157 0.864668C34.2228 1.15756 34.2228 1.63243 34.5157 1.92533L38.7584 6.16797L34.5157 10.4106C34.2228 10.7035 34.2228 11.1784 34.5157 11.4713C34.8086 11.7642 35.2835 11.7642 35.5764 11.4713L40.3493 6.6983ZM0.960938 6.91797H39.819V5.41797H0.960938V6.91797Z" fill="#EDE1D0" />
                    </svg>

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