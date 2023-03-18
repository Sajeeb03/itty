import "./ArtTools.css"

import user from "../../Assets/img/user.png"
import text from "../../Assets/img/text.png"

const ArtTools = () => {
    return (
        <div className="art_tools_section pb-4">
            <div className="heading text-center">
                itty’s is creating graphic and art focused tools to support artists, collectors and builders in the space

                <div className="line"></div>
            </div>

            <div className="banner position-relative">
                <div className="">
                    <p className="banner_headings">
                        Automated Banner Services
                    </p>
                    <p className="heading_des">A simple and easy way to create the custom twitter banner you’ve always wanted. Add your NFT, Name/ Tag andmatching background.</p>
                </div>

                <div className="banner_cards">
                    <div>
                        <div className="banner_card d-flex justify-content-center align-items-center">
                            <div className="white_card">
                                <div className="line_one mb-2">

                                </div>

                                <div className="line_two">

                                </div>

                                <div className="line_two my-2">

                                </div>

                                <div className="line_two">

                                </div>

                                <div className="line_three my-2"></div>
                                <div className="line_three"></div>
                            </div>
                        </div>
                        <p className="banner_headings mt-2">Connect Wallet</p>
                    </div>



                    <div>
                        <div className="banner_card second_box p-4 d-flex flex-column justify-content-between">
                            <div className="d-flex justify-content-end">
                                <div className="second_box_card d-flex justify-content-end align-items-center p-2">
                                    <img src={user} alt="" className="" />
                                </div>
                            </div>

                            <div>
                                <div className="second_box_card d-flex justify-content-center align-items-center p-2">
                                    <img src={text} alt="" className="" />
                                </div>
                            </div>

                            <div className="d-flex justify-content-end">
                                <div className="second_box_card">
                                    {/* <img src={user} alt="" className="" /> */}
                                </div>
                            </div>
                        </div>

                        <p className="banner_headings mt-2">
                            Customize Banner
                        </p>
                    </div>
                    <div>
                        <div className="banner_card d-flex justify-content-center align-items-center">
                            <div className="second_box_card d-flex justify-content-center align-items-center gap-3 p-2">
                                <img src={text} alt="" />
                                <img src={user} alt="" />
                            </div>
                        </div>
                        <p className="banner_headings mt-2">Generate & Export Banner

                        </p>
                    </div>
                </div>
                <div className="overlay">
                    Coming Soon...
                </div>
            </div>
        </div>
    )
}

export default ArtTools