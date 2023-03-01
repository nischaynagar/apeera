import React from 'react';
import mainLogo from "../assests/images/icon-mainLogo.svg";
import mysteryboxImg from "../assests/images/icon-mysterybox.svg";
import fiorImg from "../assests/images/icon-fior.svg";
import xisImg from "../assests/images/icon-xis.svg";
import "./style.css";

export default function MysteryBox()
{
    return (
        <div className='MysteryBox'>
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
            <div className='raritiesWrapper'>
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
                        <div className='raritiesIconTxt1'>LEGENDARY</div>
                        <div className='raritiesIconTxt2'>1%</div>
                    </div>
                </div>
                <div className='raritiesIcon'>
                    <div className='raritiesIcon5'></div>
                    <div className='raritiesIconTxtWrapper'>
                        <div className='raritiesIconTxt1'>ULTIMATE</div>
                        <div className='raritiesIconTxt2'>0.01%</div>
                    </div>
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
                            <div className='featureHeadingTxt'>LIMITED</div>
                            <div className='featureDescTxt'>APE ERA NFTs IS ONLY AVAILABLE FOR A LIMITED TIME AND CAN NOT BE MINTED ONCE THE SEASON IS OVER</div>
                        </div>
                    </div>
                </div>
                <div className='featureItemWrapper1'>
                    <div className='featureItemWrapper2'>
                        <div className='featureItem'>
                            <div className='featureHeadingTxt'>UTILITIES</div>
                            <div className='featureDescTxt'>$APERA NFTs WILL BE UTILIZED AS MATERIALS ACROSS THE ECOSYSTEM.</div>
                        </div>
                    </div>
                </div>
                <div className='featureItemWrapper1'>
                    <div className='featureItemWrapper2'>
                        <div className='featureItem'>
                            <div className='featureHeadingTxt'>SOON</div>
                            <div className='featureDescTxt'>MARKETPLACE, LOTTERY, LABORATORY AND MORE TO COME.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='obtainableapesHeading'>OBTAINABLE APES</div>
            <div className='apesGrid'>
                <div className='apesItem1'>
                    <div className='apesItemUpperDiv1'>
                        <div  className='apesItemUpperDiv1Txt'>FIOR</div>
                        <img src={fiorImg} alt="fior-img" />
                    </div>
                <div className='apesItemLowerDiv1'>
                <div>FIOR IS A LEGENDARY MONKEY.<br/>HE COMES FROM THE FIRE PLANET NURUWAR AND IS THE LAST SURVIVOR SINCE THE MURADIN ATTACK. FIOR INCREASES YOUR STAKING POWER BY <span>7x</span>.</div>
                    <div className='legendaryBtn'>LEGENDARY</div>
                </div>
                </div>
                <div className='apesItem2'>
                    <div className='apesItemUpperDiv2'>
                        <div className='apesItemUpperDiv2Txt'>XIS</div>
                        <img src={xisImg} alt="xis-img" />
                    </div>
                <div className='apesItemLowerDiv2'>
                <div>FIOR IS A LEGENDARY MONKEY.<br/>HE COMES FROM THE FIRE PLANET NURUWAR AND IS THE LAST SURVIVOR SINCE THE MURADIN ATTACK. FIOR INCREASES YOUR STAKING POWER BY <span>7x</span>.</div>
                    <div className='epicBtn'>EPIC</div>
                </div>
                </div>
                <div className='apesItem1'>
                    <div className='apesItemUpperDiv1'>
                        <div  className='apesItemUpperDiv1Txt'>FIOR</div>
                        <img src={fiorImg} alt="fior-img" />
                    </div>
                <div className='apesItemLowerDiv1'>
                <div>FIOR IS A LEGENDARY MONKEY.<br/>HE COMES FROM THE FIRE PLANET NURUWAR AND IS THE LAST SURVIVOR SINCE THE MURADIN ATTACK. FIOR INCREASES YOUR STAKING POWER BY <span>7x</span>.</div>
                    <div className='legendaryBtn'>LEGENDARY</div>
                </div>
                </div>
                <div className='apesItem2'>
                    <div className='apesItemUpperDiv2'>
                        <div  className='apesItemUpperDiv2Txt'>XIS</div>
                        <img src={xisImg} alt="xis-img" />
                    </div>
                <div className='apesItemLowerDiv2'>
                <div>FIOR IS A LEGENDARY MONKEY.<br/>HE COMES FROM THE FIRE PLANET NURUWAR AND IS THE LAST SURVIVOR SINCE THE MURADIN ATTACK. FIOR INCREASES YOUR STAKING POWER BY <span>7x</span>.</div>
                    <div className='epicBtn'>EPIC</div>
                </div>
                </div>
            </div>
            <div className='showmoreBtn'>SHOW MORE</div>
        </div>
    );
}