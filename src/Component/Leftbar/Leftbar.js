import React from "react";
import "./leftbar.css"
import adduser  from "../../Icons/add-user (1).png"
import bookmark from "../../Icons/bookmark (1).png"

import party from "../../Icons/empathy.png"
import search from "../../Icons/search (1).png"
import setting from "../../Icons/setting (1).png"
import Switch from "../../Icons/switch.png"
import coming from "../../Icons/coming-soon.png"
import thalapathy from "../../Images/logo2.png"


export default function Leftbar() {
    return (
        <div className="leftbarMainContainer">
            <h2 className="logoname">Yash<span className="dot"></span></h2>
            <div>
                <p className="menu">Menu</p>
                <ul>
                    <li>
                        <img src={`${search}`} className = " listicons" alt=""/>
                        <p className="liListname">Search</p>
                    </li>
                    <li>
                        <img src={`${bookmark}`} className = " listicons" alt=""/>
                        <p className="liListname">Watchlist</p>
                    </li>
                    <li>
                        <img src={`${coming}`} className = " listicons" alt=""/>
                        <p className="liListname">Upcoming</p>
                    </li>
                </ul>
            </div>

            <div>
                <p className="menu">Social</p>
                <ul>
                    <li>
                        <img src={`${adduser}`} className = " listicons" alt=""/>
                        <p className="liListname">Friends</p>
                    </li>
                    <li>
                        <img src={`${party}`} className = " listicons" alt=""/>
                        <p className="liListname">Add Friend</p>
                    </li>
                   
                    
                </ul>
            </div>
            <div>
                <p className="menu">General</p>
                <ul>
                    <li>
                        <img src={`${setting}`} className = " listicons" alt=""/>
                        <p className="liListname">Setting</p>
                    </li>
                    <li>
                        <img src={`${Switch}`} className = " listicons" alt=""/>
                        <p className="liListname">Logout</p>
                    </li>
                    
                </ul>
            </div>
            <div className="leftbarlastdiv">
                <img src={`${thalapathy}`} className="lastimage" alt="" />
                <p className="popcor">Movie Lover 💕</p>
                {/* <p className="viwingtime">3/4 hour</p> */}
                <button className="btnchallenges">WATCH FREE</button>
            </div>
        </div>
    )
}