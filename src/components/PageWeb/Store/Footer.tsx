import React from "react";
import './Store.css';
import { FaShippingFast, FaTiktok, FaFacebook, FaInstagram, FaPinterest, FaInvision } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { GiTrophyCup } from "react-icons/gi";
import { MdLocationOn} from "react-icons/md";
import { BsTelephoneFill} from "react-icons/bs";
import { CgMail} from "react-icons/cg";
export default () => {
    return(
        <div id="footerSection">
        <div className="footerContainer">
          <div className="footerContact">
            <h3 className="footerTitle">Contact</h3>
            <div className="contactContent">
              <a href="" className="contactText">
                <MdLocationOn color="#fff" size={20}/> 
                <span className="contactSpan">Location</span>
              </a>

              <a href="" className="contactText">
                <BsTelephoneFill color="#fff" size={20}/> 
                <span className="contactSpan">Call +0123456789</span>
              </a>

              <a href="" className="contactText">
                <CgMail color="#fff" size={20}/> 
                <span className="contactSpan">koyomi@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="footerContact">
            <h3 className="footerTitle">Famms</h3>
            <p>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>
            <div className="boxIcon">
              <div className="footerIcon">
                <FaFacebook size={30}/>
              </div>
              <div className="footerIcon">
                <FaInstagram size={30}/>
              </div>
              <div className="footerIcon">
                <FaInvision size={30}/>
              </div>
              <div className="footerIcon">
                <FaPinterest size={30}/>
              </div>
              <div className="footerIcon">
                <FaTiktok size={30}/>
              </div>
            </div>
          </div>
        </div>

        <div className="footerInfo">
          <div className="footerLine"/>
          <p>© 2022 All Rights Reserved By Free Html Templates</p>
          <p>Distributed By ThemeWagon</p>
        </div>
      </div>
    );
}