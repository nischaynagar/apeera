import React, { useState } from 'react';
import mainLogo from "../assests/images/icon-mainLogo.svg";
import homeIcon from "../assests/images/icon-home.svg";
import mysteryIcon from "../assests/images/icon-mysteryboxsidebar.svg";
import laboratoryIcon from "../assests/images/icon-laboratory.svg";
import lotteryIcon from "../assests/images/icon-lottery.svg";
import nftstakingIcon from "../assests/images/icon-nftstaking.svg";
import heartIcon from "../assests/images/icon-heart.svg";
import marketplaceIcon from "../assests/images/icon-marketplace.svg";
import "./style.css";


export default function Sidebar()
{
    return (
        <div className='Sidebar'>
            <img src={mainLogo} alt="main-logo"/>
            <div className='sidebarList'>
                <div className='listItem active'>
                    <img src={homeIcon} alt="home-icon"/>
                    <div>Home</div>
                </div>
                <div className='listItem'>
                    <img src={mysteryIcon} alt="mystery-box-icon"/>
                    <div>Mystery Box</div>
                </div>
                <div className='listItem'>
                    <img src={nftstakingIcon} alt="nft-staking-icon"/>
                    <div>NFT Staking</div>
                </div>
                <div className='listItem'>
                    <img src={laboratoryIcon} alt="laboratory-icon"/>
                    <div>Laboratory</div>
                    <div className='soonDiv'>SOON</div>
                </div>
                <div>

                <div className='listItem'>
                    <img src={marketplaceIcon} alt="marketplace-icon"/>
                    <div>Marketplace</div>
                </div>
                    <div className='soonDiv'>SOON</div>
                </div>
                <div className='listItem'>
                    <img src={lotteryIcon} alt="lottery-icon"/>
                    <div>Lottery</div>
                    <div className='soonDiv'>SOON</div>
                </div>
                <div className='listItem thetoken'>
                    <img src={heartIcon} alt="heart-icon"/>
                    <div>The Token</div>
                </div>
            </div>
        </div>
    );  
}