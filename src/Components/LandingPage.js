import React from 'react';
import nftArt from './landing page art.png';
import { useNavigate } from "react-router-dom";


export default function LandingPage() {

    const navigate = useNavigate();

    const navLogin = () => {
        navigate("/login");
    }

    const navSignup = () => {
        navigate("/signup");
    }
    
  return (
    <div>
        <div className='landing-pg'>
            <div className="leftDesign">
                <div className="heading-lp">
                    An<br/>
                    NFT Marketplace
                </div>
                <div className="tagline-lp">
                    For BITians  |  By BITians 
                </div>
                <div className="btns-lp">
                    <button className='login-lp' onClick={navLogin}>
                        LogIn
                    </button>
                    <button className='signup-lp' onClick={navSignup}>
                        Sign Up
                    </button>
                </div>
            </div>
            <div className="rightDesign">
                <img className='landingNft' src={nftArt} alt="" />
            </div>
        </div>
    </div>
  )
}
