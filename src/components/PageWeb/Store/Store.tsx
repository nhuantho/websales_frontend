import React from "react";
import './Store.css';
import { FaShippingFast, FaTiktok, FaFacebook, FaInstagram, FaPinterest, FaInvision } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { GiTrophyCup } from "react-icons/gi";
import { MdLocationOn} from "react-icons/md";
import { BsTelephoneFill} from "react-icons/bs";
import { CgMail} from "react-icons/cg";
import Footer from "./Footer";


export default () => {
  return (
    <div >
      {/* header */}
      {/* <div id="headerSection">
        <h1 className="storeName">Blog List</h1>
      </div> */}

      {/* body */}
      <div id="bodySection">
        <div className="bodyContainer">
          <h2 className="bodyText">Why Shop With Us</h2>
        

        <div className="rowDescribe">

          <div className="colDescribe">
            <div className="colBox">
              <h3><SiFastapi color="#fff" size={45} /> </h3>
              <h3 className="h3_colDescribe">Fast Delivery</h3>
              <p className="p_colDescribe">variations of passages of Lorem Ipsum available</p>
            </div>
          </div>

          <div className="colDescribe">
            <div className="colBox">
              <h3><FaShippingFast color="#fff" size={45} /> </h3>
              <h3 className="h3_colDescribe">Free Shiping</h3>
              <p className="p_colDescribe">variations of passages of Lorem Ipsum available</p>
              </div>
          </div>

          <div className="colDescribe">
            <div className="colBox">
              <h3><GiTrophyCup color="#fff" size={45} /> </h3>
              <h3 className="h3_colDescribe">Best Quality</h3>
              <p className="p_colDescribe">variations of passages of Lorem Ipsum available</p>
            </div>
          </div>

        </div>
        </div>
      </div>
      
      {/* footer */}
      <Footer/>
    </div>
  );
};

// header - body - footer