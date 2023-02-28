import React, { useState } from 'react';
import mainLogo from "../assests/images/icon-mainLogo.svg";
import homeIcon from "../assests/images/icon-home.svg";
import mysteryIcon from "../assests/images/icon-mysteryboxsidebar.svg";
import laboratoryIcon from "../assests/images/icon-laboratory.svg";
import lotteryIcon from "../assests/images/icon-lottery.svg";
import nftstakingIcon from "../assests/images/icon-nftstaking.svg";
import heartIcon from "../assests/images/icon-heart.svg";
import marketplaceIcon from "../assests/images/icon-marketplace.svg";
import copyIcon from "../assests/images/icon-copy.svg";
import arrowIcon from "../assests/images/icon-arrow.svg";
import closeIcon from "../assests/images/icon-close.svg";
import "./style.css";
import { Link } from 'react-router-dom';


export default function Sidebar({handleCloseSidebar})
{
    return (
        <div className= "Sidebar">
            <img src={mainLogo} alt="main-logo"/>
            <div className='sidebarList'>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className='listItem active'>
                    <img src={homeIcon} alt="home-icon"/>
                    <div>Home</div>
                </div>
                </Link>
                <Link to="/mysterybox" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className='listItem'>
                    <img src={mysteryIcon} alt="mystery-box-icon"/>
                    <div>Mystery&nbsp;Box</div>
                </div>
                </Link>
                <Link to="/token" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className='listItem'>
                    <img src={nftstakingIcon} alt="nft-staking-icon"/>
                    <div>NFT&nbsp;Staking</div>
                </div>
                </Link>
                <div className='listItemWrapper'>
                <div className='listItem'>
                    <img src={laboratoryIcon} alt="laboratory-icon"/>
                    <div>Laboratory</div>
                </div>
                    <div className='soonDiv'>SOON</div>
                </div>
                <div className='listItemWrapper'>
                <div className='listItem'>
                    <img src={marketplaceIcon} alt="marketplace-icon"/>
                    <div>Marketplace</div>
                </div>
                    <div className='soonDiv'>SOON</div>
                </div>
                <div className='listItemWrapper'>
                <div className='listItem'>
                    <img src={lotteryIcon} alt="lottery-icon"/>
                    <div>Lottery</div>
                </div>
                    <div className='soonDiv'>SOON</div>
                </div>
                <div className='listItem thetoken'>
                    <img src={heartIcon} alt="heart-icon"/>
                    <div>The Token</div>
                </div>
                <div className='informationBox'>
                    <div className='informationBtn'>Information <img src={arrowIcon} alt="arrow"/></div>
                    <div className='linksBtn'>Links <img src={arrowIcon} alt="arrow"/></div>
                    <div className='contractaddressHeading'>Contract address:</div>
                    <div className='contactAddressDiv'> 
                    <div className='contractAddress'>0xtest00test00</div>
                    <img src={copyIcon} alt="copy-icon"/>
                    </div>
                    <div className='socialsHeading'>Socials</div>
                    <div className='socialIconsWrapper'>
                        <div className='socialIcon1'></div>
                        <div className='socialIcon2'></div>
                        <div className='socialIcon3'></div>
                        <div className='socialIcon4'></div>
                    </div>
                </div>
                <div onClick={handleCloseSidebar} className='closeBtn'>
                    <img src={closeIcon} alt="closeicon"/>
                </div>
            </div>
        </div>
    );  
}