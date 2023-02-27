import React from 'react';
import connectWalletIcon from "../assests/images/icon-connectwallet.svg";
import mainLogo from "../assests/images/icon-mainLogo.svg";
import "./style.css";

export default function Home()
{
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
                    <div>ABOUT APE ERA AI NFTs</div> 
                    <div>APE ERA IS A INNOVATIVE <span>AI NFT</span> PROJECT THAT COMBINES THE LIMITLESS POTENTIAL OF CRYPTO AND NFTs INTO ONE UNIQUE EXPERIENCE.</div>
                </div>
                <div>
                    <div>
                        <div>
                            <div>GOVERNANCE TOKEN</div>
                            <div>$APERA IS THE NATIVE UTILITY TOKEN THAT WILL BE USED ACROSS OUR PLATFORMS.</div>
                        </div>
                        <div>
                            <div>UTILITIES</div>
                            <div>NUMEROUS INNOVATED FEATURES & UTILITIES THAT AIM TO CREATE A SUSTAINABLE ECOSYSTEM.</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>UTILITIES</div>
                            <div>NUMEROUS INNOVATED FEATURES & UTILITIES THAT AIM TO CREATE A SUSTAINABLE ECOSYSTEM.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>APE ERA ECOSYSTEM</div>
                <div>AVAILABLE ON LAUNCH</div>
                <div>
                    <div>
                        <div>COLLECTIBLE NFTs</div>
                        <div>EXPAND YOUR COLLECTION BY PARTAKING IN OUR SEASONAL APE ERA, LIMITED EVENTS AND MORE.</div>
                    </div>
                    <div>
                        <div>NFT STAKING</div>
                        <div>SEND YOUR $APERA + YOUR FAVOURITE NFTs INTO THE STAKING PROTOCOL, WHERE YOU OBTAIN MORE $APERA</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>MYSTERY BOX</div>
                        <div>BUY MYSTERY BOXES TO HAVE A CHANCE TO GET A NFT WITH UP TO 50x STAKEPOWER.</div>
                    </div>
                    <div>
                        <div>APE SEASONS</div>
                        <div>IN REGULAR INTERVALS WE LAUNCH NEW SEASONS WITH NEW LIMITED NFTs AND NEW REWARDS.</div>
                    </div>
                </div>
            </div>
            <div>
                <div>COMING SOON</div>
                <div>
                    <div>
                        <div>MARKET PLACE</div>
                        <div>A MARKET PLACE FOR ALL NFTs. APE ERA HOLDERS CAN BENEFIT FROM SALES THROUGH THE MARKET PLACE.</div>
                    </div>
                    <div>
                        <div>LABORATORY</div>
                        <div>EQUIP YOUR MONKEY WITH A BLUEPRINT TO STRENGTHEN IT AND INCREASE YOUR STAKING POWER!</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>LOTTERY</div>
                        <div>THE CHANCE TO HIT A JACKPOT WHEN YOU BUY MYSTERY BOXES. YOU WILL RECEIVE LOTS OF $APERA!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}