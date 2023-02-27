import React, { useEffect, useState } from 'react';
import connectWalletIcon from "../assests/images/icon-connectwallet.svg";
import mainLogo from "../assests/images/icon-mainLogo.svg";
import pancakeswapIcon from "../assests/images/icon-pancakeswap.svg";
import bscscanIcon from "../assests/images/icon-bscscan.svg";
import dexviewIcon from "../assests/images/icon-dexview.svg";
import "./style.css";

export default function Home()
{

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className='home'>
            <div className='connectWalletBtn'>
                <img src={connectWalletIcon} alt="connect-wallet-icon" />
                <div>CONNECT WALLET</div>
            </div>
            <div className='mainLogoWrapper'>
                <img src={mainLogo} alt="main-logo"/>
                <div className='mainLogoTxt'>COLLECT & EARN WITH APE ERA!</div>
                <div className='btnWrapper'>
                    <div className='styledBtn1'>BUY&nbsp;$APERA</div>
                    <div className='styledBtn1'>COLLECT&nbsp;NFTs</div>
                    <div className='styledBtn1'>EARN&nbsp;$APERA</div>
                </div>
            </div>
            <div>
                <div>
                    <div className='aboutApeEraTxt'>ABOUT APE ERA AI NFTs</div> 
                    <div className='aboutApeEraDescTxt'>APE ERA IS A INNOVATIVE <span>AI NFT</span> PROJECT THAT COMBINES THE LIMITLESS POTENTIAL OF CRYPTO AND NFTs INTO ONE UNIQUE EXPERIENCE.</div>
                </div>
                <div className='homefeatureGrid'>
                <div className='homefeatureGridcol1'>
                <div className='homefeatureItemWrapper1'>
                    <div className='homefeatureItemWrapper2'>
                        <div className='homefeatureItem'>
                            <div className='homefeatureHeadingTxt'>GOVERNANCE TOKEN</div>
                            <div className='homefeatureDescTxt'>$APERA IS THE NATIVE UTILITY TOKEN THAT WILL BE USED ACROSS OUR PLATFORMS.</div>
                        </div>
                    </div>
                </div>
                <div className='homefeatureItemWrapper1'>
                    <div className='homefeatureItemWrapper2'>
                        <div className='homefeatureItem'>
                            <div className='homefeatureHeadingTxt'>UTILITIES</div>
                            <div className='homefeatureDescTxt'>NUMEROUS INNOVATED FEATURES & UTILITIES THAT AIM TO CREATE A SUSTAINABLE ECOSYSTEM.</div>
                        </div>
                    </div>
                </div>
                </div>
                <div className='homefeatureGridcol2'>
                <div className='homefeatureItemWrapper1'>
                    <div className='homefeatureItemWrapper2'>
                        <div className='homefeatureItem'>
                        <div className='homefeatureHeadingTxt'>NFT COLLECTION</div>
                            <div className='homefeatureDescTxt'>APE ERA OFFERS A FIXXED SUPPLY OF NFTs CREATED BY TECHICAL LEADING AI SOFTWARE.</div>
                          </div>
                    </div>
                </div>
                </div>
                
            </div>
            </div>
            <div>
                <div className='heading1'>APE ERA ECOSYSTEM<br/>AVAILABLE ON LAUNCH</div>
                <div className='featureGrid'>
                <div className='featureGridR1'>
                <div className='featureItemWrapper1'>
                    <div className='featureItemWrapper2'>
                        <div className='featureItem'>
                            <div className='featureHeadingTxt'>COLLECTIBLE NFTs</div>
                            <div className='featureDescTxt'>EXPAND YOUR COLLECTION BY PARTAKING IN OUR SEASONAL APE ERA, LIMITED EVENTS AND MORE.</div>
                        </div>
                    </div>
                </div>
                <div className='featureItemWrapper1'>
                    <div className='featureItemWrapper2'>
                        <div className='featureItem'>
                            <div className='featureHeadingTxt'>NFT STAKING</div>
                            <div className='featureDescTxt'>SEND YOUR $APERA + YOUR FAVOURITE NFTs INTO THE STAKING PROTOCOL, WHERE YOU OBTAIN MORE $APERA</div>
                        </div>
                    </div>
                </div>
                </div>
                <div className='featureGridR2'>
                <div className='featureItemWrapper1'>
                    <div className='featureItemWrapper2'>
                        <div className='featureItem'>
                            <div className='featureHeadingTxt'>MYSTERY BOX</div>
                            <div className='featureDescTxt'>BUY MYSTERY BOXES TO HAVE A CHANCE TO GET A NFT WITH UP TO 50x STAKEPOWER.</div>
                        </div>
                    </div>
                </div>
                <div className='featureItemWrapper1'>
                    <div className='featureItemWrapper2'>
                        <div className='featureItem'>
                            <div className='featureHeadingTxt'>APE SEASONS</div>
                            <div className='featureDescTxt'>IN REGULAR INTERVALS WE LAUNCH NEW SEASONS WITH NEW LIMITED NFTs AND NEW REWARDS.</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
                
            </div>
            <div>
                <div className='heading1'>COMING SOON</div>
                <div className='featureGridWrapper'>
                <div className='featureGrid'>
                <div className='featureGridR1'>
                <div className='featureItemWrapper1'>
                    <div className='featureItemWrapper2'>
                        <div className='featureItem'>
                            <div className='featureHeadingTxt'>COLLECTIBLE NFTs</div>
                            <div className='featureDescTxt'>EXPAND YOUR COLLECTION BY PARTAKING IN OUR SEASONAL APE ERA, LIMITED EVENTS AND MORE.</div>
                        </div>
                    </div>
                </div>
                <div className='featureItemWrapper1'>
                    <div className='featureItemWrapper2'>
                        <div className='featureItem'>
                            <div className='featureHeadingTxt'>NFT STAKING</div>
                            <div className='featureDescTxt'>SEND YOUR $APERA + YOUR FAVOURITE NFTs INTO THE STAKING PROTOCOL, WHERE YOU OBTAIN MORE $APERA</div>
                        </div>
                    </div>
                </div>
                </div>
                <div className='featureGridR2'>
                <div className='featureItemWrapper1'>
                    <div className='featureItemWrapper2'>
                        <div className='featureItem'>
                            <div className='featureHeadingTxt'>MYSTERY BOX</div>
                            <div className='featureDescTxt'>BUY MYSTERY BOXES TO HAVE A CHANCE TO GET A NFT WITH UP TO 50x STAKEPOWER.</div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                
                </div>
            </div>
            <div className='heading1'>ROADMAP</div>
            <div className='heading1'>FIND US ON</div>
            <div className='findUsWrapper'>
                <img src={pancakeswapIcon} alt="pancakeswapIcon"/>
                <img src={bscscanIcon} alt="pancakeswapIcon"/>
                <img src={dexviewIcon} alt="pancakeswapIcon"/>
            </div>
            <div className='findUsWrapper'>
                <img src={pancakeswapIcon} alt="pancakeswapIcon"/>
                <img src={bscscanIcon} alt="pancakeswapIcon"/>
                <img src={dexviewIcon} alt="pancakeswapIcon"/>
            </div>
            <div className='heading2'>**PLACEHOLDER PICTURES**</div>
            <div className='heading2'>WE WILL GIVE YOU MORE INFOS ON WHAT TO PUT HERE SOON.</div>
            <div className='heading1'>DISCLAIMER</div>
            <div className="disclaimerDropdown">
            <div className="dropbtn" onClick={toggleDropdown}>
             LEGAL DISCLAIMER
            </div>
            <div className={`disclaimerDropdown-content ${isOpen ? 'open' : ''}`}>
            The information provided on the apeEra website does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of the website’s content as such. ApeEra does not recommend that any cryptocurrency should be bought, sold, or held by you. Do conduct your own due diligence and consult your financial advisor before making any investment decisions. By purchasing APERA$, you agree that you are not purchasing a security or investment and you agree to hold ApeEra harmless and not liable for any losses or taxes you may incur. You also agree that ApeEra is presenting the token “as is” and is not required to provide any support or services. You should have no expectation of any form from ApeEra. Although APERA$ is a community driven token for social networking and not a registered digital currency, the team strongly recommends that citizens in areas with government bans on cryptocurrency do not purchase it because ApeEra cannot ensure compliance with your territory’s regulations. Always make sure that you are in compliance with your local laws and regulations before you make any purchase.
            </div>
            </div>
        </div>
    );
}