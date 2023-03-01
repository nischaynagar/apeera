import React from 'react';
import connectWalletIcon from "../assests/images/icon-connectwallet.svg";
import "./style.css";

export default function Navbar({sidebarOpen, setSidebarOpen})
{

    function toggleIcon() {
        if (sidebarOpen) {
            setSidebarOpen(false);
        } else {
            setSidebarOpen(true);
        }
      }

    return (
        <div className={`navWrapper primary-header ${sidebarOpen ? "dimbg" : ""}`}>
        <div onClick={toggleIcon} className="sidebarOpenBtn">MENU</div>
            <div className='connectWalletBtn'>
                <img src={connectWalletIcon} alt="connect-wallet-icon" />
                <div>CONNECT WALLET</div>
            </div>
        </div>
    );
}