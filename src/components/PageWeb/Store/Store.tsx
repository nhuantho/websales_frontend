import React from "react";
import './Store.css';
import { FaShippingFast, FaTiktok, FaFacebook, FaInstagram, FaPinterest, FaInvision } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { GiTrophyCup } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import Footer from "./Footer";
import { IoReturnDownBackSharp } from "react-icons/io5";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";


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


          <section className="about">

            <div className="flex">

              <div className="image">
                <img src="" alt="" />
                <img src="./../../../images/Delivery Service Illustration.jpg" alt="" />
              </div>

              <div className="content">
                <h3>Giao hàng nhanh chóng!</h3>
                <p>Miễn phí vận chuyển từ đơn hàng 1000k.</p>
                <a href="shop.php" className="btn">Mua ngay</a>
              </div>

            </div>

            <div className="flex">

              <div className="content">
                <h3>Mua hàng mọi lúc mọi nơi!</h3>
                <p>Thỏa sức mua sắm tại nhà hay bất cứ đâu.</p>
                <a href="shop.php" className="btn">Đặt hàng</a>
              </div>

              <div className="image">
                <img src="./../../../images/Online-Order-Illustration.jpg" alt="" />
              </div>

            </div>

            <div className="flex">

              <div className="image">
                <img src="./../../../images/Feedback-Vector-Illustration.jpg" alt="" />
              </div>

              <div className="content">
                <h3>Nhận xét về chúng tôi</h3>
                <p>Cùng xem những đánh giá từ những khách hàng đã mua sản phẩm từ WaDu.</p>
                <a href="#reviews" className="btn">Đánh giá khách hàng</a>
              </div>

            </div>

          </section>

          <section className="reviews" id="reviews">

            <h1 className="title">Đánh giá khách hàng</h1>

            <div className="box-container">

              <div className="box">
                <img src="./../../../images/pic-1.png" alt="" />
                <p>Giao hàng nhanh, sản phẩm chất lượng.</p>
                <div className="stars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
                <h3>Dũng</h3>
              </div>

              <div className="box">
                <img src="./../../../images/pic-2.png" alt="" />
                <p>Giao hàng nhanh, sản phẩm chất lượng.</p>
                <div className="stars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
                <h3>Dũng</h3>
              </div>

              <div className="box">
                <img src="./../../../images/pic-3.png" alt="" />
                <p>Giao hàng nhanh, sản phẩm chất lượng.</p>
                <div className="stars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
                <h3>Dũng</h3>
              </div>

              <div className="box">
                <img src="./../../../images/pic-4.png" alt="" />
                <p>Giao hàng nhanh, sản phẩm chất lượng.</p>
                <div className="stars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
                <h3>Dũng</h3>
              </div>

              <div className="box">
                <img src="./../../../images/pic-5.png" alt="" />
                <p>Giao hàng nhanh, sản phẩm chất lượng.</p>
                <div className="stars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
                <h3>Dũng</h3>
              </div>

              <div className="box">
                <img src="./../../../images/pic-6.png" alt="" />
                <p>Giao hàng nhanh, sản phẩm chất lượng.</p>
                <div className="stars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
                <h3>Dũng</h3>
              </div>

            </div>

          </section>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

// header - body - footer