import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../Navbar/Navbar";
import Footer from "../Store/Footer";
import "./Cart.css";

const Cart = {
  "id": 1,
  "client_id": 2,
  "user": {
      "id": 2,
      "fullname": "Bùi Cảnh Nhuận",
      "dob": "20/07/2001",
      "gender": "Nam",
      "phone": "0329689087",
      "address": "Phú Thọ",
      "username": "nhuan1",
      "password": "12345",
      "isAdmin": 0,
      "note": ""
  },
  "product_id": 10,
  "product": {
      "id": 10,
      "nameProduct": "Áo thun đen có hình",
      "model": "Áo",
      "image": "https://firebasestorage.googleapis.com/v0/b/test-62604.appspot.com/o/img10.jpg?alt=media&token=5ed15472-a5c4-402e-b0a7-ee38f0351fc2",
      "price": 200000,
      "describes": "Chất liệu vải mềm, mặc thoải mái",
      "color": "Trắng"
  },
  "size_id": 3,
  "size": {
    "id": 3,
    "size": "L"
  },
  "extraDate": "5/5/2022",
  "quatity": 2
}

export default () => {
  const navigate = useNavigate();
  const [carts, setCarts] = useState([Cart])
  const { user, setUser } = useAppContext();
  const [idC, setIdC] = useState(0);
  useEffect(() => {
    getAPI();
  }, []);

  const getAPI = () => {
    axios({
      method: "get",
      url: "http://localhost:9191/cartByClientId/"+user.id,
      data: null,
    })
      .then((res) => {
        setCarts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const DeleteCart = () => {
    axios({
    method: "delete",
    url: `http://localhost:9191/deleteCart/${idC}`,
    data: null
  })
    .then((res) => {
        alert("Đã xóa khỏi giỏ hàng")
    })
    .catch((err) => {
      console.log(err);
    });
  }
  
  //=================================================================
  const {promotion, setPromotion} = useAppContext();

  // Tính tổng tiền
  var Total = 0;
  for( let i = 0; i < carts.length; i++){
    Total += carts[i].product.price * carts[i].quatity
  }
  var discountMoney = 0;
  if( Total > 1000000) {
    discountMoney = Total * promotion / 100;
    Total -= discountMoney;
  }
  

  //======================================================================
  return (
    <>
    <div className="container px-3 my-5 clearfix">
    
    <div className="card">
        <div className="card-header">
            <h2>Giỏ hàng của bạn</h2>
            <p >
              <span style={{backgroundColor: "yellow", fontSize: 20, fontStyle: 'italic'}}>Khuyến Mãi Sốc:</span>  
              <span style={{fontWeight: "bold"}}> Giảm {promotion} % cho đơn hàng từ 1 triệu đồng </span>
            </p>
        </div>
        <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered m-0">
                <thead>
                  <tr>
                    
                    <th className="text-center py-3 px-4">Tên sản phẩm &amp; Chi tiết</th>
                    <th className="text-right py-3 px-4">Đơn giá</th>
                    <th className="text-center py-3 px-4" style={{width: "120px"}}>Số lượng</th>
                    <th className="text-right py-3 px-4">Tổng giá</th>
                    <th className="text-center align-middle py-3 px-0" style={{width: "80px"}}><a href="#" className="shop-tooltip float-none text-light" title="" data-original-title="Clear cart"><i className="ino ion-md-trash"></i></a></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    carts.map((cart) => 
                      <tr>
                        <td className="p-4">
                          <div className="media align-items-center">
                            <img src={cart.product.image} className="d-block ui-w-40 ui-bordered mr-4" alt=""></img>
                            <div className="media-body">
                              <a href="#" className="d-block text-dark">{cart.product.nameProduct}</a>
                              <small>
                                <span className="text-muted">Màu: </span>{cart.product.color} <br/>
                                <span className="text-muted">Size: </span>{cart.size.size} <br/>
                                <span className="text-muted">{cart.product.describes}</span> <br/>
                                <span className="text-muted">Ngày thêm: </span>{cart.extraDate}<br/>
                              </small>
                            </div>
                          </div>
                        </td>
                        <td className="text-right font-weight-semibold align-middle p-4">{cart.product.price}Đ</td>
                        <td className="align-middle p-4"><input type="number" className="form-control text-center" value={cart.quatity}></input></td>
                        <td className="text-right font-weight-semibold align-middle p-4">{cart.product.price * cart.quatity}Đ</td>
                        <td className="text-center align-middle px-0"><a className="btn-remove shop-tooltip close float-none text-danger" title="" data-original-title="Remove" onClick={() => (setIdC(cart.id), DeleteCart())}>×</a></td>
                      </tr>
                    )
                  }
                  
  
                </tbody>
              </table>
            </div>
          
            <div className="d-flex flex-wrap justify-content-between align-items-center pb-4">
              <div className="mt-4">
                <label className="text-muted font-weight-normal">Promocode</label>
                <input type="text" placeholder="ABC" className="form-control"></input>
              </div>
              <div className="d-flex total-payment">
                <div className="text-right mt-4 mr-8">
                  <label className="text-muted font-weight-normal m-0">Giảm giá</label>
                  <div className="text-large"><strong>{discountMoney}</strong></div><br></br>
                </div>
                <div className="text-right mt-4">
                  <label className="text-muted font-weight-normal m-0">Tổng giá</label>
                  <div className="text-large"><strong>{Total}Đ</strong></div>
                </div>
              </div>
            </div>
        
        
            <div className="float-right total-payment-btn">
              <button type="button" className="btn btn-lg btn-default md-btn-flat mt-2 mr-3 btn-color-yellow" onClick={() => navigate("/product")}>Tiếp tục shopping</button>
              <button type="button" className="btn btn-lg btn-primary mt-2" onClick={() => navigate("/payment")}>Thanh toán</button>
            </div>
        
          </div>
      </div>
  </div>
  <Footer/>
  </>
  );
};

