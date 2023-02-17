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
        </div>
    );
}