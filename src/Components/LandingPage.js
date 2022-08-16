import React from 'react';
import nftArt from './landing page art.png';


export default function LandingPage() {
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
                    <button className='login-lp'>
                        LogIn
                    </button>
                    <button className='signup-lp'>
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
