import React from 'react';
import connectWalletIcon from "../assests/images/icon-connectwallet.svg";
import mainLogo from "../assests/images/icon-mainLogo.svg";
import "./style.css";

export default function Token()
{
    return (
        <div className='Token'>
            <div className='connectWalletBtn'>
                <img src={connectWalletIcon} alt="connect-wallet-icon" />
                <div>CONNECT WALLET</div>
            </div>
            <div className='mainLogoWrapper'>
                <img src={mainLogo} alt="main-logo"/>
                <div className='mainLogoTxt'>LEARN ABOUT APE ERA</div>
            </div>
            <div className='membercntWrapper'>
                <div className='cntBox'>
                <div>
                    <div>
                        <div className='membercntTxt'>5K+</div>
                        <div className='memberdescTxt'>TELEGRAM MEMBER</div>
                    </div>
                    <div className='styledBtn1'>BUY&nbsp;$APERA</div>
                </div>  
                <div>
                    <div>
                        <div className='membercntTxt'>10K+</div>
                        <div className='memberdescTxt'>EXPECTED HOLDERS</div>
                    </div>
                    <div className="styledBtn1">COLLECT&nbsp;NFTs</div>
                </div>  
                </div>
                <div className='communityWrapper'>
                    <div className='communityTxt'>OUR COMMUNITIES</div>
                    <div className='communityIconWrapper'>
                        <div className='communityIcon'></div>
                        <div className='communityIcon'></div>
                        <div className='communityIcon'></div>
                        <div className='communityIcon'></div>
                    </div>
                </div>
            </div>
            <div className='tokenomicsGrid'>
                <div className='tokenomicsHeading'>TOKENOMICS</div>
                <div className='tokenomicsGridRow'>
                    <div className='tokenomicsCard'>
                        <div className='tokenomicsCardHeading'>1% REFLECTION</div>
                        <div>YOU WILL RECEIVE INSTANT 1% SHARE WITH EVERY TRADE MADE. YOU OBTAIN $APTERA BY SIMPLY HOLDING IT.</div>
                    </div>
                    <div className='tokenomicsCard'>
                        <div className='tokenomicsCardHeading'>1% ARTIST</div>
                        <div>OUR AI ARTIST GETS 1% TO CONTINUE TO DO GREAT WORK AND GUIDE US THROUGH OUR UPDATES AND SEASONS!</div>
                    </div>
                </div>
                <div className='tokenomicsGridRow'>
                    <div className='tokenomicsCard'>
                        <div className='tokenomicsCardHeading'>1% DEVELOPMENT</div>
                        <div>1% OF EACH TRADE GOES TO THE TEAM FOR THE EXCESSIVE DEVELOPMENT OF THE PROJECT.</div>
                    </div>
                    <div className='tokenomicsCard'>
                        <div className='tokenomicsCardHeading'>2% MARKETING</div>
                        <div>WE WANT TO MAKE SURE $APERA GETS THE ATTENTION IT NEEDS TO CREATE A OUTSTANDING COMMUNITY!</div>
                    </div>
                </div>
            </div>
            <div>
                <div className='supplyTxt'>SUPPLY</div>
                <div className='supplyDescTxt'>
                    <div>TOTAL SUPPLY : 1.000.000.000.000.000</div>
                    <div>XYZ% STAKING POOL</div>
                    <div>XYZ% PRESALE</div>
                    <div>XYZ% PANCAKESWAP</div>
                    <div>10% TEAM TOKEN</div>
                </div>
            </div>
            <div className='supplyplaceholderBackground'>
            <div className='supplyplaceholderWrapper'>
                <div>SUPPLY XYZ</div>
                <div>PLACEHOLDER</div>
                <img src={mainLogo} alt="main-logo"/>
            </div>
            </div>
            <div className='howtoBuyTxt'>HOW TO BUY?</div>
            <div className='howtoBuystepWrapper'>
                <div className='buyStep'>
                    <div className='stepnum'>
                        <div className='stepnumTxt'>1</div>
                    </div>
                    <div className='stepsTxt'>
                        <div className='stepsHeadingTxt'>GET METAMASK WALLET</div>
                        <div>GO TO METAMASK.IO AND INSTALL THEIR APP (AVAILABLE ON CHROME WEBSTORE, iOS AND ANDROID).<br/>METAMASK WALLET IS A TRUSTED, AND SECURE WALLET IN THE CRYPTO SPACE. MAKE SURE TO KEEP YOUR SEED PHRASE SOMEWHERE SAFE!</div>
                    </div>
                </div>
                <div className='buyStep'>
                    <div className='stepnum'>
                        <div className='stepnumTxt'>2</div>
                    </div>
                    <div className='stepsTxt'>
                        <div className='stepsHeadingTxt'>ADD BINANCE SMART CHAIN NETWORK</div>
                        <div>YOU WILL NEED TO ADD BINANCE SMART CHAIN NETWORK INTO YOUR METAMASK WALLET BEFORE YOU CAN PURCHASE $APERA.<br/>YOU CAN FIND PLENTY OF TUTORIALS ON METAMASK.IO OFFICIAL WEBSITE.</div>
                    </div>
                </div>
                <div className='buyStep'>
                    <div className='stepnum'>
                        <div className='stepnumTxt'>3</div>
                    </div>
                    <div className='stepsTxt'>
                        <div className='stepsHeadingTxt'>BUY SOME BNB</div>
                        <div>PURCHASE BNB ON EXCHANGES, SUCH AS BINANCE.COM, AND ADD YOUR FOUNDS INTO YOUR VIRUTAL WALLET.</div>
                    </div>
                </div>
                <div className='buyStep'>
                    <div className='stepnum'>
                        <div className='stepnumTxt'>4</div>
                    </div>
                    <div className='stepsTxt'>
                        <div className='stepsHeadingTxt'>USE YOUR FAVOURITE SWAP</div>
                        <div>AFTER YOU’RE ALL SET, HEAD TO YOUR FAVOURITE SWAP, FOR EXAMPLE PANCAKESWAP.FINANCE OR POOCOIN.APP<br/>CONNECT YOUR WALLET AND GET SOME $APERA. REMEMBER TO SET YOUR SLIPPAGE TO 5 or 6%!</div>
                    </div>
                </div>
            </div>
            <div className='styledBtn1'>BUY&nbsp;$APERA</div>
            <div className='learnmoreTxt'>WANT TO LEARN MORE?</div>
            <div className='styledBtn1'>WHITEPAPER</div>
        </div>
    );
}