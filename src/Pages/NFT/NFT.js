import "./NFT.css"
import img1 from "../../Assets/gif/IMG_0033.gif"
import img2 from "../../Assets/gif/IMG_0031.gif"
import img3 from "../../Assets/gif/IMG_0026.gif"

const NFT = () => {
    return (
        <div className="the_nft_section gap-4">
            <div className="left_card_section w-md-50">
                <div className="left_card">
                    <img src={img1} alt="" />
                    <div className='first_card_heading'>
                        <p className="nft_card_title text-uppercase m-0">Itty Bittys x 100</p>
                        <p className="nft_card_des text-uppercase">
                            100 1:1 Ittys and Itty Mutations granting full access to the community and all perks
                        </p>
                        
                           <button className='collection_btn'>
                           <a href="https://www.google.com/" className="text-decoration-none anchor">
                            Explore collection
                           </a> 
                            </button> 
                        
                        
                    </div>
                </div>
            </div>
            <div className="right_card_section w-md-50">
                <div className="right_card">
                    <div className="nft_card position-relative">
                        <img src={img2} alt="" />
                        <div className="">
                            <p className="nft_card_title text-uppercase m-0">Itty PFPs x 50</p>

                            <p className="nft_card_des text-uppercase">
                                Generate through twitter engagement or custom tokens.
                            </p>

                            <br />

                            <p className="nft_card_des text-uppercase m-0 break">
                                grant basic Community access and perks
                            </p>
                            <a href="https://www.google.com/">
                                <button className='explore_btn'>
                                    Explore
                                </button>
                            </a>

                        </div>
                    </div>

                    <div className="nft_card position-relative">
                        <img src={img3} alt="" />
                        <div className="">
                            <p className="nft_card_title text-uppercase m-0">
                                Custom Ghosties x 40
                            </p>

                            <p className="nft_card_des text-uppercase">
                                Exchangeable for a custom Ghostie 1:1 of your choosing.
                            </p>

                            <br />

                            <p className="nft_card_des text-uppercase m-0 break">
                                grant basic Community access and perks
                            </p>

                            <a href="https://www.google.com/">

                                <button className='explore_btn'>
                                    Explore
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="nft_third_card">
                        <p className='my-5 my-md-0'>Coming Soon...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFT