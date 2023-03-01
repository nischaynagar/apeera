import React, {  useState } from 'react';
import mainLogo from "../assests/images/icon-mainLogo.svg";
import pancakeswapIcon from "../assests/images/icon-pancakeswap.svg";
import bscscanIcon from "../assests/images/icon-bscscan.svg";
import dexviewIcon from "../assests/images/icon-dexview.svg";
import fiorIcon from "../assests/images/icon-fior.svg";
import nextnftarrowIcon from "../assests/images/icon-nextnftarrow.svg";
import mysteryboxImg from "../assests/images/icon-mysterybox.svg";
// import homeBgImg1 from "../assests/images/home-bgimg1.svg";
import dropdownArrowIcon from "../assests/images/icon-dropdownarrow.svg";
import "./style.css";

export default function Home()
{

    
    const [isLegalDiscOpen, setIsLegalDiscOpen] = useState(false);
    const [isRiskDiscOpen, setIsRiskDiscOpen] = useState(false);

    return (
        <div className='home'>
            <div className='mainLogoWrapper'>
                {/* <img className='homeBgImg1' src={homeBgImg1} alt="homeBgImg1" /> */}
                <img src={mainLogo} alt="main-logo"/>
                <div className='mainLogoTxt'>COLLECT & EARN WITH APE ERA!</div>
                <div className='btnWrapper'>
                    <div className='styledBtn1'>BUY&nbsp;$APERA</div>
                    <div className='styledBtn1'>COLLECT&nbsp;NFTs</div>
                    <div className='styledBtn1'>EARN&nbsp;$APERA</div>
                </div>
            </div>
            <div className='nftCrousel'>
                <div className='nftCrouselDescWrapper1'>
                <div className='nftCrouselDescWrapper2'>
                    <div className='nftCrouselheading'>
                        FIOR
                    </div>
                    <div className='nftCrouselDesc'>
                        FIOR IS A LEGENDARY MONKEY.<br/> HE COMES FROM THE FIRE PLANET NURUWAR AND IS THE LAST SURVIVOR SINCE THE MURADIN ATTACK. CHEETio INCREASES YOUR STAKING POWER BY 
                        <span> 7x</span>.
                    </div>
                    <div className='nftCrouselItemLegendary'>LEGENDARY</div>
                </div>
                </div>
                <div className='nftCrouselCenterDiv'>
                    <img src={fiorIcon} alt="fior-img"/>
                </div>
                <div className='nftCrouselSideDivWrapper'>
                    <div className='nftCrouselSideDiv'>
                        <img className='nftCrouselnextArrow' src={nextnftarrowIcon} alt="nextnft-arrow-icon" />
                        <div className='showAllnftBtn'>
                            <div>SHOW ALL NFTs</div>
                            <img src={nextnftarrowIcon} alt="nextnft-arrow-icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='aboutApeEraWrapper'>
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
            <div className='mystryboxCrousel'>
                <div className='mystryboxCrouselDescWrapper1'>
                <div className='mystryboxCrouselDescWrapper2'>
                    <div className='mystryboxCrouselheading'>
                        MYSTERY BOXES
                    </div>
                    <div className='mystryboxCrouselDesc'>
                    MYSTERY BOXES MAY CONTAIN VARIOUS NFTS THAT INCREASE YOUR STAKING POWER BY UP TO 50X. OUR NFTs ARE STRICTLY LIMITED AND THERE ARE ONLY 10,000 NFTs PER SEASON. 
                    <br/>TIP: IF YOU BUY OUR MYSTERY BOXES WITH $APERA TOKENS YOU GET A STRONG DISCOUNT!
                    </div>
                </div>
                </div>
                <div className='mystryboxCrouselCenterDiv'>
                    <img src={mysteryboxImg} alt="mystery-box-img" />
                    <div className='buymysteryBoxBtn'>BUY&nbsp;MYSTERY&nbsp;BOXES</div>
                </div>
                <div className='mystryboxCrouselSideDivWrapper'>
                    <div className='mystryboxCrouselSideDiv'>
                        <div className='showAllraritiesBtn'>
                            <div>SHOW RARITIES</div>
                            <img src={nextnftarrowIcon} alt="next-arrow-icon" />
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
            <div className='roadmapRow1'>

            <div className='roadmapItemWrapper1'>
            <div className='roadmapItem1'>
                <div className='roadmapItemHeading'>2023</div>
                <div className='roadmapItemTxt'>HELLO WORLD!<br/>APE ERA WAS BORN</div>
            </div>
            </div>
            <div className='connectingDiv1'></div>
            <div className='roadmapItemWrapper1'>
            <div className='roadmapItem1'>
                <div className='roadmapItemHeading'>2023</div>
                <div className='roadmapItemTxt'>PRELISTING ON CMC & CG PRELAUNCH CERTIK AUDIT PRESALE ON PINKSALE</div>
            </div>
            </div>
            <div className='connectingDiv1'></div>
            <div className='roadmapItemWrapper2'>
            <div className='roadmapItem2'>
                <div className='roadmapItemHeading'>SOON</div>
                <div className='roadmapItemTxt'>FINISH PRESALE <br/>REACH 1000+ HOLDERS SELL OUT COLLECTION</div>
            </div>
            </div>
            </div>
            <div className='connectingDiv2'></div>
            <div className='roadmapRow1'>

            <div className='roadmapItemWrapper2'>
            <div className='roadmapItem2'>
                <div className='roadmapItemHeading'>2023</div>
                <div className='roadmapItemTxt'>MORE PARTNERSHIPS LAUNCH MARKET PLACES TAKING SERVICE PROVIDER</div>
            </div>
            </div>
            <div className='connectingDiv1'></div>
            <div className='roadmapItemWrapper2'>
            <div className='roadmapItem2'>
                <div className='roadmapItemHeading'>2023</div>
                <div className='roadmapItemTxt'>HUGE PRESS MARKETING INITIAL LISTING ON CEX</div>
            </div>
            </div>
            <div className='connectingDiv1'></div>
            <div className='roadmapItemWrapper2'>
            <div className='roadmapItem2'>
                <div className='roadmapItemHeading'>SOON</div>
                <div className='roadmapItemTxt'>PARTNERSHIPS INTRODUCE SEASON SYSTEM</div>
            </div>
            </div>
            </div>
            <div className='connectingDiv3'></div>
            <div className='roadmapRow1'>

            <div className='roadmapItemWrapper2'>
            <div className='roadmapItem2'>
                <div className='roadmapItemHeading'>2023</div>
                <div className='roadmapItemTxt'>LABORATORY INTRODUCTION, CREATE YOUR ULTIMATE APE</div>
            </div>
            </div>
            <div className='connectingDiv1'></div>
            <div className='roadmapItemWrapper2'>
            <div className='roadmapItem2'>
                <div className='roadmapItemHeading'>2023</div>
                <div className='roadmapItemTxt'>LOTTERY SYSTEM INTRODUCTION, WIN GIANT PRIZES</div>
            </div>
            </div>
            <div className='connectingDiv1'></div>
            <div className='roadmapItemWrapper2'>
            <div className='roadmapItem2'>
                <div className='roadmapItemHeading'>SOON</div>
                <div className='roadmapItemTxt'>TOP SECRET NO DISTRIBUTION ALLOWED</div>
            </div>
            </div>
            </div>
            <div className='heading1'>FIND US ON</div>
            <div className='findUsWrapper'>
                <img src={pancakeswapIcon} alt="pancakeswapIcon"/>
                <img src={dexviewIcon} alt="dexviewIcon"/>
                <img src={bscscanIcon} alt="bscscanIcon"/>
            </div>
            <div className='findUsWrapper'>
                <img src={pancakeswapIcon} alt="pancakeswapIcon"/>
                <img src={dexviewIcon} alt="dexviewIcon"/>
                <img src={bscscanIcon} alt="bscscanIcon"/>
            </div>
            {/* <div className='placeholderpictureWrapper'>
            <div className='heading2'>**PLACEHOLDER PICTURES**</div>
            <div className='heading2'>WE WILL GIVE YOU MORE INFOS ON WHAT TO PUT HERE SOON.</div>
            </div> */}
            <div className='heading1'>DISCLAIMER</div>
            <div className='disclaimerDropdownWrapper'>
            <div className="disclaimerDropdown">
                <div className="disclaimerDropdownheading">
                  <div>
                    LEGAL DISCLAIMER
                  </div>
                  <div>
                    <div
                      style={{
                        display: isLegalDiscOpen ? "none" : "flex",
                        overflow: "hidden",
                      }}
                    >
                    </div>
                    <div
                      onClick={() => setIsLegalDiscOpen(!isLegalDiscOpen)}
                      className="dropdown-arrowicon"
                    >
                      <img
                        src={dropdownArrowIcon}
                        style={{
                          transform: isLegalDiscOpen ? "scale(-1)" : "scale(1)",
                        }}
                        alt="arrow"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className='disclaimerDropdowntxtContent'
                  style={{
                    height: isLegalDiscOpen ? "auto" : 0,
                    margin: isLegalDiscOpen ? "10px 0" : "0",
                    overflow: "hidden",
                    transition: "height 0.5s ease-out",
                  }}
                >
                The information provided on the apeEra website does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of the website’s content as such. ApeEra does not recommend that any cryptocurrency should be bought, sold, or held by you. Do conduct your own due diligence and consult your financial advisor before making any investment decisions. By purchasing APERA$, you agree that you are not purchasing a security or investment and you agree to hold ApeEra harmless and not liable for any losses or taxes you may incur. You also agree that ApeEra is presenting the token “as is” and is not required to provide any support or services. You should have no expectation of any form from ApeEra. Although APERA$ is a community driven token for social networking and not a registered digital currency, the team strongly recommends that citizens in areas with government bans on cryptocurrency do not purchase it because ApeEra cannot ensure compliance with your territory’s regulations. Always make sure that you are in compliance with your local laws and regulations before you make any purchase.
              </div>
              </div>
            </div>
            <div className='disclaimerDropdownWrapper'>
            <div className="disclaimerDropdown">
                <div className="disclaimerDropdownheading">
                  <div>
                    RISK DISCLOSURE
                  </div>
                  <div>
                    <div
                      style={{
                        display: isRiskDiscOpen ? "none" : "flex",
                        overflow: "hidden",
                      }}
                    >
                    </div>
                    <div
                      onClick={() => setIsRiskDiscOpen(!isRiskDiscOpen)}
                      className="dropdown-arrowicon"
                    >
                      <img
                        src={dropdownArrowIcon}
                        style={{
                          transform: isLegalDiscOpen ? "scale(-1)" : "scale(1)",
                        }}
                        alt="arrow"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className='disclaimerDropdowntxtContent'
                  style={{
                    height: isRiskDiscOpen ? "auto" : 0,
                    margin: isRiskDiscOpen ? "10px 0" : "0",
                    overflow: "hidden",
                    transition: "height 0.5s ease-out",
                  }}
                >
                Please note there are always risks associated with smart-contracts. Please use at your own risk. ApeEra is not a registered broker, analyst, or investment advisor. Everything that’s provided on this site is purely for guidance, informational and educational purposes, and fun. All information contained herein should be independently verified and confirmed. We do not accept any liability for any loss or damage whatsoever caused in reliance upon such information or services. Please be aware of the risks involved with any trading done in any financial market. Do not trade with money that you cannot afford to lose.
              </div>
              </div>
            </div>
        </div>
    );
}