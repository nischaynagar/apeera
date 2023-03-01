import React, { useState } from 'react';
import mainLogo from "../assests/images/icon-mainLogo.svg";
import "./style.css";

export default function Farming()
{

    const [nftPeriod, setnftPeriod] = useState(true);

    const handleClick = () =>{
        setnftPeriod(!nftPeriod);
    }

    return (
        <div className='Farming'>
            <div className='coloredDiv1'></div>
            <div className='mainLogoWrapper'>
                <img src={mainLogo} alt="main-logo"/>
                <div className='mainLogoTxt'>NFT STAKING</div>
                <div className='insertTxt'>INSERT YOUR APE ERA NFTs AND GAIN STAKING POWER</div>
            </div>
            <div className='coloredDiv2'></div>
            <div className='slotsWrapper'>
                <div className='slot'>
                    <div className='slotheading'>TIER 1 SLOT</div>
                    <div className='slotWrapper1'>
                    <div className='slotWrapper2'>
                    <div className='slotImgWrapper'>
                        <div className='commonTxt'>COMMON</div>
                        <div className='questionmark'>?</div>
                    </div>
                    </div>
                    </div>
                </div>
                <div className='slot'>
                    <div className='slotheading'>TIER 2 SLOT</div>
                    <div className='slotWrapper1'>
                    <div className='slotWrapper2'>
                    <div className='slotImgWrapper'>
                        <div className='commonTxt'>COMMON</div>
                        <div className='questionmark'>?</div>
                    </div>
                    </div>
                    </div>
                </div>
                <div className='slot'>
                    <div className='slotheading'>TIER 3 SLOT</div>
                    <div className='slotWrapper1'>
                    <div className='slotWrapper2'>
                    <div className='slotImgWrapper'>
                        <div className='commonTxt'>COMMON</div>
                        <div className='questionmark'>?</div>
                    </div>
                    </div>
                    </div>
                </div>
                <div className='slot'>
                    <div className='slotheading'>TIER 4 SLOT</div>
                    <div className='slotWrapper1'>
                    <div className='slotWrapper2'>
                    <div className='slotImgWrapper rare'>
                        <div className='commonTxt'>RARE +</div>
                        <div className='questionmark'>?</div>
                    </div>
                    </div>
                    </div>
                </div>
                <div className='slot'>
                    <div className='slotheading'>TIER 5 SLOT</div>
                    <div className='slotWrapper1'>
                        <div className='slotWrapper2'>
                        <div className='slotImgWrapper epic'>
                            <div className='commonTxt'>EPIC +</div>
                            <div className='questionmark'>?</div>
                        </div>
                        </div>
                        </div>
                </div>
            </div>
            <div className='setnftperiodTxt'>SET THE NFT STAKING PERIOD</div>
            <div className='setnftWrapper'>
                <div style={{color: !nftPeriod ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.5)"}}>30 DAYS LOCK +20% POWER</div>
                <label className="switch">
                    <input type="checkbox"  onClick={handleClick}/>
                    <span className="slider round"></span>
                </label>
                <div style={{color: nftPeriod ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.5)"}}>90 DAYS LOCKED +35% POWER</div>
            </div>
            <div className='styledWrapper1'>
                <div className='styledWrapper2'>
                    <div className='styledWrapper3'>
                        <div className='txt1'>FARMING POWER</div>
                        <div className='txt2'>TOTAL STAKING POWER: <span className='goldenGradientTxt'>700%</span></div>
                        <div className='estimatedearningTxt'>ESTIMATED EARNINGS</div>
                        <div className='txt2'>ESTIMATED $APERA / 24 HOURS : <span className='goldenGradientTxt'>12345678910</span></div>
                        <div className='emergencyBtnWrapper1'>
                            <div className='emergencyBtnWrapper2'>
                                <div className='txt3'>Emergency withdraw</div>
                            </div>
                        </div>
                        <div className='emergencyInfoTxt'>YOU NEED TO CANCEL THE LOCK EARLIER?</div>
                        <div className='emergencyInfoTxt'>-50% EMERGENCY WITHDRAW COST</div>
                    </div>
                </div>
            </div>
            <div className='approveBtnWrapper'>
                <div className='approveBtn'>APPROVE&nbsp;$APERA</div>
                <div className='approveBtn'>SEND&nbsp;TO&nbsp;FARM</div>
            </div>

            <div className='farmingInfoDiv'>
                <div>FARMING INFO</div>
                <div className='farmingInfoList'>
                    <div>1.&nbsp;All Season APEs can farm but there is strict rules on which APE belongs in which slot. You can use 3 Common APEs, 1 rare or higher and 1 epic or higher to combine the %APY you get.</div>
                    <div>2.&nbsp;Farming Power / APY is based on the Rarity of your provided Season APE.</div>
                    <div>3.&nbsp;Closing the slots and stopping the enhancement has a cooldown period of 30 days from the time you initiated the withdrawal to receive your staked $APERA back.</div>
                    <div>4.&nbsp;The Farming Reward is based on your portion of Farming Power compared to the Total Farming Power currently in the pool, and will be calculated on a daily basis. The Farming Reward will begin accumulating starting from the next day after you start farming</div>
                    <div>5.&nbsp;After you start Farming, there is a cooldown period of 2 days before you can stop the farm. Please note that if you stop farming, there will be no Farming Reward.</div>
                    <div>6.&nbsp;The estimated $APERA per 24hours are only an approximate guide. We cannot promise 100% that this value will be met and it is only for visualization as there are several factors that affect the pool size.</div>
                </div>
            </div>
        </div>
    );
}