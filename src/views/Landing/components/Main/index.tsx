import React from "react";
import { Link } from "@material-ui/core";
import "./main.scss";
// import CatImg from "../../../../assets/icons/Chershire_Cat.jpeg";
import DiracDaoFP from "../../../../assets/icons/DiracDaoFP.png";

function Main() {
    return (
        <div className="landing-main">
            <div className="landing-main-img-wrap">
                <img src={DiracDaoFP} alt="" />
            </div>
            <div className="landing-main-btns-wrap">
                <Link href="" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>Enter App</p>
                    </div>
                </Link>
                <Link href="" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>Documentation</p>
                    </div>
                </Link>
            </div>
            <div className="landing-main-title-wrap">
                {/* <p>The Defi</p> */}
                <p>DiracDAO</p>
            </div>
            <div className="landing-main-help-text-wrap">
                <p>establishing decentralized financial infrastructure supported by enthusiast</p>
                <p>holders to make stability and transparency to the world</p>
            </div>
        </div>
    );
}

export default Main;
