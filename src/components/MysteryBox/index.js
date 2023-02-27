import React from 'react';
import connectWalletIcon from "../assests/images/icon-connectwallet.svg";
import mainLogo from "../assests/images/icon-mainLogo.svg";
import mysteryboxImg from "../assests/images/icon-mysterybox.svg";
import "./style.css";

export default function MysteryBox()
{
    return (
        <div className='MysteryBox'>
            <div className='connectWalletBtn'>
                <img src={connectWalletIcon} alt="connect-wallet-icon" />
                <div>CONNECT WALLET</div>
            </div>
            <div className='mainLogoWrapper'>
                <img src={mainLogo} alt="main-logo"/>
                <div className='mainLogoTxt'>MYSTERY BOXES</div>
            </div>
            <div className='mysteryBoxesWrapper'>
                <div className='mysteryBoxItem'>
                    <img src={mysteryboxImg} alt="mystery-box-img" />
                    <div className='saveTxt'>&nbsp;</div>
                    <div className='buyMysteryBoxBtn'>BUY 1 MYSTERY BOX</div>
                    <div className='priceTxt'><span className='highlightedPriceTxt'>20$</span> FOR <span className='highlightedPriceTxt'>1</span> MYSTERY BOXES</div>
                </div>
                <div className='mysteryBoxItem'>
                    <img src={mysteryboxImg} alt="mystery-box-img" />
                    <div className='saveTxt'>SAVE 17%!</div>
                    <div className='buyMysteryBoxBtn'>BUY 3 MYSTERY BOX</div>
                    <div className='priceTxt'><span className='highlightedPriceTxt'>50$</span> FOR <span className='highlightedPriceTxt'>3</span> MYSTERY BOXES</div>
                </div>
                <div className='mysteryBoxItem'>
                    <img src={mysteryboxImg} alt="mystery-box-img" />
                    <div className='saveTxt'>SAVE 30%!</div>
                    <div className='buyMysteryBoxBtn'>BUY 10 MYSTERY BOX</div>
                    <div className='priceTxt'><span className='highlightedPriceTxt'>140$</span> FOR <span className='highlightedPriceTxt'>10</span> MYSTERY BOXES</div>
                </div>         
            </div>
            <div className='mysteryInfoTxt'>1 MYSTERY BOX CONTAINS 1 RANDOM APE ERA NFT WITH RANDOM RARITY</div>
            <div className='raritiesTxt'>RARITIES & DROP RATES <span>SLIGHTLY INCREASED WHEN BUYING WITH $APERA!</span></div>
            <div className='raritiesIconWrapper'>
                <div className='raritiesIcon'>
                    <div className='raritiesIcon1'></div>
                    <div className='raritiesIconTxtWrapper'>
                        <div className='raritiesIconTxt1'>COMMON</div>
                        <div className='raritiesIconTxt2'>80.99%</div>
                    </div>
                </div>
                <div className='raritiesIcon'>
                    <div className='raritiesIcon2'></div>
                    <div className='raritiesIconTxtWrapper'>
                        <div className='raritiesIconTxt1'>RARE</div>
                        <div className='raritiesIconTxt2'>14.15%</div>
                    </div>
                </div>
                <div className='raritiesIcon'>
                    <div className='raritiesIcon3'></div>
                    <div className='raritiesIconTxtWrapper'>
                        <div className='raritiesIconTxt1'>EPIC</div>
                        <div className='raritiesIconTxt2'>3.5%</div>
                    </div>
                </div>
                <div className='raritiesIcon'>
                    <div className='raritiesIcon4'></div>
                    <div className='raritiesIconTxtWrapper'>
                        <div className='raritiesIconTxt1'>COMMON</div>
                        <div className='raritiesIconTxt2'>1%</div>
                    </div>
                </div>
                <div className='raritiesIcon'>
                    <div className='raritiesIcon5'></div>
                    <div className='raritiesIconTxtWrapper'>
                        <div className='raritiesIconTxt1'>COMMON</div>
                        <div className='raritiesIconTxt2'>0.01%</div>
                    </div>
                </div>
            </div>
            <div className='featureGrid'>
                <div className='featureItemWrapper1'>
                    <div className='featureItemWrapper2'>
                        <div className='featureItem'>
                            <div className='featureHeadingTxt'>COLLECTIBLE</div>
                            <div className='featureDescTxt'>ENJOY THE APE ERA STORYLINE, COLLECT AND EARN WITH YOUR FAVOURITE APES.</div>
                        </div>
                    </div>
                </div>
                <div className='featureItemWrapper1'>
                    <div className='featureItemWrapper2'>
                        <div className='featureItem'>
                            <div className='featureHeadingTxt'>COLLECTIBLE</div>
                            <div className='featureDescTxt'>ENJOY THE APE ERA STORYLINE, COLLECT AND EARN WITH YOUR FAVOURITE APES.</div>
                        </div>
                    </div>
                </div>
                <div className='featureItemWrapper1'>
                    <div className='featureItemWrapper2'>
                        <div className='featureItem'>
                            <div className='featureHeadingTxt'>COLLECTIBLE</div>
                            <div className='featureDescTxt'>ENJOY THE APE ERA STORYLINE, COLLECT AND EARN WITH YOUR FAVOURITE APES.</div>
                        </div>
                    </div>
                </div>
                <div className='featureItemWrapper1'>
                    <div className='featureItemWrapper2'>
                        <div className='featureItem'>
                            <div className='featureHeadingTxt'>COLLECTIBLE</div>
                            <div className='featureDescTxt'>ENJOY THE APE ERA STORYLINE, COLLECT AND EARN WITH YOUR FAVOURITE APES.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='obtainableapesHeading'>OBTAINABLE APES</div>
            </div>
        </div>
    );
}