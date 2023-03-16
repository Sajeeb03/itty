import "./ArtTools.css"

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
                        <div className="banner_card">
                            1
                        </div>
                        <p className="banner_headings mt-2">Connect Wallet</p>
                    </div>
                    <div>
                        <div className="banner_card">
                            2
                        </div>
                        <p className="banner_headings mt-2">Customize Banner

                        </p>
                    </div>
                    <div>
                        <div className="banner_card">
                            3
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