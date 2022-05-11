import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { IoReturnDownBackSharp } from "react-icons/io5";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import {
  FaShippingFast,
  FaTiktok,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaInvision,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../Navbar/Navbar";
import axios from "axios";
import Footer from "../Store/Footer";

const test = [{
  "id": 1,
  "product_id": 1,
  "product": {
    "id": 1,
    "nameProduct": "Áo thun đỏ đơn giản",
    "model": "Áo",
    "image": "https://firebasestorage.googleapis.com/v0/b/test-62604.appspot.com/o/img1.jpg?alt=media&token=00b86012-129f-4885-8033-77655cf76e03",
    "price": 150000,
    "describes": "Chất liệu vải cốt tông, mặc thoải mái",
    "color": "Đỏ"
  },
  "size_id": 1,
  "size": {
    "id": 1,
    "size": "S"
  },
  "quantity": 10
}]



export default function ProductDetails() {
  var curDate = new Date();
  var curDay = curDate.getDate();
  var curMonth = curDate.getMonth() + 1;
  var curYear = curDate.getFullYear();
  const [quantity, setQuantity] = useState(1);
  const [love, setLove] = useState(false);
  const navigate = useNavigate();
  const { idP, setIdP, user, setUser } = useAppContext();
  const [productSize, setProductSize] = useState(test);
  const [idS, setIdS] = useState(0);
  const [q, setQ] = useState(0);
  console.log(idP);
  console.log(idS);
  console.log(q);
  
  useEffect(() => {
    getAPI();
  }, []);
  const getAPI = () => {
    axios({
      method: "get",
      url: `http://localhost:9191/productSizeByProductId/${idP}`,
      data: null,
    })
      .then((res) => {
        setProductSize(res.data);
        console.log(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const AddToCart = () => {
    axios({
      method: "post",
      url: "http://localhost:9191/addCart",
      data: {
        "client_id": user.id,
        "product_id": idP,
        "size_id": idS,
        "extraDate": `${curDay}/${curMonth}/${curYear}`,
        "quatity": quantity
      },
    })
      .then((res) => {
        alert("Thêm vào giỏ hàng thành công")
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // console.log(product);
  const CheckUser = () => {
    if(user.id === 0){
      return navigate("/signin");
    }else{
      if(quantity === 0) return alert("Cần thêm sản phẩm")
      else if(idS === 0) return alert("Chọn size")
      else AddToCart()
    }
  }
  // ==========================================
  const StylePrice = (price : number) => {
    let num = price+""
    let s = "";
    for( let i = 0; i < num.length; i++)
    {
      s = num[num.length -1 - i ] + s;

      if((i+1) % 3 ==0 && i != (num.length-1) ) {
        s = "." + s;
      }
    }
    return s;
  }

  return (
    <>
    <div>
      {/* header */}
      

      {/* body */}
      <div id="bodySection">
        
        <div className="bodyContainer">
          <div className="btn-back">
            <button className="link bttn" onClick={() => navigate(-1)}>
              <IoReturnDownBackSharp size={25} />{" "}
            </button>
          </div>
          <div className="image">
            <img src={productSize.length > 0 ? productSize[0].product.image:""} />
          </div>
          <div className="infomation">
            <h1 className="nameProduct">{productSize.length > 0 ?productSize[0].product.nameProduct:""}</h1>

            <div className="rate">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <span className="rateReviews"></span>
            </div>

            <div className="priceProduct">{productSize.length > 0 ? StylePrice(productSize[0].product.price) :""} <span>đ</span> </div>

            <div className="describeProduct">
              <p>{productSize[0].product.describes}</p>
            </div>

            {/* <div className="colorProduct">
              <span>Color:</span>
              <div className="color">{productSize.length > 0 ?productSize[0].product.color:""}</div>
            </div> */}

            <div className="sizeProduct">
              <span>Size:</span>
              {productSize.map((ps) => {
                return (
                  <button className="size" onClick={() => (setIdS(ps.size_id), setQ(ps.quantity))}>{ps.size.size}</button>
                );
              })}
              {/* <button className="size">37</button>
              <button className="size">38</button>
              <button className="size">39</button>
              <button className="size">40</button>
              <button className="size">41</button>
              <button className="size">42</button>
              <button className="size">43</button> */}
            </div>

            <div className="quantityProduct">
              <div className="boxButton">
                <button
                  className="btQuantity"
                  onClick={() => (quantity > 1 ? setQuantity(quantity - 1) : setQuantity(0))}
                >
                  -
                </button>
                <span className="numberQuantity">{quantity}</span>
                <button
                  className="btQuantity"
                  onClick={() => (quantity >= 0 ?setQuantity(quantity + 1):setQuantity(0))}
                >
                  +
                </button>
              </div>
              <button onClick={CheckUser} className="btAdd">ADD TO CART</button>
            </div>

            <div className="line"></div>

            <div className="contact">
              <button className="wishlist" onClick={() => setLove(!love)}>
                {love == false ? (
                  <AiOutlineHeart size={20} />
                ) : (
                  <AiFillHeart size={20} />
                )}
                <span className="textWishlist">Add to wishlist</span>
              </button>

              <div className="boxIcon">
                <div className="footerIcon">Share:</div>
                <div className="footerIcon">
                  <FaFacebook size={18} />
                </div>
                <div className="footerIcon">
                  <FaInstagram size={18} />
                </div>
                <div className="footerIcon">
                  <FaInvision size={18} />
                </div>
                <div className="footerIcon">
                  <FaPinterest size={18} />
                </div>
                <div className="footerIcon">
                  <FaTiktok size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
