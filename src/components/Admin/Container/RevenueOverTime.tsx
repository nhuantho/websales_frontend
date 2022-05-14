import React from "react";
import { useAppContext } from "../../Navbar/Navbar";

export default () => {

  const {promotion, setPromotion} =useAppContext();
  const {saleOf_Shirt, setSaleOf_Shirt}= useAppContext();
  const {saleOf_Shoes, setSaleOf_Shoes}= useAppContext();
  const {saleOf_Watch, setSaleOf_Watch}= useAppContext();
  return (
    <div style={{marginTop: 100}}>
      <h1>Quản lí khuyến mại, giảm giá</h1>
      <div>
        <div>
          <span>Khuyến mại chung: {promotion} % </span>
          <input
            className="input"
            type="text"
            placeholder= {promotion+"%"}
            onChange={(e) => setPromotion(Number(e.target.value))}
          ></input>
        </div>
       
        <div>
          <span>Giám giá áo: {saleOf_Shirt} %</span>
          <input
            className="input"
            type="text"
            placeholder= {saleOf_Shirt+"%"}
            onChange={(e) => setSaleOf_Shirt(Number(e.target.value))}
          ></input>
        </div>

        <div>
          <span>Giám giá giày: {saleOf_Shoes} % </span>
          <input
            className="input"
            type="text"
            placeholder= {saleOf_Shoes+"%"}
            onChange={(e) => setSaleOf_Shoes(Number(e.target.value))}
          ></input>
        </div>

        <div>
          <span>Giám giá dồng hồ: {saleOf_Watch} %</span>
          <input
            className="input"
            type="text"
            placeholder= {saleOf_Watch+"%"}
            onChange={(e) => setSaleOf_Watch(Number(e.target.value))}
          ></input>
        </div>
      </div>
    </div>
  );
};
